import { useState } from 'react';
import { Sparkles, GripVertical, Clock, Settings2, Play, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function GuideGenPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300 h-[calc(100vh-theme(spacing.14))] flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">导览生成</h1>
          <p className="text-stone-500 text-sm mt-1">基于已绑定的证据，通过 AI 编排和改写现场导览词</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 transition-colors">
            预览导览
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            提交审核
          </button>
        </div>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: AI Settings Panel */}
        <div className="w-80 shrink-0 flex flex-col gap-4">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-stone-900 font-medium">
              <Settings2 className="w-4 h-4" />
              生成策略
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">目标受众与语气</label>
                <div className="grid grid-cols-2 gap-2">
                  {['通俗生动', '专业严谨', '儿童友好', '文艺抒情'].map((tone, i) => (
                    <button key={tone} className={cn(
                      "px-3 py-2 text-sm rounded-lg border text-center transition-colors",
                      i === 0 ? "bg-amber-50 border-amber-200 text-amber-700 font-medium" : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                    )}>
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">预计游览时长</label>
                <select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-stone-700">
                  <option>短途精华 (约 15 分钟)</option>
                  <option>标准深度 (约 45 分钟)</option>
                  <option>深度研究 (约 90 分钟)</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isGenerating ? (
                  <span className="animate-pulse">AI 正在重新编排...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    AI 一键重写导览
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-sm text-amber-800">
            <p className="font-medium mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              AI 提示
            </p>
            <p className="text-amber-700/80 leading-relaxed">
              当前档案中关于“祈年殿无钉结构”的证据非常充分，建议在导览中增加该部分的权重，以提升游客的惊叹感。
            </p>
          </div>
        </div>

        {/* Right: Guide Sections Editor */}
        <div className="flex-1 bg-white border border-stone-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
          <div className="px-5 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
            <h3 className="text-sm font-medium text-stone-700">导览段落编排</h3>
            <div className="text-xs text-stone-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              总时长预估：12分30秒
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {[
              { title: '祈年门前：初见三重檐', time: '1:20', text: '站在祈年门外，您可以看到祈年殿的三重蓝琉璃瓦屋檐。请注意看屋檐的颜色，在明代初建时，这里其实是上青、中黄、下绿的三色瓦，象征天、地、万物。直到清代乾隆年间，才统一改为了今天我们看到的象征“皇天”的蓝色。' },
              { title: '步入殿内：龙井柱与四季', time: '2:15', text: '请走进殿内，抬头看中央最粗的四根大柱，它们被称为“龙井柱”，代表着一年四季。这四根柱子高达19米，是整座建筑的核心支撑。再往外看，中层的十二根“金柱”代表十二个月，外层的十二根“檐柱”代表十二时辰。' },
              { title: '结构奇迹：无钉之谜', time: '1:45', text: '仔细观察柱子与横梁的交接处。您会发现这里完全依靠木材本身的榫卯结构咬合，这就是中国古建筑的智慧。整个大殿没有使用一根铁钉，却能历经数次地震而屹立不倒。' }
            ].map((section, i) => (
              <div key={i} className="group relative bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-300 transition-colors shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical className="w-4 h-4 text-stone-400" />
                </div>
                <div className="pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <input 
                      type="text" 
                      defaultValue={section.title}
                      className="font-medium text-stone-900 bg-transparent border-none focus:outline-none focus:ring-0 p-0 w-2/3"
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Play className="w-3 h-3" /> {section.time}
                      </span>
                      <button className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> 改写
                      </button>
                    </div>
                  </div>
                  <textarea 
                    defaultValue={section.text}
                    rows={3}
                    className="w-full text-sm text-stone-600 bg-transparent border-none focus:outline-none focus:ring-0 p-0 resize-none leading-relaxed"
                  />
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 border-2 border-dashed border-stone-200 rounded-xl text-stone-500 text-sm font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors">
              + 添加新段落
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
