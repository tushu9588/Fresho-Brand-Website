import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProductGrid } from "@/components/product-grid";
import { ContactSection } from "@/components/contact-form";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductGrid />
      <ContactSection />
    </Layout>
  );
}
