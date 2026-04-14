"use client";
import React, { useEffect, useRef } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type Star = { x: number; y: number; r: number; tw: number; a: number };
    type Shoot = { x: number; y: number; len: number; speed: number; life: number; active: boolean };

    const starCount = Math.floor((w * h) / 6000);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
      a: Math.random(),
    }));

    const shoots: Shoot[] = Array.from({ length: 3 }, () => ({
      x: 0, y: 0, len: 0, speed: 0, life: 0, active: false,
    }));

    const launchShoot = (s: Shoot) => {
      s.x = Math.random() * w * 0.8;
      s.y = Math.random() * h * 0.4;
      s.len = Math.random() * 120 + 80;
      s.speed = Math.random() * 8 + 6;
      s.life = 1;
      s.active = true;
    };

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.a += s.tw;
        const alpha = 0.4 + Math.abs(Math.sin(s.a)) * 0.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 229, 205, ${alpha})`;
        ctx.fill();
      }

      for (const s of shoots) {
        if (!s.active) {
          if (Math.random() < 0.003) launchShoot(s);
          continue;
        }
        s.x += s.speed;
        s.y += s.speed * 0.5;
        s.life -= 0.012;
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.5);
        grad.addColorStop(0, `rgba(247, 229, 205, ${s.life})`);
        grad.addColorStop(1, "rgba(247, 229, 205, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y - s.len * 0.5);
        ctx.stroke();
        if (s.life <= 0 || s.x > w || s.y > h) s.active = false;
      }

      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden />;
};

export default Starfield;
