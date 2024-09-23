import Features from "./components/Features";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";

export default function Home() {
  return(
    <main>
      <Navbar/>
      <Landingpage/>
      <Features/>
      <Services/>
      <Team/>
      <Footer/>

    </main>
  )
}

