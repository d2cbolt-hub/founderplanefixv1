import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Palette, Zap, Shield, Settings } from "lucide-react";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

interface Engine {
  name: string;
  label: string;
  icon: typeof Compass;
  color: string;
  orbit: number; // 1 = inner, 2 = middle, 3 = outer
  angle: number; // degrees
}

// Engine configuration based on specs:
// Inner Track: BoltGuider
// Middle Track: BrandToFly, D2CBolt, B2BBolt (120° apart)
// Outer Track: ScaleRunway, BoltRunway
const engines: Engine[] = [
  { name: "BoltGuider", label: "Validation Engine", icon: Compass, color: "#2C5AF6", orbit: 1, angle: 0 },
  { name: "BrandToFly", label: "Identity Engine", icon: Palette, color: "#661AF5", orbit: 2, angle: 0 },
  { name: "D2CBolt", label: "D2C Commerce Engine", icon: Zap, color: "#52A65B", orbit: 2, angle: 120 },
  { name: "B2BBolt", label: "B2B Revenue Engine", icon: Zap, color: "#E5572E", orbit: 2, angle: 240 },
  { name: "ScaleRunway", label: "Operations Engine", icon: Settings, color: "#EAA140", orbit: 3, angle: 45 },
  { name: "BoltRunway", label: "Strategic Scale Engine", icon: Shield, color: "#C1283B", orbit: 3, angle: 225 },
];

