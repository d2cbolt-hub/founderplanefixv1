import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Compass, Palette, Zap, Shield, Settings } from "lucide-react";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

interface Engine {
  name: string;
  label: string;
  icon: typeof Compass;
  color: string;
  stage: string;
  orbit: number; // 1 = inner, 2 = mid, 3 = outer
  angle: number;
}

const engines: Engine[] = [
  { name: "BoltGuider", label: "Validation", icon: Compass, color: "#2C5AF6", stage: "Launch", orbit: 1, angle: 300 },
  { name: "BrandToFly", label: "Identity", icon: Palette, color: "#661AF5", stage: "Launch", orbit: 1, angle: 60 },
  { name: "D2CBolt", label: "D2C Commerce", icon: Zap, color: "#52A65B", stage: "Growth", orbit: 2, angle: 340 },
  { name: "B2BBolt", label: "B2B Revenue", icon: Zap, color: "#E5572E", stage: "Growth", orbit: 2, angle: 200 },
  { name: "BoltRunway", label: "Strategic Scale", icon: Shield, color: "#C1283B", stage: "Scale", orbit: 3, angle: 30 },
  { name: "ScaleRunway", label: "Operations", icon: Settings, color: "#EAA140", stage: "Scale", orbit: 3, angle: 170 },
];

const CX = 300;
const CY = 300;
const RADII = { 1: 120, 2: 190, 3: 255 };

