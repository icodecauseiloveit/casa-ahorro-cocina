import { AlertTriangle, X, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const spotsTotal = 250;
  const spotsSold = 217;
  const spotsLeft = spotsTotal - spotsSold;
  const progressPercent = (spotsSold / spotsTotal) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-16 sm:py-24 bg-destructive/10">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Warning Box */}
          <div className="p-6 sm:p-8 bg-card border-4 border-destructive rounded-xl urgency-pulse">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-destructive">
                ⚠️ ADVERTENCIA IMPORTANTE
              </h2>
            </div>

            <p className="text-lg mb-6">
              El precio de <span className="font-bold text-primary">$188.000</span> con TODOS los bonos es{" "}
              <span className="font-bold">SOLO para los primeros 250 compradores</span> de enero.
            </p>

            <div className="p-4 bg-muted rounded-lg mb-6">
              <p className="font-bold mb-3">¿Por qué esta limitación?</p>
              <p className="text-muted-foreground">
                Los bonos #1 (Canal Diario en WhatsApp) y #5 (Grupo VIP) nos cuestan dinero real mantener. 
                Tenemos que pagar servidores, moderadores, y envío de mensajes diarios.
              </p>
              <p className="font-bold text-destructive mt-3">NO podemos regalarlo a todos. Es insostenible.</p>
            </div>

            <p className="text-lg font-bold mb-4">Después del comprador #250:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-destructive">
                <X className="w-5 h-5" />
                <span>Precio sube a <strong>$388.000</strong> (el valor real del Vault)</span>
              </div>
              <div className="flex items-center gap-3 text-destructive">
                <X className="w-5 h-5" />
                <span>PIERDES el Canal Diario (<strong>$1.188.000/año</strong> de valor)</span>
              </div>
              <div className="flex items-center gap-3 text-destructive">
                <X className="w-5 h-5" />
                <span>PIERDES acceso al Grupo VIP (<strong>$788.000/año</strong>)</span>
              </div>
              <div className="flex items-center gap-3 text-destructive">
                <X className="w-5 h-5" />
                <span>PIERDES el Desafío 30 Días</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="p-4 bg-background rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">⚡ ESPACIOS DISPONIBLES</span>
                <span className="text-lg font-bold text-destructive">{spotsLeft}/{spotsTotal}</span>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-fire transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-center text-sm text-muted-foreground mt-2">
                Ya van {spotsSold} vendidos. Quedan <span className="text-destructive font-bold">{spotsLeft} espacios.</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="p-4 bg-destructive/20 border border-destructive rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-destructive" />
                <span className="text-sm font-bold">Esta oferta expira en:</span>
              </div>
              <div className="text-4xl font-bold font-mono text-destructive">
                {formatTime(timeLeft)}
              </div>
            </div>

            <p className="text-center text-lg mt-6 font-bold">
              No dejes que otro lunes empiece abriendo Rappi en vez de tu nevera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
