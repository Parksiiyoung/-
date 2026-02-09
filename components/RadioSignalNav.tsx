import React, { useState, useEffect, useRef, useCallback } from 'react';
import { decadesData } from '../data/content';

const RadioSignalNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const stationsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Track which decade section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    decadesData.forEach((decade, index) => {
      const el = document.getElementById(decade.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Auto-scroll the nav to keep active station visible
  useEffect(() => {
    const btn = stationsRef.current[activeIndex];
    if (btn && navRef.current) {
      const nav = navRef.current;
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const offset = btnRect.left - navRect.left - navRect.width / 2 + btnRect.width / 2;
      nav.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleClick = useCallback((id: string, index: number) => {
    setActiveIndex(index);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Map decade index to a fake frequency value
  const getFrequency = (index: number) => {
    const baseFreq = 88.1;
    return (baseFreq + index * 2.2).toFixed(1);
  };

  return (
    <div className="sticky top-0 z-50 radio-signal-nav">
      {/* Main radio bar */}
      <div className="radio-bar-bg">
        {/* Top label */}
        <div className="flex items-center justify-between px-4 pt-2 pb-1">
          <div className="flex items-center gap-2">
            {/* Antenna icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="radio-antenna-icon">
              <path d="M12 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 6C6 6 9 3 12 3C15 3 18 6 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <path d="M3 3C3 3 7 -1 12 -1C17 -1 21 3 21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
              <path d="M8.5 8.5C8.5 8.5 10 7 12 7C14 7 15.5 8.5 15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
              <circle cx="12" cy="10" r="2" fill="currentColor"/>
            </svg>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase radio-label">Style FM</span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* Signal strength bars */}
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className="signal-bar"
                style={{
                  height: `${bar * 3 + 2}px`,
                  opacity: bar <= Math.min(5, Math.floor((activeIndex + 2) / 2) + 1) ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Frequency display */}
        <div className="px-4 pb-1">
          <div className="radio-freq-display">
            <span className="radio-freq-number">{getFrequency(activeIndex)}</span>
            <span className="radio-freq-unit">MHz</span>
          </div>
        </div>

        {/* Frequency dial / station band */}
        <div className="relative px-2 pb-3 pt-1" ref={navRef}>
          <div className="radio-dial-track overflow-x-auto no-scrollbar">
            {/* Tick marks background */}
            <div className="radio-ticks-container">
              {Array.from({ length: 51 }).map((_, i) => (
                <div
                  key={i}
                  className={`radio-tick ${i % 5 === 0 ? 'radio-tick-major' : 'radio-tick-minor'}`}
                />
              ))}
            </div>

            {/* Station buttons */}
            <div className="flex items-end relative z-10 px-2" style={{ minWidth: 'max-content' }}>
              {decadesData.map((decade, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={decade.id}
                    ref={(el) => { stationsRef.current[index] = el; }}
                    onClick={() => handleClick(decade.id, index)}
                    className={`radio-station ${isActive ? 'radio-station-active' : 'radio-station-inactive'}`}
                  >
                    {/* Station marker / needle */}
                    <div className={`radio-needle ${isActive ? 'radio-needle-active' : 'radio-needle-inactive'}`}>
                      <div className={`radio-needle-dot ${isActive ? 'radio-needle-dot-active' : ''}`} />
                      <div className={`radio-needle-line ${isActive ? 'radio-needle-line-active' : ''}`} />
                    </div>
                    {/* Label */}
                    <span className={`radio-station-label ${isActive ? 'radio-station-label-active' : ''}`}>
                      {decade.year}
                    </span>
                    {/* Subtitle on active */}
                    {isActive && (
                      <span className="radio-station-subtitle">
                        {decade.subtitle.split('/')[0].trim()}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioSignalNav;
