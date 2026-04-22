import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import { Sparkles, MessageSquare, TrendingUp, Zap } from "lucide-react";
import aiVisual from "@/assets/ai-visual.jpg";

const aiFeatures = [
  { icon: MessageSquare, text: "Smart client-freelancer matching" },
  { icon: TrendingUp, text: "Revenue optimization insights" },
  { icon: Zap, text: "Automated invoicing & proposals" },
  { icon: Sparkles, text: "Personalized learning paths" },
];

const AISection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="ai" className="py-24 md:py-36 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aiVisual} alt="" className="w-full h-full object-cover opacity-20 mix-blend-screen" loading="lazy" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* AI chat mockup - left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="glass-dark rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles size={14} className="text-accent-foreground" />
                </div>
                <span className="text-sm font-heading font-semibold text-primary-foreground">Mahara AI</span>
                <span className="ml-auto text-[10px] text-primary-foreground/40 font-body">Just now</span>
              </div>

              <div className="space-y-3">
                <div className="bg-primary/30 rounded-xl rounded-tl-sm p-3.5">
                  <p className="text-sm text-primary-foreground/90 font-body">
                    Based on your skills in web development and your location in Tunis, I found 12 new matching projects this week. Shall I prepare proposals?
                  </p>
                </div>
                <div className="bg-accent/20 rounded-xl rounded-tr-sm p-3.5 ml-8">
                  <p className="text-sm text-primary-foreground/90 font-body">
                    Yes, prioritize the top 3 by budget 🎯
                  </p>
                </div>
                <div className="bg-primary/30 rounded-xl rounded-tl-sm p-3.5">
                  <p className="text-sm text-primary-foreground/90 font-body">
                    Done! I've drafted 3 personalized proposals. Your estimated win rate: <span className="text-accent font-semibold">78%</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 glass-dark rounded-full px-4 py-2.5 text-xs text-primary-foreground/40 font-body">
                  Ask Mahara AI anything...
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles size={12} className="text-accent-foreground" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content - right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-body">AI-Powered</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3 leading-tight">
              Your personal
              <br />
              <span className="text-primary-foreground/60">career assistant.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/60 leading-relaxed font-body max-w-lg">
              Mahara AI learns your strengths and goals to deliver actionable insights, automate tedious tasks, and accelerate your growth.
            </p>

            <div className="mt-8 space-y-4">
              {aiFeatures.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <f.icon size={16} className="text-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/80 font-body">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;