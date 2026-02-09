import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      <nav className="flex items-center justify-between mb-16">
        <div className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-medium">
          Seoul, KR
        </div>
        <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium">
          <span className="text-neutral-900 cursor-pointer">Works</span>
          <span className="hover:text-neutral-900 cursor-pointer transition-colors">About</span>
          <span className="hover:text-neutral-900 cursor-pointer transition-colors">Contact</span>
        </div>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.9] text-neutral-900 mb-6">
          STUDIO<br />FRAME
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
          영화와 드라마의 첫인상을 디자인합니다.<br />
          포스터 디자인 스튜디오.
        </p>
      </div>
    </header>
  );
};

export default Header;