const EcosystemOrbitalSection = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isRotationPaused, setIsRotationPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  // Calculate position on orbit ring
  const getOrbitalPosition = (angle: number, orbitRadius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: 50 + orbitRadius * Math.cos(radian - Math.PI / 2),
      y: 50 + orbitRadius * Math.sin(radian - Math.PI / 2),
    };
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-950 py-28 md:py-36">
      {/* Premium dark background with subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header - Keep original text */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4">
            The Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-5">
            One Central Hub. Six Specialized Engines.
          </h2>
          <p className="text-slate-400 max-w-[720px] mx-auto text-base md:text-lg leading-relaxed">
            FounderPlane operates as a unified architectural system. We are not a fragmented agency. We are your core operating system, allowing you to plug in the exact sub-brand engine you need, exactly when your stage requires it.
          </p>
        </motion.div>

        {/* Dynamic Orbital Ecosystem - Solar System UI */}
        <div className="flex justify-center mb-20">
          <div 
            className="relative w-full mx-auto"
            style={{ 
              maxWidth: '800px', 
              aspectRatio: '1/1',
            }}
          >
            {/* Container with preserved aspect ratio */}
            <div className="absolute inset-0">
              {/* EXACTLY 3 Orbital Rings - Clean and Subtle */}
              {/* Ring 1 (Inner - 30%): BoltGuider */}
              {/* Ring 2 (Middle - 50%): BrandToFly, D2CBolt, B2BBolt */}
              {/* Ring 3 (Outer - 68%): ScaleRunway, BoltRunway */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '60%',
                  height: '60%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px dashed rgba(255, 255, 255, 0.1)',
                }}
              />
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px dashed rgba(255, 255, 255, 0.1)',
                }}
              />
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '136%',
                  height: '136%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px dashed rgba(255, 255, 255, 0.1)',
                }}
              />

              {/* Rotating Track System */}
              <motion.div
                className="absolute inset-0"
                animate={isRotationPaused ? {} : { rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "center center" }}
              >

                {/* Connection Lines from Center to Nodes */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {engines.map((engine, index) => {
                    const orbitRadius = engine.orbit === 1 ? 33 : engine.orbit === 2 ? 50 : 67;
                    const pos = getOrbitalPosition(engine.angle, orbitRadius);
                    const isHovered = hoveredNode === index;

                    return (
                      <line
                        key={`line-${index}`}
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isHovered ? engine.color : 'rgba(148, 163, 184, 0.2)'}
                        strokeWidth={isHovered ? '0.5' : '0.2'}
                        style={{
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: isHovered ? 'url(#glow)' : 'none',
                          opacity: isHovered ? 1 : 0.6,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Connection Lines from Center to Nodes */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {engines.map((engine, index) => {
                    const orbitRadius = engine.orbit === 1 ? 30 : engine.orbit === 2 ? 50 : 68;
                    const pos = getOrbitalPosition(engine.angle, orbitRadius);
                    const isHovered = hoveredNode === index;

                    return (
                      <line
                        key={`line-${index}`}
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isHovered ? engine.color : 'rgba(148, 163, 184, 0.15)'}
                        strokeWidth={isHovered ? '0.4' : '0.15'}
                        style={{
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: isHovered ? 'url(#glow)' : 'none',
                          opacity: isHovered ? 1 : 0.5,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Engine Nodes - Counter-rotating to stay upright */}
                {engines.map((engine, index) => {
                  const Icon = engine.icon;
                  const orbitRadius = engine.orbit === 1 ? 30 : engine.orbit === 2 ? 50 : 68;
                  const pos = getOrbitalPosition(engine.angle, orbitRadius);
                  const isHovered = hoveredNode === index;

                  return (
                    <motion.div
                      key={`node-${index}`}
                      className="absolute"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                      }}
                      initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                      animate={
                        hasAnimated 
                          ? { 
                              scale: 1, 
                              opacity: 1,
                              x: '-50%',
                              y: '-50%',
                            } 
                          : { scale: 0, opacity: 0, x: '-50%', y: '-50%' }
                      }
                      transition={{
                        scale: { duration: 0.5, delay: 0.3 + index * 0.08, type: "spring", stiffness: 200 },
                        opacity: { duration: 0.5, delay: 0.3 + index * 0.08 },
                      }}
                      onMouseEnter={() => {
                        setHoveredNode(index);
                        setIsRotationPaused(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredNode(null);
                        setIsRotationPaused(false);
                      }}
                    >
                      {/* Counter-rotation wrapper - this cancels out parent rotation */}
                      <motion.div
                        animate={isRotationPaused ? {} : { rotate: -360 }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                      {/* Counter-rotation wrapper - this cancels out parent rotation */}
                      <motion.div
                        animate={isRotationPaused ? {} : { rotate: -360 }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="flex flex-col items-center cursor-pointer group">
                          {/* Node Circle */}
                          <motion.div
                            className="rounded-full flex items-center justify-center relative"
                            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{
                              width: engine.orbit === 1 ? '56px' : engine.orbit === 2 ? '52px' : '48px',
                              height: engine.orbit === 1 ? '56px' : engine.orbit === 2 ? '52px' : '48px',
                              backgroundColor: engine.color,
                              boxShadow: isHovered
                                ? `0 0 30px ${engine.color}80, 0 0 60px ${engine.color}40, 0 8px 32px -4px ${engine.color}60`
                                : `0 0 20px ${engine.color}40, 0 4px 16px -4px ${engine.color}30`,
                              border: isHovered ? `2px solid ${engine.color}` : '2px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {/* Pulsating glow effect on hover */}
                            {isHovered && (
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: engine.color }}
                                animate={{
                                  scale: [1, 1.4, 1],
                                  opacity: [0.3, 0, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            )}
                            <Icon 
                              className="text-white relative z-10" 
                              style={{ 
                                width: engine.orbit === 1 ? '26px' : '24px', 
                                height: engine.orbit === 1 ? '26px' : '24px' 
                              }} 
                              strokeWidth={1.5} 
                            />
                          </motion.div>

                          {/* Node Label - Always upright */}
                          <motion.div
                            className="mt-3 text-center"
                            animate={isHovered ? { y: -2 } : { y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span 
                              className="text-[11px] md:text-xs font-bold tracking-wide block transition-colors duration-300 whitespace-nowrap"
                              style={{
                                color: isHovered ? engine.color : 'rgba(226, 232, 240, 0.7)',
                                textShadow: isHovered ? `0 0 10px ${engine.color}40` : 'none',
                              }}
                            >
                              {engine.name}
                            </span>
                            {isHovered && (
                              <motion.span
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-[9px] md:text-[10px] text-slate-400 font-medium block mt-1"
                              >
                                {engine.label}
                              </motion.span>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Center Hub - FounderPlane Logo with Pulsating Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                  className="relative"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 18 }}
                >
                  {/* Pulsating Glow Ring - CSS Keyframe Animation */}
                  <div className="absolute -inset-6 rounded-full pulsating-glow" />
                  
                  {/* Outer Ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl" />
                  
                  {/* Logo Container */}
                  <div 
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                      border: '2px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 0 40px rgba(99, 102, 241, 0.2), 0 0 80px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <img 
                      src={founderplaneLogo} 
                      alt="FounderPlane" 
                      className="w-12 h-12 md:w-16 md:h-16 relative z-10" 
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Anchor Box - Keep original content */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            className="backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                The Platform Advantage: Partner Benefits
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Capital is oxygen. By stepping into the FounderPlane ecosystem, you don't just scale your business—you protect your runway. Unlock exclusive access to premium tools, platforms, and partner advantages specifically designed to reduce early-stage burn.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Keyframe Animation for Pulsating Glow */}
      <style>{`
        @keyframes pulsate-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.2), 0 0 60px rgba(99, 102, 241, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.4), 0 0 90px rgba(99, 102, 241, 0.2);
          }
        }
        
        .pulsating-glow {
          animation: pulsate-glow 3s ease-in-out infinite;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        }

        /* Ensure no stacking on mobile - responsive scaling */
        @media (max-width: 768px) {
          /* All positioning remains absolute and percentage-based */
          /* The container scales down proportionally */
        }
      `}</style>
    </section>
  );
};

export default EcosystemOrbitalSection;
