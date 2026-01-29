import { X, Check, ArrowRight } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const SolutionSection = () => {
  const { before, after, vaultDetails } = landingContent.solution;

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {landingContent.solution.title.prefix}{" "}
            <span className="text-gradient-fire">{landingContent.solution.title.highlight}</span>{" "}
            {landingContent.solution.title.suffix}
          </h2>
        </div>

        {/* Before/After Scenario */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-xl text-center text-muted-foreground mb-10">
            {landingContent.solution.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div className="p-6 bg-destructive/10 border-2 border-destructive/30 rounded-xl">
              <h3 className="text-2xl font-bold text-destructive mb-6 text-center">{before.title}</h3>
              <div className="space-y-3">
                {before.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div className="p-6 bg-success/10 border-2 border-success/30 rounded-xl">
              <h3 className="text-2xl font-bold text-success mb-6 text-center">{after.title}</h3>
              <div className="space-y-3">
                {after.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings highlight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-success/20 to-success/10 border border-success/30 rounded-xl text-center">
            <p className="text-2xl font-bold">
              {landingContent.solution.savings.prefix}{" "}
              <span className="text-success">{landingContent.solution.savings.amount}</span>{" "}
              {landingContent.solution.savings.suffix}
            </p>
          </div>
        </div>

        {/* What is the Vault */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            {vaultDetails.title}
          </h3>

          <p className="text-lg text-muted-foreground text-center mb-10">
            {vaultDetails.subtitle}
          </p>

          <div className="space-y-4 mb-10">
            {vaultDetails.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-primary/10 border border-primary/30 rounded-xl">
            <p className="text-xl font-bold">
              {vaultDetails.footer.text}{" "}
              <span className="text-primary">{vaultDetails.footer.highlight}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
