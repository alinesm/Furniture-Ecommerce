import React from "react";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home({ products, setProducts }) {
  return (
    <main>
      <Hero />
      <FeaturedProducts products={products} setProducts={setProducts} />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
