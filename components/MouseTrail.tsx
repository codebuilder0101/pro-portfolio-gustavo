"use client";
import React, { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: P[] = [];
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let lastMx = mx;
    let lastMy = my;
    let moved = false;

    const emit = (count: number) => {
      const speed = Math.min(20, Math.hypot(mx - lastMx, my - lastMy));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 8;
        const vr = Math.random() * 0.5 + 0.1;
        particles.push({
          x: mx + Math.cos(angle) * radius,
          y: my + Math.sin(angle) * radius,
          vx: Math.cos(angle) * vr + (mx - lastMx) * 0.02,
          vy: Math.sin(angle) * vr + (my - lastMy) * 0.02 - 0.1,
          life: 1,
          maxLife: 20 + Math.random() * 20 + speed * 0.25,
          size: Math.random() * 0.9 + 0.2,
          hue: 35 + Math.random() * 15,
        });
      }
      if (particles.length > 400) particles.splice(0, particles.length - 400);
    };

    const onMove = (e: MouseEvent) => {
      lastMx = mx;
      lastMy = my;
      mx = e.clientX;
      my = e.clientY;
      moved = true;
      const dist = Math.hypot(mx - lastMx, my - lastMy);
      emit(Math.min(5, Math.max(1, Math.floor(dist / 4))));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      if (!moved && Math.random() < 0.3) emit(1);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy -= 0.02;
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const alpha = Math.max(0, Math.min(1, p.life));
        const r = p.size * (0.5 + alpha * 1.0);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
        grad.addColorStop(0, `hsla(${p.hue}, 85%, 75%, ${alpha})`);
        grad.addColorStop(0.3, `hsla(${p.hue}, 75%, 60%, ${alpha * 0.6})`);
        grad.addColorStop(1, `hsla(${p.hue}, 60%, 40%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 95%, 90%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail" aria-hidden />;
};

export default MouseTrail;
