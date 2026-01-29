import { Star, MapPin } from "lucide-react";

import { landingContent } from "@/data/landingContent";

export const TestimonialsSection = () => {
  const { title, list } = landingContent.testimonials;

  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="section-container">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          {title.prefix}{" "}
          <span className="text-gradient-fire">{title.highlight}</span>
        </h2>
        <p className="text-center text-muted-foreground text-xl mb-16">
          {title.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {list.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-lg">{testimonial.name}, {testimonial.age} años</div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {testimonial.city}
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                {testimonial.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
