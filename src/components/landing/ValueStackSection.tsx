import { Check, CreditCard, Shield, Zap, Clock } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { landingContent } from "@/data/landingContent";

export const ValueStackSection = () => {
  const { stack, totalValue, discountBadge, strikethroughPrices, finalPrice, guarantee, cta } = landingContent.pricing;

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Valor Total de Todo Lo Que Recibes Hoy:
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Stack Items */}
          <div className="space-y-3 mb-8">
            {stack.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span>{item.name}</span>
                </div>
                <span className="font-bold text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="p-6 bg-card border-2 border-primary rounded-xl text-center mb-8">
            <div className="text-lg text-muted-foreground mb-2">VALOR TOTAL:</div>
            <div className="text-4xl font-bold text-gradient-gold mb-4">{totalValue}</div>

            <div className="inline-block px-4 py-2 bg-destructive/20 text-destructive font-bold rounded-full mb-6">
              {discountBadge}
            </div>

            <div className="flex flex-col items-center gap-2 mb-6">
              {strikethroughPrices.map((price, index) => (
                <div key={index} className="text-2xl text-muted-foreground strikethrough-price">{price}</div>
              ))}
            </div>

            <div className="text-lg mb-2">HOY PAGAS:</div>
            <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">{finalPrice}</div>
            <p className="text-muted-foreground">
              {guarantee.text}
              <br />
              <span className="font-bold text-foreground">{guarantee.highlight}</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-8">
            <CTAButton size="mega" className="w-full sm:w-auto">
              {cta}
            </CTAButton>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>Garantía 60 días</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5" />
              <span>💳 Acepta tarjetas débito/crédito, PSE, Nequi, Daviplata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
