import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WorkSection from "./WorkSection";
import Capabilities from "./Capabilities";
import Ecosystem from "./Ecosystem";
import Contact from "./Contact";
import Footer from "./Footer";
import Studio from "./Studio";
import Work from "./Work";
import DraggableVideo from "./BouncingVideo";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "work" | "studio">("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={`min-h-screen selection:bg-black selection:text-white ${currentPage === 'studio' ? 'bg-black text-white' : ''}`}>
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      {currentPage !== "home" && <DraggableVideo />}
      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <WorkSection />
            <Capabilities />
            <Ecosystem />
            <Contact />
          </>
        ) : currentPage === "work" ? (
          <Work />
        ) : (
          <Studio onPageChange={setCurrentPage} />
        )}
      </main>
      <Footer onPageChange={setCurrentPage} isDark={currentPage === 'studio'} />
    </div>
  );
}
