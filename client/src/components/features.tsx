import { motion } from "framer-motion";
import { Leaf, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "100% Organic",
    description: "Grown without synthetic pesticides or fertilizers. Pure nature in every bite."
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Next-Day Delivery",
    description: "Harvested today, on your table tomorrow. We ensure maximum freshness."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Quality Guarantee",
    description: "If you're not fully satisfied with the quality, we'll replace it no questions asked."
  }
];

export function Features() {
  return (
    <section id="about" className="py-24 bg-accent/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Why choose Fresho?
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe that good food shouldn't be complicated. Our mission is simple: connect you directly with the best local farms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {/* Clone icon to inherit group-hover color changes easily if we wanted, but we styled it via text-primary initially. */}
                <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
