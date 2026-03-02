import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, AlertTriangle, Palette, TrendingUp, User, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StageDiagnosisSectionProps {
  onOpenDiagnostic?: () => void;
}

const stageOptions = [
  {
    icon: Lightbulb,
    title: "I'm exploring an idea",
    description: "You have a concept but are stuck in analysis paralysis. You need validation and a clear 90-day execution roadmap.",
    route: "/services/boltguider",
    service: "BoltGuider",
    color: "blue"
  },
  {
    icon: Palette,
    title: "I need clarity, credibility, and positioning",
    description: "Your offering is real, but your market perception is weak. You need a visual architecture that builds subconscious trust.",
    route: "/services/brandtofly",
    service: "BrandToFly",
    color: "violet"
  },
  {
    icon: BarChart3,
    title: "I rely on referrals and hustle",
    description: "You run a B2B business but lack a reliable pipeline. You need a predictable system to generate leads and close high-ticket deals.",
    route: "/services/b2bbolt",
    service: "B2BBolt",
    color: "cyan"
  },
  {
    icon: TrendingUp,
    title: "My D2C store is burning ad spend",
    description: "You sell physical products, but rising acquisition costs are killing margins. You need to fix your conversion architecture.",
    route: "/services/d2cbolt",
    service: "D2CBolt",
    color: "emerald"
  },
  {
    icon: AlertTriangle,
    title: "I am scaling, but things feel unstable",
    description: "Revenue is up, but margins fluctuate and decisions are heavy. You need strategic alignment before you accelerate further.",
    route: "/services/boltrunway",
    service: "BoltRunway",
    color: "amber"
  },
  {
    icon: User,
    title: "The business depends too much on me",
    description: "You are the operational bottleneck. You need systems and automation so the business can run and grow without your constant involvement.",
    route: "/services/scalerunway",
    service: "ScaleRunway",
    color: "orange"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-300",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    hoverBorder: "hover:border-amber-300",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    hoverBorder: "hover:border-violet-300",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-100",
    hoverBorder: "hover:border-orange-300",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    hoverBorder: "hover:border-cyan-300",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600"
  }
};

const StageDiagnosisSection = ({ onOpenDiagnostic }: StageDiagnosisSectionProps) => {
  return (
    <section id="stage-diagnosis" data-testid="index-stage-diagnosis" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
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
              Self-Diagnosis
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-4">
              Where Are You <span className="text-primary">Right Now?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A simple, honest diagnostic to help you understand where you are and what might actually help.
            </p>
          </motion.div>

          {/* Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {stageOptions.map((option, index) => {
              const Icon = option.icon;
              const colors = colorClasses[option.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link 
                    to={option.route}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group block h-full"
                  >
                    <motion.div 
                      className={`${colors.bg} border ${colors.border} ${colors.hoverBorder} rounded-2xl p-6 h-full transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ 
                        y: -6, 
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {option.description}
                        </p>
                        
                        {/* Hover reveal: "Explore this solution →" */}
                        <div className="h-6 relative overflow-hidden">
                          <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-3 group-hover:translate-y-0">
                            <span>Explore this solution</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action Area */}
          <motion.div 
            className="text-center space-y-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Text Pill */}
            <p className="inline-flex items-center gap-2 text-slate-500 text-sm bg-slate-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Your answer determines the system—not a sales pitch.
            </p>
            
            {/* CTA Button */}
            <div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
                onClick={onOpenDiagnostic}
              >
                Take the Stage Clarity Check
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StageDiagnosisSection;
