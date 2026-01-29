import { Check, Flame, Dumbbell, Scale, Clock, ShoppingCart, Smartphone } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const VaultContentsSection = () => {
  const { title, subtitle, sections } = landingContent.vaultContents;

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          {title.prefix}{" "}
          <span className="text-gradient-fire">{title.highlight}</span>
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16">
          {subtitle}
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 200 Recetas */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">{sections.recipes.title}</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {sections.recipes.categories.map((cat, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{cat.count}</div>
                  <div className="font-medium">{cat.name}</div>
                  <div className="text-sm text-muted-foreground">{cat.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sistema de Rotación */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">{sections.rotation.title}</h3>
            </div>
            <ul className="space-y-3">
              {sections.rotation.list.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Por Objetivos */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">{sections.objectives.title}</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {sections.objectives.list.map((obj, index) => {
                const Icon = obj.icon;
                return (
                  <div key={index} className={`flex items-center gap-3 p-4 bg-${obj.style}/10 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${obj.style}`} />
                    <div>
                      <div className="font-bold">{obj.title}</div>
                      <div className="text-sm text-muted-foreground">{obj.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cada Receta Incluye */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">{sections.includes.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {sections.includes.list.map((item, index) => (
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
              <h3 className="text-2xl font-bold">{sections.shopping.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                {sections.shopping.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
                <div className="text-lg">
                  Gastas <span className="font-bold text-success">{sections.shopping.stats.cost}</span> y comes TODA la semana
                </div>
                <div className="text-muted-foreground mt-2">
                  Vs. $800.000 en domicilios = ahorras <span className="text-success font-bold">{sections.shopping.stats.savings}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Acceso Digital */}
          <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold">{sections.access.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>{sections.access.text} <strong>{sections.access.highlight}</strong></span>
            </div>
          </div>

          {/* Vault Value */}
          <div className="text-center p-6 bg-primary/10 border-2 border-primary/30 rounded-xl">
            <span className="text-xl">{sections.valueToken.label}</span>
            <span className="text-3xl font-bold text-primary ml-3">{sections.valueToken.amount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
