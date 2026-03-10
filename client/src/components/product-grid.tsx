import { motion } from "framer-motion";
import { useProducts } from "@/hooks/use-products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Image as ImageIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export function ProductGrid() {
  const { data: products, isLoading, isError } = useProducts();
  const { toast } = useToast();

  const handleAddToCart = (name: string) => {
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your basket.`,
    });
  };

  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Fresh Picks</h2>
          <p className="text-lg text-muted-foreground">Discover our seasonal harvest, available for delivery today.</p>
        </div>
        <Button variant="outline" className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
          View All Products
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="rounded-3xl overflow-hidden border-border/50">
              <Skeleton className="h-56 w-full rounded-none" />
              <CardContent className="p-6 space-y-3">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-6 w-1/4 pt-2" />
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Skeleton className="h-12 w-full rounded-xl" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : isError || !products?.length ? (
        <div className="bg-accent/20 rounded-3xl p-12 text-center border border-border border-dashed">
          <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Check back soon!</h3>
          <p className="text-muted-foreground">We are currently harvesting more fresh products. They will appear here shortly.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card className="h-full flex flex-col rounded-3xl overflow-hidden border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group bg-card">
                <div className="relative overflow-hidden h-56 bg-accent/20">
                  {/* Ensure Unsplash fallback if imageUrl is invalid */}
                  <img
                    src={product.imageUrl || "https://images.unsplash.com/photo-1596130704467-f41e57a4eb39?w=500&auto=format&fit=crop"}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1596130704467-f41e57a4eb39?w=500&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm shadow-sm border-none font-semibold">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold font-serif mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">/ unit</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-md shadow-secondary/20 hover:-translate-y-0.5 transition-all"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
