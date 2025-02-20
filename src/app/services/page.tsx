import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Services from "@/components/pages/services";
import Industries from "@/components/pages/industries";
import IntroToServices from "@/components/pages/introtoservices";
import TechStack from "@/components/pages/teckstack";


export default function Home() {
  return (
    <>
      <Navbar />
      <IntroToServices/>
      <Services/>
      <TechStack/>
      <Industries/>
      <Footer/>
    </>
  );
}