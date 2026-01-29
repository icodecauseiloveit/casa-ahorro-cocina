
import { Check, CreditCard, Shield, Zap, Clock, X, AlertTriangle, Gift, MessageCircle, Calendar, Shuffle, RefreshCw, Users, Target, Flame, Dumbbell, Scale, ShoppingCart, Smartphone } from "lucide-react";

export const landingContent = {
    hero: {
        badge: "🇨🇴 Más de 8,000 colombianos ya ahorraron millones",
        headline: {
            prefix: "Cómo Dejar de Gastar",
            highlight: "$800.000+",
            suffix: "al Mes en Domicilios y Comer Más Rico, Más Sano y en Menos Tiempo"
        },
        subheadline: "200 Recetas Saludables Listas Para Usar + Sistema que Te Dice Exactamente Qué Cocinar Cada Día + Acceso de Por Vida al Canal Privado de Recetas Diarias",
        price: {
            original: "$3.476.000",
            discounted: "$188.000",
            ctaProps: "Tuyo Hoy Por Solo"
        },
        cta: "SÍ, QUIERO DEJAR DE TIRAR PLATA EN DOMICILIOS",
        trust: [
            { icon: Shield, text: "Pago 100% seguro" },
            { icon: Zap, text: "Acceso inmediato" },
            { icon: Clock, text: "Garantía 60 días" }
        ]
    },
    agitation: {
        title: {
            prefix: "¿Cuánto Has Gastado en",
            highlight: "Rappi",
            suffix: "Esta Semana?"
        },
        questions: {
            intro: "Seamos honestos por un segundo..."
        },
        weeklyExpenses: [
            { day: "Lunes", excuse: "'Estoy cansado, pido algo'", amount: "$35.000" },
            { day: "Miércoles", excuse: "'No hay nada en la nevera'", amount: "$42.000" },
            { day: "Viernes", excuse: "'Me lo merezco'", amount: "$55.000" },
            { day: "Domingo", excuse: "'Flojera cocinar'", amount: "$48.000" },
        ],
        totals: {
            week: { label: "Total de la semana:", amount: "$180.000" },
            month: { label: "Total del mes:", amount: "$720.000" },
            note: 'Y eso sin contar los domicilios "chiquitos" del desayuno, el almuerzo en la oficina, o cuando "solo pedimos algo rápido".'
        },
        realityCheck: {
            prefix: "La verdad real:",
            text: "La mayoría de colombianos gastan entre",
            highlight: "$600.000 y $1.200.000",
            suffix: "al mes en domicilios."
        },
        problemsPart2: {
            title: "Pero No Es Solo la Plata...",
            list: [
                "Esperas 45-60 minutos por comida que llega fría",
                "Comes pura grasa, sodio y conservantes",
                "Te sientes culpable cada vez que ves el extracto",
                "Sabes que podrías cocinar... pero 'no sabes qué hacer'",
                "Cuando intentas cocinar, terminas comiendo las mismas 7 cosas aburridas",
                "Los ingredientes que compras 'con motivación' se pudren en la nevera",
            ],
            conclusion: {
                text1: "Y lo peor es que ",
                highlight1: "no es por falta de disciplina.",
                text2: "Es porque nadie te dio un ",
                highlight2: "SISTEMA",
                text3: "que te diga:",
                list: [
                    "Exactamente qué cocinar cada día",
                    "Con ingredientes que ya tienes",
                    "En menos tiempo del que tardas esperando el domicilio",
                    "Más rico de lo que te llega en esa bolsa grasosa"
                ],
                final: "Ese sistema existe. Y termina hoy con esto."
            }
        }
    },
    solution: {
        title: {
            prefix: "El Vault de Recetas Saludables:",
            highlight: "200 Recetas",
            suffix: "Que Destruyen Tu Dependencia de Rappi"
        },
        intro: "Imagina esto: Son las 7pm. Llegas a casa después de un día pesado.",
        before: {
            title: "ANTES",
            items: [
                "Abres Rappi",
                "Scroll infinito decidiendo qué pedir",
                "Escoges lo mismo de siempre",
                "$45.000 que se van",
                "Esperas 50 minutos",
                "Llega frío",
                "Te sientes mal después de comer",
            ]
        },
        after: {
            title: "AHORA",
            items: [
                "Abres WhatsApp",
                "Ves el mensaje: 'Cena de hoy: Pollo al limón con vegetales (20 min)'",
                "Ingredientes ya los tienes (los compraste el domingo con la lista)",
                "20 minutos después estás comiendo",
                "Gastaste $8.000 en ingredientes (te alcanza para 4 porciones)",
                "Sabor casero, caliente, sin culpa",
                "Ahorraste $37.000 en un solo día",
            ]
        },
        savings: {
            prefix: "En un mes, eso es más de",
            amount: "$1.000.000",
            suffix: "de ahorro."
        },
        vaultDetails: {
            title: "¿Qué Es El Vault Exactamente?",
            subtitle: "Es el sistema completo que necesitas para:",
            benefits: [
                "Dejar de depender de domicilios de una vez por todas",
                "Cocinar comidas deliciosas en MENOS tiempo del que tardas esperando Rappi",
                "Nunca más preguntarte '¿qué cocino hoy?'",
                "Ahorrar mínimo $600.000 al mes (eso es más de $7.000.000 al año)",
                "Comer más sano sin que sepa a 'comida de dieta'",
            ],
            footer: {
                text: "Un solo pago. Un sistema completo.",
                highlight: "Para siempre."
            }
        }
    },
    pricing: {
        stack: [
            { name: "Vault de 200 Recetas", value: "$388.000" },
            { name: "Canal VIP Diario (de por vida)", value: "$1.188.000" },
            { name: "Meal Prep 12 Semanas", value: "$388.000" },
            { name: "Mix & Match System", value: "$268.000" },
            { name: "Guía de Sustituciones", value: "$188.000" },
            { name: "Grupo VIP WhatsApp", value: "$788.000" },
            { name: "Desafío 30 Días", value: "$268.000" },
        ],
        totalValue: "$3.476.000",
        discountBadge: "Descuento del 94%",
        strikethroughPrices: ["$3.476.000", "$988.000", "$388.000"],
        finalPrice: "$188.000",
        guarantee: {
            text: "Menos de lo que gastas en 5 domicilios.",
            highlight: "Pero esto te dura TODA LA VIDA."
        },
        cta: "SÍ, QUIERO AHORRAR MILLONES Y COMER MEJOR"
    },
    bonuses: {
        header: {
            tag: "BONOS EXCLUSIVOS",
            title: {
                prefix: "Pero Espera... Si Ordenas en los Próximos",
                highlight: "20 Minutos",
                suffix: ", También Llevas:"
            }
        },
        list: [
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
        ]
    },
    vaultContents: {
        title: {
            prefix: "Esto Es Lo Que Recibes",
            highlight: "Cuando Ordenes Hoy:"
        },
        subtitle: "EL VAULT COMPLETO DE 200 RECETAS",
        sections: {
            recipes: {
                title: "200 Recetas Organizadas Por Categoría",
                categories: [
                    { count: "70", name: "Desayunos", note: "(deja de comprar pandebono y café con leche en $15.000)" },
                    { count: "70", name: "Almuerzos", note: "(adiós a los $35.000 diarios del corrientazo)" },
                    { count: "60", name: "Cenas", note: "(no más pizza a $45.000)" },
                ]
            },
            rotation: {
                title: "Sistema de Rotación de 12 Semanas",
                list: [
                    "Menús pre-armados para <strong>84 días únicos</strong>",
                    "Nunca comes lo mismo en 3 meses",
                    "Cuando llegas al día 85, tu paladar ya olvidó = todo sabe nuevo",
                ]
            },
            objectives: {
                title: "Dividido Por Objetivos",
                list: [
                    { icon: Flame, title: "Perder grasa", subtitle: "Déficit calórico balanceado", style: "destructive" },
                    { icon: Dumbbell, title: "Ganar músculo", subtitle: "Superávit limpio", style: "primary" },
                    { icon: Scale, title: "Mantenimiento", subtitle: "Balance perfecto", style: "success" },
                ]
            },
            includes: {
                title: "Cada Receta Incluye",
                list: [
                    "Lista exacta de ingredientes (que consigues en Éxito, Olímpica, D1)",
                    "Instrucciones paso a paso SIMPLES",
                    "Tiempo real: 15-30 minutos promedio (menos que esperar el domicilio)",
                    "Macros completos (proteína, carbos, grasas, calorías)",
                    "Costo por porción (vas a alucinar lo barato que es)",
                    "Tags: vegano, keto, sin gluten, meal prep",
                ]
            },
            shopping: {
                title: "12 Listas de Compras Semanales Pre-Hechas",
                benefits: [
                    "Haces mercado UNA VEZ a la semana",
                    "Listas organizadas por secciones"
                ],
                stats: {
                    cost: "$150.000-$200.000",
                    savings: "$600.000/mes"
                }
            },
            access: {
                title: "Acceso Digital Permanente + PDF Descargable",
                text: "Lo ves en celular, computador o tablet. Descarga e imprime si quieres.",
                highlight: "Tuyo para siempre."
            },
            valueToken: {
                label: "Valor del Vault:",
                amount: "$388.000"
            }
        }
    }
};
