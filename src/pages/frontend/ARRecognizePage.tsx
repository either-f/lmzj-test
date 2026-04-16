import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ScanLine, Info, Camera } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ARRecognizePage() {
  const [scanning, setScanning] = useState(true);
  const [result, setResult] = useState<null | { title: string, desc: string }>(null);

  useEffect(() => {
    // Simulate AI recognition delay
    const timer = setTimeout(() => {
      setScanning(false);
      setResult({
        title: '三重檐攒尖顶',
        desc: '天坛祈年殿的标志性屋顶结构。上层象征皇天，中层象征皇帝，下层象征臣民。采用蓝色琉璃瓦，代表“天”。'
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-stone-950 text-stone-100 flex flex-col animate-in fade-in duration-300">
      {/* Simulated Camera Feed Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://picsum.photos/seed/roof/800/1200" 
          alt="Camera Feed" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium">
          <Camera className="w-4 h-4" />
          AI 构件识别
        </div>
        <Link to="/experience/temple-of-heaven/guide" className="p-2 bg-black/40 backdrop-blur-md hover:bg-black/60 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </Link>
      </div>

      {/* Scanning Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        <div className="relative w-full max-w-sm aspect-square">
          {/* Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500" />
          
          {/* Scanning Animation */}
          {scanning && (
            <>
              <div className="absolute inset-0 bg-amber-500/10 animate-pulse" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-amber-500 shadow-[0_0_8px_2px_rgba(245,158,11,0.5)] animate-[scan_2s_ease-in-out_infinite]" />
            </>
          )}

          {/* Target Highlight (Post-scan) */}
          {!scanning && (
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/2 border border-amber-400 bg-amber-400/20 rounded-lg animate-in zoom-in duration-300" />
          )}
        </div>
      </div>

      {/* Bottom Result Sheet */}
      <div className={cn(
        "relative z-10 bg-white text-stone-900 rounded-t-3xl p-6 transition-transform duration-500",
        scanning ? "translate-y-full" : "translate-y-0"
      )}>
        <div className="w-12 h-1 bg-stone-200 rounded-full mx-auto mb-6" />
        
        {result ? (
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-medium text-amber-600 mb-1">识别成功</div>
                <h2 className="text-2xl font-serif font-medium">{result.title}</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <Info className="w-5 h-5" />
              </div>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm">
              {result.desc}
            </p>
            <button 
              onClick={() => { setScanning(true); setResult(null); }}
              className="w-full py-3 mt-4 bg-stone-100 text-stone-700 rounded-xl font-medium hover:bg-stone-200 transition-colors"
            >
              继续扫描
            </button>
          </div>
        ) : (
          <div className="h-32 flex items-center justify-center text-stone-500">
            <ScanLine className="w-6 h-6 mr-2 animate-spin" />
            正在分析建筑结构...
          </div>
        )}
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  );
}
