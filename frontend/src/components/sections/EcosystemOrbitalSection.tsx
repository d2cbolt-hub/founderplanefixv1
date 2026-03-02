import { useState } from "react";
import { Compass, Palette, Zap, Shield, Settings } from "lucide-react";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

const EcosystemOrbitalSection = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <span className="inline-block text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4">
            The Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            One Central Hub. Six Specialized Engines.
          </h2>
          <p className="text-slate-400 max-w-[720px] mx-auto text-base md:text-lg leading-relaxed">
            FounderPlane operates as a unified architectural system. We are not a fragmented agency. We are your core operating system, allowing you to plug in the exact sub-brand engine you need, exactly when your stage requires it.
          </p>
        </div>

        {/* MASTER CONTAINER - Strict Bounding Box */}
        <div className="relative w-full max-w-[550px] aspect-square mx-auto my-20">
          
          {/* 3 ORBITAL TRACKS - Static Concentric Circles */}
          {/* Inner Ring - 45% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full border-[1.5px] border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2),inset_0_0_15px_rgba(99,102,241,0.1)]" />
          
          {/* Middle Ring - 70% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border-[1.5px] border-indigo-500/35 shadow-[0_0_20px_rgba(99,102,241,0.15),inset_0_0_20px_rgba(99,102,241,0.08)]" />
          
          {/* Outer Ring - 95% */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full border-[1.5px] border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.12),inset_0_0_25px_rgba(99,102,241,0.06)]" />

          {/* INNER RING ORBITS - BoltGuider (40s) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%]">
            {/* Wrapper 1: Track Spin */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              {/* Node at top edge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Wrapper 2: Counter-Spin */}
                <div className="animate-[reverse-spin_40s_linear_infinite]">
                  <div 
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredNode('BoltGuider')}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredNode === 'BoltGuider' 
                          ? 'scale-125 shadow-[0_0_45px_rgba(44,90,246,0.95)]' 
                          : 'shadow-[0_0_30px_rgba(44,90,246,0.6)]'
                      }`}
                      style={{ 
                        backgroundColor: '#2C5AF6',
                        border: hoveredNode === 'BoltGuider' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <Compass className="text-white w-7 h-7" strokeWidth={1.8} />
                    </div>
                    <p 
                      className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                        hoveredNode === 'BoltGuider' ? 'text-[#2C5AF6]' : 'text-slate-200/80'
                      }`}
                      style={{ textShadow: hoveredNode === 'BoltGuider' ? '0 0 12px rgba(44,90,246,0.5)' : 'none' }}
                    >
                      BoltGuider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE RING ORBITS - BrandToFly, D2CBolt, B2BBolt (50s) */}
          {/* BrandToFly - 0° */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]">
            <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-[reverse-spin_50s_linear_infinite]">
                  <div 
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredNode('BrandToFly')}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredNode === 'BrandToFly' 
                          ? 'scale-125 shadow-[0_0_45px_rgba(102,26,245,0.95)]' 
                          : 'shadow-[0_0_30px_rgba(102,26,245,0.6)]'
                      }`}
                      style={{ 
                        backgroundColor: '#661AF5',
                        border: hoveredNode === 'BrandToFly' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                      }}
                    >
                      <Palette className="text-white w-7 h-7" strokeWidth={1.8} />
                    </div>
                    <p 
                      className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                        hoveredNode === 'BrandToFly' ? 'text-[#661AF5]' : 'text-slate-200/80'
                      }`}
                      style={{ textShadow: hoveredNode === 'BrandToFly' ? '0 0 12px rgba(102,26,245,0.5)' : 'none' }}
                    >
                      BrandToFly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D2CBolt - 120° */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]">
            {/* 1. The Track: Infinite forward spin */}
            <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
              {/* 2. The Spoke: Static starting angle (120°) */}
              <div className="absolute inset-0 rotate-[120deg]">
                {/* 3. Node Placement: At top edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* 4. Counter-Spoke: Opposite static rotation (-120°) - THE GYROSCOPE */}
                  <div className="-rotate-[120deg]">
                    {/* 5. Counter-Spin: Infinite reverse animation */}
                    <div className="animate-[reverse-spin_50s_linear_infinite]">
                      <div 
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setHoveredNode('D2CBolt')}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div 
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredNode === 'D2CBolt' 
                              ? 'scale-125 shadow-[0_0_45px_rgba(82,166,91,0.95)]' 
                              : 'shadow-[0_0_30px_rgba(82,166,91,0.6)]'
                          }`}
                          style={{ 
                            backgroundColor: '#52A65B',
                            border: hoveredNode === 'D2CBolt' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          <Zap className="text-white w-7 h-7" strokeWidth={1.8} />
                        </div>
                        <p 
                          className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                            hoveredNode === 'D2CBolt' ? 'text-[#52A65B]' : 'text-slate-200/80'
                          }`}
                          style={{ textShadow: hoveredNode === 'D2CBolt' ? '0 0 12px rgba(82,166,91,0.5)' : 'none' }}
                        >
                          D2CBolt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B2BBolt - 240° */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]">
            {/* 1. The Track: Infinite forward spin */}
            <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
              {/* 2. The Spoke: Static starting angle (240°) */}
              <div className="absolute inset-0 rotate-[240deg]">
                {/* 3. Node Placement: At top edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* 4. Counter-Spoke: Opposite static rotation (-240°) - THE GYROSCOPE */}
                  <div className="-rotate-[240deg]">
                    {/* 5. Counter-Spin: Infinite reverse animation */}
                    <div className="animate-[reverse-spin_50s_linear_infinite]">
                      <div 
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setHoveredNode('B2BBolt')}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div 
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredNode === 'B2BBolt' 
                              ? 'scale-125 shadow-[0_0_45px_rgba(229,87,46,0.95)]' 
                              : 'shadow-[0_0_30px_rgba(229,87,46,0.6)]'
                          }`}
                          style={{ 
                            backgroundColor: '#E5572E',
                            border: hoveredNode === 'B2BBolt' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          <Zap className="text-white w-7 h-7" strokeWidth={1.8} />
                        </div>
                        <p 
                          className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                            hoveredNode === 'B2BBolt' ? 'text-[#E5572E]' : 'text-slate-200/80'
                          }`}
                          style={{ textShadow: hoveredNode === 'B2BBolt' ? '0 0 12px rgba(229,87,46,0.5)' : 'none' }}
                        >
                          B2BBolt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUTER RING ORBITS - ScaleRunway, BoltRunway (60s) */}
          {/* ScaleRunway - 45° */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%]">
            {/* 1. The Track: Infinite forward spin */}
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
              {/* 2. The Spoke: Static starting angle (45°) */}
              <div className="absolute inset-0 rotate-[45deg]">
                {/* 3. Node Placement: At top edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* 4. Counter-Spoke: Opposite static rotation (-45°) - THE GYROSCOPE */}
                  <div className="-rotate-[45deg]">
                    {/* 5. Counter-Spin: Infinite reverse animation */}
                    <div className="animate-[reverse-spin_60s_linear_infinite]">
                      <div 
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setHoveredNode('ScaleRunway')}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div 
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredNode === 'ScaleRunway' 
                              ? 'scale-125 shadow-[0_0_45px_rgba(234,161,64,0.95)]' 
                              : 'shadow-[0_0_30px_rgba(234,161,64,0.6)]'
                          }`}
                          style={{ 
                            backgroundColor: '#EAA140',
                            border: hoveredNode === 'ScaleRunway' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          <Settings className="text-white w-7 h-7" strokeWidth={1.8} />
                        </div>
                        <p 
                          className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                            hoveredNode === 'ScaleRunway' ? 'text-[#EAA140]' : 'text-slate-200/80'
                          }`}
                          style={{ textShadow: hoveredNode === 'ScaleRunway' ? '0 0 12px rgba(234,161,64,0.5)' : 'none' }}
                        >
                          ScaleRunway
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BoltRunway - 225° */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%]">
            {/* 1. The Track: Infinite forward spin */}
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
              {/* 2. The Spoke: Static starting angle (225°) */}
              <div className="absolute inset-0 rotate-[225deg]">
                {/* 3. Node Placement: At top edge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* 4. Counter-Spoke: Opposite static rotation (-225°) - THE GYROSCOPE */}
                  <div className="-rotate-[225deg]">
                    {/* 5. Counter-Spin: Infinite reverse animation */}
                    <div className="animate-[reverse-spin_60s_linear_infinite]">
                      <div 
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setHoveredNode('BoltRunway')}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div 
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                            hoveredNode === 'BoltRunway' 
                              ? 'scale-125 shadow-[0_0_45px_rgba(193,40,59,0.95)]' 
                              : 'shadow-[0_0_30px_rgba(193,40,59,0.6)]'
                          }`}
                          style={{ 
                            backgroundColor: '#C1283B',
                            border: hoveredNode === 'BoltRunway' ? '3px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          <Shield className="text-white w-7 h-7" strokeWidth={1.8} />
                        </div>
                        <p 
                          className={`text-xs font-bold whitespace-nowrap transition-colors duration-300 ${
                            hoveredNode === 'BoltRunway' ? 'text-[#C1283B]' : 'text-slate-200/80'
                          }`}
                          style={{ textShadow: hoveredNode === 'BoltRunway' ? '0 0 12px rgba(193,40,59,0.5)' : 'none' }}
                        >
                          BoltRunway
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER CORE - FounderPlane Logo with 2 Pulse Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Pulse Ring 1 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500/30 to-violet-500/30 animate-pulse" />
            {/* Pulse Ring 2 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
            {/* Logo */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-2 border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.4)]">
              <img src={founderplaneLogo} alt="FounderPlane" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Platform Advantage Box */}
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/10">
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
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default EcosystemOrbitalSection;
