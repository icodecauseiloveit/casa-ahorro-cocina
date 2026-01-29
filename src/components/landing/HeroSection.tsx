import { CTAButton } from "./CTAButton";
import { Shield, Zap, Clock } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">{landingContent.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {landingContent.hero.headline.prefix}{" "}
            <span className="text-gradient-fire">{landingContent.hero.headline.highlight}</span>{" "}
            {landingContent.hero.headline.suffix}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            {landingContent.hero.subheadline}
          </p>

          {/* Value proposition */}
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="text-muted-foreground line-through text-xl">{landingContent.hero.price.original}</span>
            <span className="text-2xl sm:text-3xl font-bold text-gradient-gold">{landingContent.hero.price.ctaProps} {landingContent.hero.price.discounted}</span>
          </div>

          {/* CTA Button */}
          <div className="mb-10 flex justify-center">
            <CTAButton size="mega">
              {landingContent.hero.cta}
            </CTAButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {landingContent.hero.trust.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-success" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
