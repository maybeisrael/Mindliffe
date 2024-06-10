import Image from "next/image";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Journey from "./component/Journey";
import Howitworks from "./component/Howitworks";
import Faq from "./component/Faq";
import Footer from "./component/Footer";



export default function Home() {
  return (
    <main >
     <Hero />
      <Services />
      <Journey />
      <Howitworks />
      <Faq />
      <Footer />
    </main>
  );
}
