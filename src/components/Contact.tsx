"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Zap } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-fito-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-oswald text-fito-neon tracking-widest font-bold text-sm uppercase mb-4">Get In Touch</h3>
            <h2 className="font-oswald text-5xl md:text-7xl font-black uppercase text-white leading-[1.1] italic">
              Locate The<br />
              <span className="text-fito-neon text-glow">Energy Source.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Map & Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="relative h-64 md:h-80 w-full bg-[#0a0a0a] overflow-hidden group border-l-[3px] border-fito-neon">
                {/* Realistic Map Background via Google Maps Embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4360.343348989566!2d90.41465677592004!3d23.752835088681827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87cfcaef155%3A0xdd06a8c92899816e!2sFITO%20Fitness%20%26%20Gym!5e1!3m2!1sen!2sbd!4v1774833367148!5m2!1sen!2sbd"
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full" 
                ></iframe>
              </div>
              
              <div className="flex items-center gap-4 pl-4 border-l-[3px] border-fito-neon">
                <div className="w-12 h-12 bg-fito-neon flex justify-center items-center text-fito-obsidian box-glow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-2xl font-bold text-white tracking-widest uppercase mb-1">
                    Khilgaon HQ
                  </h3>
                  <p className="font-inter text-gray-400 text-sm tracking-widest uppercase">
                    3rd Floor, Chowdhury Para
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#050505] p-8 border border-white/5"
              >
                <Phone className="w-5 h-5 text-fito-neon mb-4" />
                <p className="font-oswald text-gray-500 tracking-widest text-[10px] font-bold uppercase mb-2">Phone Line</p>
                <p className="font-oswald text-3xl font-bold text-fito-neon mb-4">01720-505050</p>
                <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Direct Line / Membership Inquiries</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#050505] p-8 border border-white/5"
              >
                <Clock className="w-5 h-5 text-fito-neon mb-4" />
                <p className="font-oswald text-gray-500 tracking-widest text-[10px] font-bold uppercase mb-4">Operating Hours</p>
                <div className="space-y-2 text-xs font-oswald tracking-wide">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white uppercase">Sat-Thu</span>
                    <span className="text-fito-neon font-bold">7:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white uppercase">Fri</span>
                    <span className="text-fito-neon font-bold">4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8 flex flex-col justify-center"
          >
            <h3 className="font-oswald text-4xl md:text-5xl font-black uppercase text-white italic mb-10 tracking-tight">
              Transmit A <span className="text-fito-neon text-glow">Message.</span>
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-oswald text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mb-2">Visitor_Name</label>
                <input 
                  type="text" 
                  placeholder="ENTER FULL NAME" 
                  className="w-full bg-[#050505] border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-fito-neon focus:bg-[#0a0a0a] transition-colors placeholder:text-gray-700 font-oswald tracking-wide text-sm"
                />
              </div>

              <div>
                <label className="block font-oswald text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mb-2">Email_Address</label>
                <input 
                  type="email" 
                  placeholder="EMAIL@DOMAIN.COM" 
                  className="w-full bg-[#050505] border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-fito-neon focus:bg-[#0a0a0a] transition-colors placeholder:text-gray-700 font-oswald tracking-wide text-sm"
                />
              </div>

              <div>
                <label className="block font-oswald text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mb-2">Message_Intent</label>
                <textarea 
                  rows={3}
                  placeholder="HOW CAN WE ASSIST YOUR PROGRESS?" 
                  className="w-full bg-[#050505] border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-fito-neon focus:bg-[#0a0a0a] transition-colors placeholder:text-gray-700 font-oswald tracking-wide text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 mt-2 bg-fito-neon text-fito-obsidian font-oswald font-black uppercase tracking-widest text-lg hover:bg-white box-glow transition-all duration-300 flex items-center justify-center gap-2">
                Execute Send <Zap fill="currentColor" size={20} />
              </button>

              <div className="flex items-center gap-3 mt-8 border-l-2 border-fito-neon pl-4 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-fito-neon animate-pulse"></div>
                <p className="font-oswald text-[10px] font-bold tracking-widest italic text-gray-400 uppercase">System Active. Response Window: 2-4 Hours.</p>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
