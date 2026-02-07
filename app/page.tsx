import AboutPage from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import WhatWeDo from "@/components/HomeMain/WhatWeDo";
import Services from "@/components/Services/services";
import OurFocus from "@/components/Ourfocus/Focus";
import Value from "@/components/Value/Value";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full">
        <AboutPage />
      </section>

      <section className="w-full">
        <OurFocus />
      </section>

      <section className="w-full">
        <Value />
      </section>
    </>
  );
}
