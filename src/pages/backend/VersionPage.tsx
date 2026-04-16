import { useState } from 'react';
import { History, ArrowLeftRight, Clock, User, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function VersionPage() {
  const [activeVersion, setActiveVersion] = useState('v1.2');

  const versions = [
    { id: 'v1.2', date: '今天 10:30', author: '张研究员', desc: '更新了开放时间与预约规则 (当前线上)' },
    { id: 'v1.1', date: '2023-10-20', author: '李研究员', desc: '补充了祈年殿无钉结构的文献证据' },
    { id: 'v1.0', date: '2023-10-15', author: '系统', desc: '首次发布' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300 h-[calc(100vh-theme(spacing.14))] flex flex-col">
      <div className="mb-6 shrink-0">
        <h1 className="text-2xl font-serif font-medium text-stone-900">版本能力</h1>
        <p className="text-stone-500 text-sm mt-1">天坛祈年殿 · 版本追溯与差异查看</p>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: Version History */}
        <div className="w-80 shrink-0 bg-white border border-stone-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2 font-medium text-stone-700">
            <History className="w-4 h-4" />
            版本历史
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {versions.map((v) => (
              <div 
                key={v.id}
                onClick={() => setActiveVersion(v.id)}
                className={cn(
                  "p-3 rounded-lg border cursor-pointer transition-all",
                  activeVersion === v.id 
                    ? "bg-amber-50 border-amber-200 shadow-sm" 
                    : "bg-white border-stone-100 hover:border-stone-200 hover:bg-stone-50"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "font-mono text-sm font-medium",
                    activeVersion === v.id ? "text-amber-700" : "text-stone-900"
                  )}>{v.id}</span>
                  {v.id === 'v1.2' && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider">Live</span>
                  )}
                </div>
                <p className="text-xs text-stone-600 mb-3 line-clamp-2">{v.desc}</p>
                <div className="flex items-center justify-between text-[10px] text-stone-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {v.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {v.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Diff Viewer */}
        <div className="flex-1 bg-white border border-stone-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="px-5 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <ArrowLeftRight className="w-4 h-4" />
              版本差异比对 (v1.1 &rarr; v1.2)
            </div>
            <button className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium bg-amber-50 px-3 py-1.5 rounded-lg transition-colors">
              <RotateCcw className="w-3.5 h-3.5" />
              回滚至此版本
            </button>
          </div>
          
          <div className="flex-1 p-0 overflow-y-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-stone-50 text-stone-500 sticky top-0">
                <tr>
                  <th className="px-5 py-3 font-medium w-1/4">变更字段</th>
                  <th className="px-5 py-3 font-medium w-3/8 text-red-600 bg-red-50/50 border-l border-red-100">v1.1 (旧版)</th>
                  <th className="px-5 py-3 font-medium w-3/8 text-emerald-600 bg-emerald-50/50 border-l border-emerald-100">v1.2 (新版)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="px-5 py-4 font-medium text-stone-700">服务信息 / 开放时间</td>
                  <td className="px-5 py-4 text-stone-500 bg-red-50/10 border-l border-stone-100">旺季 06:00-21:00</td>
                  <td className="px-5 py-4 text-emerald-700 bg-emerald-50/10 font-medium border-l border-stone-100">旺季 06:00-22:00 (21:00停止入园)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-stone-700">导览词 / 祈年门前</td>
                  <td className="px-5 py-4 text-stone-500 bg-red-50/10 border-l border-stone-100">...在明代初建时，这里其实是三色瓦...</td>
                  <td className="px-5 py-4 text-emerald-700 bg-emerald-50/10 font-medium border-l border-stone-100">...在明代初建时，这里其实是<ins className="bg-emerald-200/50 no-underline">上青、中黄、下绿的</ins>三色瓦...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
