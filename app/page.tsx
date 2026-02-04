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
      <section
        id="home"
        className="w-full lg:h-[560px] md:h-[400px] h-96 flex justify-center"
      >
        <Hero />
      </section>

      {/* ABOUT SECTION */}
     
        <AboutPage />
     
         <OurFocus/>

         <Value/>
    

   
    </>
  );
}
