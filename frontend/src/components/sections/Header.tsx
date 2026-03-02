import { useState, useEffect, useRef } from "react";
import { Menu, X, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

interface HeaderProps {
  onOpenDiagnostic?: () => void;
}

const navLinks = [
  { label: "The Platform", href: "#platform" },
  { label: "Our Engines", href: "#ecosystem" },
  { label: "FAQ", href: "#faq" },
];

const Header = ({ onOpenDiagnostic }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionsInViewRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1));
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            sectionsInViewRef.current.set(sectionId, entry.intersectionRatio);
          } else {
            sectionsInViewRef.current.delete(sectionId);
          }
        });

        if (sectionsInViewRef.current.size > 0) {
          const visibleSections = Array.from(sectionsInViewRef.current.entries());
          visibleSections.sort((a, b) => {
            const indexA = sectionIds.indexOf(a[0]);
            const indexB = sectionIds.indexOf(b[0]);
            return indexA - indexB;
          });
          const bestSection = visibleSections.find(([_, ratio]) => ratio > 0.1)?.[0] 
            || visibleSections[0]?.[0];
          if (bestSection) {
            setActiveSection(bestSection);
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
      if (currentScrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleMapYourStage = () => {
    setIsOpen(false);
    if (onOpenDiagnostic) {
      onOpenDiagnostic();
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Left: Logo (Desktop) / Logo (Mobile) */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 group transition-opacity hover:opacity-80"
            >
              <img
                src={founderplaneLogo}
                alt="FounderPlane"
                width={36}
                height={36}
                loading="eager"
                decoding="async"
                className="h-8 w-8 md:h-9 md:w-9"
              />
              <span className="text-base md:text-lg font-semibold text-foreground">
                FounderPlane
              </span>
            </a>

            {/* Center-Right: Desktop Navigation Links + CTA */}
            <div className="hidden lg:flex items-center gap-1">
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="ml-4">
                <button
                  onClick={handleMapYourStage}
                  data-testid="header-map-your-stage-button"
                  className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border border-slate-700/50 hover:border-[#2C5AF6] hover:shadow-lg hover:shadow-[#2C5AF6]/20 group cursor-pointer"
                >
                  <Crosshair className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:text-[#2C5AF6] transition-all" />
                  Map Your Stage
                </button>
              </div>
            </div>

            {/* Mobile: Hamburger */}
            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-background"
          >
            <div className="flex flex-col pt-24 px-6 h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom Card: Map Your Stage */}
              <motion.div
                className="mt-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={handleMapYourStage}
                  className="flex flex-col items-center w-full bg-slate-800 hover:bg-slate-700 text-white py-6 px-6 rounded-2xl transition-all duration-300 border border-slate-700/50 hover:border-[#2C5AF6] group cursor-pointer"
                >
                  <Crosshair className="w-8 h-8 mb-3 opacity-80 group-hover:text-[#2C5AF6] transition-colors" />
                  <span className="text-lg font-semibold">Map Your Stage</span>
                  <span className="text-sm text-slate-400 mt-1">Find your exact coordinates and unlock your blueprint.</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
