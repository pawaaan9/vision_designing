import Navbar from "../components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "../components/pages/hero";
import Stats from "@/components/pages/happyclients";
import AboutUsHero from "@/components/pages/aboutushero";
import QuickOverview from "@/components/pages/quickoverview";
import { ContactUsHome } from "@/components/pages/contactushome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsHero/>
      <Stats />
      <QuickOverview/>
      {/* <Map/> */}
      <ContactUsHome/>
      <Footer/>
    </>
  );
}