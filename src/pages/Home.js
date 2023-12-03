import React from "react";
import FAQ from "../components/faq/FAQ";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
