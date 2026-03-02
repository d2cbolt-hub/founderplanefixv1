import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Compass, Palette, Zap, Shield, Settings, type LucideIcon, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Service {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  category: string;
  bgColor: string;
  glowColor: string;
  slug: string;
  cta: string;
  stageNumber: number;
}

const services: Service[] = [
  {
    icon: Compass,
    name: "BOLTGUIDER",
    tagline: "The Validation Engine.",
    description: "We turn your chaotic idea into a custom 90-Day Execution Roadmap. We validate your direction so you stop guessing and start building.",
    badge: "Fixes Analysis Paralysis",
    category: "Launch",
    bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    glowColor: "shadow-blue-500/50",
    slug: "boltguider",
    cta: "Explore BoltGuider",
    stageNumber: 1,
  },
  {
    icon: Palette,
    name: "BRANDTOFLY",
    tagline: "The Identity Engine.",
    description: "We build psychology-driven visual architecture and positioning. We make your business clear, credible, and instantly understandable to the market.",
    badge: "Fixes Invisible Authority",
    category: "Launch",
    bgColor: "bg-gradient-to-br from-violet-500 via-violet-600 to-purple-700",
    glowColor: "shadow-violet-500/50",
    slug: "brandtofly",
    cta: "Explore BrandToFly",
    stageNumber: 2,
  },
  {
    icon: Zap,
    name: "D2CBOLT",
    tagline: "The D2C Commerce Engine.",
    description: "We fix your store architecture, unit economics, and retention loops before turning on the ads, so you scale without burning capital.",
    badge: "Fixes the Ad-Spend Trap",
    category: "Growth",
    bgColor: "bg-gradient-to-br from-[#52A65B] via-[#469E4F] to-[#3A8F43]",
    glowColor: "shadow-[#52A65B]/50",
    slug: "d2cbolt",
    cta: "Explore D2CBolt",
    stageNumber: 3,
  },
  {
    icon: Zap,
    name: "B2BBOLT",
    tagline: "The B2B Revenue Engine.",
    description: "We install complete outbound and inbound pipeline architecture. We turn B2B demand into a predictable, mathematical certainty.",
    badge: "Fixes Unpredictable Pipelines",
    category: "Growth",
    bgColor: "bg-gradient-to-br from-[#E5572E] via-[#D84E27] to-[#C04420]",
    glowColor: "shadow-[#E5572E]/50",
    slug: "b2bbolt",
    cta: "Explore B2BBolt",
    stageNumber: 4,
  },
  {
    icon: Shield,
    name: "BOLTRUNWAY",
    tagline: "The Strategic Scale Engine.",
    description: "We align your strategy, revenue model, and team structure before you accelerate. We ensure you scale structure, not chaos.",
    badge: "Fixes Strategic Drift",
    category: "Scale",
    bgColor: "bg-gradient-to-br from-[#C1283B] via-[#B02234] to-[#9A1D2D]",
    glowColor: "shadow-[#C1283B]/50",
    slug: "boltrunway",
    cta: "Explore BoltRunway",
    stageNumber: 5,
  },
  {
    icon: Settings,
    name: "SCALERUNWAY",
    tagline: "The Operational Leverage Engine.",
    description: "We install the automation, SOPs, and decision frameworks needed to remove you from the day-to-day. We build the machine so you can drive it.",
    badge: "Fixes the Founder Bottleneck",
    category: "Scale",
    bgColor: "bg-gradient-to-br from-[#EAA140] via-[#E09536] to-[#D4882C]",
    glowColor: "shadow-[#EAA140]/50",
    slug: "scalerunway",
    cta: "Explore ScaleRunway",
    stageNumber: 6,
  },
];

const CARD_WIDTH = 340;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

type FilterCategory = "All" | "Launch" | "Growth" | "Scale";

