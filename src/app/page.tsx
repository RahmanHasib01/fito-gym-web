import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Training from "@/components/Training";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-fito-obsidian text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Amenities />
      <Training />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
