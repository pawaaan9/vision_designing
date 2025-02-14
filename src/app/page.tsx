import Navbar from "../components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "../components/pages/hero";
import Services from "../components/pages/services";
import { Contact } from "@/components/pages/contact";

import Stats from "@/components/pages/happyclients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Contact/>
      <Stats />
      <Footer/>
    </>
  );
}