const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="h-full" style={{ perspective: "1000px" }}>
      <Link to={`/services/${service.slug}#hero`} className="group block h-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
          className="relative rounded-3xl overflow-hidden h-full min-h-[480px] flex flex-col"
        >
          <div className={`absolute inset-0 ${service.bgColor} ${isHovered ? 'opacity-95' : 'opacity-100'} transition-opacity duration-500`} />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20"
            animate={isHovered ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
          <motion.div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={isHovered ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute bottom-10 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl" />

          <div className="relative z-10 p-8 flex flex-col h-full" style={{ transform: "translateZ(50px)" }}>
            <div className="mb-auto">
              <motion.div
                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg"
                animate={isHovered ? { y: [-8, -12, -8], rotate: [2, -2, 2], scale: [1, 1.05, 1] } : { y: [0, -8, 0] }}
                transition={{ duration: isHovered ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
              </motion.div>
            </div>

            <div className="mt-6">
              <motion.span
                className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider mb-4 border border-white/20"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {service.name}
              </motion.span>

              <motion.h4
                className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                animate={isHovered ? { y: -2 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.tagline}
              </motion.h4>

              <p className="text-white/85 text-base leading-relaxed mb-5">
                {service.description}
              </p>

              <p className="mb-6">
                <motion.span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 rounded-lg text-white/95 text-xs font-medium border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {service.badge}
                </motion.span>
              </p>

              <motion.div
                className="flex items-center gap-2 text-white font-semibold text-base"
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative">
                  {service.cta} →
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    animate={isHovered ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-3xl border-2"
            animate={isHovered ? { borderColor: 'rgba(255, 255, 255, 0.5)' } : { borderColor: 'rgba(255, 255, 255, 0.2)' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </div>
  );
};

const EcosystemSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const autoScrollRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const filterCategories: FilterCategory[] = ["All", "Launch", "Growth", "Scale"];

  const filteredServices = activeFilter === "All" 
    ? services 
    : services.filter(s => s.category === activeFilter);

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || activeFilter !== "All") return; // Only auto-scroll when showing all

    let lastTime = 0;
    const speed = 0.5; // px per frame

    const tick = (time: number) => {
      if (!isPaused && !isDragging.current && el) {
        if (lastTime) {
          const delta = time - lastTime;
          el.scrollLeft += speed * (delta / 16);
          // Loop: when we've scrolled past the original set, reset
          const singleSetWidth = filteredServices.length * STEP;
          if (el.scrollLeft >= singleSetWidth) {
            el.scrollLeft -= singleSetWidth;
          }
        }
        lastTime = time;
      } else {
        lastTime = 0;
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [isPaused, activeFilter, filteredServices.length]);

  // Arrow navigation
  const scrollBy = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -STEP : STEP;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    dragScrollLeft.current = scrollRef.current?.scrollLeft || 0;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - dragStartX.current) * 1.5;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  // Duplicate services for seamless infinite scroll (only when showing all)
  const displayServices = activeFilter === "All" 
    ? [...filteredServices, ...filteredServices, ...filteredServices]
    : filteredServices;

  return (
    <section id="ecosystem" data-testid="index-ecosystem" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Our Systems
          </motion.span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-4">
            <motion.span
              className="bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent bg-[size:200%]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Specialized Engines
            </motion.span>{" "}
            - Installed in the Right Order.
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg mb-2">
            FounderPlane is not a list of services. It is a system of engines designed to be installed by stage—so you build, grow, and scale without chaos or rework.
          </p>

          <p className="text-slate-500 text-sm">
            You don't need everything. You need the right system for your current stage.
          </p>
        </motion.div>

        {/* Pill Filters */}
        <motion.div 
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
              }`}
            >
              {category === "All" ? "View All" : category}
            </button>
          ))}
        </motion.div>

        {/* Carousel Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); handleMouseUp(); }}
        >
          {/* Arrow Buttons - Positioned outside with solid white background */}
          <button
            onClick={() => scrollBy('left')}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
          </button>
          <button
            onClick={() => scrollBy('right')}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer group"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 md:px-20 py-2"
            style={{
              cursor: 'grab',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {displayServices.map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default EcosystemSection;
