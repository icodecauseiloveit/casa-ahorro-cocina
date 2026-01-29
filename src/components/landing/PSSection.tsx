import { landingContent } from "@/data/landingContent";

export const PSSection = () => {
  const { items } = landingContent.ps;

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((ps, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-lg ${ps.highlight
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-card border border-border"
                }`}
            >
              <span className="font-bold text-primary">{ps.label}</span>{" "}
              <span className={ps.highlight ? "text-foreground" : "text-muted-foreground"}>
                {ps.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
