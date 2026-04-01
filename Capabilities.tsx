import { motion } from "motion/react";

const capabilities = [
  "Creative Direction",
  "Strategy",
  "Visual Identity",
  "Graphic Design",
  "Motion Design",
  "Digital Design",
  "Campaign",
  "Narrative",
  "Verbal Identity"
];

export default function Capabilities() {
  return (
    <section className="px-6 py-12 md:py-32">
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-baseline mb-8 md:mb-12 pt-4 md:pt-8 gap-y-8">
        <div className="col-span-1">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.9] md:mr-12">
            A Holistic<br />Approach
          </h2>
        </div>
        
        <div className="col-span-1 flex flex-col gap-12 md:flex-row md:items-baseline md:ml-auto md:gap-24 items-end md:items-baseline text-right md:text-left">
          <div className="flex flex-col text-base text-gray-400 leading-tight">
            <span className="text-sm font-bold text-black mb-2 hidden md:block">Capabilities</span>
            {capabilities.map((item, index) => (
              <motion.span 
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
