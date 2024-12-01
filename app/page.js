import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import Hero from "../components/ui/Hero";
import Header from "../components/ui/Header";
import Services from "../components/ui/Services";
import Contact from "../components/ui/Contact";
import Testimonials from "../components/ui/Testimonials";
import CaseStudies from "../components/ui/CaseStudies";
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
      {/* <Link>
<Button>Go To DashBoard</Button>
</Link> */}

      {/* 
      <CaseStudies />
      
      
      <Footer /> */}
    </div>
       
    </div>
  );
}
