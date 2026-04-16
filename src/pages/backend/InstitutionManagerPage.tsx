import { useState } from 'react';
import { Building2, Palette, Image as ImageIcon, Plus, CheckCircle2 } from 'lucide-react';

export default function InstitutionManagerPage() {
  const [activeInst, setActiveInst] = useState(1);

  const institutions = [
    { id: 1, name: '天坛公园', type: '皇家祭祀建筑', status: 'active' },
    { id: 2, name: '故宫博物院', type: '皇家宫殿群', status: 'draft' },
    { id: 3, name: '颐和园', type: '皇家园林', status: 'draft' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300 flex gap-8 h-[calc(100vh-theme(spacing.14))]">
      {/* Left: Institution List */}
      <div className="w-64 shrink-0 flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-medium text-stone-900">多机构管理</h1>
          <p className="text-stone-500 text-sm mt-1">品牌化主题与多机构模板</p>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2">
          {institutions.map(inst => (
            <button
              key={inst.id}
              onClick={() => setActiveInst(inst.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${activeInst === inst.id ? 'bg-white border-amber-500 shadow-sm' : 'bg-transparent border-stone-200 hover:bg-white hover:border-stone-300'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-stone-900">{inst.name}</span>
                {inst.status === 'active' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              </div>
              <div className="text-xs text-stone-500">{inst.type}</div>
            </button>
          ))}
          <button className="w-full p-4 rounded-xl border border-dashed border-stone-300 text-stone-500 hover:bg-stone-50 hover:text-stone-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
            <Plus className="w-4 h-4" />
            接入新机构
          </button>
        </div>
      </div>

      {/* Right: Theme Settings */}
      <div className="flex-1 bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2 font-medium text-stone-900">
          <Palette className="w-5 h-5 text-amber-600" />
          天坛公园 · 品牌化主题系统
        </div>
        
        <div className="p-8 space-y-8 overflow-y-auto">
          {/* Brand Colors */}
          <section>
            <h3 className="text-sm font-medium text-stone-900 mb-4">品牌主色调 (Primary Colors)</h3>
            <div className="flex gap-4">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#0F4C81] shadow-inner border border-black/10" />
                <div className="text-xs text-center font-mono text-stone-500">琉璃蓝</div>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#C85A17] shadow-inner border border-black/10" />
                <div className="text-xs text-center font-mono text-stone-500">宫墙红</div>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#F9F8F6] shadow-inner border border-black/10" />
                <div className="text-xs text-center font-mono text-stone-500">汉白玉</div>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-3">这些颜色将自动应用于该机构的游客端界面、故事卡和导览播放器。</p>
          </section>

          {/* Typography */}
          <section>
            <h3 className="text-sm font-medium text-stone-900 mb-4">排版字体 (Typography)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-stone-200 rounded-xl">
                <div className="text-xs text-stone-500 mb-2">标题字体 (Headings)</div>
                <div className="font-serif text-xl text-stone-900">Noto Serif SC (思源宋体)</div>
              </div>
              <div className="p-4 border border-stone-200 rounded-xl">
                <div className="text-xs text-stone-500 mb-2">正文字体 (Body)</div>
                <div className="font-sans text-xl text-stone-900">Inter / 思源黑体</div>
              </div>
            </div>
          </section>

          {/* UI Template */}
          <section>
            <h3 className="text-sm font-medium text-stone-900 mb-4">UI 模板风格 (UI Template)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-2 border-amber-500 rounded-xl p-1 cursor-pointer">
                <div className="bg-stone-100 aspect-video rounded-lg flex items-center justify-center text-sm font-medium text-stone-600">
                  古典沉浸版 (当前)
                </div>
              </div>
              <div className="border-2 border-transparent hover:border-stone-200 rounded-xl p-1 cursor-pointer transition-colors">
                <div className="bg-stone-100 aspect-video rounded-lg flex items-center justify-center text-sm font-medium text-stone-600">
                  现代极简版
                </div>
              </div>
              <div className="border-2 border-transparent hover:border-stone-200 rounded-xl p-1 cursor-pointer transition-colors">
                <div className="bg-stone-100 aspect-video rounded-lg flex items-center justify-center text-sm font-medium text-stone-600">
                  儿童探索版
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
