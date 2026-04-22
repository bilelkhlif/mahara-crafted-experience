import { useEffect, useRef } from "react";

interface MiniChartProps {
  data: number[];
  color?: string;
  height?: number;
}

export default function MiniChart({ data, color = "hsl(220, 72%, 25%)", height = 60 }: MiniChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const stepX = w / (data.length - 1);
    const pad = 4;

    ctx.clearRect(0, 0, w, h);

    // gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color.replace(")", " / 0.15)").replace("hsl(", "hsla("));
    gradient.addColorStop(1, color.replace(")", " / 0)").replace("hsl(", "hsla("));

    ctx.beginPath();
    ctx.moveTo(0, h);
    data.forEach((v, i) => {
      const x = i * stepX;
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      if (i === 0) ctx.lineTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // line
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = i * stepX;
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.stroke();
  }, [data, color, height]);

  return <canvas ref={canvasRef} className="w-full" style={{ height }} />;
}