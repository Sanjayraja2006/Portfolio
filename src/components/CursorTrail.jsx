import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorTrail() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const canvasRef = useRef(null);

  // Spring physics for smooth follower cursor
  const cursorX = useSpring(-100, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 30 });

  const glowX = useSpring(-100, { stiffness: 180, damping: 22 });
  const glowY = useSpring(-100, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const checkTouch = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isCoarse || hasTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Apply custom-cursor-active class to hide default cursor on non-touch screens
    document.body.classList.add("custom-cursor-active");

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const particles = [];
    const colors = ["#7b6cff", "#55a4ff", "#a77cff", "#20d49b"];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      glowX.set(e.clientX);
      glowY.set(e.clientY);

      // Emit glowing particles along movement path
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3.5 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0,
          decay: Math.random() * 0.035 + 0.02,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life * 0.85;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice, cursorX, cursorY, glowX, glowY]);

  if (isTouchDevice) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
      {/* Central Cursor Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#7b6cff",
          boxShadow: "0 0 10px #7b6cff, 0 0 16px #55a4ff",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {/* Outer Eased Glow Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(123, 108, 255, 0.65)",
          background: "rgba(85, 164, 255, 0.06)",
          boxShadow: "0 0 14px rgba(123, 108, 255, 0.35)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
