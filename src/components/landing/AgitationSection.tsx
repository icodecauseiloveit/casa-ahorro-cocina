import { X, AlertTriangle } from "lucide-react";

export const AgitationSection = () => {
  const weeklyExpenses = [
    { day: "Lunes", excuse: "'Estoy cansado, pido algo'", amount: "$35.000" },
    { day: "Miércoles", excuse: "'No hay nada en la nevera'", amount: "$42.000" },
    { day: "Viernes", excuse: "'Me lo merezco'", amount: "$55.000" },
    { day: "Domingo", excuse: "'Flojera cocinar'", amount: "$48.000" },
  ];

  const problems = [
    "Esperas 45-60 minutos por comida que llega fría",
    "Comes pura grasa, sodio y conservantes",
    "Te sientes culpable cada vez que ves el extracto",
    "Sabes que podrías cocinar... pero 'no sabes qué hacer'",
    "Cuando intentas cocinar, terminas comiendo las mismas 7 cosas aburridas",
    "Los ingredientes que compras 'con motivación' se pudren en la nevera",
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        {/* Question Header */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          ¿Cuánto Has Gastado en{" "}
          <span className="text-destructive">Rappi</span>{" "}
          Esta Semana?
        </h2>

        {/* Weekly Expenses Breakdown */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-muted-foreground text-center mb-8">
            Seamos honestos por un segundo...
          </p>
          
          <div className="space-y-4">
            {weeklyExpenses.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="font-medium">{item.day}:</span>
                  <span className="text-muted-foreground">{item.excuse}</span>
                </div>
                <span className="text-destructive font-bold">{item.amount}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 p-6 bg-destructive/20 border-2 border-destructive rounded-lg text-center">
            <div className="text-xl mb-2">
              Total de la semana: <span className="font-bold text-destructive">$180.000</span>
            </div>
            <div className="text-2xl font-bold">
              Total del mes: <span className="text-destructive">$720.000</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Y eso sin contar los domicilios "chiquitos" del desayuno, el almuerzo en la oficina, o cuando "solo pedimos algo rápido".
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg text-muted-foreground">
              <span className="font-bold text-foreground">La verdad real:</span> La mayoría de colombianos gastan entre{" "}
              <span className="text-destructive font-bold">$600.000 y $1.200.000</span> al mes en domicilios.
            </p>
          </div>
        </div>

        {/* Second Part - Problems */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Pero No Es Solo la Plata...
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>

          {/* The Real Problem */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-card to-muted border border-border rounded-xl">
            <p className="text-lg text-muted-foreground mb-6">
              Y lo peor es que <span className="text-foreground font-bold">no es por falta de disciplina.</span>
            </p>
            <p className="text-xl mb-6">
              Es porque nadie te dio un <span className="text-primary font-bold">SISTEMA</span> que te diga:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Exactamente qué cocinar cada día</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Con ingredientes que ya tienes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>En menos tiempo del que tardas esperando el domicilio</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Más rico de lo que te llega en esa bolsa grasosa</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 text-xl font-bold text-gradient-fire">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Ese sistema existe. Y termina hoy con esto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
