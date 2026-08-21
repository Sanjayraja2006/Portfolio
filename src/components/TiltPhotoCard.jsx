import React, { useRef, useState, useCallback } from "react";

export default function TiltPhotoCard() {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [shimmerStyle, setShimmerStyle] = useState({ opacity: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxTilt = 12;
      const rotateX = -(dy / (rect.height / 2)) * maxTilt;
      const rotateY = (dx / (rect.width / 2)) * maxTilt;
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;

      setStyle({
        transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
        transition: "transform 0.08s linear",
      });
      setShimmerStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${px}% ${py}%, rgba(0,255,220,0.07) 0%, transparent 65%)`,
        transition: "opacity 0.1s ease",
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
    });
    setShimmerStyle({ opacity: 0, transition: "opacity 0.35s ease" });
  }, []);

  return (
    <div className="profile-card-scene">
      <div
        ref={cardRef}
        className="profile-card"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Corner bracket decorations */}
        <span className="pc-corner pc-tl" />
        <span className="pc-corner pc-tr" />
        <span className="pc-corner pc-bl" />
        <span className="pc-corner pc-br" />

        {/* Shimmer overlay */}
        <div className="pc-shimmer" style={shimmerStyle} />

        {/* Hexagonal Photo */}
        <div className="pc-hex-wrap">
          <div className="pc-hex">
            <img src="Profile.jpeg" alt="Sanjayraja E" className="pc-hex-photo" />
          </div>
          {/* Hex glow ring */}
          <div className="pc-hex-ring" />
        </div>

        {/* Name */}
        <h3 className="pc-name">SANJAYRAJA E.</h3>

        {/* Role */}
        <p className="pc-role">FRONTEND DEVELOPER</p>

        {/* Divider */}
        <div className="pc-divider" />

        {/* Stats */}
        <div className="pc-stats">
          <div className="pc-stat">
            <strong>6+</strong>
            <span>PROJECTS</span>
          </div>
          <div className="pc-stat-sep" />
          <div className="pc-stat">
            <strong>1</strong>
            <span>INTERNSHIP</span>
          </div>
          <div className="pc-stat-sep" />
          <div className="pc-stat">
            <strong>3</strong>
            <span>CERTS</span>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="pc-tags">
          {["Java", "Python", "React", "Node.js", "MongoDB", "Flutter", "UI/UX"].map((t) => (
            <span key={t} className="pc-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
