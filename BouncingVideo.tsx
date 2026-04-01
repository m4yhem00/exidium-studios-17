import { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";

export default function DraggableVideo() {
  const [boxSize, setBoxSize] = useState({ w: 160, h: 90 });
  const controls = useAnimationControls();
  const padding = 24;
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateSize = () => {
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      let newW, newH;
      
      if (windowW < 768) {
        newW = 107;
        newH = 60;
      } else {
        newW = 160;
        newH = 90;
      }
      
      setBoxSize({ w: newW, h: newH });

      // Calculate new snapped position
      const targetX = currentPos.current.x < windowW / 2 ? padding : windowW - newW - padding;
      const targetY = currentPos.current.y < windowH / 2 ? padding : windowH - newH - padding;

      currentPos.current = { x: targetX, y: targetY };
      controls.start({
        x: targetX,
        y: targetY,
        transition: { duration: 0.3 }
      });
    };

    // Initial position
    const initialX = window.innerWidth - (window.innerWidth < 768 ? 107 : 160) - padding;
    const initialY = window.innerHeight - (window.innerWidth < 768 ? 60 : 90) - padding;
    currentPos.current = { x: initialX, y: initialY };
    controls.set({ x: initialX, y: initialY });

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [controls]);

  const handleDragEnd = (event: any, info: any) => {
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    
    // Use viewport-relative coordinates by subtracting scroll
    const viewportX = info.point.x - window.scrollX;
    const viewportY = info.point.y - window.scrollY;
    
    const targetX = viewportX < windowW / 2 ? padding : windowW - boxSize.w - padding;
    const targetY = viewportY < windowH / 2 ? padding : windowH - boxSize.h - padding;

    currentPos.current = { x: targetX, y: targetY };
    controls.start({
      x: targetX,
      y: targetY,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    });
  };

  const handleDrag = (event: any, info: any) => {
    // Keep track of current position relative to viewport during drag
    currentPos.current = { 
      x: info.point.x - window.scrollX, 
      y: info.point.y - window.scrollY 
    };
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div 
        drag
        dragMomentum={false}
        dragConstraints={{
          left: padding,
          right: window.innerWidth - boxSize.w - padding,
          top: padding,
          bottom: window.innerHeight - boxSize.h - padding
        }}
        animate={controls}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="absolute pointer-events-auto cursor-move overflow-hidden shadow-2xl bg-black will-change-transform touch-none"
        style={{ 
          width: boxSize.w, 
          height: boxSize.h,
        }}
      >
        {/* Overlay to prevent clicking/pausing the video */}
        <div className="absolute inset-0 z-10" />
        
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/nature22.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
