import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000, label }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-primary-foreground/60 mt-2 font-body">{label}</div>
    </div>
  );
};

export default AnimatedCounter;