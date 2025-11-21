import React, { useState } from 'react';
import { eraOptions } from '../data/content';
import { generateMix } from '../services/geminiService';
import { marked } from 'marked';

const AIMixer: React.FC = () => {
  const [eraA, setEraA] = useState(eraOptions[0].value);
  const [eraB, setEraB] = useState(eraOptions[1].value);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMix = async () => {
    setLoading(true);
    setResult(null);
    const generatedText = await generateMix(eraA, eraB);
    setResult(generatedText);
    setLoading(false);
  };

  return (
    <section id="ai-mixer" className="bg-white border border-black p-8 my-16 shadow-sm max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold flex items-center justify-center gap-2 text-slate-900">
          <span>✨ AI 시대 초월 디자인 믹서</span>
        </h3>
        <p className="text-slate-500 mt-2 text-sm">두 시대의 스타일을 선택하여 새로운 디자인 컨셉을 실험해보세요.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-end justify-center">
        <div className="w-full md:w-1/3">
          <label className="block text-xs font-bold mb-2 text-slate-400 tracking-wider">STYLE A</label>
          <div className="relative">
            <select 
              value={eraA}
              onChange={(e) => setEraA(e.target.value)}
              className="w-full p-3 border-b-2 border-slate-200 focus:border-black bg-transparent outline-none transition-colors font-bold appearance-none rounded-none"
            >
              {eraOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="absolute right-0 top-4 pointer-events-none text-xs text-slate-400">▼</div>
          </div>
        </div>

        <div className="text-2xl font-light pb-3 text-slate-300 hidden md:block">+</div>

        <div className="w-full md:w-1/3">
          <label className="block text-xs font-bold mb-2 text-slate-400 tracking-wider">STYLE B</label>
          <div className="relative">
            <select 
              value={eraB}
              onChange={(e) => setEraB(e.target.value)}
              className="w-full p-3 border-b-2 border-slate-200 focus:border-black bg-transparent outline-none transition-colors font-bold appearance-none rounded-none"
            >
              {eraOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="absolute right-0 top-4 pointer-events-none text-xs text-slate-400">▼</div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <button 
            onClick={handleMix}
            disabled={loading}
            className="w-full bg-black text-white font-bold p-3 md:px-8 hover:bg-slate-800 transition-all duration-200 disabled:opacity-70 whitespace-nowrap"
          >
            {loading ? 'MIXING...' : 'MIX STYLES'}
          </button>
        </div>
      </div>

      {/* Result Area */}
      {(result || loading) && (
        <div className="mt-10 p-8 bg-slate-50 border border-slate-100 rounded-sm min-h-[120px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-4 text-slate-500">
               <span className="loading-sparkle text-2xl mb-2">✨</span>
               <p className="text-sm animate-pulse">AI가 두 스타일을 분석하고 있습니다...</p>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none text-slate-800">
               <div dangerouslySetInnerHTML={{ __html: marked.parse(result || "") as string }} />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AIMixer;