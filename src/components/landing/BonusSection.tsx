import { Gift, MessageCircle, Calendar, Shuffle, RefreshCw, Users, Target } from "lucide-react";

const bonuses = [
  {
    icon: MessageCircle,
    number: 1,
    title: "Canal VIP de Recetas Diarias (De Por Vida)",
    value: "$1.188.000/año",
    tag: "TUYO GRATIS PARA SIEMPRE",
    description: "Cada mañana a las 7am recibes en WhatsApp las 3 recetas del día: Desayuno, Almuerzo y Cena.",
    highlights: [
      "No tienes que pensar. No tienes que decidir. Solo abres el mensaje y cocinas.",
      "Imagina: Abres WhatsApp en vez de Rappi. Ves la receta. 20 minutos después estás comiendo. Ahorraste $40.000.",
      "PLUS: Cada mes agregamos 5-10 recetas NUEVAS. Las recibes automáticamente sin pagar más.",
    ],
    warning: "Esto SOLO es para los primeros 250 compradores. Después se quita este bono porque nos cuesta mantenerlo.",
  },
  {
    icon: Calendar,
    number: 2,
    title: "Meal Prep Mastery - 12 Planes Dominicales",
    value: "$388.000",
    description: "El secreto para nunca más pedir domicilio entre semana: Cocinas 2-3 horas los domingos. Comes toda la semana.",
    highlights: [
      "Qué cocinar el domingo",
      "Cómo almacenarlo",
      "Cómo recalentarlo",
      "Lista de compras exacta",
    ],
    footer: "Ahorra 10+ horas a la semana. Ahorra $600.000+ al mes en domicilios.",
  },
  {
    icon: Shuffle,
    number: 3,
    title: "Mix & Match System - Generador de Menús Infinitos",
    value: "$268.000",
    description: "La herramienta que convierte 200 recetas en 343.000 combinaciones diferentes.",
    highlights: [
      "Filtra por: tiempo disponible, ingredientes que tienes, objetivo",
      "Genera menús automáticos",
      "Calcula cuánto vas a ahorrar vs. domicilios",
    ],
    example: {
      items: [
        { label: "Combo domicilio promedio", value: "$42.000" },
        { label: "Receta del Vault", value: "$9.000 (para 2 personas)" },
        { label: "Ahorro por comida", value: "$33.000", highlight: true },
        { label: "Ahorro mensual", value: "$990.000", highlight: true },
      ],
    },
  },
  {
    icon: RefreshCw,
    number: 4,
    title: "Guía de Sustituciones Inteligentes",
    value: "$188.000",
    description: "'No tengo X ingrediente' → Ya no es excusa para pedir domicilio.",
    highlights: [
      "No tienes pollo → Usa pescado/tofu/carne molida",
      "Quieres versión keto → Cambia X por Y",
      "Sin gluten → Estas son tus opciones",
    ],
    footer: "Mata la excusa #1 para pedir Rappi: 'Es que no tengo ingredientes'",
  },
  {
    icon: Users,
    number: 5,
    title: "Grupo VIP de Accountability en WhatsApp",
    value: "$788.000/año",
    tag: "GRATIS DE POR VIDA",
    description: "8.000+ colombianos que dejaron los domicilios usando estas mismas recetas.",
    highlights: [
      "Comparten fotos de sus platos",
      "Tips de dónde comprar más barato",
      "'Hoy ahorré $45.000' → Motivación real",
      "Retos mensuales con premios",
      "Soporte directo del equipo",
    ],
    warning: "Este bono también se quita después de los primeros 250 compradores.",
  },
  {
    icon: Target,
    number: 6,
    title: "Desafío 30 Días Sin Domicilios",
    value: "$268.000",
    description: "El plan específico de 30 días para romper tu adicción a Rappi.",
    highlights: [
      "Recetas seleccionadas para sustituir tus domicilios favoritos",
      "Tracker de ahorro (vas a VER la plata que recuperas)",
      "Estrategias anti-antojos",
      "Qué hacer cuando 'todos en la oficina están pidiendo'",
    ],
    footer: "Meta: Ahorrar mínimo $600.000 en 30 días. Récord actual: $1.2M en un mes.",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-bold">BONOS EXCLUSIVOS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Pero Espera... Si Ordenas en los Próximos{" "}
            <span className="text-primary">20 Minutos</span>, También Llevas:
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <bonus.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm text-primary font-bold">BONO #{bonus.number}</span>
                    {bonus.tag && (
                      <span className="px-2 py-1 bg-success/20 text-success text-xs font-bold rounded">
                        {bonus.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{bonus.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-lg text-muted-foreground">Valor:</span>
                  <div className="text-xl font-bold text-gradient-gold">{bonus.value}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{bonus.description}</p>

              <ul className="space-y-2 mb-4">
                {bonus.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {bonus.example && (
                <div className="p-4 bg-muted rounded-lg mb-4">
                  <div className="text-sm font-bold mb-2">Ejemplo real:</div>
                  {bonus.example.items.map((item, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={item.highlight ? "font-bold text-success" : ""}>{item.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {bonus.footer && (
                <p className="text-success font-medium">{bonus.footer}</p>
              )}

              {bonus.warning && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <p className="text-sm text-destructive">⚠️ {bonus.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
