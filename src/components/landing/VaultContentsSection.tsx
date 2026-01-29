import { Check, Flame, Dumbbell, Scale, Clock, ShoppingCart, Smartphone } from "lucide-react";

export const VaultContentsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Esto Es Lo Que Recibes{" "}
          <span className="text-gradient-fire">Cuando Ordenes Hoy:</span>
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16">
          EL VAULT COMPLETO DE 200 RECETAS
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 200 Recetas */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">200 Recetas Organizadas Por Categoría</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary">70</div>
                <div className="font-medium">Desayunos</div>
                <div className="text-sm text-muted-foreground">(deja de comprar pandebono y café con leche en $15.000)</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary">70</div>
                <div className="font-medium">Almuerzos</div>
                <div className="text-sm text-muted-foreground">(adiós a los $35.000 diarios del corrientazo)</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary">60</div>
                <div className="font-medium">Cenas</div>
                <div className="text-sm text-muted-foreground">(no más pizza a $45.000)</div>
              </div>
            </div>
          </div>

          {/* Sistema de Rotación */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">Sistema de Rotación de 12 Semanas</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Menús pre-armados para <strong>84 días únicos</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Nunca comes lo mismo en 3 meses</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Cuando llegas al día 85, tu paladar ya olvidó = todo sabe nuevo</span>
              </li>
            </ul>
          </div>

          {/* Por Objetivos */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">Dividido Por Objetivos</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg">
                <Flame className="w-6 h-6 text-destructive" />
                <div>
                  <div className="font-bold">Perder grasa</div>
                  <div className="text-sm text-muted-foreground">Déficit calórico balanceado</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                <Dumbbell className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold">Ganar músculo</div>
                  <div className="text-sm text-muted-foreground">Superávit limpio</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg">
                <Scale className="w-6 h-6 text-success" />
                <div>
                  <div className="font-bold">Mantenimiento</div>
                  <div className="text-sm text-muted-foreground">Balance perfecto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cada Receta Incluye */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">Cada Receta Incluye</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Lista exacta de ingredientes (que consigues en Éxito, Olímpica, D1)",
                "Instrucciones paso a paso SIMPLES",
                "Tiempo real: 15-30 minutos promedio (menos que esperar el domicilio)",
                "Macros completos (proteína, carbos, grasas, calorías)",
                "Costo por porción (vas a alucinar lo barato que es)",
                "Tags: vegano, keto, sin gluten, meal prep",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Listas de Compras */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">12 Listas de Compras Semanales Pre-Hechas</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span>Haces mercado UNA VEZ a la semana</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span>Listas organizadas por secciones</span>
                </div>
              </div>
              <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
                <div className="text-lg">
                  Gastas <span className="font-bold text-success">$150.000-$200.000</span> y comes TODA la semana
                </div>
                <div className="text-muted-foreground mt-2">
                  Vs. $800.000 en domicilios = ahorras <span className="text-success font-bold">$600.000/mes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Acceso Digital */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">Acceso Digital Permanente + PDF Descargable</h3>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>Lo ves en celular, computador o tablet. Descarga e imprime si quieres. <strong>Tuyo para siempre.</strong></span>
            </div>
          </div>

          {/* Vault Value */}
          <div className="text-center p-6 bg-primary/10 border-2 border-primary/30 rounded-xl">
            <span className="text-xl">Valor del Vault:</span>
            <span className="text-3xl font-bold text-primary ml-3">$388.000</span>
          </div>
        </div>
      </div>
    </section>
  );
};
