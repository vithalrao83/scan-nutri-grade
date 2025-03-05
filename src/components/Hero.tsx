
import { ArrowRight, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-nutrigrade-green-50/30 to-background dark:from-nutrigrade-green-900/10 dark:to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="badge bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 py-1.5 px-4 rounded-full mb-6 animate-slide-up">
          Introducing Nutrigrade
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight mb-6 animate-slide-up [animation-delay:100ms] shadow-none">
          Know your food's{" "}
          <span className="text-primary inline-block relative">
            safety score
            <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/10 dark:bg-primary/20 rounded-lg"></span>
          </span>{" "}
          in seconds
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up [animation-delay:200ms]">
          Instantly understand the health impact of your food by scanning barcodes and grading ingredients from safest (A) to unhealthy (D).
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:300ms]">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full group px-6 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            <Link to="/scanner">
              <ScanLine className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
              Scan Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-full glass px-6 text-base font-medium transition-all duration-300"
          >
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-24 w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 animate-slide-up [animation-delay:400ms]">
        <div className="glass rounded-xl p-6 flex flex-col items-center text-center shadow-lg dark:shadow-none transition-transform hover:scale-[1.02] duration-300">
          <div className="w-12 h-12 rounded-full bg-grade-a/10 flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-grade-a">A</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Safe & Natural</h3>
          <p className="text-muted-foreground">Natural ingredients with minimal processing and no harmful additives.</p>
        </div>
        
        <div className="glass rounded-xl p-6 flex flex-col items-center text-center shadow-lg dark:shadow-none transition-transform hover:scale-[1.02] duration-300">
          <div className="w-12 h-12 rounded-full bg-grade-b/10 flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-grade-b">B</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Moderate Risk</h3>
          <p className="text-muted-foreground">Generally safe ingredients with some processing or minor concerns.</p>
        </div>
        
        <div className="glass rounded-xl p-6 flex flex-col items-center text-center shadow-lg dark:shadow-none transition-transform hover:scale-[1.02] duration-300">
          <div className="w-12 h-12 rounded-full bg-grade-c/10 flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-grade-c">C</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Caution</h3>
          <p className="text-muted-foreground">Ingredients that may cause issues for some people or with long-term consumption.</p>
        </div>
        
        <div className="glass rounded-xl p-6 flex flex-col items-center text-center shadow-lg dark:shadow-none transition-transform hover:scale-[1.02] duration-300">
          <div className="w-12 h-12 rounded-full bg-grade-d/10 flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-grade-d">D</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Harmful</h3>
          <p className="text-muted-foreground">Ingredients with scientific evidence of potential harm, best to avoid when possible.</p>
        </div>
      </div>
    </section>
  );
}
