import { Shield, Check } from "lucide-react";

export const GuaranteeSection = () => {
  const guaranteePoints = [
    "Ahorras AL MENOS $400.000 en domicilios",
    "Cocinas más rápido de lo que tardas esperando Rappi",
    "Comes más rico que cualquier domicilio",
    "Te ENAMORAS del sistema",
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-6">
              <Shield className="w-10 h-10 text-success" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Mi Garantía "Anti-Arrepentimiento" de{" "}
              <span className="text-success">60 Días</span>
            </h2>
          </div>

          <div className="p-6 sm:p-10 bg-card border-2 border-success/30 rounded-2xl">
            <p className="text-lg text-muted-foreground mb-6">
              Mira, sé que $188.000 no es regalado. Es casi una semana de domicilios para muchas familias.
            </p>
            <p className="text-xl font-bold mb-6">Por eso hago esto:</p>

            <div className="p-6 bg-muted rounded-xl mb-6">
              <p className="text-lg mb-4">
                <strong>Usa El Vault por 60 días completos.</strong>
              </p>
              <p className="mb-4">Si en esos 60 días no:</p>
              <ul className="space-y-3">
                {guaranteePoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl font-bold text-success mb-6">
              ...te devuelvo tu dinero. Sin preguntas. Sin peros.
            </p>
            <p className="text-muted-foreground mb-6">
              Y te quedas con todos los bonos descargables.
            </p>

            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg mb-6">
              <p className="font-bold text-lg mb-2">¿Por qué hago esto?</p>
              <p className="text-muted-foreground">
                Porque tengo 8.000+ personas usando esto CADA DÍA. Sé que funciona. Sé que vas a ahorrar. 
                Sé que en 30 días vas a pensar "esto fue la mejor decisión del año".
              </p>
            </div>

            <p className="text-xl text-center font-bold">
              El riesgo es 100% mío. El beneficio es{" "}
              <span className="text-success">100% tuyo.</span>
            </p>
          </div>

          {/* Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-success/20 border-2 border-success rounded-full">
              <Shield className="w-8 h-8 text-success" />
              <span className="font-bold text-lg">GARANTÍA 60 DÍAS - 100% REEMBOLSO SIN PREGUNTAS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
