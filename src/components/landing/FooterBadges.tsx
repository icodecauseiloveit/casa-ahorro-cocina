import { Shield, CreditCard, Check } from "lucide-react";

export const FooterBadges = () => {
  const badges = [
    {
      icon: Check,
      text: "Pago único, sin suscripciones",
    },
    {
      icon: Shield,
      text: "🇨🇴 Hecho para colombianos",
    },
    {
      icon: Shield,
      text: "💯 Garantía 60 días",
    },
    {
      icon: CreditCard,
      text: "🔒 Compra 100% segura",
    },
  ];

  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8">
          © 2025 El Vault de Recetas Saludables. Todos los derechos reservados.
        </div>
      </div>
    </section>
  );
};
