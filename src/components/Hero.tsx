"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.jpg" alt="Fito Gym Interior" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-fito-obsidian via-fito-obsidian/60 to-transparent block" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter block leading-[1.1] mb-6"
        >
          The Heart <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fito-neon to-[#a8ff3e] text-glow">Of Strength</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 mb-10 font-light"
        >
          Presenting a state-of-the-art gym nearby you at Khilgaon!<br className="hidden md:block"/>
          Take care of you — this one will change your life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#packages" className="inline-block px-10 py-4 bg-fito-neon text-fito-obsidian font-oswald text-xl font-bold tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 box-glow">
            FEEL BETTER TODAY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
