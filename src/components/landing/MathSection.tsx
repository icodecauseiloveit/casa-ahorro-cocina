import { TrendingDown, TrendingUp, Calculator } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const MathSection = () => {
  const { header, scenarioA, scenarioB, savings } = landingContent.math;

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full mb-6">
            <header.calculatorIcon className="w-5 h-5" />
            <span className="font-bold">{header.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {header.title}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Scenario A */}
          <div className="p-6 sm:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <scenarioA.icon className="w-8 h-8 text-destructive" />
              <h3 className="text-xl font-bold">{scenarioA.title}</h3>
            </div>

            <div className="space-y-3 mb-6">
              {scenarioA.items.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:inline">{item.calc}</span>
                    <span className="font-bold text-destructive">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-destructive/30 pt-4 space-y-2">
              <div className="flex justify-between text-lg">
                <span>{scenarioA.totalMonth.label}</span>
                <span className="font-bold text-destructive">{scenarioA.totalMonth.value}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span>{scenarioA.totalYear.label}</span>
                <span className="font-bold text-destructive">{scenarioA.totalYear.value}</span>
              </div>
            </div>
          </div>

          {/* Scenario B */}
          <div className="p-6 sm:p-8 bg-success/10 border-2 border-success/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <scenarioB.icon className="w-8 h-8 text-success" />
              <h3 className="text-xl font-bold">{scenarioB.title}</h3>
            </div>

            <div className="space-y-3 mb-6">
              {scenarioB.items.map((item, index) => (
                <div key={index} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-background/50 rounded-lg">
                  <span className="text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    {item.calc && <span className="text-sm text-muted-foreground hidden sm:inline">{item.calc}</span>}
                    <span className="font-bold text-success">{item.value}</span>
                    {item.note && <span className="text-xs text-muted-foreground">{item.note}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-success/30 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>{scenarioB.totalMonth.label}</span>
                <span className="font-bold text-success">{scenarioB.totalMonth.value}</span>
              </div>
              <div className="flex justify-between">
                <span>{scenarioB.totalYear.label}</span>
                <span className="font-bold text-success">{scenarioB.totalYear.value}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-success/20 to-success/10 border-2 border-success rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-4">
              {savings.year1.label} <span className="text-success">{savings.year1.value}</span>
            </div>
            <div className="text-xl text-muted-foreground mb-6">
              {savings.year5.label} <span className="font-bold text-foreground">{savings.year5.value}</span>
            </div>
            <div className="p-4 bg-background/50 rounded-lg">
              <p className="text-lg">
                <strong>{savings.comparison.text}</strong> {savings.comparison.subtext}{" "}
                <span className="text-success font-bold">{savings.comparison.highlight}</span> {savings.comparison.suffix}
              </p>
              <p className="text-xl font-bold mt-2">{savings.question}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
