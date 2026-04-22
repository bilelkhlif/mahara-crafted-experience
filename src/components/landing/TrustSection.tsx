import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import { Shield, Lock, BadgeCheck, Award } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "Bank-Grade Security", desc: "256-bit encryption protects every transaction." },
  { icon: Lock, title: "Escrow Protection", desc: "Funds held safely until work is delivered and approved." },
  { icon: BadgeCheck, title: "Verified Profiles", desc: "ID verification and skill assessments for all professionals." },
  { icon: Award, title: "Quality Guarantee", desc: "Dispute resolution and satisfaction guarantees on every project." },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="trust" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-gradient" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-body">Trust & Security</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Your money and data are{" "}
              <span className="text-muted-foreground">always safe.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed font-body">
              Built with enterprise-grade infrastructure and compliance standards. Regulated by the Central Bank of Tunisia.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold font-heading text-foreground">PCI</div>
                DSS Compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold font-heading text-foreground">ISO</div>
                27001 Certified
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={22} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;