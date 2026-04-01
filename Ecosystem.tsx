import { motion } from "motion/react";

const items = [
  {
    title: "Research Center",
    description: "A dedicated space to explore new territories within art, design, and technology.",
    image: "https://picsum.photos/seed/research/800/800"
  },
  {
    title: "Café Tondo",
    description: "An all day café-bar in Los Angeles, California inspired by the rhythm of Latin America.",
    image: "https://picsum.photos/seed/cafetondo/800/800"
  },
  {
    title: "Findings",
    description: "A newsletter on the influences and trends that are quietly shaping our culture.",
    image: "https://picsum.photos/seed/findings/800/800"
  },
  {
    title: "Exidium Magazine",
    description: "Coming Soon",
    image: "https://picsum.photos/seed/exidiummagazine/800/800"
  }
];

export default function Ecosystem({ isDark = false, hideTitle = false }: { isDark?: boolean, hideTitle?: boolean }) {
  return (
    <section className={`px-6 py-12 md:py-32 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {!hideTitle && <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 md:mb-16">Our Ecosystem</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-square overflow-hidden mb-4 ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-base font-bold leading-tight">{item.title}</h3>
            <p className={`text-sm font-medium leading-tight mt-1 ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
