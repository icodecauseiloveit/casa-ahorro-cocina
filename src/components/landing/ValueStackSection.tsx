import { Check, CreditCard, Shield, Zap, Clock } from "lucide-react";
import { CTAButton } from "./CTAButton";

export const ValueStackSection = () => {
  const items = [
    { name: "Vault de 200 Recetas", value: "$388.000" },
    { name: "Canal VIP Diario (de por vida)", value: "$1.188.000" },
    { name: "Meal Prep 12 Semanas", value: "$388.000" },
    { name: "Mix & Match System", value: "$268.000" },
    { name: "Guía de Sustituciones", value: "$188.000" },
    { name: "Grupo VIP WhatsApp", value: "$788.000" },
    { name: "Desafío 30 Días", value: "$268.000" },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Valor Total de Todo Lo Que Recibes Hoy:
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Stack Items */}
          <div className="space-y-3 mb-8">
            {items.map((item, index) => (
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
            <div className="text-4xl font-bold text-gradient-gold mb-4">$3.476.000</div>
            
            <div className="inline-block px-4 py-2 bg-destructive/20 text-destructive font-bold rounded-full mb-6">
              Descuento del 94%
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-2xl text-muted-foreground strikethrough-price">$3.476.000</div>
              <div className="text-2xl text-muted-foreground strikethrough-price">$988.000</div>
              <div className="text-2xl text-muted-foreground strikethrough-price">$388.000</div>
            </div>

            <div className="text-lg mb-2">HOY PAGAS:</div>
            <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">$188.000</div>
            <p className="text-muted-foreground">
              Menos de lo que gastas en 5 domicilios.
              <br />
              <span className="font-bold text-foreground">Pero esto te dura TODA LA VIDA.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-8">
            <CTAButton size="mega" className="w-full sm:w-auto">
              SÍ, QUIERO AHORRAR MILLONES Y COMER MEJOR
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
