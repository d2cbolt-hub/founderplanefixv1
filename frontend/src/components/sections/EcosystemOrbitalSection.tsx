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
  speed: number; // seconds per orbit
}

// Engine configuration - each moves at different speed for organic feel
const engines: Engine[] = [
  { name: "BoltGuider", label: "Validation Engine", icon: Compass, color: "#2C5AF6", orbit: 1, angle: 0, speed: 35 },
  { name: "BrandToFly", label: "Identity Engine", icon: Palette, color: "#661AF5", orbit: 2, angle: 0, speed: 42 },
  { name: "D2CBolt", label: "D2C Commerce Engine", icon: Zap, color: "#52A65B", orbit: 2, angle: 120, speed: 38 },
  { name: "B2BBolt", label: "B2B Revenue Engine", icon: Zap, color: "#E5572E", orbit: 2, angle: 240, speed: 47 },
  { name: "ScaleRunway", label: "Operations Engine", icon: Settings, color: "#EAA140", orbit: 3, angle: 45, speed: 52 },
  { name: "BoltRunway", label: "Strategic Scale Engine", icon: Shield, color: "#C1283B", orbit: 3, angle: 225, speed: 44 },
];

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
      {/* Premium dark background with subtle gradients */}
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

        {/* Dynamic Orbital Ecosystem */}
        <div 
          className="relative mx-auto"
          style={{ 
            maxWidth: '550px',
            width: '90vw',
            aspectRatio: '1/1',
            marginTop: '80px',
            marginBottom: '80px',
          }}
        >
          <div className="absolute inset-0" style={{ padding: '5%' }}>
            {/* Highly Visible Orbit Rings with Glow */}
            {[
              { size: '30%', opacity: 0.4, glow: '15px', duration: 60 },
              { size: '60%', opacity: 0.35, glow: '20px', duration: 80 },
              { size: '90%', opacity: 0.3, glow: '25px', duration: 100 },
            ].map((ring, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: ring.size,
                  height: ring.size,
                  transform: 'translate(-50%, -50%)',
                  border: `1.5px solid rgba(99, 102, 241, ${ring.opacity})`,
                  boxShadow: `0 0 ${ring.glow} rgba(99, 102, 241, 0.2), inset 0 0 ${ring.glow} rgba(99, 102, 241, 0.1)`,
                }}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  borderColor: [`rgba(99, 102, 241, ${ring.opacity})`, `rgba(139, 92, 246, ${ring.opacity})`, `rgba(99, 102, 241, ${ring.opacity})`],
                }}
                transition={{
                  rotate: { duration: ring.duration, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            ))}

            {/* Animated Background Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  background: 'rgba(99, 102, 241, 0.5)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 6px rgba(99, 102, 241, 0.8)',
                }}
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Center Hub with 2 Pulse Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 18 }}
              >
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

            {/* Moving Nodes */}
            {engines.map((engine, index) => {
              const Icon = engine.icon;
              const orbitRadius = engine.orbit === 1 ? 15 : engine.orbit === 2 ? 30 : 45;
              const isHovered = hoveredNode === index;

              return (
                <motion.div
                  key={`node-${index}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    hasAnimated 
                      ? {
                          x: `${orbitRadius * Math.cos((engine.angle - 90 + (hasAnimated ? 0 : 0)) * Math.PI / 180)}%`,
                          y: `${orbitRadius * Math.sin((engine.angle - 90 + (hasAnimated ? 0 : 0)) * Math.PI / 180)}%`,
                          scale: 1,
                          opacity: 1,
                        }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    scale: { duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" },
                    opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
                    x: { duration: engine.speed, repeat: Infinity, ease: "linear" },
                    y: { duration: engine.speed, repeat: Infinity, ease: "linear" },
                  }}
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="flex flex-col items-center cursor-pointer" style={{ transform: 'translate(-50%, -50%)' }}>
                    <motion.div
                      className="rounded-full flex items-center justify-center relative"
                      animate={isHovered ? { scale: 1.25 } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
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
                              delay: 0.4,
                            }}
                          />
                        </>
                      )}
                      <Icon className="text-white relative z-10" style={{ width: '28px', height: '28px', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }} strokeWidth={1.8} />
                    </motion.div>
                    <motion.div className="mt-3 text-center" animate={isHovered ? { y: -2 } : { y: 0 }}>
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
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
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
