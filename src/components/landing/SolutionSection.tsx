import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";
import { CreditCard, Users, GraduationCap, ShieldCheck } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.jpg";
import tutoring from "@/assets/tutoring.jpg";
import artisan from "@/assets/artisan.jpg";

const steps = [
  {
    id: "payments",
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Accept mobile money, bank transfers, and card payments with instant settlement and full transparency.",
    image: appDashboard,
  },
  {
    id: "connect",
    icon: Users,
    title: "Find & Connect",
    desc: "Smart matching connects you with the right clients and projects based on your skills and location.",
    image: artisan,
  },
  {
    id: "learn",
    icon: GraduationCap,
    title: "Learn & Grow",
    desc: "Access curated courses, mentorship programs, and certifications tailored to the Tunisian market.",
    image: tutoring,
  },
  {
    id: "trust",
    icon: ShieldCheck,
    title: "Built-in Trust",
    desc: "Verified profiles, reviews, escrow protection, and dispute resolution keep every transaction safe.",
    image: appDashboard,
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solution" className="py-24 md:py-36 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent font-body">How It Works</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Everything you need,{" "}
            <span className="text-muted-foreground">one platform.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Step selector - left */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, i) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group ${
                  activeStep === i
                    ? "bg-primary shadow-[var(--shadow-md)]"
                    : "hover:bg-muted"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeStep === i ? "bg-accent" : "bg-muted group-hover:bg-background"
                  }`}>
                    <step.icon size={20} className={activeStep === i ? "text-accent-foreground" : "text-muted-foreground"} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-heading font-semibold ${activeStep === i ? "text-primary-foreground" : "text-foreground"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-1 font-body leading-relaxed ${
                      activeStep === i ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Image preview - right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-lg)] bg-muted aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>

            {/* Step indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i ? "w-8 bg-accent" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;