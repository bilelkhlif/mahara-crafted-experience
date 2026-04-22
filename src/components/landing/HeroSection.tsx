import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroPerson from "@/assets/hero-person.jpg";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-accent/5 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - Left side, intentionally asymmetric */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">Launching across Tunisia</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Unlock your
              <span className="text-gradient-gold block mt-1">مَهَارَة</span>
              <span className="text-primary-foreground/80 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium block mt-2">
                Build skills. Earn more.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-primary-foreground/60 max-w-md leading-relaxed font-body">
              The all-in-one platform connecting Tunisian freelancers, artisans, and learners with opportunities, payments, and AI-powered growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/client"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
              >
                Find Talent
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="/provider" className="group inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-medium text-sm transition-colors duration-200 border border-primary-foreground/20 px-7 py-3.5 rounded-full hover:border-primary-foreground/40">
                I'm a Provider
              </a>
            </div>
          </motion.div>

          {/* Hero Image - Right side with overlapping card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroPerson}
                  alt="Tunisian professional working"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  width={1280}
                  height={960}
                />
              </div>

              {/* Floating card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-[var(--shadow-lg)] max-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">Revenue this month</div>
                    <div className="text-lg font-bold font-heading text-foreground">2,450 TND</div>
                  </div>
                </div>
              </motion.div>

              {/* Second floating element */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-dark rounded-xl p-3 shadow-[var(--shadow-lg)]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent text-sm">★★★★★</span>
                  <span className="text-xs text-primary-foreground/70 font-body">4.9 rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 md:mt-28 glass-dark rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <AnimatedCounter end={12000} suffix="+" label="Active Freelancers" />
          <AnimatedCounter end={850} suffix="+" label="Verified Artisans" />
          <AnimatedCounter end={45000} suffix="+" label="Transactions" />
          <AnimatedCounter end={98} suffix="%" label="Satisfaction Rate" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;