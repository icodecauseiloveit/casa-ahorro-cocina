import { AlertTriangle, X, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { landingContent } from "@/data/landingContent";

export const UrgencySection = () => {
  const { warning, consequences, progressBar, timer, footer } = landingContent.urgency;

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedDeadline = localStorage.getItem("urgency_deadline");
    const now = Date.now();
    const duration = 20 * 60 * 1000; // 20 minutes

    if (savedDeadline) {
      const remaining = Math.ceil((parseInt(savedDeadline) - now) / 1000);
      return remaining > 0 ? remaining : 0;
    }

    const newDeadline = now + duration;
    localStorage.setItem("urgency_deadline", newDeadline.toString());
    return 20 * 60;
  });

  const spotsTotal = progressBar.spotsTotal;
  const spotsSold = progressBar.spotsSold;
  const spotsLeft = spotsTotal - spotsSold;
  const progressPercent = (spotsSold / spotsTotal) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      const savedDeadline = localStorage.getItem("urgency_deadline");
      if (savedDeadline) {
        const remaining = Math.ceil((parseInt(savedDeadline) - Date.now()) / 1000);
        setTimeLeft(remaining > 0 ? remaining : 0);
      }
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
                {warning.title}
              </h2>
            </div>

            <p className="text-lg mb-6">
              {warning.text.prefix} <span className="font-bold text-primary">{warning.text.price}</span> {warning.text.suffix}{" "}
              <span className="font-bold">{warning.text.highlight}</span>
            </p>

            <div className="p-4 bg-muted rounded-lg mb-6">
              <p className="font-bold mb-3">{warning.reason.title}</p>
              <p className="text-muted-foreground">
                {warning.reason.text}
              </p>
              <p className="font-bold text-destructive mt-3">{warning.reason.conclusion}</p>
            </div>

            <p className="text-lg font-bold mb-4">{consequences.title}</p>
            <div className="space-y-3 mb-6">
              {consequences.list.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-destructive">
                  <X className="w-5 h-5" />
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="p-4 bg-background rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">{progressBar.title}</span>
                <span className="text-lg font-bold text-destructive">{spotsLeft}/{spotsTotal}</span>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full progress-animated transition-all duration-600"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-center text-sm text-muted-foreground mt-2">
                {progressBar.text.prefix} {spotsSold} {progressBar.text.suffix} <span className="text-destructive font-bold">{spotsLeft} {progressBar.text.highlight}</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="p-4 bg-destructive/20 border border-destructive rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-destructive" />
                <span className="text-sm font-bold">{timer.label}</span>
              </div>
              <div className="text-4xl font-bold font-mono text-destructive">
                {formatTime(timeLeft)}
              </div>
            </div>

            <p className="text-center text-lg mt-6 font-bold">
              {footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
