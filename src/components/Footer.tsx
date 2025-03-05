
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold tracking-tight flex items-center">
              <span className="text-primary">Nutri</span>
              <span className="text-foreground">grade</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/scanner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Scanner
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Nutrigrade. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
