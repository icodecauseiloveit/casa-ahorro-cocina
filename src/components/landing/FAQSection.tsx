import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿200 recetas son suficientes o me voy a aburrir?",
    answer: `Piénsalo: ¿cuántas recetas cocinas ahora? ¿10? ¿15?

Con 200 recetas puedes comer algo diferente cada día durante más de 6 meses SIN REPETIR.

Además, el Mix & Match System te da 343.000 combinaciones. Literalmente es IMPOSIBLE que te aburras.

Y cada mes agregamos 5-10 recetas nuevas. Gratis. Para siempre.`,
  },
  {
    question: "¿Las recetas usan ingredientes raros que no consigo en Colombia?",
    answer: `TODO está diseñado con ingredientes que consigues en Éxito, Carulla, Olímpica, o hasta en D1.

Nada de "aceite de coco orgánico prensado en frío" ni "harina de almendras importada".

Pollo, arroz, pasta, verduras, huevos, frijoles, lentejas = lo normal que ya compras.`,
  },
  {
    question: "¿De verdad voy a ahorrar $600.000+ al mes?",
    answer: `Hagamos la cuenta conservadora:

• Almuerzos de oficina: $35.000 x 20 días = $700.000
• Con El Vault: $10.000 x 20 días = $200.000
• Ahorro solo en almuerzos: $500.000

Eso SIN CONTAR cenas, desayunos, fines de semana.

La mayoría de nuestros usuarios reportan ahorros de $600.000 a $1.200.000 al mes.`,
  },
  {
    question: "¿Es realmente de por vida o tengo que pagar mensual?",
    answer: `Un pago. $188.000. UNA SOLA VEZ.

Acceso para siempre. Cero suscripciones. Cero pagos escondidos.

Actualizaciones mensuales gratis. Canal diario gratis. Grupo gratis.

PARA. SIEMPRE.`,
  },
  {
    question: "¿Las recetas son complicadas? No soy chef...",
    answer: `Si pides domicilios es porque NO eres chef. Lo entendemos.

Por eso cada receta:
• Promedio 20-30 minutos
• Máximo 8 ingredientes
• Instrucciones paso a paso TONTAS (como si le explicaras a un niño)
• Sin técnicas raras

Si sabes freír un huevo, puedes hacer estas recetas.`,
  },
  {
    question: "¿Qué pasa si no tengo un ingrediente?",
    answer: `El Bono #4 (Guía de Sustituciones) tiene 150+ intercambios.

"No tengo cilantro" → Usa perejil
"No tengo pollo" → Usa pescado, carne, tofu

NUNCA te quedas atorado. NUNCA tienes excusa para pedir domicilio.`,
  },
  {
    question: "¿Funciona para dietas específicas (keto, vegana, sin gluten)?",
    answer: `Cada receta tiene tags claros: keto, vegana, vegetariana, sin gluten, paleo, etc.

PLUS: La Guía de Sustituciones te enseña a adaptar CUALQUIER receta a tu dieta.`,
  },
  {
    question: "¿Cuándo tengo acceso después de pagar?",
    answer: `INMEDIATAMENTE.

Pagas → Recibes email en 2 minutos con tus credenciales → Estás viendo las recetas en 5 minutos.

El canal de WhatsApp se activa en menos de 10 minutos.`,
  },
  {
    question: "¿De verdad me devuelven la plata si no me gusta?",
    answer: `Sí. 60 días. Sin preguntas.

Mandas un email que diga "quiero reembolso" y listo. Te devolvemos los $188.000.

Aunque solo el 2.7% lo pide. Porque funciona.`,
  },
  {
    question: "¿Acepta PSE/Nequi/Daviplata?",
    answer: `Sí. Aceptamos:
• Tarjetas débito/crédito
• PSE
• Nequi
• Daviplata
• Transferencia bancaria`,
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Preguntas Que Probablemente Tienes
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16">
          (Y Sus Respuestas Honestas)
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
