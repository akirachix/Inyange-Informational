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
