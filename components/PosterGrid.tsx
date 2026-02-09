import React, { useMemo } from 'react';
import PosterCard from './PosterCard';
import { Poster } from '../types';

interface Props {
  posters: Poster[];
  onPosterClick: (poster: Poster) => void;
  darkMode: boolean;
}

/*
 * Organic 3-column scattered layout matching the reference:
 * Each poster gets a size based on its aspect ratio and column position,
 * with varied vertical offsets to create the staggered look.
 */

const getHeightForAspect = (aspect: string): number => {
  switch (aspect) {
    case 'portrait': return 320;
    case 'tall': return 400;
    case 'landscape': return 200;
    case 'wide': return 180;
    case 'square': return 250;
    default: return 260;
  }
};

const getWidthPercent = (aspect: string): string => {
  switch (aspect) {
    case 'landscape':
    case 'wide': return '100%';
    case 'portrait': return '85%';
    case 'tall': return '80%';
    case 'square': return '90%';
    default: return '90%';
  }
};

const PosterGrid: React.FC<Props> = ({ posters, onPosterClick, darkMode }) => {
  // Distribute posters across 3 columns
  const columns = useMemo(() => {
    const cols: Poster[][] = [[], [], []];
    posters.forEach((poster, i) => {
      cols[i % 3].push(poster);
    });
    return cols;
  }, [posters]);

  // Stagger offsets for each column (top padding)
  const columnOffsets = [0, 40, 16];

  if (posters.length === 0) {
    return (
      <div className="py-32 text-center animate-fade-in">
        <p className={`text-sm tracking-wider uppercase ${darkMode ? 'text-neutral-600' : 'text-neutral-300'}`}>
          No posters found for this filter.
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-5 sm:gap-6 lg:gap-8" key={posters.map(p => p.id).join(',')}>
      {columns.map((col, colIdx) => (
        <div
          key={colIdx}
          className="flex-1 flex flex-col gap-5 sm:gap-6 lg:gap-8"
          style={{ paddingTop: `${columnOffsets[colIdx]}px` }}
        >
          {col.map((poster, rowIdx) => {
            const height = getHeightForAspect(poster.aspectRatio);
            const width = getWidthPercent(poster.aspectRatio);
            // Alternate alignment within column
            const alignSelf =
              rowIdx % 2 === 0
                ? colIdx === 0 ? 'flex-start' : colIdx === 2 ? 'flex-end' : 'center'
                : colIdx === 0 ? 'flex-end' : colIdx === 2 ? 'flex-start' : 'center';

            return (
              <div
                key={poster.id}
                className="flex"
                style={{ justifyContent: alignSelf === 'flex-start' ? 'flex-start' : alignSelf === 'flex-end' ? 'flex-end' : 'center' }}
              >
                <div style={{ width, height: `${height}px` }}>
                  <PosterCard
                    poster={poster}
                    darkMode={darkMode}
                    onClick={() => onPosterClick(poster)}
                    delay={colIdx * 80 + rowIdx * 120}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PosterGrid;
