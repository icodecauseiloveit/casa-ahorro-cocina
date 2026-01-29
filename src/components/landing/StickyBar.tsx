import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const StickyBar = () => {
  const { totalValue, price, buttonText, note } = landingContent.stickyBar;
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
            <div className="text-sm text-muted-foreground">{totalValue.label} <span className="line-through">{totalValue.amount}</span></div>
            <div className="text-2xl font-bold text-primary leading-none">{price}</div>
          </div>
          <p className="hidden md:block text-xs text-muted-foreground text-left leading-tight mx-4 max-w-[250px]">{note}</p>
          <div className="sm:hidden text-center">
            <span className="text-sm text-muted-foreground line-through">{totalValue.amount}</span>
            <span className="text-xl font-bold text-primary ml-2">{price}</span>
            <p className="text-xs text-muted-foreground mt-1 leading-tight">{note}</p>
          </div>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-cta text-primary-foreground font-bold rounded-lg shadow-cta flex items-center justify-center gap-2 hover:scale-105 transition-transform">
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
