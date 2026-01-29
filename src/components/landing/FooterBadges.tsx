import { Shield, CreditCard, Check } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const FooterBadges = () => {
  const { badges, copyright } = landingContent.footer;

  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8">
          {copyright}
        </div>
      </div>
    </section>
  );
};
