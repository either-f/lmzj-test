import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Clock, Users, Sparkles, ArrowRight, ScrollText, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function VisitPlannerPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [time, setTime] = useState<string | null>(null);
  const [companion, setCompanion] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      navigate(`/visit-plan/${slug || 'temple-of-heaven'}`);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-[#F4EFE5] p-4 md:p-8 animate-in fade-in duration-500 flex flex-col items-center justify-center font-serif relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B2522]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B59662]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-xl w-full space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EFE9DB] text-[#8B2522] mb-2 border-2 border-[#B59662]/50 shadow-inner">
            <ScrollText className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#3E322C] tracking-widest" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>求取锦囊</h1>
          <p className="text-[#3E322C]/70 tracking-widest text-sm">告知所求，为您定制专属游园秘籍</p>
        </div>

        <div className="bg-[#EFE9DB] p-6 md:p-8 rounded-2xl shadow-lg border border-[#D8CDB8] space-y-10 relative">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B2522] opacity-30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B2522] opacity-30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B2522] opacity-30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B2522] opacity-30 rounded-br-2xl" />

          {/* Question 1 */}
          <div className="space-y-5">
            <h3 className="font-bold text-[#8B2522] flex items-center gap-2 text-lg tracking-wider border-b border-[#D8CDB8] pb-2 inline-flex">
              <Clock className="w-5 h-5 text-[#B59662]" />
              游园几何时？
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['走马观花 (1-2时辰)', '半日闲游 (半天)', '细细品味 (全天)'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={cn(
                    "p-4 rounded-lg border-2 text-sm font-bold transition-all text-center tracking-wider relative overflow-hidden",
                    time === t 
                      ? "border-[#8B2522] bg-[#F4EFE5] text-[#8B2522] shadow-sm" 
                      : "border-[#D8CDB8] text-[#3E322C]/70 hover:border-[#B59662] hover:bg-[#F4EFE5]"
                  )}
                >
                  {time === t && (
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-[#8B2522] border-l-transparent" />
                  )}
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-5">
            <h3 className="font-bold text-[#8B2522] flex items-center gap-2 text-lg tracking-wider border-b border-[#D8CDB8] pb-2 inline-flex">
              <Users className="w-5 h-5 text-[#B59662]" />
              同行者何人？
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['独自一人', '结伴同游', '携老扶幼', '亲子同乐'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCompanion(c)}
                  className={cn(
                    "p-4 rounded-lg border-2 text-sm font-bold transition-all text-center tracking-wider relative overflow-hidden",
                    companion === c 
                      ? "border-[#8B2522] bg-[#F4EFE5] text-[#8B2522] shadow-sm" 
                      : "border-[#D8CDB8] text-[#3E322C]/70 hover:border-[#B59662] hover:bg-[#F4EFE5]"
                  )}
                >
                  {companion === c && (
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-[#8B2522] border-l-transparent" />
                  )}
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!time || !companion || isGenerating}
            className="w-full py-5 bg-[#8B2522] text-[#F4EFE5] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#7A1A1A] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8 border-2 border-[#5A1816] shadow-md tracking-widest text-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-20 mix-blend-overlay" />
            {isGenerating ? (
              <span className="animate-pulse flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                锦囊织就中...
              </span>
            ) : (
              <>
                开启锦囊
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
