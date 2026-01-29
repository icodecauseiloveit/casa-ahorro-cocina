import { X, AlertTriangle } from "lucide-react";
import { landingContent } from "@/data/landingContent";

export const AgitationSection = () => {
  const { weeklyExpenses, problemsPart2 } = landingContent.agitation;

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        {/* Question Header */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          {landingContent.agitation.title.prefix}{" "}
          <span className="text-destructive">{landingContent.agitation.title.highlight}</span>{" "}
          {landingContent.agitation.title.suffix}
        </h2>

        {/* Weekly Expenses Breakdown */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-muted-foreground text-center mb-8">
            {landingContent.agitation.questions.intro}
          </p>

          <div className="space-y-4">
            {weeklyExpenses.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="font-medium">{item.day}:</span>
                  <span className="text-muted-foreground">{item.excuse}</span>
                </div>
                <span className="text-destructive font-bold">{item.amount}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 p-6 bg-destructive/20 border-2 border-destructive rounded-lg text-center">
            <div className="text-xl mb-2">
              {landingContent.agitation.totals.week.label} <span className="font-bold text-destructive">{landingContent.agitation.totals.week.amount}</span>
            </div>
            <div className="text-2xl font-bold">
              {landingContent.agitation.totals.month.label} <span className="text-destructive">{landingContent.agitation.totals.month.amount}</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              {landingContent.agitation.totals.note}
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg text-muted-foreground">
              <span className="font-bold text-foreground">{landingContent.agitation.realityCheck.prefix}</span> {landingContent.agitation.realityCheck.text}{" "}
              <span className="text-destructive font-bold">{landingContent.agitation.realityCheck.highlight}</span> {landingContent.agitation.realityCheck.suffix}
            </p>
          </div>
        </div>

        {/* Second Part - Problems */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            {problemsPart2.title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {problemsPart2.list.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>

          {/* The Real Problem */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-card to-muted border border-border rounded-xl">
            <p className="text-lg text-muted-foreground mb-6">
              {problemsPart2.conclusion.text1}<span className="text-foreground font-bold">{problemsPart2.conclusion.highlight1}</span>
            </p>
            <p className="text-xl mb-6">
              {problemsPart2.conclusion.text2}<span className="text-primary font-bold">{problemsPart2.conclusion.highlight2}</span> {problemsPart2.conclusion.text3}
            </p>
            <ul className="space-y-3 mb-6">
              {problemsPart2.conclusion.list.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-xl font-bold text-gradient-fire">
              <AlertTriangle className="w-6 h-6 text-primary" />
              {problemsPart2.conclusion.final}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
