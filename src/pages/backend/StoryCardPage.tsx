import { useState } from 'react';
import { Download, Share2, Image as ImageIcon, LayoutTemplate, Type, Stamp, Calendar, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function StoryCardPage() {
  const [template, setTemplate] = useState<'classic' | 'modern'>('classic');
  const [title, setTitle] = useState('天坛祈年殿');
  const [desc, setDesc] = useState('没有一根钉子，却屹立六百年。这是明清两代皇帝孟春祈谷的专用建筑，也是中国古代木结构建筑的巅峰之作。');
  const [stamp, setStamp] = useState('祈年');
  const [date, setDate] = useState('癸卯年 秋');
  const [imageSeed, setImageSeed] = useState('temple');

  const randomizeImage = () => {
    const seeds = ['palace', 'architecture', 'roof', 'wood', 'garden', 'temple'];
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)] + Math.floor(Math.random() * 100);
    setImageSeed(randomSeed);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-300 h-[calc(100vh-theme(spacing.14))] flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-serif font-bold text-stone-900">故事卡生成 (T1)</h1>
          <p className="text-stone-500 text-sm mt-1">定制并生成适合社交媒体传播的精美建筑故事海报</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-sm">
            <Share2 className="w-4 h-4" />
            分享链接
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" />
            导出高清 PNG
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        {/* Left: Settings Panel */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
          
          {/* Template Selection */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <label className="block text-sm font-bold text-stone-800 mb-3 flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-amber-600" />
              排版风格
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setTemplate('classic')}
                className={cn(
                  "px-3 py-2.5 rounded-lg border text-sm transition-all font-medium",
                  template === 'classic' ? "border-amber-500 bg-amber-50 text-amber-800 shadow-sm" : "border-stone-200 text-stone-600 hover:bg-stone-50"
                )}
              >
                古典雅致
              </button>
              <button 
                onClick={() => setTemplate('modern')}
                className={cn(
                  "px-3 py-2.5 rounded-lg border text-sm transition-all font-medium",
                  template === 'modern' ? "border-amber-500 bg-amber-50 text-amber-800 shadow-sm" : "border-stone-200 text-stone-600 hover:bg-stone-50"
                )}
              >
                现代极简
              </button>
            </div>
          </div>

          {/* Content Editing */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-5">
            <label className="block text-sm font-bold text-stone-800 flex items-center gap-2 border-b border-stone-100 pb-3">
              <Type className="w-4 h-4 text-amber-600" />
              内容编辑
            </label>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">主标题</label>
                <input 
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">故事描述</label>
                <textarea 
                  value={desc} 
                  onChange={e => setDesc(e.target.value)} 
                  rows={4} 
                  className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow resize-none leading-relaxed" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5 flex items-center gap-1">
                    <Stamp className="w-3 h-3" /> 印章文字
                  </label>
                  <input 
                    value={stamp} 
                    onChange={e => setStamp(e.target.value)} 
                    maxLength={4} 
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> 落款日期
                  </label>
                  <input 
                    value={date} 
                    onChange={e => setDate(e.target.value)} 
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-stone-800 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-600" />
                主视觉图
              </label>
              <button onClick={randomizeImage} className="text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> 换一张
              </button>
            </div>
            <div className="aspect-video rounded-lg bg-stone-100 border border-stone-200 overflow-hidden relative group cursor-pointer">
              <img src={`https://picsum.photos/seed/${imageSeed}/400/225`} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-medium px-3 py-1.5 bg-black/50 rounded-full backdrop-blur-sm">点击上传新图片</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Canvas Preview */}
        <div className="flex-1 bg-stone-100/50 rounded-2xl border border-stone-200 overflow-hidden flex items-center justify-center p-4 md:p-8 relative">
          {/* Grid Background for Canvas area */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          
          {/* The Poster Card */}
          <div className={cn(
            "w-full max-w-[380px] shadow-2xl overflow-hidden transition-all duration-500 relative z-10",
            template === 'classic' ? "rounded-none border-8 border-[#EFE9DB] bg-[#F4EFE5]" : "rounded-3xl border border-stone-200/50 bg-stone-950"
          )}>
            
            {template === 'classic' ? (
              /* --- Classic Template --- */
              <div className="relative aspect-[4/5] font-serif flex flex-col p-6">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none" />
                
                {/* Image Area */}
                <div className="relative h-[55%] rounded-t-full overflow-hidden border-4 border-[#D8CDB8] shadow-inner mb-6 shrink-0">
                  <img src={`https://picsum.photos/seed/${imageSeed}/800/800`} className="w-full h-full object-cover mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
                </div>
                
                {/* Content Area */}
                <div className="flex-1 relative flex flex-col">
                  {/* Stamp */}
                  {stamp && (
                    <div className="absolute -top-4 right-2 w-10 h-10 border-2 border-[#8B2522] text-[#8B2522] flex items-center justify-center rounded-sm rotate-6 bg-[#F4EFE5]/80 backdrop-blur-sm z-10 shadow-sm">
                      <span className="text-sm font-bold writing-vertical-rl tracking-widest">{stamp}</span>
                    </div>
                  )}
                  
                  <h2 className="text-3xl font-bold text-[#3E322C] mb-3 tracking-widest pr-12 leading-tight">{title}</h2>
                  <p className="text-[#3E322C]/80 text-sm leading-loose line-clamp-3 tracking-wide flex-1">{desc}</p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-end pt-4 border-t border-[#D8CDB8] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[#B59662] text-sm tracking-widest font-medium mb-1">{date}</span>
                      <span className="text-[#3E322C]/40 text-[10px] tracking-widest uppercase">Liangmu Archive</span>
                    </div>
                    <div className="w-12 h-12 border border-[#D8CDB8] p-1 bg-[#F4EFE5] rounded-sm">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com" alt="QR" className="w-full h-full mix-blend-multiply opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* --- Modern Template --- */
              <div className="relative aspect-[4/5] font-sans text-white">
                <img src={`https://picsum.photos/seed/${imageSeed}/800/1000`} className="absolute inset-0 w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-3 mb-4 opacity-80">
                    <div className="h-px flex-1 bg-white/40" />
                    <span className="text-[10px] tracking-widest uppercase font-medium">{date}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">{title}</h2>
                  <p className="text-white/80 text-sm leading-relaxed font-light mb-8 line-clamp-3">{desc}</p>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-white/20">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium tracking-widest text-white/90 mb-1">梁木之间</span>
                      <span className="text-[10px] tracking-widest uppercase text-white/50">Digital Archive</span>
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl p-1.5 border border-white/20">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=ffffff&bgcolor=transparent&data=https://example.com" alt="QR" className="w-full h-full opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
