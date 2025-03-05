
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GradeDisplay from "@/components/GradeDisplay";
import { getProductInfo } from "@/utils/scannerUtils";
import { calculateOverallGrade } from "@/utils/gradeUtils";

const ResultsPage = () => {
  const { barcode } = useParams<{ barcode: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [productInfo, setProductInfo] = useState<any>(null);
  
  useEffect(() => {
    if (!barcode) {
      setError("No barcode provided");
      setLoading(false);
      return;
    }
    
    const fetchProductInfo = async () => {
      try {
        setLoading(true);
        const info = await getProductInfo(barcode);
        setProductInfo(info);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product info:", err);
        setError("Failed to fetch product information. Please try again.");
        setLoading(false);
      }
    };
    
    fetchProductInfo();
  }, [barcode]);
  
  const isDangerous = productInfo?.ingredients.some((ing: any) => 
    ing.name.toLowerCase().includes("poison") || 
    ing.name.toLowerCase().includes("toxic")
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full glass"
            >
              <Link to="/scanner">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Scanner
              </Link>
            </Button>
          </div>
          
          {loading ? (
            <div className="glass p-12 rounded-2xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin-slow mb-6"></div>
              <h2 className="text-xl font-semibold mb-2">Analyzing Product...</h2>
              <p className="text-muted-foreground">
                Retrieving product information and analyzing ingredients
              </p>
            </div>
          ) : error ? (
            <div className="glass p-12 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6 text-destructive">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Error</h2>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button 
                asChild 
                className="rounded-full"
              >
                <Link to="/scanner">
                  Try Another Scan
                </Link>
              </Button>
            </div>
          ) : (
            <div className="animate-scale-in">
              {/* Warning Alert for Dangerous Products */}
              {isDangerous && (
                <div className="mb-6 bg-destructive/10 border border-destructive/20 p-4 rounded-xl flex items-start gap-4">
                  <div className="mt-1 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-destructive">Warning: Potentially Harmful Product</h3>
                    <p className="text-sm text-destructive/80 mt-1">
                      This product contains ingredients that may be toxic or dangerous if consumed. 
                      Please exercise extreme caution.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Product Information Card */}
              <div className="glass rounded-2xl shadow-xl dark:shadow-none overflow-hidden mb-8">
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
                    <div className="relative w-full max-w-[240px] aspect-square rounded-xl overflow-hidden bg-white shadow-md">
                      {productInfo.image ? (
                        <img 
                          src={productInfo.image} 
                          alt={productInfo.name} 
                          className="w-full h-full object-contain p-4"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <Info className="h-12 w-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">Barcode: {barcode}</p>
                      <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-1">{productInfo.name}</h1>
                      <p className="text-muted-foreground">{productInfo.brand}</p>
                    </div>
                    
                    <div className="mt-6">
                      <GradeDisplay 
                        overallGrade={calculateOverallGrade(productInfo.ingredients)}
                        ingredients={productInfo.ingredients}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="glass p-4 rounded-xl text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold">Disclaimer:</span> The grading system is based on available research and may not be comprehensive. 
                  Always consult with healthcare professionals for specific dietary concerns.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ResultsPage;
