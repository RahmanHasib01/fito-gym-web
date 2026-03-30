"use client";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glassmorphism py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Fito Gym Logo" className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-oswald tracking-wide font-medium">
          <a href="#amenities" className="hover:text-fito-neon transition-colors">AMENITIES</a>
          <a href="#packages" className="hover:text-fito-neon transition-colors">PACKAGES</a>
          <a href="#contact" className="hover:text-fito-neon transition-colors">INQUIRIES</a>
        </div>
        
        <div className="hidden md:block">
          <a href="#packages" className="px-6 py-2 bg-fito-neon text-fito-obsidian font-oswald font-bold tracking-widest hover:bg-white transition-colors duration-300 box-glow">JOIN THE ARMY</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-fito-neon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glassmorphism flex flex-col p-6 gap-6 text-center font-oswald text-xl border-t border-fito-neon/20 shadow-xl">
          <a href="#amenities" onClick={() => setIsOpen(false)} className="hover:text-fito-neon transition-colors">AMENITIES</a>
          <a href="#packages" onClick={() => setIsOpen(false)} className="hover:text-fito-neon transition-colors">PACKAGES</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-fito-neon transition-colors">INQUIRIES</a>
          <a href="#packages" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-fito-neon text-fito-obsidian font-bold tracking-widest box-glow mt-4">JOIN THE ARMY</a>
        </div>
      )}
    </nav>
  );
}
