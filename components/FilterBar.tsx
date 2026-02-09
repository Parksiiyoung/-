import React, { useRef } from 'react';

interface Props {
  years: string[];
  categories: string[];
  activeYear: string | null;
  activeCategory: string | null;
  onYearClick: (year: string | null) => void;
  onCategoryClick: (cat: string | null) => void;
  darkMode: boolean;
}

const FilterBar: React.FC<Props> = ({
  years,
  categories,
  activeYear,
  activeCategory,
  onYearClick,
  onCategoryClick,
  darkMode,
}) => {
  const yearScrollRef = useRef<HTMLDivElement>(null);
  const catScrollRef = useRef<HTMLDivElement>(null);

  const inactiveColor = darkMode ? 'text-neutral-500' : 'text-neutral-400';
  const activeColor = darkMode ? 'text-white' : 'text-neutral-900';
  const borderColor = darkMode ? 'border-neutral-600' : 'border-neutral-900';

  return (
    <div className="relative mt-2">
      {/* Divider line under header */}
      <div className={`w-full h-px ${darkMode ? 'bg-neutral-700' : 'bg-neutral-300'}`} />

      {/* Year filter row */}
      <div className="relative">
        <div
          ref={yearScrollRef}
          className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10 lg:px-16 py-3 overflow-x-auto no-scrollbar max-w-[1200px] mx-auto justify-center"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearClick(activeYear === year ? null : year)}
              className={`text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeYear === year ? activeColor : inactiveColor
              } hover:${darkMode ? 'text-white' : 'text-neutral-900'}`}
            >
              {year}
            </button>
          ))}
          {/* ALL button */}
          <button
            onClick={() => onYearClick(null)}
            className={`text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap px-4 py-0.5 rounded-full border transition-all duration-300 ${
              activeYear === null
                ? `${activeColor} ${borderColor}`
                : `${inactiveColor} border-transparent hover:${borderColor}`
            }`}
          >
            ALL
          </button>
        </div>
      </div>

      {/* Ruler tick marks */}
      <div className="ruler-line w-full" />

      {/* Category filter row */}
      <div className="relative">
        <div
          ref={catScrollRef}
          className="flex items-center gap-8 sm:gap-14 px-6 sm:px-10 lg:px-16 py-3 overflow-x-auto no-scrollbar max-w-[1200px] mx-auto justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryClick(activeCategory === cat ? null : cat)}
              className={`text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-all duration-300 ${
                activeCategory === cat ? activeColor : inactiveColor
              } hover:${darkMode ? 'text-white' : 'text-neutral-900'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom ruler tick marks */}
      <div className="ruler-line-thin w-full" />
    </div>
  );
};

export default FilterBar;
