import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PosterGrid from './components/PosterGrid';
import PosterModal from './components/PosterModal';
import { posters, allYears, allCategories } from './data/content';
import { Poster } from './types';

const App: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const filteredPosters = useMemo(() => {
    let result = posters;
    if (activeYear) {
      result = result.filter((p) => p.year === activeYear);
    }
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    return result;
  }, [activeYear, activeCategory]);

  const handleYearClick = useCallback((year: string | null) => {
    setActiveYear(year);
  }, []);

  const handleCategoryClick = useCallback((cat: string | null) => {
    setActiveCategory(cat);
  }, []);

  const handlePosterClick = useCallback((poster: Poster) => {
    setSelectedPoster(poster);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPoster(null);
  }, []);

  const toggleDark = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#111] text-white' : 'bg-white text-neutral-900'}`}>
      <Header darkMode={darkMode} onToggleDark={toggleDark} />

      <FilterBar
        years={allYears}
        categories={allCategories}
        activeYear={activeYear}
        activeCategory={activeCategory}
        onYearClick={handleYearClick}
        onCategoryClick={handleCategoryClick}
        darkMode={darkMode}
      />

      <main className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-20">
        <PosterGrid
          posters={filteredPosters}
          onPosterClick={handlePosterClick}
          darkMode={darkMode}
        />
      </main>

      {selectedPoster && (
        <PosterModal poster={selectedPoster} onClose={handleCloseModal} darkMode={darkMode} />
      )}
    </div>
  );
};

export default App;
