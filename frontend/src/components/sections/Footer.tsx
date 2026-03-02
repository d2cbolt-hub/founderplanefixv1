import { MessageCircle, ArrowUp, ArrowRight, Linkedin, Youtube, Instagram, Mail, MapPin, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

const services = [
  { name: "BoltGuider", href: "/services/boltguider", category: "Launch" },
  { name: "BrandToFly", href: "/services/brandtofly", category: "Brand" },
  { name: "D2CBolt", href: "/services/d2cbolt", category: "Growth" },
  { name: "B2BBolt", href: "/services/b2bbolt", category: "Growth" },
  { name: "ScaleRunway", href: "/services/scalerunway", category: "Scale" },
  { name: "BoltRunway", href: "/services/boltrunway", category: "Scale" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-testid="global-footer" className="relative overflow-hidden">
      {/* CTA Section - Ready To Take Off */}
      <div className="relative py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"
          animate={{ 
            background: [
              "linear-gradient(135deg, hsl(221 73% 49%) 0%, hsl(221 73% 45%) 50%, hsl(221 73% 40%) 100%)",
              "linear-gradient(135deg, hsl(221 73% 45%) 0%, hsl(221 73% 49%) 50%, hsl(221 73% 45%) 100%)",
              "linear-gradient(135deg, hsl(221 73% 49%) 0%, hsl(221 73% 45%) 50%, hsl(221 73% 40%) 100%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <motion.div 
          className="absolute top-10 right-[15%] pointer-events-none hidden md:block"
          animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Plane className="w-12 h-12 text-white/20" />
        </motion.div>
        <motion.div 
          className="absolute bottom-16 left-[10%] pointer-events-none hidden md:block"
          animate={{ y: [0, 10, 0], x: [0, -8, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Plane className="w-8 h-8 text-white/15 rotate-[-30deg]" />
        </motion.div>
        
        <motion.div 
          className="container px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Ready To Take Off?
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
            The system is ready. The team is ready. Let's build your future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              onClick={() => window.open('https://wa.me/917353913591', '_blank')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 gap-2 px-8 py-6 rounded-full text-lg" 
              onClick={() => window.open('https://wa.me/917353913591', '_blank')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Support
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Gradient divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="bg-slate-900 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-50" />
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center gap-3 mb-6 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src={founderplaneLogo} 
                  alt="FounderPlane Logo" 
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <span className="text-xl font-bold font-display text-white">FounderPlane</span>
                  <p className="text-sm text-slate-400">Strategy. Systems. Scale.</p>
                </div>
              </motion.div>
              <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                The business-building ecosystem for founders who want clarity first, systems next, and growth that lasts.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-6">Our Systems</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {
                      const stageClaritySection = document.getElementById('stage-clarity-section');
                      if (stageClaritySection) {
                        stageClaritySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm relative inline-block group text-left"
                  >
                    Find Your Stage (Clarity Check)
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm relative inline-block group"
                    >
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Partner Support */}
            <div>
              <h4 className="text-white font-semibold mb-6">Partner Support</h4>
              <ul className="space-y-4">
                {/* WhatsApp Button */}
                <li>
                  <a
                    href="https://wa.me/917353913591"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-whatsapp-button"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 text-sm font-medium group"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-400">Email Support</p>
                    <a 
                      href="mailto:support@founderplane.com" 
                      className="text-white hover:text-primary transition-colors relative inline-block group"
                    >
                      support@founderplane.com
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-400">HQ</p>
                    <span className="text-white">Bengaluru, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div data-testid="footer-bottom-bar" className="bg-slate-950 py-6 relative z-10">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Tagline & Copyright - stacked */}
            <div data-testid="footer-copyright" className="flex flex-col items-center md:items-start gap-1">
              <span className="text-sm text-slate-400">
                Built with <span className="text-cyan-400">&#x1FA75;</span> for the next generation of business.
              </span>
              <span className="text-sm text-slate-500">
                &copy; 2026 FounderPlane. All rights reserved.
              </span>
            </div>
            
            {/* Legal Links - only Privacy Policy & Terms of Service */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link 
                to="/privacy-policy"
                data-testid="footer-privacy-policy-link"
                className="text-slate-500 hover:text-primary transition-colors duration-300 relative inline-block group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                to="/terms-of-service"
                data-testid="footer-terms-link"
                className="text-slate-500 hover:text-primary transition-colors duration-300 relative inline-block group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Back to top"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(33, 87, 217, 0)", "0 0 0 8px rgba(33, 87, 217, 0.1)", "0 0 0 0 rgba(33, 87, 217, 0)"]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
