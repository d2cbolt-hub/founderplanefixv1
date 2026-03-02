import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Palette, Zap, Shield, Settings } from "lucide-react";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

interface Engine {
  name: string;
  label: string;
  icon: typeof Compass;
  color: string;
  orbit: number;
  angle: number;
}

const engines: Engine[] = [
  { name: "BoltGuider", label: "Validation Engine", icon: Compass, color: "#2C5AF6", orbit: 1, angle: 0 },
  { name: "BrandToFly", label: "Identity Engine", icon: Palette, color: "#661AF5", orbit: 2, angle: 0 },
  { name: "D2CBolt", label: "D2C Commerce Engine", icon: Zap, color: "#52A65B", orbit: 2, angle: 120 },
  { name: "B2BBolt", label: "B2B Revenue Engine", icon: Zap, color: "#E5572E", orbit: 2, angle: 240 },
  { name: "ScaleRunway", label: "Operations Engine", icon: Settings, color: "#EAA140", orbit: 3, angle: 45 },
  { name: "BoltRunway", label: "Strategic Scale Engine", icon: Shield, color: "#C1283B", orbit: 3, angle: 225 },
];

// Calculate position on orbit ring
const getOrbitalPosition = (angle: number, orbitRadius: number) => {
  const radian = (angle * Math.PI) / 180;
  return {
    x: 50 + orbitRadius * Math.cos(radian - Math.PI / 2),
    y: 50 + orbitRadius * Math.sin(radian - Math.PI / 2),
  };
};

const EcosystemOrbitalSection = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-950 py-20 md:py-32">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
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

        {/* STRICT BOUNDING BOX - Fixed Container */}
        <div 
          className="relative mx-auto"
          style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '550px',
            aspectRatio: '1 / 1',
            margin: '80px auto',
          }}
        >
          <div className="absolute inset-0" style={{ padding: '5%' }}>
            {/* PERFECT CONCENTRIC RINGS - Pushed Outward */}
            
            {/* Ring 1 (Inner - 45%): BoltGuider - Clears center core */}
            <div
              className="absolute rounded-full pointer-events-none ring-container"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '45%',
                height: '45%',
                borderRadius: '50%',
                border: '1.5px solid rgba(99, 102, 241, 0.4)',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2), inset 0 0 15px rgba(99, 102, 241, 0.1)',
                animation: 'spin 45s linear infinite',
                transformOrigin: 'center center',
              }}
            />
            
            {/* Ring 2 (Middle - 70%): BrandToFly, D2CBolt, B2BBolt */}
            <div
              className="absolute rounded-full pointer-events-none ring-container"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '70%',
                height: '70%',
                borderRadius: '50%',
                border: '1.5px solid rgba(99, 102, 241, 0.35)',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.15), inset 0 0 20px rgba(99, 102, 241, 0.08)',
                animation: 'spin 55s linear infinite',
                transformOrigin: 'center center',
              }}
            />
            
            {/* Ring 3 (Outer - 95%): ScaleRunway, BoltRunway */}
            <div
              className="absolute rounded-full pointer-events-none ring-container"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '95%',
                height: '95%',
                borderRadius: '50%',
                border: '1.5px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.12), inset 0 0 25px rgba(99, 102, 241, 0.06)',
                animation: 'spin 65s linear infinite',
                transformOrigin: 'center center',
              }}
            />

            {/* Center Hub - FounderPlane Logo with 2 Pulse Rings */}
            <div 
              className="absolute z-30"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 18 }}
              >
                {/* Pulse Ring 1 */}
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
                    border: '1.5px solid rgba(99, 102, 241, 0.3)',
                    boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Pulse Ring 2 */}
                <motion.div
                  className="absolute -inset-6 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: '0 0 35px rgba(99, 102, 241, 0.3)',
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
                
                {/* Logo Container */}
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
                    border: '2px solid rgba(99, 102, 241, 0.5)',
                    boxShadow: '0 0 50px rgba(99, 102, 241, 0.4), 0 0 100px rgba(99, 102, 241, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <img src={founderplaneLogo} alt="FounderPlane" className="w-11 h-11 md:w-14 md:h-14 relative z-10" />
                </div>
              </motion.div>
            </div>

            {/* Engine Nodes - Locked to Rings with Counter-Rotation */}
            {engines.map((engine, index) => {
              const Icon = engine.icon;
              // Updated orbital radii to match new ring sizes
              const orbitRadius = engine.orbit === 1 ? 22.5 : engine.orbit === 2 ? 35 : 47.5;
              const pos = getOrbitalPosition(engine.angle, orbitRadius);
              const isHovered = hoveredNode === index;
              
              // Match parent ring animation speed for counter-rotation
              const rotationSpeed = engine.orbit === 1 ? '45s' : engine.orbit === 2 ? '55s' : '65s';

              return (
                <motion.div
                  key={`node-${index}`}
                  className="absolute z-20 node-counter-rotate"
                  style={{
                    position: 'absolute',
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `reverse-spin ${rotationSpeed} linear infinite`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    hasAnimated 
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    scale: { duration: 0.6, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 },
                    opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
                  }}
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="flex flex-col items-center cursor-pointer">
                    {/* Node Circle */}
                    <motion.div
                      className="rounded-full flex items-center justify-center relative"
                      animate={isHovered ? { scale: 1.25 } : { scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: engine.color,
                        boxShadow: isHovered
                          ? `0 0 45px ${engine.color}95, 0 0 90px ${engine.color}60, 0 12px 45px -4px ${engine.color}75`
                          : `0 0 30px ${engine.color}60, 0 8px 25px -4px ${engine.color}50`,
                        border: isHovered ? `3px solid rgba(255, 255, 255, 0.5)` : '2px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {/* Dual Pulsating Waves on Hover */}
                      {isHovered && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: engine.color }}
                            animate={{
                              scale: [1, 1.6, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: engine.color }}
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.4,
                            }}
                          />
                        </>
                      )}
                      <Icon 
                        className="text-white relative z-10" 
                        style={{ 
                          width: '28px', 
                          height: '28px',
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                        }} 
                        strokeWidth={1.8} 
                      />
                    </motion.div>

                    {/* Node Label */}
                    <motion.div
                      className="mt-3 text-center"
                      animate={isHovered ? { y: -2 } : { y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span 
                        className="text-xs font-bold tracking-wide block whitespace-nowrap"
                        style={{
                          color: isHovered ? engine.color : 'rgba(226, 232, 240, 0.8)',
                          textShadow: isHovered ? `0 0 12px ${engine.color}50` : 'none',
                        }}
                      >
                        {engine.name}
                      </span>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[10px] text-slate-400 font-medium block mt-1"
                        >
                          {engine.label}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Anchor Box */}
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
    </section>
  );
};

export default EcosystemOrbitalSection;
