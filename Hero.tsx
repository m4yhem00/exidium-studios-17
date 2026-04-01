import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="pt-32 pb-10 px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        <div className="flex items-center gap-4 w-full">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full aspect-[4/5] md:aspect-video object-cover rounded-sm bg-gray-100"
          >
            <source src="/video.mp4?v=2" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="mt-12 hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-medium">
          <div className="flex flex-col gap-1">
            <span className="opacity-40 tracking-widest text-[10px]">Location</span>
            <span>London, UK</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-40 tracking-widest text-[10px]">Focus</span>
            <span>Digital experiences & visual identity</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-40 tracking-widest text-[10px]">Year</span>
            <span>©2026</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] w-full"
      >
        Exidium Studios is a design studio focused on new ideas
        and defining experiences. We collaborate with ambitious
        brands and founders to create work that
        pushes visual and strategic boundaries.
      </motion.div>
    </section>
  );
}
