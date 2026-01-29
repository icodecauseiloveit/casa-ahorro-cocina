import { X, Check, Shield, Zap, Clock, CreditCard } from "lucide-react";
import { CTAButton } from "./CTAButton";

export const FinalCTASection = () => {
  const optionA = [
    "$800.000 - $1.200.000 al mes en Rappi",
    "Comida grasosa que llega fría",
    "Esperar 45-60 minutos cada vez",
    "Culpa después de ver el extracto",
    "Nunca aprender a cocinar",
    "En 1 año: $14.400.000 TIRADOS a la basura",
  ];

  const optionB = [
    "$188.000 UNA SOLA VEZ (pago único)",
    "200 recetas deliciosas y sanas",
    "Comida lista en 20-30 minutos",
    "Ahorro de $600.000-$1.200.000/mes",
    "Habilidad de por vida",
    "En 1 año: $7.200.000 - $14.400.000 AHORRADOS",
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Decisión Simple: <span className="text-gradient-fire">¿Cuál Prefieres?</span>
        </h2>

        {/* Comparison */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Option A */}
          <div className="p-6 sm:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
            <h3 className="text-2xl font-bold text-destructive mb-6 text-center">
              OPCIÓN A: Seguir Quemando Plata en Domicilios
            </h3>
            <div className="space-y-4 mb-6">
              {optionA.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-destructive/20 rounded-lg text-center">
              <span className="text-sm text-muted-foreground">Costo de esta opción:</span>
              <div className="text-lg font-bold text-destructive">TU SALUD + MILLONES</div>
            </div>
          </div>

          {/* Option B */}
          <div className="p-6 sm:p-8 bg-success/10 border-2 border-success/30 rounded-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-success text-success-foreground text-sm font-bold rounded-full">
              RECOMENDADO
            </div>
            <h3 className="text-2xl font-bold text-success mb-6 text-center">
              OPCIÓN B: Obtener El Sistema Completo
            </h3>
            <div className="space-y-4 mb-6">
              {optionB.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-success/20 rounded-lg text-center">
              <span className="text-sm text-muted-foreground">Costo de esta opción:</span>
              <div className="text-lg font-bold text-success">$188.000 (4 domicilios)</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            La diferencia entre tirar $14.000.000 al año y ahorrarlos:{" "}
            <span className="font-bold">este botón ⬇️</span>
          </p>

          <div className="p-8 bg-card border-2 border-primary rounded-2xl shadow-glow mb-8">
            <div className="text-lg text-muted-foreground mb-2">PRECIO FINAL:</div>
            <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">$188.000</div>
            <p className="text-muted-foreground mb-8">Un solo pago. Acceso de por vida.</p>

            <CTAButton size="mega" className="w-full">
              SÍ, QUIERO DEJAR RAPPI Y AHORRAR MILLONES
            </CTAButton>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Acceso en 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Garantía 60 días sin preguntas</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <span>💳 Acepta tarjetas débito/crédito, PSE, Nequi, Daviplata</span>
          </div>
        </div>
      </div>
    </section>
  );
};
