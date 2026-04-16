import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Map, ChevronRight, Headphones, Scan, Navigation } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function GuidePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { 
      title: "祈年门前", 
      duration: "1:20", 
      text: "站在祈年门外，您可以看到祈年殿的三重蓝琉璃瓦屋檐。请注意看屋檐的颜色，在明代初建时，这里其实是上青、中黄、下绿的三色瓦...",
      image: "https://picsum.photos/seed/roof/800/800"
    },
    { 
      title: "龙井柱与四季", 
      duration: "2:15", 
      text: "请走进殿内，抬头看中央最粗的四根大柱，它们被称为'龙井柱'，代表着一年四季。这四根柱子高达19米，是整座建筑的核心支撑...",
      image: "https://picsum.photos/seed/pillar/800/800"
    },
    { 
      title: "无钉之谜", 
      duration: "1:45", 
      text: "仔细观察柱子与横梁的交接处。您会发现这里完全依靠木材本身的榫卯结构咬合，这就是中国古建筑的智慧...",
      image: "https://picsum.photos/seed/wood/800/800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE5] font-serif pb-32 animate-in slide-in-from-bottom-4 duration-500 relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      {/* Sticky Audio Player Header */}
      <div className="sticky top-0 z-40 bg-[#F4EFE5]/95 backdrop-blur-md border-b border-[#EBE2D0] px-6 py-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif font-bold text-xl text-[#8B2522] tracking-wider">天坛祈年殿 · 现场导览</h2>
            <Link to="/voice" className="flex items-center gap-1.5 text-sm font-bold text-[#8B2522] bg-[#EFE9DB] border border-[#D8CDB8] px-4 py-2 rounded-full hover:bg-[#EBE2D0] transition-colors shadow-sm">
              <Headphones className="w-4 h-4" />
              沉浸式伴游
            </Link>
          </div>
          
          <div className="flex items-center gap-4 bg-white rounded-2xl p-3 pr-6 shadow-md border border-[#EBE2D0]">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-[#8B2522] text-[#F4EFE5] flex items-center justify-center hover:bg-[#7A1A1A] transition-colors shrink-0 shadow-inner border border-[#5A1816]"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <div className="flex-1">
              <div className="text-base font-bold text-[#3E322C] mb-2 tracking-wide">{sections[activeSection].title}</div>
              <div className="w-full bg-[#EFE9DB] h-2 rounded-full overflow-hidden border border-[#D8CDB8]">
                <div className="bg-[#B59662] h-full w-1/3 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6 relative z-10">
        {sections.map((section, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveSection(idx)}
            className={cn(
              "p-5 rounded-2xl border transition-all cursor-pointer overflow-hidden",
              activeSection === idx 
                ? "bg-white border-[#B59662] shadow-md" 
                : "bg-[#EFE9DB] border-[#D8CDB8] hover:border-[#B59662]/50"
            )}
          >
            <div className="flex gap-6">
              <img 
                src={section.image} 
                alt={section.title}
                className={cn(
                  "object-cover rounded-xl transition-all duration-500 shadow-sm border border-[#D8CDB8]",
                  activeSection === idx ? "w-32 h-32" : "w-20 h-20"
                )}
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={cn(
                    "font-bold text-lg tracking-wider",
                    activeSection === idx ? "text-[#8B2522]" : "text-[#3E322C]"
                  )}>
                    {idx + 1}. {section.title}
                  </h3>
                  <span className="text-sm text-[#B59662] font-medium shrink-0 ml-2 bg-[#F4EFE5] px-2 py-1 rounded border border-[#EBE2D0]">{section.duration}</span>
                </div>
                <p className={cn(
                  "text-[#3E322C]/80 text-base leading-relaxed transition-all duration-500",
                  activeSection === idx ? "line-clamp-none" : "line-clamp-2"
                )}>
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-[#EFE9DB] border border-[#D8CDB8] rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D8CDB8] flex items-center justify-center shadow-sm">
              <Map className="w-6 h-6 text-[#8B2522]" />
            </div>
            <div>
              <div className="text-sm text-[#B59662] font-medium mb-1 tracking-widest">下一站建议</div>
              <div className="text-lg font-bold text-[#3E322C] tracking-wider">皇穹宇与回音壁</div>
            </div>
          </div>
          <Link 
            to="/navigation"
            className="flex items-center gap-2 bg-[#8B2522] text-[#F4EFE5] px-5 py-2.5 rounded-full font-bold tracking-wider hover:bg-[#7A1A1A] transition-colors shadow-sm border border-[#5A1816]"
          >
            <Navigation className="w-4 h-4" />
            实景导航
          </Link>
        </div>
      </div>

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <Link 
          to="/ar-recognize"
          className="w-14 h-14 bg-[#F4EFE5] text-[#8B2522] rounded-full flex items-center justify-center shadow-xl border-2 border-[#B59662]/50 hover:bg-[#EBE2D0] hover:scale-105 transition-all"
        >
          <Scan className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
