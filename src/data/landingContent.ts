
import { Check, CreditCard, Shield, Zap, Clock, X, AlertTriangle, Gift, MessageCircle, Calendar, Shuffle, RefreshCw, Users, Target, Flame, Dumbbell, Scale, ShoppingCart, Smartphone, TrendingDown, TrendingUp, Calculator, Star, MapPin, ArrowRight } from "lucide-react";

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
    },
    math: {
        header: {
            title: "Hagamos Las Cuentas Reales...",
            badge: "LA MATEMÁTICA",
            calculatorIcon: Calculator
        },
        scenarioA: {
            title: "ESCENARIO A: Sigues pidiendo domicilios",
            icon: TrendingDown,
            items: [
                { label: "Desayuno (3x semana)", calc: "$15.000 x 12 =", value: "$180.000" },
                { label: "Almuerzo (5x semana)", calc: "$35.000 x 20 =", value: "$700.000" },
                { label: "Cena (4x semana)", calc: "$45.000 x 16 =", value: "$720.000" },
                { label: "Domingos 'porque sí'", calc: "$60.000 x 4 =", value: "$240.000" },
            ],
            totalMonth: { label: "TOTAL AL MES:", value: "$1.840.000" },
            totalYear: { label: "TOTAL AL AÑO:", value: "$22.080.000" }
        },
        scenarioB: {
            title: "ESCENARIO B: Usas El Vault",
            icon: TrendingUp,
            items: [
                { label: "Mercado semanal", calc: "$180.000 x 4 =", value: "$720.000" },
                { label: "Vault (pago único)", calc: "", value: "$188.000", note: "(primer mes)" },
            ],
            totalMonth: { label: "TOTAL PRIMER MES:", value: "$908.000" },
            totalYear: { label: "TOTAL MESES 2-12:", value: "$720.000/mes" }
        },
        savings: {
            year1: { label: "AHORRO PRIMER AÑO:", value: "$12.200.000" },
            year5: { label: "En 5 años ahorras:", value: "$61.000.000" },
            comparison: {
                text: "POR EL PRECIO DE 4 DOMICILIOS",
                subtext: "(que te duran 4 días), obtienes un sistema que te ahorra",
                highlight: "MILLONES",
                suffix: "durante años."
            },
            question: "¿Tiene sentido o no?"
        }
    },
    testimonials: {
        title: {
            prefix: "Esto Dicen Quienes Ya",
            highlight: "Dejaron Los Domicilios:",
            subtitle: "Historias reales de colombianos como tú"
        },
        list: [
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
            }
        ]
    },
    guarantee: {
        title: {
            prefix: 'Mi Garantía "Anti-Arrepentimiento" de',
            highlight: "60 Días",
            icon: Shield
        },
        intro: "Mira, sé que $188.000 no es regalado. Es casi una semana de domicilios para muchas familias.",
        subintro: "Por eso hago esto:",
        box: {
            title: "Usa El Vault por 60 días completos.",
            condition: "Si en esos 60 días no:",
            points: [
                "Ahorras AL MENOS $400.000 en domicilios",
                "Cocinas más rápido de lo que tardas esperando Rappi",
                "Comes más rico que cualquier domicilio",
                "Te ENAMORAS del sistema",
            ]
        },
        promise: "...te devuelvo tu dinero. Sin preguntas. Sin peros.",
        bonusPromise: "Y te quedas con todos los bonos descargables.",
        reason: {
            title: "¿Por qué hago esto?",
            text: 'Porque tengo 8.000+ personas usando esto CADA DÍA. Sé que funciona. Sé que vas a ahorrar. Sé que en 30 días vas a pensar "esto fue la mejor decisión del año".'
        },
        risk: {
            prefix: "El riesgo es 100% mío. El beneficio es",
            highlight: "100% tuyo."
        },
        badge: "GARANTÍA 60 DÍAS - 100% REEMBOLSO SIN PREGUNTAS"
    },
    urgency: {
        warning: {
            title: "⚠️ ADVERTENCIA IMPORTANTE",
            text: {
                prefix: "El precio de",
                price: "$188.000",
                suffix: "con TODOS los bonos es",
                highlight: "SOLO para los primeros 250 compradores"
            },
            reason: {
                title: "¿Por qué esta limitación?",
                text: "Los bonos #1 (Canal Diario en WhatsApp) y #5 (Grupo VIP) nos cuestan dinero real mantener. Tenemos que pagar servidores, moderadores, y envío de mensajes diarios.",
                conclusion: "NO podemos regalarlo a todos. Es insostenible."
            }
        },
        consequences: {
            title: "Después del comprador #250:",
            list: [
                "Precio sube a <strong>$388.000</strong> (el valor real del Vault)",
                "PIERDES el Canal Diario (<strong>$1.188.000/año</strong> de valor)",
                "PIERDES acceso al Grupo VIP (<strong>$788.000/año</strong>)",
                "PIERDES el Desafío 30 Días"
            ]
        },
        progressBar: {
            title: "⚡ ESPACIOS DISPONIBLES",
            spotsTotal: 250,
            spotsSold: 217,
            text: {
                prefix: "Ya van",
                suffix: "vendidos. Quedan",
                highlight: "espacios."
            }
        },
        timer: {
            label: "Esta oferta expira en:"
        },
        footer: "No dejes que otro lunes empiece abriendo Rappi en vez de tu nevera."
    },
    faq: {
        title: "Preguntas Que Probablemente Tienes",
        subtitle: "(Y Sus Respuestas Honestas)",
        items: [
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
        ]
    },
    finalCTA: {
        title: {
            prefix: "Decisión Simple:",
            highlight: "¿Cuál Prefieres?"
        },
        optionA: {
            title: "OPCIÓN A: Seguir Quemando Plata en Domicilios",
            list: [
                "$800.000 - $1.200.000 al mes en Rappi",
                "Comida grasosa que llega fría",
                "Esperar 45-60 minutos cada vez",
                "Culpa después de ver el extracto",
                "Nunca aprender a cocinar",
                "En 1 año: $14.400.000 TIRADOS a la basura",
            ],
            cost: "TU SALUD + MILLONES"
        },
        optionB: {
            title: "OPCIÓN B: Obtener El Sistema Completo",
            badge: "RECOMENDADO",
            list: [
                "$188.000 UNA SOLA VEZ (pago único)",
                "200 recetas deliciosas y sanas",
                "Comida lista en 20-30 minutos",
                "Ahorro de $600.000-$1.200.000/mes",
                "Habilidad de por vida",
                "En 1 año: $7.200.000 - $14.400.000 AHORRADOS",
            ],
            cost: "$188.000 (4 domicilios)"
        },
        ctaBox: {
            text: {
                prefix: "La diferencia entre tirar $14.000.000 al año y ahorrarlos:",
                highlight: "este botón ⬇️"
            },
            priceLabel: "PRECIO FINAL:",
            priceValue: "$188.000",
            paymentType: "Un solo pago. Acceso de por vida.",
            buttonText: "SÍ, QUIERO DEJAR RAPPI Y AHORRAR MILLONES"
        },
        trust: [
            { icon: Shield, text: "Compra 100% segura" },
            { icon: Zap, text: "Acceso en 2 minutos" },
            { icon: Clock, text: "Garantía 60 días sin preguntas" }
        ],
        paymentMethods: "💳 Acepta tarjetas débito/crédito, PSE, Nequi, Daviplata"
    },
    ps: {
        items: [
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
        ]
    },
    footer: {
        badges: [
            { icon: Check, text: "Pago único, sin suscripciones" },
            { icon: Shield, text: "🇨🇴 Hecho para colombianos" },
            { icon: Shield, text: "💯 Garantía 60 días" },
            { icon: CreditCard, text: "🔒 Compra 100% segura" },
        ],
        copyright: "© 2025 El Vault de Recetas Saludables. Todos los derechos reservados."
    },
    stickyBar: {
        totalValue: {
            label: "Valor total:",
            amount: "$3.476.000"
        },
        price: "Solo $188.000",
        buttonText: "OBTENER ACCESO AHORA",
        note: "* El valor de $188.000 puede cambiar segun el TRM del día caluculado con (51 USD)"
    }
};
