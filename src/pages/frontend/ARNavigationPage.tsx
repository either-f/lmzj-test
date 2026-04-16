import { Link } from 'react-router-dom';
import { ChevronLeft, Map as MapIcon, Compass, Navigation, ArrowUpCircle } from 'lucide-react';

export default function ARNavigationPage() {
  return (
    <div className="fixed inset-0 bg-stone-900 z-[100] flex flex-col font-serif animate-in fade-in duration-500">
      {/* Simulated Camera Feed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/pathway/1080/1920" 
          alt="Camera Feed" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E322C]/80 via-transparent to-[#3E322C]/90" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 px-6 py-8 flex items-center justify-between">
        <Link 
          to="/experience/temple-of-heaven/guide" 
          className="w-12 h-12 rounded-full bg-[#F4EFE5]/20 backdrop-blur-md flex items-center justify-center text-[#F4EFE5] border border-[#F4EFE5]/30 hover:bg-[#F4EFE5]/30 transition-colors"
        >
          <ChevronLeft className="w-8 h-8 pr-1" />
        </Link>
        <div className="bg-[#F4EFE5]/20 backdrop-blur-md px-6 py-3 rounded-full border border-[#F4EFE5]/30 text-[#F4EFE5] flex items-center gap-2 shadow-lg">
          <Compass className="w-5 h-5 text-[#B59662]" />
          <span className="text-base font-bold tracking-widest">实景导航中</span>
        </div>
        <button className="w-12 h-12 rounded-full bg-[#F4EFE5]/20 backdrop-blur-md flex items-center justify-center text-[#F4EFE5] border border-[#F4EFE5]/30 hover:bg-[#F4EFE5]/30 transition-colors">
          <MapIcon className="w-6 h-6" />
        </button>
      </div>

      {/* AR Overlay Elements */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pb-20">
        <div className="animate-bounce flex flex-col items-center gap-6">
          <div className="w-32 h-32 rounded-full bg-[#8B2522]/80 backdrop-blur-md border-4 border-[#B59662] flex items-center justify-center shadow-[0_0_40px_rgba(181,150,98,0.6)]">
            <ArrowUpCircle className="w-16 h-16 text-[#F4EFE5]" />
          </div>
          <div className="bg-[#3E322C]/80 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#B59662]/50 text-center shadow-xl">
            <div className="text-[#B59662] text-base font-bold tracking-widest mb-2">直行 50 米后左转</div>
            <div className="text-[#F4EFE5] text-3xl font-bold tracking-wider">前往 皇穹宇</div>
          </div>
        </div>
      </div>

      {/* Bottom Info Panel */}
      <div className="relative z-10 bg-[#F4EFE5] rounded-t-[2.5rem] p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t-4 border-[#8B2522]">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none rounded-t-[2.5rem]" />
        
        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-3xl font-bold text-[#3E322C] mb-2 tracking-widest">皇穹宇</h3>
              <p className="text-[#8B2522] text-base font-medium tracking-wider">预计步行 3 分钟 · 距离 120 米</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#EFE9DB] border border-[#D8CDB8] flex items-center justify-center shadow-inner">
              <Navigation className="w-7 h-7 text-[#B59662]" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8B2522] text-[#F4EFE5] flex items-center justify-center shrink-0 font-bold text-base border-2 border-[#B59662]/50 shadow-sm">
                1
              </div>
              <div className="pb-6 border-b border-[#D8CDB8] flex-1">
                <div className="text-[#3E322C] font-bold text-lg mb-1 tracking-wide">沿丹陛桥向南直行</div>
                <div className="text-[#3E322C]/60 text-base">注意脚下台阶，保持直行</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE9DB] text-[#B59662] flex items-center justify-center shrink-0 font-bold text-base border border-[#D8CDB8]">
                2
              </div>
              <div className="flex-1">
                <div className="text-[#3E322C]/60 font-bold text-lg mb-1 tracking-wide">穿过成贞门</div>
                <div className="text-[#3E322C]/40 text-base">即将到达目的地</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
