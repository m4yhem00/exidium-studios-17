export default function Footer({ onPageChange, isDark = false }: { onPageChange?: (page: "home" | "work" | "studio") => void, isDark?: boolean }) {
  return (
    <footer className={`px-6 py-10 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="mb-10">
        <h2 
          className="text-[20vw] md:text-[23vw] font-bold select-none font-sans tracking-tighter leading-[0.8] flex flex-col items-start cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPageChange?.("home")}
        >
          <span>EXIdIUM</span>
          <span>STUDIOS</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <div className="text-xs font-bold font-sans">
          ©2026 Exidium Studios
        </div>
        
        <div className="flex flex-col text-xs font-bold leading-tight">
          <span className="cursor-pointer hover:opacity-60" onClick={() => onPageChange?.("studio")}>Studio</span>
          <span className="cursor-pointer hover:opacity-60" onClick={() => onPageChange?.("work")}>Work</span>
        </div>
        
        <div className="text-xs font-bold leading-tight md:text-right">
          <p>123 Design Lane</p>
          <p>London, E1 6AN</p>
        </div>
      </div>
    </footer>
  );
}
