import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqItems = [
  {
    question: "Do I need to buy and install all 6 engines?",
    answer: "Absolutely not. Building out of sequence is exactly how startups burn capital. You use our Stage Clarity Check to find your exact coordinates, and you install only the specific engine required to fix your current bottleneck. You don't need everything—you just need the right thing."
  },
  {
    question: "Are you a marketing agency or a consultancy?",
    answer: "Neither. We are an end-to-end infrastructural partner. Consultants hand you a theoretical PDF and walk away. Agencies run isolated campaigns that break your unit economics. We install natively integrated revenue and operational engines directly into your business, and we give you the exact frameworks to drive them."
  },
  {
    question: "I'm just starting out with an idea. Am I too early for FounderPlane?",
    answer: "If you are exploring a raw idea, you need the BoltGuider engine to validate it. If you are doing high revenue but the business relies entirely on your daily involvement, you need the ScaleRunway engine. The ecosystem is engineered to meet you at your exact coordinates, whether you are at Day Zero or Year Ten."
  },
  {
    question: "How do the Startup & Partner Benefits actually work?",
    answer: "Capital is oxygen. Once you step inside the FounderPlane ecosystem and install an engine, you unlock our private network. This gives you exclusive access to software credits, enterprise platform discounts, and partner perks specifically negotiated to drastically reduce your operational burn rate while you build."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#2C5AF6] font-semibold text-sm tracking-wider uppercase mb-4">
              The Clarity
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 mb-4">
              No Guesswork. Just Answers.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Everything we build is rooted in logic. Here is exactly how the FounderPlane ecosystem operates.
            </p>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="max-w-[800px] mx-auto">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full flex items-center justify-between py-6 px-4 md:px-6 text-left transition-colors duration-200 rounded-lg group cursor-pointer ${
                      isOpen ? "bg-[#F4F7FF]" : "hover:bg-[#F4F7FF]/60"
                    }`}
                  >
                    <span className={`text-base md:text-lg font-semibold pr-8 transition-colors duration-200 ${
                      isOpen ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                    }`}>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: isOpen ? '#2C5AF6' : 'transparent', border: isOpen ? 'none' : '2px solid #2C5AF6' }}
                    >
                      <Plus 
                        className="w-4 h-4" 
                        style={{ color: isOpen ? 'white' : '#2C5AF6' }}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-6 pt-0">
                          <p className="text-slate-600 text-base leading-relaxed max-w-[720px]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
