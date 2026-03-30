export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-fito-neon/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-gray-500">
        <div className="mb-8 font-oswald text-3xl font-bold tracking-widest text-white">
          FITO<span className="text-fito-neon text-glow">GYM</span>
        </div>
        <p className="mb-4">Khilgaon, Dhaka</p>
        <p className="font-oswald tracking-widest uppercase mb-8">Train harder. Feel better. Look amazing ✨</p>
        <p>© {new Date().getFullYear()} FITO Gym. All rights reserved.</p>
      </div>
    </footer>
  );
}
