import { Gift } from "lucide-react";
import { landingContent } from "@/data/landingContent";



export const BonusSection = () => {
  const { header, list } = landingContent.bonuses;
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-bold">{header.tag}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {header.title.prefix}{" "}
            <span className="text-primary">{header.title.highlight}</span>
            {header.title.suffix}
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {list.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.number}
                className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
