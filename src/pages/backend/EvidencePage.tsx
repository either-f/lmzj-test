import { useState } from 'react';
import { Link2, FileText, CheckCircle2, AlertCircle, ChevronRight, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function EvidencePage() {
  const [activeField, setActiveField] = useState<number | null>(1);

  const fields = [
    { id: 1, name: '建筑名称', value: '祈年殿', status: 'bound', source: '天坛志_卷三.pdf (P12)' },
    { id: 2, name: '始建年份', value: '明永乐十八年 (1420年)', status: 'bound', source: '北京古代建筑史.pdf (P45)' },
    { id: 3, name: '建筑高度', value: '38.2米', status: 'unbound', source: null },
    { id: 4, name: '核心结构', value: '28根楠木大柱，无铁钉', status: 'unbound', source: null },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300 h-[calc(100vh-theme(spacing.14))] flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">证据绑定</h1>
          <p className="text-stone-500 text-sm mt-1">为结构化档案字段绑定可靠的文献或图片来源</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          完成绑定
        </button>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left: Fields List */}
        <div className="w-1/3 flex flex-col bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-stone-100 bg-stone-50/50 font-medium text-stone-700 text-sm flex justify-between items-center">
            <span>档案字段 (天坛祈年殿)</span>
            <span className="text-amber-600 text-xs bg-amber-50 px-2 py-1 rounded-full">2 待绑定</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {fields.map((field) => (
              <div 
                key={field.id}
                onClick={() => setActiveField(field.id)}
                className={cn(
                  "p-3 rounded-lg border cursor-pointer transition-all",
                  activeField === field.id 
                    ? "bg-amber-50/50 border-amber-300 shadow-sm" 
                    : "bg-white border-stone-200 hover:border-stone-300"
                )}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-stone-500">{field.name}</span>
                  {field.status === 'bound' ? (
                    <Link2 className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                  )}
                </div>
                <div className="text-sm font-medium text-stone-900 mb-2">{field.value}</div>
                {field.status === 'bound' ? (
                  <div className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 已绑定: {field.source}
                  </div>
                ) : (
                  <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded inline-flex items-center gap-1">
                    待绑定证据
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Source Material Viewer */}
        <div className="flex-1 flex flex-col bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select className="text-sm font-medium text-stone-700 bg-transparent border-none focus:ring-0 cursor-pointer">
                <option>天坛志_卷三.pdf</option>
                <option>北京古代建筑史.pdf</option>
                <option>祈年殿测绘图.jpg</option>
              </select>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" 
                placeholder="在文档中搜索..." 
                className="pl-8 pr-3 py-1.5 text-xs border border-stone-200 rounded-md focus:outline-none focus:border-amber-400 w-48"
              />
            </div>
          </div>
          
          <div className="flex-1 bg-stone-100 p-6 overflow-y-auto relative flex justify-center">
            {/* Mock PDF Page */}
            <div className="bg-white w-full max-w-2xl shadow-sm border border-stone-200 p-12 min-h-full">
              <h2 className="text-xl font-serif font-medium text-center mb-8">卷三 · 祈谷坛</h2>
              <div className="space-y-4 text-stone-700 text-sm leading-loose font-serif">
                <p>
                  祈谷坛，建于<span className="bg-amber-200/50 border-b-2 border-amber-400 cursor-pointer relative group">明永乐十八年（1420年）
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">点击绑定至当前字段</span>
                  </span>，初名大祀殿，为矩形大殿，用于合祀天、地。嘉靖二十四年（1545年）改为三重檐圆殿，殿顶覆盖上青、中黄、下绿三色琉璃，寓意天、地、万物。
                </p>
                <p>
                  清乾隆十六年（1751年）改三色瓦为统一的蓝琉璃瓦，定名<span className="bg-emerald-100 border-b-2 border-emerald-400 cursor-pointer">祈年殿</span>。殿高三十八米有余，直径三十二米。
                </p>
                <p>
                  殿内由二十八根金丝楠木大柱支撑，中央四柱名曰龙井柱，高十九点二米，代表一年四季；中层十二根金柱代表十二个月；外层十二根檐柱代表十二时辰。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
