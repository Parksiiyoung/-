import React, { useEffect, useState } from 'react';
import { Poster } from '../types';

interface Props {
  poster: Poster;
  onClose: () => void;
  darkMode: boolean;
}

const PosterModal: React.FC<Props> = ({ poster, onClose, darkMode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isLightBg = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  };

  const light = isLightBg(poster.color);
  const textColor = light ? '#1a1a1a' : '#ffffff';
  const subtextColor = light ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      style={{
        opacity: show ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative max-w-2xl w-full max-h-[85vh] overflow-hidden"
        style={{
          backgroundColor: poster.color,
          transform: show ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-60"
          style={{ color: textColor }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="3" x2="15" y2="15" />
            <line x1="15" y1="3" x2="3" y2="15" />
          </svg>
        </button>

        {/* Poster color preview area */}
        <div className="h-48 sm:h-64 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${poster.accentColor}33 0%, ${poster.color} 60%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl sm:text-8xl font-black tracking-tighter opacity-10"
              style={{ color: textColor }}
            >
              {poster.title.charAt(0)}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: subtextColor }}>
              {poster.client}
            </span>
            <span className="text-[10px]" style={{ color: subtextColor }}>|</span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: subtextColor }}>
              {poster.year}
            </span>
            <span className="text-[10px]" style={{ color: subtextColor }}>|</span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: subtextColor }}>
              {poster.category}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-1" style={{ color: textColor }}>
            {poster.title}
          </h2>
          <p className="text-base font-light mb-5" style={{ color: subtextColor }}>
            {poster.titleKo}
          </p>

          <div className="w-10 h-px mb-5" style={{ backgroundColor: poster.accentColor }} />

          <p className="text-sm leading-relaxed mb-6" style={{ color: subtextColor }}>
            {poster.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {poster.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider uppercase px-3 py-1 border"
                style={{
                  color: textColor,
                  borderColor: light ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterModal;
