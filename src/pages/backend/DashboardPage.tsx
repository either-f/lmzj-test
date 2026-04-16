import { BarChart3, Users, Clock, Activity, TrendingUp, Map } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">运营数据大屏</h1>
          <p className="text-stone-500 text-sm mt-1">全局访问量、AI 导览使用率与游客画像分析</p>
        </div>
        <div className="text-sm font-medium text-stone-500 bg-white px-4 py-2 rounded-lg border border-stone-200 shadow-sm">
          数据更新时间: 刚刚
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-2 text-stone-500 text-sm mb-2">
            <Users className="w-4 h-4" />
            总访问游客数
          </div>
          <div className="text-3xl font-serif text-stone-900 mb-2">124,592</div>
          <div className="text-xs font-medium text-emerald-600 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +12.5% 较上月
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-2 text-stone-500 text-sm mb-2">
            <Activity className="w-4 h-4" />
            AI 导览调用次数
          </div>
          <div className="text-3xl font-serif text-stone-900 mb-2">89,201</div>
          <div className="text-xs font-medium text-emerald-600 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +24.1% 较上月
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-2 text-stone-500 text-sm mb-2">
            <Clock className="w-4 h-4" />
            平均停留时长
          </div>
          <div className="text-3xl font-serif text-stone-900 mb-2">42 分钟</div>
          <div className="text-xs font-medium text-stone-400 flex items-center gap-1">
            持平
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-2 text-stone-500 text-sm mb-2">
            <Map className="w-4 h-4" />
            已覆盖建筑数
          </div>
          <div className="text-3xl font-serif text-stone-900 mb-2">15</div>
          <div className="text-xs font-medium text-amber-600 flex items-center gap-1">
            +2 本月新增
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Chart Placeholder 1 */}
        <div className="col-span-2 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <h3 className="font-medium text-stone-900 mb-6">近 30 天访问趋势</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Simulated Bar Chart */}
            {Array.from({ length: 30 }).map((_, i) => {
              const height = 20 + Math.random() * 80;
              return (
                <div key={i} className="w-full bg-amber-100 rounded-t hover:bg-amber-500 transition-colors relative group">
                  <div style={{ height: `${height}%` }} className="bg-amber-400 rounded-t w-full absolute bottom-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Demographics */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <h3 className="font-medium text-stone-900 mb-6">游客画像 (语言偏好)</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-stone-600">中文 (简体/繁体)</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-stone-800 h-full w-[75%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-stone-600">English</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[15%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-stone-600">日本語</span>
                <span className="font-medium">7%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[7%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-stone-600">其他</span>
                <span className="font-medium">3%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-stone-300 h-full w-[3%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
