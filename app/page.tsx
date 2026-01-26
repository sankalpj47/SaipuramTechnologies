import Hero from "@/components/Hero/Hero";
import WhatWeDo from "@/components/HomeMain/WhatWeDo";
import Services from "@/components/Services/services";

export default function Home() {
  return (
    <>
   {/* hero */}
    <section
  id="home"
  className="w-full lg:h-[560px] md:h-[400px] h-96 flex justify-center"
>
  <Hero />
</section>


   {/* services */}
      <section id="services">
        <WhatWeDo />
        <Services/>      
      </section>

     
      <section id="contact" className="min-h-screen">
        
      </section>

   
      <section id="blog" className="min-h-screen">
        
      </section>

      
      <section id="news" className="min-h-screen">
      
      </section>
    </>
  );
}
