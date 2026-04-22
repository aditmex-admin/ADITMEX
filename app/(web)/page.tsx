import Hero from "@/components/web/hero";
import About from "@/components/web/about";
import Categories from "@/components/web/categories";
import Products from "@/components/web/products";
import Contact from "@/components/web/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Categories />
      <Products />
      <Contact />
    </main>
  );
}
