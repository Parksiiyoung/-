import React from 'react';
import Sidebar from './components/Sidebar';
import AIMixer from './components/AIMixer';
import DecadeSection from './components/DecadeSection';
import MobileNav from './components/MobileNav';
import { decadesData } from './data/content';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      
      {/* Mobile Navigation (Sticky Top) */}
      <MobileNav />

      <div className="container mx-auto max-w-7xl p-6 md:p-12 pt-0 md:pt-12">
        
        {/* Header */}
        <header id="intro" className="my-12 md:my-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-slate-900">
            STYLE TIMELINE<br />
            <span className="text-slate-300 font-light text-4xl md:text-6xl block mt-2">1920 — 2010</span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl font-normal text-slate-700 border-l-4 border-black pl-6 py-2">
            <p>
              디자인은 단순한 조형의 나열이 아닌, <strong>의미의 축조(Architecture of Meaning)</strong>입니다.
            </p>
            <p>
              서로 이질적으로 보이는 요소들도 '시대의 욕망'이라는 맥락 안에서는 필연적인 관계를 맺습니다. 
              1960년대의 차가운 우주선 실버와 따뜻한 파스텔 가전은 '미래'와 '안정'이라는 당시 대중의 양가적 심리를 동시에 대변합니다.
            </p>
            <p>
              현대의 디자인은 지난 시대의 시각적 유산을 발굴하고 재조합하는 과정에서 탄생합니다. 
              시대를 관통하는 스타일의 문법을 이해하는 것은, 창작자에게 가장 강력한 무기가 됩니다.
            </p>
          </div>
        </header>

        {/* AI Mixer */}
        <AIMixer />

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row relative gap-12 md:gap-20">
          <Sidebar />
          
          <main className="md:w-4/5">
            {decadesData.map((decade) => (
              <DecadeSection key={decade.id} data={decade} />
            ))}
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-100 pt-8 text-center text-slate-400 text-sm pb-12">
          <p>© 2025 Design History Course. Educational Material.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;