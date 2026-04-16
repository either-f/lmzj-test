import { Link } from 'react-router-dom';
import { MapPin, Clock, Info, ArrowRight, Sun, Coffee, ScrollText, Compass } from 'lucide-react';

export default function VisitPlanPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE5] pb-24 animate-in slide-in-from-bottom-4 duration-500 font-serif relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-[#8B2522] to-[#5A1816] text-[#F4EFE5] px-4 py-16 relative overflow-hidden shadow-lg border-b-8 border-[#3E322C]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B59662]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-[#B59662] bg-[#F4EFE5]/10 text-[#EBE2D0] text-xs font-bold mb-6 backdrop-blur-sm tracking-widest">
            <Sun className="w-3.5 h-3.5 text-[#B59662]" />
            携老扶幼 · 半日闲游
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <ScrollText className="w-8 h-8 text-[#B59662]" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>锦囊妙计</h1>
            <ScrollText className="w-8 h-8 text-[#B59662] scale-x-[-1]" />
          </div>
          <p className="text-[#EBE2D0] text-sm leading-relaxed max-w-lg mx-auto tracking-widest">
            为您呈上天坛祈年殿游园秘籍。已避开陡峭阶梯，沿途设歇脚之所，愿君游园舒心。
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10 relative z-20">
        
        {/* Quick Tips */}
        <div className="bg-[#EFE9DB] rounded-xl p-6 shadow-md border border-[#D8CDB8] flex gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B2522] opacity-5 rounded-bl-full" />
          <div className="w-12 h-12 rounded-full border-2 border-[#B59662] bg-[#F4EFE5] flex items-center justify-center shrink-0 shadow-inner">
            <Info className="w-6 h-6 text-[#8B2522]" />
          </div>
          <div>
            <h3 className="font-bold text-[#8B2522] text-lg tracking-wider mb-2">出行批注</h3>
            <p className="text-[#3E322C]/80 text-sm leading-loose tracking-wide">
              今日京城天朗气清，最高温廿二度。祈年殿前广场开阔无荫，切记为长者备好遮阳之物。自东门入园距祈年殿最近，缓步约一炷香（十分钟）可达。
            </p>
          </div>
        </div>

        {/* Timeline Route */}
        <div className="space-y-8">
          <h2 className="font-serif text-2xl font-bold text-[#3E322C] tracking-widest flex items-center gap-2 border-b-2 border-[#D8CDB8] pb-3">
            <Compass className="w-6 h-6 text-[#8B2522]" />
            游园路线
          </h2>
          
          <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#8B2522] before:via-[#B59662] before:to-transparent">
            
            {/* Stop 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm border-2 border-[#8B2522] bg-[#F4EFE5] text-[#8B2522] font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 rotate-45">
                <span className="-rotate-45">壹</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-[#D8CDB8] bg-[#EFE9DB] shadow-md relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B59662] opacity-50 rounded-tl-xl" />
                <div className="flex items-center justify-between mb-3 border-b border-[#D8CDB8] pb-2">
                  <h3 className="font-bold text-[#3E322C] text-lg tracking-wider">东门入园</h3>
                  <span className="text-xs font-bold text-[#B59662] flex items-center gap-1 tracking-widest"><Clock className="w-3.5 h-3.5"/> 巳时初 (09:00)</span>
                </div>
                <p className="text-sm text-[#3E322C]/80 mb-4 leading-relaxed tracking-wide">由东门入，地势平缓。沿途古柏参天，绿荫如盖，宜缓步徐行。</p>
                <div className="border border-[#D8CDB8] rounded-lg p-1 bg-[#F4EFE5]">
                  <img src="https://picsum.photos/seed/gate/400/200" alt="东门" className="w-full h-32 object-cover rounded mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Stop 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm border-2 border-[#B59662] bg-[#F4EFE5] text-[#B59662] font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 rotate-45">
                <span className="-rotate-45">贰</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-[#D8CDB8] bg-[#EFE9DB] shadow-md relative">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B59662] opacity-50 rounded-tr-xl" />
                <div className="flex items-center justify-between mb-3 border-b border-[#D8CDB8] pb-2">
                  <h3 className="font-bold text-[#3E322C] text-lg tracking-wider">祈年殿广场</h3>
                  <span className="text-xs font-bold text-[#B59662] flex items-center gap-1 tracking-widest"><Clock className="w-3.5 h-3.5"/> 巳时正 (09:30)</span>
                </div>
                <p className="text-sm text-[#3E322C]/80 mb-4 leading-relaxed tracking-wide">至核心区。宜于广场东侧长椅稍歇，此地乃观赏祈年殿全貌之绝佳所在。</p>
                <div className="bg-[#F4EFE5] border border-[#B59662]/30 text-[#8B2522] text-xs p-3 rounded-lg flex items-start gap-2 shadow-inner">
                  <Coffee className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-relaxed tracking-wide">广场周边设有甘泉（直饮水）及净房（无障碍卫生间），甚为便利。</span>
                </div>
              </div>
            </div>

            {/* Stop 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm border-2 border-[#B59662] bg-[#F4EFE5] text-[#B59662] font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 rotate-45">
                <span className="-rotate-45">叁</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-[#D8CDB8] bg-[#EFE9DB] shadow-md relative">
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B59662] opacity-50 rounded-bl-xl" />
                <div className="flex items-center justify-between mb-3 border-b border-[#D8CDB8] pb-2">
                  <h3 className="font-bold text-[#3E322C] text-lg tracking-wider">殿内观瞻</h3>
                  <span className="text-xs font-bold text-[#B59662] flex items-center gap-1 tracking-widest"><Clock className="w-3.5 h-3.5"/> 巳时末 (10:00)</span>
                </div>
                <p className="text-sm text-[#3E322C]/80 leading-relaxed tracking-wide">
                  循平缓坡道入殿，仰观无钉榫卯之奇工。此时可开启随身导览，聆听古建之音。
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action */}
        <div className="pt-8 pb-12">
          <Link 
            to="/experience/temple-of-heaven/guide"
            className="w-full bg-[#8B2522] text-[#F4EFE5] rounded-xl py-5 px-6 flex items-center justify-center gap-2 shadow-lg hover:bg-[#7A1A1A] transition-all border-2 border-[#5A1816] tracking-widest text-lg font-bold group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-20 mix-blend-overlay" />
            <span className="relative z-10">收纳锦囊，即刻启程</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
