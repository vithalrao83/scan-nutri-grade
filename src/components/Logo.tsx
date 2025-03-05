
import { Leaf } from "lucide-react";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ showText = true, size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? 20 : size === "md" ? 24 : 32;
  const textSize = size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl";
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full blur-[2px] opacity-20 scale-110"></div>
        <div className="relative bg-primary/10 text-primary rounded-full p-1.5 border border-primary/30">
          <Leaf className={`h-${iconSize === 20 ? '5' : iconSize === 24 ? '6' : '8'} w-${iconSize === 20 ? '5' : iconSize === 24 ? '6' : '8'}`} />
        </div>
      </div>
      
      {showText && (
        <div className={`font-semibold tracking-tight ${textSize}`}>
          <span className="text-primary">Nutri</span>
          <span className="text-foreground">grade</span>
        </div>
      )}
    </div>
  );
}
