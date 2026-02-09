import React, { useEffect } from 'react';
import { Poster } from '../types';

interface Props {
  poster: Poster;
  onClose: () => void;
}

const PosterModal: React.FC<Props> = ({ poster, onClose }) => {
  useEffect(() => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        style={{ backgroundColor: poster.color }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ color: textColor }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>

        {/* Accent line */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ backgroundColor: poster.accentColor }}
        />

        {/* Decorative circle */}
        <div
          className="absolute opacity-10"
          style={{
            backgroundColor: poster.accentColor,
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            bottom: '-100px',
            right: '-50px',
          }}
        />

        <div className="p-10 sm:p-14">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: subtextColor }}
              >
                {poster.client}
              </span>
              <span style={{ color: subtextColor }}>|</span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: subtextColor }}
              >
                {poster.year}
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-2"
              style={{ color: textColor }}
            >
              {poster.title}
            </h2>
            <p
              className="text-lg font-light mb-6"
              style={{ color: subtextColor }}
            >
              {poster.titleKo}
            </p>

            <div
              className="w-12 h-px mb-6"
              style={{ backgroundColor: poster.accentColor }}
            />

            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: subtextColor }}
            >
              {poster.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {poster.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider uppercase px-3 py-1 border"
                style={{
                  color: textColor,
                  borderColor: light ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span
                className="block text-[10px] tracking-[0.2em] uppercase mb-1 font-medium"
                style={{ color: subtextColor }}
              >
                Type
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: textColor }}
              >
                {poster.aspectRatio === 'portrait' || poster.aspectRatio === 'tall'
                  ? 'Vertical Poster'
                  : poster.aspectRatio === 'landscape' || poster.aspectRatio === 'wide'
                  ? 'Horizontal Key Art'
                  : 'Square Format'}
              </span>
            </div>
            <div>
              <span
                className="block text-[10px] tracking-[0.2em] uppercase mb-1 font-medium"
                style={{ color: subtextColor }}
              >
                Color
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 border"
                  style={{
                    backgroundColor: poster.accentColor,
                    borderColor: light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)',
                  }}
                />
                <span
                  className="text-xs font-mono"
                  style={{ color: textColor }}
                >
                  {poster.accentColor}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterModal;
