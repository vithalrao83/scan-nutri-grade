
import { useState } from "react";
import { ChevronRight, ChevronDown, ArrowDownWideNarrow, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Ingredient = {
  name: string;
  grade: 'A' | 'B' | 'C' | 'D';
  reason: string;
  sources?: string[];
};

type GradeDisplayProps = {
  overallGrade: 'A' | 'B' | 'C' | 'D';
  ingredients: Ingredient[];
  showDetailed?: boolean;
};

export default function GradeDisplay({ overallGrade, ingredients, showDetailed = true }: GradeDisplayProps) {
  const [detailedView, setDetailedView] = useState(showDetailed);
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null);
  
  const toggleIngredient = (name: string) => {
    setExpandedIngredient(expandedIngredient === name ? null : name);
  };
  
  const getGradeColor = (grade: 'A' | 'B' | 'C' | 'D') => {
    switch (grade) {
      case 'A': return 'bg-grade-a text-white';
      case 'B': return 'bg-grade-b text-black';
      case 'C': return 'bg-grade-c text-black';
      case 'D': return 'bg-grade-d text-white';
      default: return 'bg-gray-400 text-white';
    }
  };
  
  const getBadgeClass = (grade: 'A' | 'B' | 'C' | 'D') => {
    switch (grade) {
      case 'A': return 'badge-a';
      case 'B': return 'badge-b';
      case 'C': return 'badge-c';
      case 'D': return 'badge-d';
      default: return '';
    }
  };
  
  return (
    <div className="w-full">
      {/* Overall Grade Display */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg",
            getGradeColor(overallGrade)
          )}>
            {overallGrade}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Overall Grade</h3>
            <p className="text-sm text-muted-foreground">
              {overallGrade === 'A' && "Safe & Natural"}
              {overallGrade === 'B' && "Moderate Risk"}
              {overallGrade === 'C' && "Caution"}
              {overallGrade === 'D' && "Harmful"}
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDetailedView(!detailedView)}
          className="flex items-center gap-1.5 rounded-full glass"
        >
          <ArrowDownWideNarrow className="h-3.5 w-3.5" />
          {detailedView ? "Show Summary" : "Show Detailed"}
        </Button>
      </div>
      
      {/* Ingredients List */}
      {detailedView ? (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-3">Ingredient Breakdown</h3>
          
          <div className="glass rounded-xl overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {ingredients.map((ingredient) => (
                <li key={ingredient.name}>
                  <div 
                    className="p-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                    onClick={() => toggleIngredient(ingredient.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                          getGradeColor(ingredient.grade)
                        )}>
                          {ingredient.grade}
                        </span>
                        <span className="font-medium">{ingredient.name}</span>
                      </div>
                      <div className="flex items-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                {expandedIngredient === ingredient.name ? 
                                  <ChevronDown className="h-4 w-4" /> : 
                                  <ChevronRight className="h-4 w-4" />
                                }
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                              <p>Click for details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    
                    {expandedIngredient === ingredient.name && (
                      <div className="mt-3 pl-10 animate-slide-down">
                        <p className="text-sm text-muted-foreground mb-2">
                          {ingredient.reason}
                        </p>
                        
                        {ingredient.sources && ingredient.sources.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs font-medium text-foreground/70 mb-1">Sources:</p>
                            <ul className="space-y-1">
                              {ingredient.sources.map((source, idx) => (
                                <li key={idx} className="text-xs flex items-center gap-1 text-primary">
                                  <ExternalLink className="h-3 w-3" />
                                  {source}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="glass p-4 rounded-xl">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className={cn(
                          "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                          getGradeColor(ingredient.grade)
                        )}>
                          {ingredient.grade}
                        </span>
                        <span className="text-sm truncate">{ingredient.name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p className="font-medium">{ingredient.name}</p>
                      <p className="text-xs mt-1">{ingredient.reason}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
