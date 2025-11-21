import React, { useState } from 'react';
import { DecadeContent } from '../types';
import { reinterpretDecade } from '../services/geminiService';
import { marked } from 'marked';

interface Props {
  data: DecadeContent;
}

const DecadeSection: React.FC<Props> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);

  const handleReinterpret = async () => {
    if (aiResult) {
        setAiResult(null); // Toggle off if showing
        return;
    }
    
    setLoading(true);
    const result = await reinterpretDecade(data.year + " " + data.subtitle);
    setAiResult(result);
    setLoading(false);
  };

  return (
    <section id={data.id} className="decade-section mb-32 scroll-mt-24 border-b border-gray-100 pb-12 last:border-0">
      <div className="mb-8">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-2">{data.year}</h2>
        <p className="text-xl md:text-2xl font-medium text-slate-500">{data.subtitle}</p>
      </div>

      <p className="mb-12 text-lg leading-relaxed text-slate-700 max-w-3xl">
        {data.description}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Research Kit */}
        <div className="lg:col-span-4 bg-slate-50 p-6 h-fit border border-slate-200 border-l-4 border-l-black">
          <h4 className="font-bold text-base mb-6 border-b border-slate-200 pb-2">IMAGE RESEARCH KIT</h4>
          
          <div className="mb-6">
            <h5 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">⬛ Recommended Images</h5>
            <ul className="text-sm space-y-2 text-slate-700 list-disc list-inside">
              {data.researchKit.images.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">🔎 Keywords</h5>
            <div className="flex flex-wrap gap-2">
              {data.researchKit.keywords.map((kw, idx) => (
                <span key={idx} className="inline-block bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-600 font-mono">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">📌 Visual Vibe</h5>
            <p className="text-sm text-slate-700 leading-snug">{data.researchKit.vibe}</p>
          </div>
        </div>

        {/* Right Column: Analysis */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Design & Color */}
          <div>
            <span className="block text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">Design & Color</span>
            <div className="flex gap-0 mb-4 border border-slate-200 w-fit">
              {data.designColor.colors.map((c, idx) => (
                <div 
                  key={idx} 
                  className="w-16 h-16" 
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
               {data.designColor.text.map((txt, idx) => (
                 <div key={idx} dangerouslySetInnerHTML={{ __html: marked.parse(txt) as string }} />
               ))}
            </div>
          </div>

          {/* Pop Star & Youth (Two Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-slate-50 p-5 border-l-4 border-blue-600 h-full">
                <span className="block text-sm font-bold text-blue-800 mb-3 uppercase tracking-wider">Pop Star & Youth Style</span>
                <div className="text-sm text-slate-800 space-y-3">
                    <p><strong>Pop Icons:</strong> {data.popCulture.icons}</p>
                    <p><strong>Youth Style:</strong> {data.popCulture.youthStyle}</p>
                </div>
             </div>

             <div>
                <span className="block text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">Style & Culture</span>
                <ul className="text-sm text-slate-700 space-y-2">
                    {data.styleCulture.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: marked.parse(item) as string }}></li>
                    ))}
                </ul>
             </div>
          </div>

          {/* Context */}
          <div>
            <span className="block text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">Context</span>
            <ul className="text-sm text-slate-700 space-y-1">
                {data.context.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: marked.parse(item) as string }}></li>
                ))}
            </ul>
          </div>

          {/* AI Action Area */}
          <div className="pt-8 border-t border-dashed border-slate-300">
            <button 
                onClick={handleReinterpret}
                disabled={loading}
                className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-white bg-black px-6 py-3 hover:bg-gray-800 transition-all duration-200 rounded-sm disabled:opacity-50"
            >
                {loading ? (
                    <><span className="loading-sparkle">✨</span> <span>Reinterpreting...</span></>
                ) : (
                    <><span>✨</span> <span>→ 현대적 재해석 (AI Reinterpretation)</span></>
                )}
            </button>

            {aiResult && (
                <div className="mt-6 p-6 bg-blue-50 border border-blue-100 text-slate-800 text-sm leading-relaxed rounded-sm prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(aiResult) as string }} />
                </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DecadeSection;