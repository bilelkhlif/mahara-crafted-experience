import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="py-24 md:py-36 relative overflow-hidden bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-hero-gradient rounded-[2rem] p-10 md:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-accent/5 blur-2xl" />

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to build your
              <span className="text-gradient-gold block mt-1">future with Mahara?</span>
            </h2>
            <p className="mt-5 text-primary-foreground/60 font-body max-w-md mx-auto leading-relaxed">
              Join thousands of Tunisian professionals already growing their careers and income on the platform built for them.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
              >
                Create Free Account
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-medium text-sm transition-colors border border-primary-foreground/20 px-8 py-4 rounded-full hover:border-primary-foreground/40"
              >
                Talk to Sales
              </a>
            </div>

            <p className="mt-6 text-xs text-primary-foreground/40 font-body">
              No credit card required · Free forever for individuals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;