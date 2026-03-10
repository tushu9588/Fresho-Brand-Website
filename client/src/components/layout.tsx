import { Link } from "wouter";
import { Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grain" />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary/10 p-2.5 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Fresho
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Our Story
            </a>
            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Fresh Picks
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col overflow-hidden pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background/90 py-16 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-background/10 p-2 rounded-xl">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-bold text-background">Fresho</span>
            </div>
            <p className="text-background/60 max-w-sm">
              Bringing the freshest organic produce from local farms directly to your doorstep.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-background">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#products" className="text-background/60 hover:text-background transition-colors w-fit">Shop All</a>
              <a href="#about" className="text-background/60 hover:text-background transition-colors w-fit">Our Farmers</a>
              <a href="#contact" className="text-background/60 hover:text-background transition-colors w-fit">Support</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-background">Newsletter</h4>
            <p className="text-background/60 text-sm">Subscribe for fresh updates and seasonal offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/10 border border-background/20 rounded-xl px-4 py-2 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Fresho Market. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
