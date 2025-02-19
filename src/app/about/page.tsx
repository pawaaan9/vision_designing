import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import About from "@/components/pages/about";
import { ContactUsHome } from "@/components/pages/contactushome";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <ContactUsHome/>
      <Footer/>
    </>
  );
}