"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🔥 Reduce particles on mobile
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 40 : 90;

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      glow: Math.random() * 0.5 + 0.3,
    }));

    // 🖱️ Mouse move interaction
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Mouse reaction
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            p.vx += dx / dist * 0.02;
            p.vy += dy / dist * 0.02;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.glow})`;
        ctx.fill();
      });

      // 🔗 Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.strokeStyle = "rgba(255,255,255,0.35)";
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌅 Orange → White Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-200 to-white" />

      {/* ✨ Particles */}
      {mounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-70"
        />
      )}

      {/* 🧡 Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We are{" "}
          <span className="font-extrabold text-orange-600">
            RS DIGITAL SOLUTIONS
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          #Leading Website Development & Digital Marketing
        </p>

        {/* CTA */}
        <div
  className="
    mt-10 inline-flex items-center
    rounded-xl overflow-hidden
    shadow-xl
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-2xl
    animate-pulse
  "
>
  {/* Left label */}
  <span
    className="
      bg-orange-500 text-white
      px-6 py-3 font-bold
      transition-transform duration-300
      hover:translate-x-1
    "
  >
    What we build
  </span>

  {/* Right content */}
  <span
    className="
      bg-white text-gray-900
      px-6 py-3 font-semibold
      transition-all duration-300
      hover:text-orange-600
    "
  >
    High-Performance Websites • SEO • Web Apps
  </span>
</div>

      </div>
    </section>
  );
}
