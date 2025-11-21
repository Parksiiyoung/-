import React from 'react';
import { decadesData } from '../data/content';

const Sidebar: React.FC = () => {
  return (
    <nav className="hidden md:block md:w-1/5 md:sticky md:top-12 md:self-start">
      <ul className="space-y-4 border-l border-gray-200 pl-4 text-sm text-gray-400">
        {decadesData.map((decade) => (
          <li key={decade.id}>
            <a 
              href={`#${decade.id}`} 
              className="hover:text-black hover:font-bold transition-colors block py-1"
            >
              {decade.year} <span className="hidden lg:inline text-xs font-normal ml-1 opacity-70">{decade.subtitle.split('/')[0]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;