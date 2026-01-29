export const PSSection = () => {
  const postScripts = [
    {
      label: "P.D.:",
      content: "Piénsalo así: $188.000 es lo que gastas en 4-5 domicilios. Esos domicilios te duran 4 días. El Vault te dura TODA LA VIDA. ¿Tiene sentido?",
    },
    {
      label: "P.D.D.:",
      content: "Cada día que pasa sin este sistema son $40.000-$60.000 que tiras en domicilios. En una semana ya perdiste más de lo que cuesta El Vault.",
    },
    {
      label: "P.D.D.D.:",
      content: "Los bonos del Canal Diario ($1.188.000/año) y Grupo VIP ($788.000/año) se quitan después del comprador #250. Ya van 217. Quedan 33. Cuando se acaben, se acabaron. No vuelven.",
    },
    {
      label: "P.D.D.D.D.:",
      content: "Garantía de 60 días. Si no ahorras, si no te gusta, si cambias de opinión... devolvemos tu dinero. El riesgo es CERO. La recompensa son MILLONES ahorrados.",
    },
    {
      label: "P.D.D.D.D.D:",
      content: "¿De verdad vas a seguir enriqueciendo a Rappi cuando podrías estar ahorrando para tus vacaciones, tu carro, tu casa, o lo que sea que de verdad importa?",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto space-y-6">
          {postScripts.map((ps, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-lg ${
                ps.highlight
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-card border border-border"
              }`}
            >
              <span className="font-bold text-primary">{ps.label}</span>{" "}
              <span className={ps.highlight ? "text-foreground" : "text-muted-foreground"}>
                {ps.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
