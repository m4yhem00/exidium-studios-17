import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import Capabilities from "./components/Capabilities";
import Ecosystem from "./components/Ecosystem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Studio from "./pages/Studio";
import Work from "./pages/Work";
import DraggableVideo from "./components/BouncingVideo";

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
