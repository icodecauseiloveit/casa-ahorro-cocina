import { X, Check, ArrowRight } from "lucide-react";

export const SolutionSection = () => {
  const beforeItems = [
    "Abres Rappi",
    "Scroll infinito decidiendo qué pedir",
    "Escoges lo mismo de siempre",
    "$45.000 que se van",
    "Esperas 50 minutos",
    "Llega frío",
    "Te sientes mal después de comer",
  ];

  const afterItems = [
    "Abres WhatsApp",
    "Ves el mensaje: 'Cena de hoy: Pollo al limón con vegetales (20 min)'",
    "Ingredientes ya los tienes (los compraste el domingo con la lista)",
    "20 minutos después estás comiendo",
    "Gastaste $8.000 en ingredientes (te alcanza para 4 porciones)",
    "Sabor casero, caliente, sin culpa",
    "Ahorraste $37.000 en un solo día",
  ];

  const benefits = [
    "Dejar de depender de domicilios de una vez por todas",
    "Cocinar comidas deliciosas en MENOS tiempo del que tardas esperando Rappi",
    "Nunca más preguntarte '¿qué cocino hoy?'",
    "Ahorrar mínimo $600.000 al mes (eso es más de $7.000.000 al año)",
    "Comer más sano sin que sepa a 'comida de dieta'",
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            El Vault de Recetas Saludables:{" "}
            <span className="text-gradient-fire">200 Recetas</span>{" "}
            Que Destruyen Tu Dependencia de Rappi
          </h2>
        </div>

        {/* Before/After Scenario */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-xl text-center text-muted-foreground mb-10">
            Imagina esto: Son las 7pm. Llegas a casa después de un día pesado.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div className="p-6 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
              <h3 className="text-2xl font-bold text-destructive mb-6 text-center">ANTES</h3>
              <div className="space-y-3">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div className="p-6 bg-success/10 border-2 border-success/30 rounded-xl">
              <h3 className="text-2xl font-bold text-success mb-6 text-center">AHORA</h3>
              <div className="space-y-3">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-success/20 to-success/10 border border-success/30 rounded-xl text-center">
            <p className="text-2xl font-bold">
              En un mes, eso es más de{" "}
              <span className="text-success">$1.000.000</span>{" "}
              de ahorro.
            </p>
          </div>
        </div>

        {/* What is the Vault */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            ¿Qué Es El Vault Exactamente?
          </h3>

          <p className="text-lg text-muted-foreground text-center mb-10">
            Es el sistema completo que necesitas para:
          </p>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-primary/10 border border-primary/30 rounded-xl">
            <p className="text-xl font-bold">
              Un solo pago. Un sistema completo.{" "}
              <span className="text-primary">Para siempre.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
