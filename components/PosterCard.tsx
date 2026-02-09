import React, { useState } from 'react';
import { Poster } from '../types';

interface Props {
  poster: Poster;
  style: React.CSSProperties;
  onClick: () => void;
}

const PosterCard: React.FC<Props> = ({ poster, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLightBg = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  };

  const light = isLightBg(poster.color);
  const textColor = light ? '#1a1a1a' : '#ffffff';
  const subtextColor = light ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.55)';

  return (
    <div
      className="relative cursor-pointer overflow-hidden group w-full h-full"
      style={{
        ...style,
        backgroundColor: poster.color,
        minHeight: '200px',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative accent element */}
      <div
        className="absolute transition-all duration-700 ease-out"
        style={{
          backgroundColor: poster.accentColor,
          opacity: isHovered ? 0.15 : 0.08,
          width: '140%',
          height: '140%',
          borderRadius: '50%',
          top: '60%',
          left: '-20%',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        }}
      />

      {/* Accent line */}
      <div
        className="absolute top-0 left-0 h-full transition-all duration-500"
        style={{
          width: isHovered ? '4px' : '2px',
          backgroundColor: poster.accentColor,
          opacity: isHovered ? 1 : 0.5,
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        {/* Top area */}
        <div className="flex justify-between items-start">
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-medium"
            style={{ color: subtextColor }}
          >
            {poster.client}
          </span>
          <span
            className="text-[10px] tracking-[0.15em] font-medium"
            style={{ color: subtextColor }}
          >
            {poster.year}
          </span>
        </div>

        {/* Bottom area */}
        <div>
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight leading-tight mb-1 transition-transform duration-500"
            style={{
              color: textColor,
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
          >
            {poster.title}
          </h3>
          <p
            className="text-xs font-light mb-3"
            style={{ color: subtextColor }}
          >
            {poster.titleKo}
          </p>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-1.5 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            {poster.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-wider uppercase px-2 py-0.5 border"
                style={{
                  color: textColor,
                  borderColor: light ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)',
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

export default PosterCard;
