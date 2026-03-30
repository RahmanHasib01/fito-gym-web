"use client";
import { motion } from "framer-motion";
import { Activity, Dumbbell, ShieldCheck, Wifi, Droplets, MapPin, Users, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Iron Section", desc: "Heavy free weights & racks" },
  { icon: Activity, title: "Cardio Zone", desc: "Premium treadmills & ellipticals" },
  { icon: Users, title: "Ladies Support", desc: "Zumba, aerobics & weight training" },
  { icon: ShieldCheck, title: "Specialized Trainers", desc: "Expert male & female coaching" },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected while you work out" },
  { icon: Droplets, title: "Clean Environment", desc: "Filtered water & Full AC systems" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-fito-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase text-white mb-4">Elite <span className="text-fito-neon text-glow">Ecosystem</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Train harder with world-class equipment and dedicated facilities.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-[#121212] rounded-none hover:border-fito-neon/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <feature.icon className="w-12 h-12 text-fito-neon mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-oswald text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glassmorphism border border-fito-neon/20 p-8 flex flex-col md:flex-row justify-between items-center gap-6 rounded-lg"
        >
          <div>
            <h4 className="font-oswald text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="text-fito-neon" /> Khilgaon Branch
            </h4>
            <p className="text-gray-400 mt-2">Open 7 days a week | Sat-Thu 7AM-11PM | Fri 4PM-9PM</p>
          </div>
          <div className="flex gap-4 items-center">
            <CheckCircle2 className="text-fito-neon w-8 h-8" />
            <span className="font-oswald text-xl tracking-wider uppercase font-bold">Parking Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
