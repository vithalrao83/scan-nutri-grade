
import { FileText, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 mt-10">
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-12">
          {/* About Nutrigrade */}
          <section>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              About Nutrigrade
              <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/10 dark:bg-primary/20 rounded-lg"></span>
            </h2>
            
            <div className="glass p-8 rounded-2xl">
              <p className="text-lg mb-6">
                Nutrigrade is a web platform designed to help users instantly understand the health impact of their food by scanning barcodes and grading ingredients from safest (A) to unhealthy (D).
              </p>
              
              <p className="text-lg mb-6">
                Our mission is to make food ingredient information accessible and easy to understand, empowering consumers to make healthier choices. By scanning a barcode, you can quickly assess the quality of ingredients in your food products.
              </p>
              
              <p className="text-lg mb-6">
                We focus particularly on Indian grocery products to ensure accurate scanning and grading for our users.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="rounded-full">
                  <Link to="/scanner">
                    <FileText className="mr-2 h-4 w-4" />
                    Try the Scanner
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="rounded-full glass">
                  <Link to="/contact">
                    <Send className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* How It Works */}
          <section>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              How It Works
              <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/10 dark:bg-primary/20 rounded-lg"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl transition-transform hover:scale-[1.02] duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Scan Barcode</h3>
                <p className="text-muted-foreground">Use your device's camera to scan the product barcode or enter it manually.</p>
              </div>
              
              <div className="glass p-6 rounded-xl transition-transform hover:scale-[1.02] duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyze Ingredients</h3>
                <p className="text-muted-foreground">Our system compares ingredients against our database to assess safety and health impact.</p>
              </div>
              
              <div className="glass p-6 rounded-xl transition-transform hover:scale-[1.02] duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">View Results</h3>
                <p className="text-muted-foreground">Get instant results showing overall product grade and detailed ingredient breakdowns.</p>
              </div>
            </div>
          </section>
          
          {/* Creator Info */}
          <section>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Created By
              <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/10 dark:bg-primary/20 rounded-lg"></span>
            </h2>
            
            <div className="glass p-8 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <span className="text-2xl font-bold">VC</span>
                </div>
                
                <h3 className="text-xl font-bold">Vithalrao Chavan</h3>
                <p className="text-muted-foreground mb-4">Artificial Intelligence and Data Science</p>
                <p className="text-muted-foreground mb-6">Visvesvaraya Technological University (VTU), Kalaburagi</p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild variant="outline" size="sm" className="rounded-full glass">
                    <a 
                      href="https://www.linkedin.com/in/vithalrao-chavan-332a1631a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      LinkedIn
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm" className="rounded-full glass">
                    <a 
                      href="mailto:vithalraochavan2@gmail.com"
                      className="flex items-center gap-2"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
