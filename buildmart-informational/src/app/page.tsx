<<<<<<< HEAD
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
=======
import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import Head from 'next/head';


export default function Home() {
  return (
      <main>
        <Navbar/>
        <Landingpage/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </main>
     
  );
}
>>>>>>> 800d3254abe93cdf29813054aa206ce5427baa5a
