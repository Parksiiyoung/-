import React from 'react';
import { decadesData } from '../data/content';

const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 overflow-x-auto no-scrollbar shadow-sm">
      <ul className="flex whitespace-nowrap px-4 py-3 space-x-3">
        {decadesData.map((decade) => (
          <li key={decade.id}>
            <a 
              href={`#${decade.id}`} 
              className="block text-xs font-bold text-slate-500 hover:text-white hover:bg-black bg-slate-100 px-4 py-2 rounded-full transition-all duration-200"
            >
              {decade.year}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;