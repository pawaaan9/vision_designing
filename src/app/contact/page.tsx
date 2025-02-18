import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Contact } from "@/components/pages/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer/>
    </>
  );
}