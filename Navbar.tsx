import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Navbar({ onPageChange, currentPage }: { onPageChange: (page: "home" | "work" | "studio") => void, currentPage: "home" | "work" | "studio" }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Work", href: "#work", page: "work" },
    { name: "Studio", href: "#studio", page: "studio" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] px-6 py-8 flex items-center pointer-events-none">
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onPageChange("home"); }}
            className="bg-white text-black mix-blend-difference pl-0 pr-3 py-1 font-bold text-2xl tracking-tighter font-sans leading-none hover:opacity-80 transition-opacity"
          >
            EXIdIUM STUDIOS
          </a>
          <div className="hidden md:flex gap-2 text-base font-bold tracking-tight">
            <a 
              href="#work" 
              onClick={(e) => { e.preventDefault(); onPageChange("work"); }}
              className={`bg-white text-black mix-blend-difference px-3 py-2.5 hover:opacity-80 transition-opacity leading-none ${currentPage === 'work' ? 'opacity-100' : 'opacity-60'}`}
            >
              Work
            </a>
            <a 
              href="#studio" 
              onClick={(e) => { e.preventDefault(); onPageChange("studio"); }}
              className={`bg-white text-black mix-blend-difference px-3 py-2.5 hover:opacity-80 transition-opacity leading-none ${currentPage === 'studio' ? 'opacity-100' : 'opacity-60'}`}
            >
              Studio
            </a>
          </div>
        </div>

        <div className="ml-auto flex items-center pointer-events-auto">
          {/* Desktop Contact */}
          <a href="#contact" className="hidden md:block bg-white text-black mix-blend-difference px-3 py-2.5 text-base font-bold tracking-tight hover:opacity-80 transition-opacity leading-none">
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white text-black mix-blend-difference p-3 flex flex-col gap-1.5 relative"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-current"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-current"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-[#B4B8B0] px-6 pt-32 pb-12 flex flex-col text-black"
          >
            <div className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); onPageChange(link.page as any); setIsOpen(false); }}
                  className="text-5xl font-bold tracking-tighter flex items-center gap-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold tracking-tighter"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
