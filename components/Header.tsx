import React from 'react';

interface Props {
  darkMode: boolean;
  onToggleDark: () => void;
}

const Header: React.FC<Props> = ({ darkMode, onToggleDark }) => {
  return (
    <header className="px-6 sm:px-10 lg:px-16 pt-6 pb-4">
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-black tracking-tight uppercase">
          BITNANEUN
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 sm:gap-12">
          <span className="text-sm sm:text-base font-bold tracking-wide cursor-pointer uppercase">
            HOME
          </span>
          <span className={`text-sm sm:text-base tracking-wide cursor-pointer uppercase transition-colors ${darkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-neutral-900'}`}>
            LOG
          </span>
          <span className={`text-sm sm:text-base tracking-wide cursor-pointer uppercase transition-colors ${darkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-neutral-900'}`}>
            INFO
          </span>

          {/* Dark mode toggle */}
          <button
            onClick={onToggleDark}
            className={`relative w-12 h-6 rounded-full border-2 transition-colors duration-300 flex-shrink-0 ${
              darkMode
                ? 'bg-white border-white'
                : 'bg-transparent border-neutral-900'
            }`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'left-[calc(100%-18px)] bg-neutral-900'
                  : 'left-0.5 bg-neutral-900'
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
