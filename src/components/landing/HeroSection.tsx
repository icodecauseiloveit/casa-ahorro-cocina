import { CTAButton } from "./CTAButton";
import { Shield, Zap, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">🇨🇴 Más de 8,000 colombianos ya ahorraron millones</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cómo Dejar de Gastar{" "}
            <span className="text-gradient-fire">$800.000+</span>{" "}
            al Mes en Domicilios y Comer Más Rico, Más Sano y en Menos Tiempo
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            200 Recetas Saludables Listas Para Usar + Sistema que Te Dice Exactamente Qué Cocinar Cada Día + Acceso de Por Vida al Canal Privado de Recetas Diarias
          </p>

          {/* Value proposition */}
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="text-muted-foreground line-through text-xl">$3.476.000</span>
            <span className="text-2xl sm:text-3xl font-bold text-gradient-gold">Tuyo Hoy Por Solo $188.000</span>
          </div>

          {/* CTA Button */}
          <div className="mb-10">
            <CTAButton size="mega">
              SÍ, QUIERO DEJAR DE TIRAR PLATA EN DOMICILIOS
            </CTAButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>Garantía 60 días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
