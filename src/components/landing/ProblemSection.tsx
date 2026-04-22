import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import marketScene from "@/assets/market-scene.jpg";

const problems = [
  { icon: "💸", title: "Unreliable Payments", desc: "Cash-only transactions leave freelancers vulnerable and without receipts." },
  { icon: "🔍", title: "Invisible Talent", desc: "Skilled workers can't reach clients beyond their neighborhood." },
  { icon: "📚", title: "No Growth Path", desc: "Limited access to training and upskilling opportunities." },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-36 overflow-hidden" id="features">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={marketScene} alt="" className="w-full h-full object-cover opacity-[0.07]" loading="lazy" />
        <div className="absolute inset-0 bg-surface-gradient" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: large image with overlapping card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-lg)]">
              <img
                src={marketScene}
                alt="Tunisian marketplace"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card rounded-2xl p-5 shadow-[var(--shadow-lg)] max-w-[200px]">
              <div className="text-3xl font-heading font-bold text-foreground">73%</div>
              <div className="text-xs text-muted-foreground mt-1 font-body">of Tunisian freelancers lack digital payment access</div>
            </div>
          </motion.div>

          {/* Right: text + problem cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent font-body">The Challenge</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Tunisia's workforce deserves
              <br />
              <span className="text-muted-foreground">better tools.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed font-body">
              Millions of skilled professionals are held back by fragmented systems, informal economies, and limited access to technology.
            </p>

            <div className="mt-10 space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-card hover:shadow-[var(--shadow-sm)] transition-all duration-300 cursor-default"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{p.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 font-body">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;