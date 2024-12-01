import { Button } from "@/components/ui/button";
import Hero from "@/app/dashboard/_components/Hero";
import Header from "@/app/dashboard/_components/MainHeader";
import Services from "@/app/dashboard/_components/Services";
import Contact from "@/app/dashboard/_components/Contact";
import Testimonial from "@/app/dashboard/_components/Testimonial";
import CaseStudies from "@/app/dashboard/_components/CaseStudies";
// import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>

      <div className="App">
      <Header />
      <Hero />
      <Services />
      <CaseStudies/>
      <Testimonials />
      <Contact />
    </div>
       
    </div>
  );
}
