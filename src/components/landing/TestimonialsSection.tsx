import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda",
    age: 32,
    city: "Bogotá",
    content: `Estaba gastando $850.000 al mes en Rappi. Literal. Lo vi en mi extracto y casi lloro.

Llevo 2 meses con El Vault. He ahorrado $1.600.000. LO CALCULÉ.

Las recetas son TAN fáciles que mi esposo ahora cocina también. Y comemos mejor que cualquier domicilio. Esto se pagó solo en 5 días.`,
  },
  {
    name: "Carlos Andrés",
    age: 28,
    city: "Medellín",
    content: `Pensé que era otra estafa de internet. Pagué con miedo los $188.000.

MEJOR INVERSIÓN DE MI VIDA.

El bono de Meal Prep cambió todo. Cocino los domingos, como toda la semana. Ya no gasto en almuerzos de oficina. Ahorro como $700.000 al mes. En 6 meses recuperé lo que gasté... 200 veces.`,
  },
  {
    name: "Juliana",
    age: 35,
    city: "Cali",
    content: `Tengo 2 hijos. Antes gastaba $1.200.000 entre delivery y comida rápida porque "no tenía tiempo".

Con las listas de compras del Vault, hago mercado una vez y listo. Gasto $200.000 a la semana en ingredientes BUENOS. Mis hijos comen más sano.

He ahorrado más de $600.000 AL MES. Eso es casi UN SALARIO MÍNIMO. Por $188.000 que pagué UNA VEZ.`,
  },
  {
    name: "Andrés",
    age: 41,
    city: "Barranquilla",
    content: `El canal diario en WhatsApp es GENIAL. Cada mañana me dice qué cocinar. No pienso. Solo cocino.

Antes perdía 20 minutos decidiendo qué pedir. Esperaba 1 hora. Comía basura. Gastaba $50.000.

Ahora cocino en 25 minutos. Como mejor. Gasto $10.000. ¿Por qué no hice esto antes?`,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Esto Dicen Quienes Ya{" "}
          <span className="text-gradient-fire">Dejaron Los Domicilios:</span>
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16">
          Historias reales de colombianos como tú
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-lg">{testimonial.name}, {testimonial.age} años</div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {testimonial.city}
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                {testimonial.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
