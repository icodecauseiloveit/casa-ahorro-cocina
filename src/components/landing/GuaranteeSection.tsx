import { Shield, Check } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const GuaranteeSection = () => {
  const { title, intro, subintro, box, promise, bonusPromise, reason, risk, badge } = landingContent.guarantee;

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full mb-6">
              <title.icon className="w-10 h-10 text-success" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {title.prefix}{" "}
              <span className="text-success">{title.highlight}</span>
            </h2>
          </div>

          <div className="p-6 sm:p-10 bg-card border-2 border-success/30 rounded-2xl">
            <p className="text-lg text-muted-foreground mb-6">
              {intro}
            </p>
            <p className="text-xl font-bold mb-6">{subintro}</p>

            <div className="p-6 bg-muted rounded-xl mb-6">
              <p className="text-lg mb-4">
                <strong>{box.title}</strong>
              </p>
              <p className="mb-4">{box.condition}</p>
              <ul className="space-y-3">
                {box.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl font-bold text-success mb-6">
              {promise}
            </p>
            <p className="text-muted-foreground mb-6">
              {bonusPromise}
            </p>

            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg mb-6">
              <p className="font-bold text-lg mb-2">{reason.title}</p>
              <p className="text-muted-foreground">
                {reason.text}
              </p>
            </div>

            <p className="text-xl text-center font-bold">
              {risk.prefix}{" "}
              <span className="text-success">{risk.highlight}</span>
            </p>
          </div>

          {/* Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-success/20 border-2 border-success rounded-full">
              <Shield className="w-8 h-8 text-success" />
              <span className="font-bold text-lg">{badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
