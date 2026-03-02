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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
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
            {/* Ring 1 (Inner - 45%): BoltGuider */}
            <div 
              className="orbit-ring"
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
              }}
            >
              {engines.filter(e => e.orbit === 1).map((engine, idx) => {
                const Icon = engine.icon;
                const isHovered = hoveredNode === engines.indexOf(engine);
                return (
                  <div
                    key={engine.name}
                    className="planet-node"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: 'reverse-spin 45s linear infinite',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={() => setHoveredNode(engines.indexOf(engine))}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className="icon-circle"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: engine.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isHovered ? '3px solid rgba(255, 255, 255, 0.5)' : '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: isHovered
                          ? `0 0 45px ${engine.color}95, 0 0 90px ${engine.color}60`
                          : `0 0 30px ${engine.color}60`,
                        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      <Icon className="text-white" style={{ width: '28px', height: '28px' }} strokeWidth={1.8} />
                    </div>
                    <p 
                      className="text-label"
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: isHovered ? engine.color : 'rgba(226, 232, 240, 0.8)',
                        textShadow: isHovered ? `0 0 12px ${engine.color}50` : 'none',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {engine.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Ring 2 (Middle - 70%): BrandToFly, D2CBolt, B2BBolt */}
            <div 
              className="orbit-ring"
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
              }}
            >
              {engines.filter(e => e.orbit === 2).map((engine) => {
                const Icon = engine.icon;
                const isHovered = hoveredNode === engines.indexOf(engine);
                const angleOffset = engine.angle;
                return (
                  <div
                    key={engine.name}
                    className="planet-node"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angleOffset}deg) translateY(-50%)`,
                      animation: 'reverse-spin 55s linear infinite',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={() => setHoveredNode(engines.indexOf(engine))}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className="icon-circle"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: engine.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isHovered ? '3px solid rgba(255, 255, 255, 0.5)' : '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: isHovered
                          ? `0 0 45px ${engine.color}95, 0 0 90px ${engine.color}60`
                          : `0 0 30px ${engine.color}60`,
                        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      <Icon className="text-white" style={{ width: '28px', height: '28px' }} strokeWidth={1.8} />
                    </div>
                    <p 
                      className="text-label"
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: isHovered ? engine.color : 'rgba(226, 232, 240, 0.8)',
                        textShadow: isHovered ? `0 0 12px ${engine.color}50` : 'none',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {engine.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Ring 3 (Outer - 95%): ScaleRunway, BoltRunway */}
            <div 
              className="orbit-ring"
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
              }}
            >
              {engines.filter(e => e.orbit === 3).map((engine) => {
                const Icon = engine.icon;
                const isHovered = hoveredNode === engines.indexOf(engine);
                const angleOffset = engine.angle;
                return (
                  <div
                    key={engine.name}
                    className="planet-node"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angleOffset}deg) translateY(-50%)`,
                      animation: 'reverse-spin 65s linear infinite',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={() => setHoveredNode(engines.indexOf(engine))}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className="icon-circle"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: engine.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isHovered ? '3px solid rgba(255, 255, 255, 0.5)' : '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: isHovered
                          ? `0 0 45px ${engine.color}95, 0 0 90px ${engine.color}60`
                          : `0 0 30px ${engine.color}60`,
                        transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      <Icon className="text-white" style={{ width: '28px', height: '28px' }} strokeWidth={1.8} />
                    </div>
                    <p 
                      className="text-label"
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: isHovered ? engine.color : 'rgba(226, 232, 240, 0.8)',
                        textShadow: isHovered ? `0 0 12px ${engine.color}50` : 'none',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {engine.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Hub */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 30,
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={hasAnimated ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <motion.div
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)',
                    border: '1.5px solid rgba(99, 102, 241, 0.3)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                />
                <div 
                  style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)',
                    border: '2px solid rgba(99, 102, 241, 0.5)',
                    boxShadow: '0 0 50px rgba(99, 102, 241, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={founderplaneLogo} alt="FounderPlane" style={{ width: '48px', height: '48px' }} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

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

      <style>{`
        @keyframes spin {
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes reverse-spin {
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default EcosystemOrbitalSection;
