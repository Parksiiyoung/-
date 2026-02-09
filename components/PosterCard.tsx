import React, { useState, useRef, useEffect } from 'react';
import { Poster } from '../types';

interface Props {
  poster: Poster;
  darkMode: boolean;
  onClick: () => void;
  delay: number;
}

const PosterCard: React.FC<Props> = ({ poster, darkMode, onClick, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLightBg = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  };

  const light = isLightBg(poster.color);
  const textColor = light ? '#1a1a1a' : '#ffffff';
  const subtextColor = light ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)';

  return (
    <div
      ref={ref}
      className="poster-card cursor-pointer overflow-hidden relative"
      style={{
        backgroundColor: poster.color,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.4s ease`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, transparent 40%, ${poster.color} 100%)`,
          opacity: isHovered ? 0.9 : 0,
        }}
      />

      {/* Info overlay on hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 transition-all duration-400"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
        }}
      >
        <p
          className="text-[10px] tracking-[0.15em] uppercase font-medium mb-1"
          style={{ color: subtextColor }}
        >
          {poster.client} — {poster.year}
        </p>
        <h3
          className="text-base sm:text-lg font-bold tracking-tight leading-tight"
          style={{ color: textColor }}
        >
          {poster.title}
        </h3>
        <p
          className="text-[11px] mt-0.5 font-light"
          style={{ color: subtextColor }}
        >
          {poster.titleKo}
        </p>
      </div>
    </div>
  );
};

export default PosterCard;
