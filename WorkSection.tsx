import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Fender",
    description: "Amplifying expression for every player, at every stage.",
    image: "https://picsum.photos/seed/fender/1200/1400",
    width: "md:col-span-7",
    tags: ["Creative direction", "Strategy", "Campaign"]
  },
  {
    id: 2,
    title: "Seed",
    description: "Awakening a new world of abundant life.",
    image: "https://picsum.photos/seed/seed/800/1000",
    width: "md:col-span-5",
    tags: ["Strategy", "Visual identity", "Health"]
  },
  {
    id: 3,
    title: "Nike After Dark",
    description: "Six cities, 10,000+ runners, one iconic moment.",
    image: "https://picsum.photos/seed/nike/1600/900",
    width: "md:col-span-12",
    tags: ["Graphic design", "Motion design", "Sport"]
  },
  {
    id: 4,
    title: "The North Face",
    description: "Inspiring the next generation of explorers to get outside.",
    image: "https://picsum.photos/seed/northface/800/1000",
    width: "md:col-span-4",
    tags: ["Narrative", "Strategy", "Sustainability"]
  },
  {
    id: 5,
    title: "Brand.ai",
    description: "Transforming brands through a living, breathing operating system.",
    image: "https://picsum.photos/seed/brandai/1200/1000",
    width: "md:col-span-8",
    tags: ["Technology", "Digital design", "Strategy"]
  },
  {
    id: 6,
    title: "Exidium Labs",
    description: "Exploring the intersection of artificial intelligence and human-centric design.",
    image: "https://picsum.photos/seed/labs/1200/1000",
    width: "md:col-span-8 md:col-start-3",
    tags: ["Research", "Innovation", "AI"]
  }
];

export default function WorkSection({ 
  isDark = false, 
  title = "Selected Work",
  categories = [
    {
      title: "Industry",
      items: ["Art", "Architecture", "Technology", "Health", "Sport", "Fashion", "Beauty", "Sustainability"]
    }
  ],
  showContact = false,
  showProjects = true,
  showViewAll = true,
  layout = "default",
  largeText = false
}: { 
  isDark?: boolean,
  title?: string,
  categories?: { title: string, items: string[] }[],
  showContact?: boolean,
  showProjects?: boolean,
  showViewAll?: boolean,
  layout?: "default" | "three-column",
  largeText?: boolean
}) {
  return (
    <section id="work" className={`px-6 py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col md:flex-row items-start justify-between mb-12 pt-8 gap-y-8 md:gap-x-4">
        <div className="w-full md:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.9] md:mr-12 md:whitespace-nowrap">{title}</h2>
        </div>
        
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-start md:items-baseline md:ml-auto md:gap-24 w-full md:w-auto gap-y-8">
          {showContact ? (
            <div className={`flex flex-col ${largeText ? 'text-base font-medium' : 'text-sm'} leading-tight ${isDark ? 'text-zinc-500' : 'text-gray-400'} col-span-2 md:col-span-1`}>
              <span className={`text-sm font-bold mb-2 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>Contact</span>
              <a href="mailto:hello@exidiumstudios.co" className="hover:opacity-60 transition-opacity">hello@exidiumstudios.co</a>
            </div>
          ) : showViewAll ? (
            <a href="#" className={`text-sm transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-400 hover:text-black'} col-span-2 md:col-span-1`}>View all</a>
          ) : null}
          
          {categories.map((cat, idx) => (
            <div key={idx} className={`flex flex-col ${largeText ? 'text-lg font-medium' : 'text-base'} leading-tight ${isDark ? 'text-zinc-500' : 'text-gray-400'} ${idx === 0 ? 'text-left' : 'text-right md:text-left'}`}>
              <span className={`text-sm font-bold mb-2 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>{cat.title}</span>
              {cat.items.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {showProjects && (
        <div className={layout === "three-column" 
          ? "grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16" 
          : "grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16"
        }>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={layout === "three-column" ? "group cursor-pointer" : `${project.width} group cursor-pointer`}
            >
              <div className={`overflow-hidden aspect-[4/5] ${layout === "three-column" ? "md:aspect-[4/5]" : "md:aspect-auto"} ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className={`text-sm mt-1 max-w-sm ${isDark ? 'opacity-40' : 'opacity-60'}`}>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[10px] tracking-widest border px-2 py-1 rounded-full ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
