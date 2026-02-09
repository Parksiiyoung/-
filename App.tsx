import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import TagFilter from './components/TagFilter';
import PosterGrid from './components/PosterGrid';
import PosterModal from './components/PosterModal';
import { posters, allTags } from './data/content';
import { Poster } from './types';

const App: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const filteredPosters = useMemo(() => {
    if (!activeTag) return posters;
    return posters.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const handleTagClick = useCallback((tag: string | null) => {
    setActiveTag(tag);
  }, []);

  const handlePosterClick = useCallback((poster: Poster) => {
    setSelectedPoster(poster);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPoster(null);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <TagFilter
          tags={allTags}
          activeTag={activeTag}
          onTagClick={handleTagClick}
        />
        <PosterGrid
          posters={filteredPosters}
          onPosterClick={handlePosterClick}
        />
      </main>

      <footer className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 tracking-wider uppercase">
            &copy; 2025 Studio Frame. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-400 tracking-wider uppercase">
            <span className="hover:text-neutral-900 cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-neutral-900 cursor-pointer transition-colors">Behance</span>
            <span className="hover:text-neutral-900 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>

      {selectedPoster && (
        <PosterModal poster={selectedPoster} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
