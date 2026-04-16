import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, X, Volume2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function VoiceCompanionPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35);

  // Mock auto-progress
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 0.5));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-[100] bg-stone-950 text-stone-100 flex flex-col animate-in fade-in zoom-in-95 duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-sm font-medium tracking-widest uppercase text-stone-400">Voice Companion</span>
        </div>
        <Link to="/experience/temple-of-heaven/guide" className="p-2 hover:bg-stone-800 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </Link>
      </div>

      {/* Main Content - Immersive Lyrics/Subtitles */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 max-w-3xl mx-auto w-full text-center space-y-8">
        <div className="text-stone-500 text-xl md:text-2xl font-serif transition-all duration-700 blur-[1px]">
          站在祈年门外，您可以看到祈年殿的三重蓝琉璃瓦屋檐。
        </div>
        
        <div className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight transition-all duration-500 scale-105">
          请注意看屋檐的颜色，在明代初建时，这里其实是上青、中黄、下绿的三色瓦...
        </div>
        
        <div className="text-stone-600 text-xl md:text-2xl font-serif transition-all duration-700 blur-[2px]">
          象征天、地、万物。
        </div>
      </div>

      {/* Bottom Player Controls */}
      <div className="p-8 pb-12 max-w-3xl mx-auto w-full space-y-8">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-amber-500 rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
          <div className="flex justify-between text-xs font-medium text-stone-500 font-mono">
            <span>01:24</span>
            <span>03:45</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button className="p-3 text-stone-400 hover:text-white transition-colors">
            <Volume2 className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-6">
            <button className="p-3 text-stone-300 hover:text-white transition-colors">
              <SkipBack className="w-8 h-8" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-white text-stone-950 flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-white/10"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-2" />}
            </button>
            <button className="p-3 text-stone-300 hover:text-white transition-colors">
              <SkipForward className="w-8 h-8" />
            </button>
          </div>

          <div className="w-12" /> {/* Spacer for balance */}
        </div>
      </div>
    </div>
  );
}
