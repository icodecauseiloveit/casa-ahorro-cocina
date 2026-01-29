import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large" | "mega";
  onClick?: () => void;
}

export const CTAButton = ({ children, className, size = "default", onClick }: CTAButtonProps) => {
  const sizeClasses = {
    default: "px-6 py-4 text-lg",
    large: "px-8 py-5 text-xl",
    mega: "px-10 py-6 text-xl sm:text-2xl",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative bg-gradient-cta text-primary-foreground font-bold rounded-lg",
        "shadow-cta hover:scale-105 active:scale-100 transition-all duration-300",
        "flex items-center justify-center gap-3",
        "animate-pulse-glow",
        sizeClasses[size],
        className
      )}
    >
      {children}
      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};
