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

// Engine configuration - each node moves along its orbit at different speeds
const engines: Engine[] = [
  { name: "BoltGuider", label: "Validation Engine", icon: Compass, color: "#2C5AF6", orbit: 1, angle: 0 },
  { name: "BrandToFly", label: "Identity Engine", icon: Palette, color: "#661AF5", orbit: 2, angle: 0 },
  { name: "D2CBolt", label: "D2C Commerce Engine", icon: Zap, color: "#52A65B", orbit: 2, angle: 120 },
  { name: "B2BBolt", label: "B2B Revenue Engine", icon: Zap, color: "#E5572E", orbit: 2, angle: 240 },
  { name: "ScaleRunway", label: "Operations Engine", icon: Settings, color: "#EAA140", orbit: 3, angle: 45 },
  { name: "BoltRunway", label: "Strategic Scale Engine", icon: Shield, color: "#C1283B", orbit: 3, angle: 225 },
];

// Orbital speeds - each node moves at different rate for organic feel
const orbitalSpeeds = [30, 40, 35, 45, 50, 38]; // seconds per revolution (varying speeds)

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
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-950 py-20 md:py-32">
      {/* Premium dark background with subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header - Keep original text */}
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

        {/* Dynamic Orbital Ecosystem - Solar System UI */}
        {/* STRICT BOUNDING BOX - Fixed to prevent overlapping */}
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
          {/* Inner Container with padding - All orbital elements MUST stay within this */}
          <div className="absolute inset-0" style={{ padding: '5%' }}>
            {/* THE TRACKS: EXACTLY 3 Orbital Rings - HIGHLY VISIBLE with glow */}
            {/* Ring 1 (Inner - 15%): BoltGuider */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: '50%',
                left: '50%',
                width: '30%',
                height: '30%',
                transform: 'translate(-50%, -50%)',
                border: '1.5px solid rgba(99, 102, 241, 0.35)',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.2), inset 0 0 15px rgba(99, 102, 241, 0.1)',
              }}
              animate={{
                rotate: 360,
                borderColor: ['rgba(99, 102, 241, 0.35)', 'rgba(139, 92, 246, 0.35)', 'rgba(99, 102, 241, 0.35)'],
              }}
              transition={{
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                borderColor: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            {/* Ring 2 (Middle - 30%): BrandToFly, D2CBolt, B2BBolt */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: '50%',
                left: '50%',
                width: '60%',
                height: '60%',
                transform: 'translate(-50%, -50%)',
                border: '1.5px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.15), inset 0 0 20px rgba(99, 102, 241, 0.08)',
              }}
              animate={{
                rotate: -360,
                borderColor: ['rgba(99, 102, 241, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(99, 102, 241, 0.3)'],
              }}
              transition={{
                rotate: { duration: 80, repeat: Infinity, ease: "linear" },
                borderColor: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            {/* Ring 3 (Outer - 45%): ScaleRunway, BoltRunway */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: '50%',
                left: '50%',
                width: '90%',
                height: '90%',
                transform: 'translate(-50%, -50%)',
                border: '1.5px solid rgba(99, 102, 241, 0.25)',
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.12), inset 0 0 25px rgba(99, 102, 241, 0.06)',
              }}
              animate={{
                rotate: 360,
                borderColor: ['rgba(99, 102, 241, 0.25)', 'rgba(139, 92, 246, 0.25)', 'rgba(99, 102, 241, 0.25)'],
              }}
              transition={{
                rotate: { duration: 100, repeat: Infinity, ease: "linear" },
                borderColor: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Animated Background Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  background: 'rgba(99, 102, 241, 0.4)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 4px rgba(99, 102, 241, 0.6)',
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Rotating Track System - No longer needed, nodes move independently */}
            <div className="absolute inset-0">
              {/* Connection Lines from Center to Nodes - Enhanced with data flow */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: 'visible' }}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  
                  {/* Gradient for data flow */}
                  <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                    <stop offset="50%" stopColor="rgba(99, 102, 241, 0.8)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                  </linearGradient>
                </defs>
                
                {engines.map((engine, index) => {
                  const orbitRadius = engine.orbit === 1 ? 15 : engine.orbit === 2 ? 30 : 45;
                  const isHovered = hoveredNode === index;

                  return (
                    <g key={`line-group-${index}`}>
                      {/* Static connection line */}
                      <motion.line
                        x1="50"
                        y1="50"
                        x2={50 + orbitRadius * Math.cos((engine.angle - 90) * Math.PI / 180)}
                        y2={50 + orbitRadius * Math.sin((engine.angle - 90) * Math.PI / 180)}
                        stroke={isHovered ? engine.color : 'rgba(99, 102, 241, 0.25)'}
                        strokeWidth={isHovered ? '0.8' : '0.3'}
                        animate={{
                          strokeWidth: isHovered ? [0.8, 1.2, 0.8] : 0.3,
                          opacity: isHovered ? [0.8, 1, 0.8] : 0.6,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: isHovered ? 'url(#strongGlow)' : 'url(#glow)',
                        }}
                      />
                      
                      {/* Animated data packet flowing along line */}
                      {hasAnimated && (
                        <motion.circle
                          r="1.5"
                          fill={engine.color}
                          style={{
                            filter: 'url(#strongGlow)',
                          }}
                          animate={{
                            cx: [50, 50 + orbitRadius * Math.cos((engine.angle - 90) * Math.PI / 180)],
                            cy: [50, 50 + orbitRadius * Math.sin((engine.angle - 90) * Math.PI / 180)],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 2.5 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

                {/* Engine Nodes - Counter-rotating to stay upright */}
                {engines.map((engine, index) => {
                  const Icon = engine.icon;
                  const orbitRadius = engine.orbit === 1 ? 15 : engine.orbit === 2 ? 30 : 45;
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
                          duration: 45,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="flex flex-col items-center cursor-pointer group">
                          {/* Node Circle - Enhanced */}
                          <motion.div
                            className="rounded-full flex items-center justify-center relative"
                            animate={isHovered ? { scale: 1.2, rotate: [0, 360] } : { scale: 1 }}
                            transition={{ 
                              scale: { duration: 0.4, ease: "easeOut" },
                              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                            }}
                            style={{
                              width: engine.orbit === 1 ? '58px' : engine.orbit === 2 ? '54px' : '50px',
                              height: engine.orbit === 1 ? '58px' : engine.orbit === 2 ? '54px' : '50px',
                              backgroundColor: engine.color,
                              boxShadow: isHovered
                                ? `0 0 40px ${engine.color}90, 0 0 80px ${engine.color}50, 0 10px 40px -4px ${engine.color}70, inset 0 2px 8px rgba(255, 255, 255, 0.2)`
                                : `0 0 25px ${engine.color}50, 0 6px 20px -4px ${engine.color}40`,
                              border: isHovered ? `3px solid rgba(255, 255, 255, 0.4)` : '2px solid rgba(255, 255, 255, 0.15)',
                            }}
                          >
                            {/* Enhanced pulsating glow effect on hover */}
                            {isHovered && (
                              <>
                                <motion.div
                                  className="absolute inset-0 rounded-full"
                                  style={{ backgroundColor: engine.color }}
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 0, 0.4],
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
                                    scale: [1, 1.8, 1],
                                    opacity: [0.2, 0, 0.2],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3,
                                  }}
                                />
                              </>
                            )}
                            <Icon 
                              className="text-white relative z-10" 
                              style={{ 
                                width: engine.orbit === 1 ? '28px' : '26px', 
                                height: engine.orbit === 1 ? '28px' : '26px',
                                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                              }} 
                              strokeWidth={1.8} 
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

              {/* THE CORE: FounderPlane Logo with EXACTLY 2 Tight Glowing Pulse Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                  className="relative"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 18 }}
                >
                  {/* Pulse Ring 1 - Tight, Inner Glow (Enhanced) */}
                  <motion.div
                    className="absolute -inset-4 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 100%)',
                      border: '1.5px solid rgba(99, 102, 241, 0.25)',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                    }}
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Pulse Ring 2 - Tight, Outer Glow (Enhanced) */}
                  <motion.div
                    className="absolute -inset-6 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 100%)',
                      border: '1px solid rgba(99, 102, 241, 0.18)',
                      boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)',
                    }}
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />
                  
                  {/* Logo Container - Enhanced */}
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
                      border: '2px solid rgba(99, 102, 241, 0.5)',
                      boxShadow: '0 0 50px rgba(99, 102, 241, 0.4), 0 0 100px rgba(99, 102, 241, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <img 
                      src={founderplaneLogo} 
                      alt="FounderPlane" 
                      className="w-11 h-11 md:w-14 md:h-14 relative z-10" 
                    />
                  </div>
                </motion.div>
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
    </section>
  );
};

export default EcosystemOrbitalSection;
