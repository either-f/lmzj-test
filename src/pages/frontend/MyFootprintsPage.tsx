import { useState } from 'react';
import { MapPin, Calendar, Award, ChevronRight, Clock, BookOpen, Stamp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function MyFootprintsPage() {
  const [activeTab, setActiveTab] = useState<'visited' | 'planned'>('visited');

  const visited = [
    { id: 1, name: '天坛祈年殿', date: '癸卯年 秋', image: 'https://picsum.photos/seed/temple/400/300', duration: '半日游', stamp: '祈年' },
    { id: 2, name: '故宫太和殿', date: '癸卯年 夏', image: 'https://picsum.photos/seed/palace/400/300', duration: '一日游', stamp: '太和' },
  ];

  const planned = [
    { id: 3, name: '颐和园佛香阁', date: '待定', image: 'https://picsum.photos/seed/garden/400/300', type: '携老 · 半日' },
  ];

  const badges = [
    { name: '晨光行者', desc: '卯时入园', color: 'text-[#8B2522]', border: 'border-[#8B2522]' },
    { name: '寻古探幽', desc: '深度游览', color: 'text-[#B59662]', border: 'border-[#B59662]' },
    { name: '博闻强识', desc: '听完讲解', color: 'text-[#3E322C]', border: 'border-[#3E322C]' },
  ];

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-[#F4EFE5] pb-24 animate-in fade-in duration-500 font-serif relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      {/* Header - The "Cover" of the passport */}
      <div className="bg-gradient-to-b from-[#8B2522] to-[#5A1816] text-[#F4EFE5] px-6 py-16 relative overflow-hidden shadow-lg border-b-8 border-[#3E322C]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]" />
        {/* Decorative cloud/water pattern placeholder */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B59662]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-[#EFE9DB] border-4 border-[#B59662] overflow-hidden shrink-0 shadow-[0_0_20px_rgba(181,150,98,0.4)]">
            <img src="https://picsum.photos/seed/avatar/200/200" alt="Avatar" className="w-full h-full object-cover mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl font-bold mb-3 tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>通关文牒</h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-[#EBE2D0] tracking-wider">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#B59662]" /> 已阅历 2 处</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#B59662]" /> 获印章 3 枚</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-20">
        
        {/* Badges / Seals Section */}
        <div className="mb-12 bg-[#EFE9DB] rounded-2xl p-6 shadow-md border border-[#D8CDB8] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B2522] opacity-5 rounded-bl-full" />
          <h2 className="text-xl font-bold text-[#3E322C] mb-6 flex items-center gap-2 tracking-wider">
            <Stamp className="w-5 h-5 text-[#8B2522]" />
            我的印信
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 shrink-0">
                <div className={cn(
                  "w-16 h-16 rounded-sm flex items-center justify-center border-4 bg-transparent rotate-3 shadow-sm",
                  badge.border, badge.color
                )}>
                  <span className="font-bold text-lg writing-vertical-rl tracking-widest">{badge.name.substring(0,2)}<br/>{badge.name.substring(2,4)}</span>
                </div>
                <span className="text-xs text-[#3E322C]/70 tracking-wider font-medium">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-8 mb-8 border-b border-[#D8CDB8] pb-4">
          <button 
            onClick={() => setActiveTab('visited')}
            className={cn(
              "text-lg font-bold tracking-widest transition-colors relative px-4 py-2",
              activeTab === 'visited' ? "text-[#8B2522]" : "text-[#3E322C]/50 hover:text-[#3E322C]"
            )}
          >
            游园起居注
            {activeTab === 'visited' && (
              <span className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#8B2522] rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('planned')}
            className={cn(
              "text-lg font-bold tracking-widest transition-colors relative px-4 py-2",
              activeTab === 'planned' ? "text-[#8B2522]" : "text-[#3E322C]/50 hover:text-[#3E322C]"
            )}
          >
            锦囊妙计
            {activeTab === 'planned' && (
              <span className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-12 h-1 bg-[#8B2522] rounded-t-full" />
            )}
          </button>
        </div>

        {/* List */}
        <div className="space-y-6">
          {(activeTab === 'visited' ? visited : planned).map((item) => (
            <Link 
              key={item.id} 
              to={`/experience/temple-of-heaven`}
              className="bg-[#EFE9DB] rounded-xl p-5 shadow-sm border border-[#D8CDB8] flex gap-6 hover:shadow-md hover:border-[#B59662] transition-all group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B59662] opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B59662] opacity-0 group-hover:opacity-100 transition-opacity rounded-br-xl" />

              <div className="relative w-28 h-32 rounded-lg overflow-hidden shrink-0 border border-[#D8CDB8] shadow-inner">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                {activeTab === 'visited' && 'stamp' in item && (
                  <div className="absolute top-2 right-2 w-8 h-8 border-2 border-[#8B2522] text-[#8B2522] flex items-center justify-center rounded-sm rotate-12 bg-[#F4EFE5]/80 backdrop-blur-sm">
                    <span className="text-[10px] font-bold writing-vertical-rl">{item.stamp}</span>
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-[#3E322C] text-xl mb-3 tracking-wider group-hover:text-[#8B2522] transition-colors">{item.name}</h3>
                <div className="flex flex-col gap-2 text-sm text-[#3E322C]/70">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#B59662]" /> {item.date}</span>
                  <span className="flex items-center gap-2">
                    {activeTab === 'visited' ? <Clock className="w-4 h-4 text-[#B59662]" /> : <BookOpen className="w-4 h-4 text-[#B59662]" />} 
                    {'duration' in item ? item.duration : item.type}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-center px-4 text-[#B59662] group-hover:text-[#8B2522] group-hover:translate-x-1 transition-all">
                <ChevronRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
          
          {(activeTab === 'visited' ? visited : planned).length === 0 && (
            <div className="text-center py-16 text-[#3E322C]/40 font-medium tracking-widest">
              卷轴尚空，待君落笔
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
