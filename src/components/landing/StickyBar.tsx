import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <div className="text-sm text-muted-foreground">Valor total: <span className="line-through">$3.476.000</span></div>
            <div className="text-2xl font-bold text-primary">Solo $188.000</div>
          </div>
          <div className="sm:hidden text-center">
            <span className="text-sm text-muted-foreground line-through">$3.476.000</span>
            <span className="text-xl font-bold text-primary ml-2">$188.000</span>
          </div>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-cta text-primary-foreground font-bold rounded-lg shadow-cta flex items-center justify-center gap-2 hover:scale-105 transition-transform">
          OBTENER ACCESO AHORA
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