const getPos = (angle: number, radius: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 md:py-36">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(44,90,246,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#2C5AF6]/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#2C5AF6] font-semibold text-sm tracking-wider uppercase mb-4">
            The Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-5">
            One Central Hub. Six Specialized Engines.
          </h2>
          <p className="text-slate-500 max-w-[720px] mx-auto text-base md:text-lg leading-relaxed">
            FounderPlane operates as a unified architectural system. We are not a fragmented agency. We are your core operating system, allowing you to plug in the exact sub-brand engine you need, exactly when your stage requires it.
          </p>
        </motion.div>

        {/* Orbital Diagram — Desktop */}
        <div className="hidden md:flex justify-center mb-20">
          <div className="relative" style={{ width: '600px', height: '600px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              <defs>
                <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="centerGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                {/* Radial gradient for center glow */}
                <radialGradient id="hubGlow">
                  <stop offset="0%" stopColor="#2C5AF6" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#2C5AF6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Center ambient glow */}
              <circle cx={CX} cy={CY} r="60" fill="url(#hubGlow)" />

              {/* Orbit rings — elegant concentric circles with stronger visibility */}
              {[RADII[1], RADII[2], RADII[3]].map((r, i) => (
                <g key={`ring-${i}`}>
                  <circle
                    cx={CX} cy={CY} r={r}
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray={i === 0 ? "0" : i === 1 ? "8 4" : "4 8"}
                    opacity={0.6 - i * 0.1}
                  />
                </g>
              ))}

              {/* Stage labels removed as per design requirement */}

              {/* Connecting lines from center to nodes — stronger visibility */}
              {engines.map((engine, i) => {
                const radius = RADII[engine.orbit as keyof typeof RADII];
                const pos = getPos(engine.angle, radius);
                const isHovered = hoveredNode === i;
                const lineId = `line-path-${i}`;

                return (
                  <g key={`conn-${i}`}>
                    {/* Define path for animateMotion */}
                    <path
                      id={lineId}
                      d={`M${CX},${CY} L${pos.x},${pos.y}`}
                      fill="none"
                      stroke="none"
                    />

                    {/* Base connection line — increased opacity */}
                    <line
                      x1={CX} y1={CY}
                      x2={pos.x} y2={pos.y}
                      stroke={isHovered ? engine.color : "#CBD5E1"}
                      strokeWidth={isHovered ? 2 : 1}
                      strokeDasharray={isHovered ? "0" : "4 6"}
                      opacity={isHovered ? 0.7 : 0.5}
                      style={{ transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
                      filter={isHovered ? "url(#orbGlow)" : undefined}
                    />

                    {/* Animated pulse dot */}
                    {hasAnimated && (
                      <circle r={isHovered ? "0" : "2.5"} fill={engine.color} style={{ transition: "r 0.3s ease" }}>
                        <animateMotion
                          dur={`${2.5 + i * 0.4}s`}
                          repeatCount="indefinite"
                          path={`M${CX},${CY} L${pos.x},${pos.y}`}
                        />
                        <animate attributeName="opacity" values="0;0.7;0.7;0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Hover glow line */}
                    {isHovered && (
                      <line
                        x1={CX} y1={CY}
                        x2={pos.x} y2={pos.y}
                        stroke={engine.color}
                        strokeWidth="4"
                        opacity="0.08"
                        filter="url(#orbGlow)"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Center Hub — Glassmorphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 180, damping: 18 }}
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(44,90,246,0.08) 0%, transparent 70%)" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 flex items-center justify-center relative z-10">
                  <img src={founderplaneLogo} alt="FounderPlane" className="w-14 h-14" />
                </div>
              </motion.div>
            </div>

            {/* Engine Nodes */}
            {engines.map((engine, index) => {
              const Icon = engine.icon;
              const radius = RADII[engine.orbit as keyof typeof RADII];
              const pos = getPos(engine.angle, radius);
              const isHovered = hoveredNode === index;

              return (
                <motion.div
                  key={engine.name}
                  className="absolute z-30"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08, type: "spring", stiffness: 200 }}
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="flex flex-col items-center cursor-pointer group">
                    {/* Node circle */}
                    <motion.div
                      className="relative rounded-full flex items-center justify-center transition-all duration-300"
                      animate={isHovered ? { scale: 1.12 } : { scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{
                        width: engine.orbit === 1 ? '52px' : engine.orbit === 2 ? '48px' : '44px',
                        height: engine.orbit === 1 ? '52px' : engine.orbit === 2 ? '48px' : '44px',
                        backgroundColor: engine.color,
                        boxShadow: isHovered
                          ? `0 8px 32px -4px ${engine.color}50, 0 0 0 4px ${engine.color}15`
                          : `0 4px 16px -4px ${engine.color}30`
                      }}
                    >
                      <Icon className="text-white" style={{ width: engine.orbit === 1 ? '24px' : '20px', height: engine.orbit === 1 ? '24px' : '20px' }} strokeWidth={1.5} />
                    </motion.div>

                    {/* Always-visible name label */}
                    <motion.div
                      className="mt-2 text-center"
                      animate={isHovered ? { y: -1 } : { y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`text-[11px] font-bold tracking-wide block transition-colors duration-300 ${isHovered ? 'text-slate-800' : 'text-slate-500'}`}>
                        {engine.name}
                      </span>
                    </motion.div>

                    {/* Hover: expanded label */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 2, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 2, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <span className="text-[10px] text-slate-400 font-medium">
                            {engine.label} Engine
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Connected Tree Layout with Central Hub */}
        <div className="md:hidden mb-14 px-4">
          <div className="relative flex flex-col items-center">
            {/* Central Hub at top */}
            <motion.div
              className="relative mb-6 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(44,90,246,0.1) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center relative z-10">
                <img src={founderplaneLogo} alt="FounderPlane" className="w-10 h-10" />
              </div>
            </motion.div>

            {/* Vertical connector line from hub */}
            <div className="w-px h-6 bg-gradient-to-b from-[#CBD5E1] to-transparent" />

            {/* Stages with connected nodes */}
            {["Launch", "Growth", "Scale"].map((stage, stageIndex) => {
              const stageEngines = engines.filter(e => e.stage === stage);
              return (
                <motion.div 
                  key={stage} 
                  className="relative w-full max-w-[320px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + stageIndex * 0.15 }}
                >
                  {/* Stage label */}
                  <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-3 text-center">{stage}</p>
                  
                  {/* SVG for connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    {/* Horizontal line connecting engines */}
                    <line 
                      x1="50%" y1="50" 
                      x2={stageEngines.length === 2 ? "25%" : "50%"} 
                      y2="50" 
                      stroke="#CBD5E1" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />
                    <line 
                      x1="50%" y1="50" 
                      x2={stageEngines.length === 2 ? "75%" : "50%"} 
                      y2="50" 
                      stroke="#CBD5E1" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />
                  </svg>
                  
                  {/* Engine nodes */}
                  <div className="flex justify-center gap-10 relative z-10">
                    {stageEngines.map((engine) => {
                      const Icon = engine.icon;
                      return (
                        <div key={engine.name} className="flex flex-col items-center gap-2">
                          <motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                            style={{ backgroundColor: engine.color, boxShadow: `0 4px 12px -3px ${engine.color}40` }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </motion.div>
                          <span className="text-[10px] font-bold text-slate-600">{engine.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Vertical connector to next stage */}
                  {stageIndex < 2 && (
                    <div className="flex justify-center my-4">
                      <div className="w-px h-8 bg-gradient-to-b from-[#CBD5E1] via-[#CBD5E1] to-transparent opacity-50" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Anchor Box — Glassmorphic */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C5AF6]/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                The Platform Advantage: Partner Benefits
              </h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
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
