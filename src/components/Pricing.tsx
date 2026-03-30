"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2, X, Phone } from "lucide-react";

const packages = [
  {
    name: "1 Year",
    subtitle: "Package",
    badge: "Ultimate Value",
    duration: "14 Months Total",
    price: "৳11,500",
    description: "The ultimate transformation journey. Get 2 bonus months completely free, along with VIP support and premium facilities.",
    features: [
      "Buy 1 Year, Get 2 Months Free",
      "All Premium Benefits",
      "Custom Diet & Workout Plan",
      "VIP Support & Free Parking",
    ],
  },
  {
    name: "6 Months",
    subtitle: "Package",
    duration: "7 Months Total",
    price: "৳6,000",
    description: "Start your true transformation. Includes 1 bonus free month, custom diet planning, and priority trainer access during peak hours.",
    features: [
      "Buy 6 Months, Get 1 Month Free",
      "Full Gym Access",
      "Custom Diet Planning",
      "Priority Trainer Access",
    ],
  },
  {
    name: "3 Months",
    subtitle: "Package",
    badge: "MOST POPULAR",
    duration: "4 Months Total",
    price: "৳3,500",
    description: "Perfect for kickstarting your fitness journey. Enjoy 1 free month, full gym access, locker service, and free filtered water.",
    features: [
      "Buy 3 Months, Get 1 Month Free",
      "Full Gym Access",
      "Locker Service",
      "Free Filtered Water",
    ],
  },
  {
    name: "1 Month",
    subtitle: "Package",
    duration: "1 Month Total",
    price: "৳2,000",
    description: "Short term commitment to test the waters. Includes full gym access, equipment usage, and locker facilities.",
    features: [
      "1 Month Standard Access",
      "All Equipment Usage",
      "Locker Facilities",
      "Standard Support",
    ],
  },
];

export default function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= packages.length) return;
    setSelectedIndex(index);

    if (scrollRef.current) {
      // Find all the package cards (excluding spacer blank divs)
      const container = scrollRef.current;
      const cards = Array.from(container.children).filter(child => child.getAttribute('data-card-index') !== null) as HTMLElement[];
      const targetCard = cards[index];

      if (targetCard) {
        const scrollAmount = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="packages" className="py-24 bg-[#1e1e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="flex items-center gap-1">
            <ChevronRight className="text-white w-10 h-10 -mr-6 opacity-50" strokeWidth={5} />
            <ChevronRight className="text-fito-neon w-10 h-10" strokeWidth={5} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-oswald font-black uppercase tracking-tight text-white md:text-right max-w-2xl leading-tight">
            Flexible Membership Plans To Suit Your Lifestyle
          </h2>
        </div>

      </div>

      {/* Full-width Carousel UI */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 lg:gap-8 pt-4 pb-8 snap-x snap-mandatory hide-scrollbar relative items-center w-full"
      >
        {/* Spacer for centering first item */}
        <div className="shrink-0 w-[5vw] md:w-[calc(50vw-190px)]" />

        {packages.map((pkg, idx) => {
          const isSelected = idx === selectedIndex;

          return (
            <div
              key={pkg.name}
              data-card-index={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-[320px] lg:w-[380px] h-[500px] shrink-0 rounded-[2rem] p-8 flex flex-col justify-between snap-center cursor-pointer transition-all duration-300 ${isSelected ? "bg-white text-black shadow-2xl border-none relative z-10" : "bg-[#2a2a2a] text-white hover:bg-[#333] border border-white/5 opacity-80 relative"}`}
            >
              {pkg.badge && (
                <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 bg-fito-neon text-fito-obsidian font-oswald font-bold tracking-widest uppercase px-4 md:px-5 py-1.5 rounded-xl shadow-xl border-[2px] border-[#1e1e1e] z-20 text-[10px] md:text-sm rotate-[-4deg]">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`font-oswald text-3xl font-bold leading-tight ${isSelected ? "text-black" : "text-white"}`}>
                      {pkg.name} <br /> {pkg.subtitle}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`font-oswald text-3xl font-black ${isSelected ? "text-black" : "text-fito-neon"}`}>{pkg.price}</p>
                    <p className={`font-inter text-xs font-semibold ${isSelected ? "text-gray-500" : "text-gray-400"}`}>{pkg.duration}</p>
                  </div>
                </div>

                <div className="h-8 w-full" />

                <ul className="space-y-4 mb-4">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className={`flex items-start gap-3 font-inter text-sm font-medium ${isSelected ? "text-black" : "text-gray-300"}`}>
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-black" : "text-fito-neon"}`} strokeWidth={2.5} />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 h-10 flex justify-end">
                {isSelected && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                    className="flex items-center justify-between gap-2 bg-fito-neon text-fito-obsidian pl-5 pr-1 py-1 rounded-full font-inter font-bold text-sm shadow-md transition-all group box-glow hover:scale-105"
                  >
                    Select Plan 
                    <span className="bg-fito-obsidian p-1.5 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowRight size={16} strokeWidth={3} />
                    </span>
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Spacer for centering last item */}
        <div className="shrink-0 w-[5vw] md:w-[calc(50vw-190px)]" />
      </div>

      {/* Navigation Arrows */}
      <div className="w-full flex justify-center gap-4 mt-8 relative z-20">
        <button
          onClick={() => scrollToIndex(selectedIndex - 1)}
          disabled={selectedIndex === 0}
          className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-colors ${selectedIndex === 0 ? "opacity-30 cursor-not-allowed text-gray-500" : "text-white hover:border-fito-neon hover:text-fito-neon"}`}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scrollToIndex(selectedIndex + 1)}
          disabled={selectedIndex === packages.length - 1}
          className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-colors ${selectedIndex === packages.length - 1 ? "opacity-30 cursor-not-allowed text-gray-500" : "text-white hover:border-fito-neon hover:text-fito-neon"}`}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-[#111] border border-fito-neon/30 w-full max-w-md rounded-2xl p-8 flex flex-col items-center shadow-[0_0_50px_rgba(57,255,20,0.15)] z-10 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-24 h-24 bg-fito-neon rounded-full border-4 border-[#111] outline outline-2 outline-fito-neon flex items-center justify-center mb-6 shadow-xl">
               <span className="font-oswald font-black text-3xl text-fito-obsidian italic tracking-tighter pr-1">FITO</span>
            </div>

            <h2 className="font-oswald text-4xl font-black text-white uppercase tracking-widest mb-2" style={{ textShadow: "2px 2px 0 #000" }}>Join Us</h2>
            <p className="font-inter text-xs text-white font-bold tracking-widest uppercase text-center mb-1">Our team will help you to get started</p>
            <h3 className="font-oswald text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8" style={{ textShadow: "2px 2px 0 #000" }}>Call Us Now</h3>

            <a 
              href="tel:01720505050" 
              className="bg-fito-neon text-fito-obsidian font-oswald text-2xl font-bold px-8 py-3 rounded-xl flex items-center gap-3 w-full justify-center hover:bg-white transition-colors box-glow"
            >
              <Phone fill="currentColor" size={24} />
              01720-505050
            </a>

            <p className="font-oswald text-gray-400 font-bold tracking-widest text-sm uppercase mt-6 mb-8">
              Between: 7:00 AM To 11:00 PM
            </p>

            <button onClick={() => { setIsModalOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="font-inter text-[11px] text-white font-bold tracking-wider uppercase hover:text-fito-neon transition-colors">
              Or, You can Sign Up by clicking here
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
