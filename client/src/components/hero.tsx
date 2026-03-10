import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32 flex items-center justify-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20 w-fit"
          >
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm font-semibold text-secondary">100% Organic & Local</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground"
          >
            Fresh food,<br />
            <span className="text-primary italic">delivered</span> to<br />
            your door.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Experience the finest organic produce, hand-picked from local farmers and delivered to you within 24 hours of harvest.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1">
              Shop the Harvest
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              Meet Our Farmers
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full max-w-2xl mx-auto z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
          {/* landing page hero basket of fresh vegetables */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
            alt="Basket of fresh organic vegetables"
            className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-black/10 border-4 border-white/50"
          />
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🌱</div>
            <div>
              <p className="font-bold text-foreground">Harvested Today</p>
              <p className="text-sm text-muted-foreground">Farm to table</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
