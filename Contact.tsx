import { motion } from "motion/react";

export default function Contact({ isDark = false }: { isDark?: boolean }) {
  return (
    <section id="contact" className={`px-6 py-32 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h2 className={`text-3xl md:text-5xl font-bold tracking-tighter mb-0 md:mb-2 leading-none md:leading-tight ${isDark ? 'text-white' : 'text-black'}`}>Get in touch</h2>
      
      <div className="flex flex-col">
        <a 
          href="mailto:hello@exidiumstudios.co" 
          className={`text-2xl md:text-5xl font-bold tracking-tighter hover:opacity-30 transition-opacity break-all leading-none md:leading-tight ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}
        >
          hello@exidiumstudios.co
        </a>
      </div>
    </section>
  );
}
