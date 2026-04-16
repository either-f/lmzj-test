import { useState } from 'react';
import { MessageSquare, ThumbsDown, TrendingUp, Search, MessageCircle } from 'lucide-react';

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState<'ai' | 'complaints'>('ai');

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-medium text-stone-900">反馈分析闭环</h1>
        <p className="text-stone-500 text-sm mt-1">洞察游客真实需求：哪些内容被看、被问、被投诉最多</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-stone-500 text-sm mb-2 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            AI 伴游总提问数
          </div>
          <div className="text-3xl font-serif text-stone-900">12,450</div>
          <div className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 较上周增长 15%
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-stone-500 text-sm mb-2 flex items-center gap-2">
            <Search className="w-4 h-4" />
            最高频搜索点位
          </div>
          <div className="text-xl font-medium text-stone-900 mt-2">皇穹宇回音壁</div>
          <div className="text-xs text-stone-400 mt-2">占总搜索量的 28%</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-stone-500 text-sm mb-2 flex items-center gap-2">
            <ThumbsDown className="w-4 h-4" />
            服务信息报错率
          </div>
          <div className="text-3xl font-serif text-stone-900">0.8%</div>
          <div className="text-xs text-amber-600 mt-2">主要集中在“洗手间位置”</div>
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b border-stone-100">
          <button 
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'ai' ? 'text-amber-700 border-b-2 border-amber-500 bg-amber-50/30' : 'text-stone-500 hover:bg-stone-50'}`}
          >
            AI 问答高频词聚类
          </button>
          <button 
            onClick={() => setActiveTab('complaints')}
            className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === 'complaints' ? 'text-amber-700 border-b-2 border-amber-500 bg-amber-50/30' : 'text-stone-500 hover:bg-stone-50'}`}
          >
            游客报错与投诉
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'ai' ? (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-lg font-medium">无钉结构怎么做的？ (3.2k)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-base">皇帝怎么祭天？ (2.1k)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-base">最近的出口 (1.8k)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm">琉璃瓦为什么是蓝色的 (950)</span>
                <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm">轮椅怎么走 (620)</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900">AI 洞察建议</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    关于“无钉结构”的提问激增，建议在《导览生成》模块中，为祈年殿增加一段专门针对榫卯结构的 30 秒白话解说。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 border border-stone-100 rounded-lg flex items-start justify-between hover:bg-stone-50">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded">服务信息报错</span>
                    <span className="text-sm font-medium text-stone-900">东门洗手间正在维修</span>
                  </div>
                  <p className="text-sm text-stone-500">游客反馈导览上标记的东门洗手间目前处于封闭状态，导致白跑一趟。</p>
                </div>
                <button className="text-sm text-amber-600 font-medium hover:text-amber-700">去修改服务信息 &rarr;</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
