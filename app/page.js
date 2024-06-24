import Image from "next/image";
import Footer from "./footer.js";
import Navbar from "./navbar.js";
import Features from "./features.js";
import Gallery from "./gallery.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Features />
      <Gallery />
      <Footer />
    </>
  );
}
