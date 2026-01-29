import { TrendingDown, TrendingUp, Calculator } from "lucide-react";

export const MathSection = () => {
  const scenarioA = [
    { label: "Desayuno (3x semana)", calc: "$15.000 x 12 =", value: "$180.000" },
    { label: "Almuerzo (5x semana)", calc: "$35.000 x 20 =", value: "$700.000" },
    { label: "Cena (4x semana)", calc: "$45.000 x 16 =", value: "$720.000" },
    { label: "Domingos 'porque sí'", calc: "$60.000 x 4 =", value: "$240.000" },
  ];

  const scenarioB = [
    { label: "Mercado semanal", calc: "$180.000 x 4 =", value: "$720.000" },
    { label: "Vault (pago único)", calc: "", value: "$188.000", note: "(primer mes)" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="font-bold">LA MATEMÁTICA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Hagamos Las Cuentas Reales...
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Scenario A */}
          <div className="p-6 sm:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-8 h-8 text-destructive" />
              <h3 className="text-xl font-bold">ESCENARIO A: Sigues pidiendo domicilios</h3>
            </div>

            <div className="space-y-3 mb-6">
              {scenarioA.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:inline">{item.calc}</span>
                    <span className="font-bold text-destructive">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-destructive/30 pt-4 space-y-2">
              <div className="flex justify-between text-lg">
                <span>TOTAL AL MES:</span>
                <span className="font-bold text-destructive">$1.840.000</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>TOTAL AL AÑO:</span>
                <span className="font-bold text-destructive">$22.080.000</span>
              </div>
            </div>
          </div>

          {/* Scenario B */}
          <div className="p-6 sm:p-8 bg-success/10 border-2 border-success/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-success" />
              <h3 className="text-xl font-bold">ESCENARIO B: Usas El Vault</h3>
            </div>

            <div className="space-y-3 mb-6">
              {scenarioB.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    {item.calc && <span className="text-sm text-muted-foreground hidden sm:inline">{item.calc}</span>}
                    <span className="font-bold text-success">{item.value}</span>
                    {item.note && <span className="text-xs text-muted-foreground">{item.note}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-success/30 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>TOTAL PRIMER MES:</span>
                <span className="font-bold text-success">$908.000</span>
              </div>
              <div className="flex justify-between">
                <span>TOTAL MESES 2-12:</span>
                <span className="font-bold text-success">$720.000/mes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-success/20 to-success/10 border-2 border-success rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-4">
              AHORRO PRIMER AÑO: <span className="text-success">$12.200.000</span>
            </div>
            <div className="text-xl text-muted-foreground mb-6">
              En 5 años ahorras: <span className="font-bold text-foreground">$61.000.000</span>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <p className="text-lg">
                <strong>POR EL PRECIO DE 4 DOMICILIOS</strong> (que te duran 4 días), obtienes un sistema que te ahorra{" "}
                <span className="text-success font-bold">MILLONES</span> durante años.
              </p>
              <p className="text-xl font-bold mt-2">¿Tiene sentido o no?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
