import React from 'react';
import PosterCard from './PosterCard';
import { Poster } from '../types';

interface Props {
  posters: Poster[];
  onPosterClick: (poster: Poster) => void;
}

const PosterGrid: React.FC<Props> = ({ posters, onPosterClick }) => {
  const getGridSpan = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'landscape':
        return 'col-span-1 sm:col-span-2 row-span-1';
      case 'wide':
        return 'col-span-1 sm:col-span-2 row-span-1';
      case 'portrait':
        return 'col-span-1 row-span-2';
      case 'tall':
        return 'col-span-1 row-span-2';
      case 'square':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getAspectStyle = (aspectRatio: string): React.CSSProperties => {
    switch (aspectRatio) {
      case 'landscape':
        return { aspectRatio: '16 / 9' };
      case 'wide':
        return { aspectRatio: '2.39 / 1' };
      case 'portrait':
        return { aspectRatio: '2 / 3' };
      case 'tall':
        return { aspectRatio: '9 / 16' };
      case 'square':
        return { aspectRatio: '1 / 1' };
      default:
        return { aspectRatio: '1 / 1' };
    }
  };

  if (posters.length === 0) {
    return (
      <div className="py-32 text-center">
        <p className="text-neutral-300 text-sm tracking-wider uppercase">
          No posters found for this filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
      {posters.map((poster) => (
        <div
          key={poster.id}
          className={getGridSpan(poster.aspectRatio)}
        >
          <PosterCard
            poster={poster}
            style={getAspectStyle(poster.aspectRatio)}
            onClick={() => onPosterClick(poster)}
          />
        </div>
      ))}
    </div>
  );
};

export default PosterGrid;
