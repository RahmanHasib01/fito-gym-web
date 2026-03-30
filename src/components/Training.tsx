"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Training() {
  return (
    <section id="training" className="py-24 bg-fito-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="flex items-center gap-1 mb-2">
          <ChevronRight className="text-white w-8 h-8 -mr-5" strokeWidth={5} />
          <ChevronRight className="text-fito-neon w-8 h-8" strokeWidth={5} />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-black uppercase tracking-tight text-white mb-16 max-w-lg">
          Personal Training
        </h2>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
          
          {/* Left Column: Offer Card (cols 1-3) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-[#1e1e1e] rounded-[1.5rem] p-8 flex flex-col justify-between h-56 shadow-2xl"
          >
            <div>
              <h3 className="font-oswald text-3xl font-bold text-white tracking-widest mb-3 uppercase">We Offer</h3>
              <p className="text-gray-400 font-inter text-sm mb-6 max-w-[150px]">
                Free trial sessions for new members
              </p>
            </div>
            <button className="self-start flex items-center justify-between gap-3 bg-white text-black pl-5 pr-1 py-1 rounded-full font-inter font-bold text-xs hover:scale-105 transition-transform group">
              Sign up 
              <span className="bg-fito-neon p-1.5 rounded-full text-black group-hover:bg-fito-obsidian group-hover:text-white transition-colors">
                <ArrowRight size={14} strokeWidth={3} />
              </span>
            </button>
          </motion.div>

          {/* Middle Column: Large Vertical Image (cols 4-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 h-[400px] md:h-[550px] rounded-[1.5rem] overflow-hidden relative shadow-2xl"
          >
            <img 
              src="https://images.pexels.com/photos/36120641/pexels-photo-36120641.png" 
              alt="Personal Trainer assisting client" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "/images/media__1774830395591.png" }}
            />
            {/* Fade overlay for depth like mockup */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>

          {/* Right Column: Top Image & Bottom Text (cols 8-12) */}
          <div className="md:col-span-5 flex flex-col gap-8 h-full justify-between">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="h-64 rounded-[1.5rem] overflow-hidden relative bg-[#e7ebce]"
            >
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Personal trainers pointing" 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
              {/* +10 Personal Trainers Badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-xl w-32 border border-gray-100">
                <p className="font-oswald text-3xl font-black text-black leading-none mb-1">+10</p>
                <p className="font-inter text-xs text-gray-800 font-semibold leading-tight">Personal <br/> trainers</p>
              </div>
              
              {/* Top right circular arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black">
                <ArrowUpRight size={18} strokeWidth={2} />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-gray-300 font-inter text-sm leading-relaxed max-w-sm">
                Our state-of-the-art facilities and expert trainers are here to help you achieve your fitness goals, no matter your starting point.
              </p>
              <button className="self-start flex items-center justify-between gap-3 bg-fito-neon text-fito-obsidian pl-5 pr-1 py-1 rounded-full font-inter font-bold text-xs hover:scale-105 transition-transform group box-glow">
                Explore more 
                <span className="bg-fito-obsidian p-1.5 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={14} strokeWidth={3} />
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
