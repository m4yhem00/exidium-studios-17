import { motion } from "motion/react";
import WorkSection from "./WorkSection";
import Contact from "./Contact";
import Ecosystem from "./Ecosystem";

const approachItems = [
  {
    title: "Strategy",
    description: "The foundation: researching, questioning, and synthesizing insights into a clear, defensible position—grounding all creative decisions."
  },
  {
    title: "Direction",
    description: "A taste-led practice of developing a visual language that creates cohesion and clarity across every expression of the brand."
  },
  {
    title: "Design",
    description: "With strategic goals set and direction defined, Design gives us permission to iterate and push the potential of our parameters."
  },
  {
    title: "Technology",
    description: "Whether digital development or tools, Creative Technology is used both as a vehicle for creative exploration and implementation, making the theoretical real."
  }
];

export default function Studio({ onPageChange }: { onPageChange: (page: "home" | "work" | "studio") => void }) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Intro Section */}
      <section className="pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] w-full"
        >
          Exidium Studios is a design studio focused on new ideas
          and defining experiences. We collaborate with ambitious
          brands and founders to create work that
          pushes visual and strategic boundaries.
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-12">Approach</h2>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] w-full">
            For over six years, Exidium Studios has helped define industries through work with some of the most remarkable brands and institutions of our time. Our outcomes aren’t the product of any one individual, but of a shared belief: holistic, strategic creativity can solve challenges of any scale. We’ve learned that the most effective, beautiful, and culturally resonant work emerges when this philosophy is carried through the following stages:
            </div>
          </div>
        </div>

        {/* Approach Subcategories (Capabilities style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 mt-24 border-t border-white/10 pt-12">
          <div className="md:col-span-4">
            <span className="text-sm font-bold uppercase tracking-widest text-[10px] opacity-40">Stages</span>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {approachItems.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-xl font-bold tracking-tighter">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section (same dimensions as video section) */}
      <section className="px-6 py-10">
        <div className="w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-sm bg-zinc-900">
          <img 
            src="https://picsum.photos/seed/studio-approach/1920/1080" 
            alt="Studio Approach"
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="px-6 py-20 md:py-32">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Ecosystem</h2>
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] w-full mb-16">
          In addition to the Studio, our work has evolved into a broader ecosystem of projects, platforms, and spaces—each one extending our mission to influence culture. At the center of it all is the same core group of people, united by a shared point of view.
        </div>
      </section>

      {/* Selected Work Section (Now Information) */}
      <WorkSection 
        isDark={true} 
        title="Information"
        largeText={true}
        categories={[
          {
            title: "Capabilities",
            items: [
              "Creative Direction",
              "Strategy",
              "Visual Identity",
              "Graphic Design",
              "Motion Design",
              "Digital Design",
              "Campaign",
              "Narrative"
            ]
          }
        ]}
        showContact={true}
        showProjects={false}
      />

      {/* Get in touch section */}
      <Contact isDark={true} />
    </div>
  );
}
