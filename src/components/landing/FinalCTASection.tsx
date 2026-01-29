import { X, Check, Shield, Zap, Clock, CreditCard } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { landingContent } from "@/data/landingContent";

export const FinalCTASection = () => {
  const { title, optionA, optionB, ctaBox, trust, paymentMethods } = landingContent.finalCTA;

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          {title.prefix} <span className="text-gradient-fire">{title.highlight}</span>
        </h2>

        {/* Comparison */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Option A */}
          <div className="p-6 sm:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
            <h3 className="text-2xl font-bold text-destructive mb-6 text-center">
              {optionA.title}
            </h3>
            <div className="space-y-4 mb-6">
              {optionA.list.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-destructive/20 rounded-lg text-center">
              <span className="text-sm text-muted-foreground">Costo de esta opción:</span>
              <div className="text-lg font-bold text-destructive">{optionA.cost}</div>
            </div>
          </div>

          {/* Option B */}
          <div className="p-6 sm:p-8 bg-success/10 border-2 border-success/30 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-success text-success-foreground text-sm font-bold rounded-full">
              {optionB.badge}
            </div>
            <h3 className="text-2xl font-bold text-success mb-6 text-center">
              {optionB.title}
            </h3>
            <div className="space-y-4 mb-6">
              {optionB.list.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-success/20 rounded-lg text-center">
              <span className="text-sm text-muted-foreground">Costo de esta opción:</span>
              <div className="text-lg font-bold text-success">{optionB.cost}</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            {ctaBox.text.prefix}{" "}
            <span className="font-bold">{ctaBox.text.highlight}</span>
          </p>

          <div className="p-8 bg-card border-2 border-primary rounded-2xl shadow-glow mb-8">
            <div className="text-lg text-muted-foreground mb-2">{ctaBox.priceLabel}</div>
            <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">{ctaBox.priceValue}</div>
            <p className="text-muted-foreground mb-8">{ctaBox.paymentType}</p>

            <CTAButton size="mega" className="w-full">
              {ctaBox.buttonText}
            </CTAButton>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-6">
              {trust.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-success" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <span>{paymentMethods}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
