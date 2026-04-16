import { Save, Cpu, Map as MapIcon, Database } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">系统设置</h1>
          <p className="text-stone-500 text-sm mt-1">全局模型配置、地图服务与外部数据源接入</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          保存配置
        </button>
      </div>

      <div className="space-y-8">
        {/* AI Models */}
        <section className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2 font-medium text-stone-900">
            <Cpu className="w-5 h-5 text-amber-600" />
            AI 模型配置
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">默认推理模型 (用于建档与审核)</label>
                <select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500">
                  <option>Gemini 1.5 Pro (推荐)</option>
                  <option>Gemini 1.5 Flash</option>
                  <option>GPT-4o</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">导览生成模型 (用于创意改写)</label>
                <select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500">
                  <option>Gemini 1.5 Pro</option>
                  <option>Claude 3.5 Sonnet (推荐)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">API Key (Gemini)</label>
              <input type="password" value="************************" readOnly className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-500" />
              <p className="text-xs text-stone-400 mt-1.5">通过环境变量注入，此处仅作展示。</p>
            </div>
          </div>
        </section>

        {/* Map Services */}
        <section className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2 font-medium text-stone-900">
            <MapIcon className="w-5 h-5 text-blue-600" />
            地图与位置服务
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">地图服务提供商</label>
              <select className="w-full md:w-1/2 px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500">
                <option>高德地图 (国内优选)</option>
                <option>Mapbox</option>
                <option>Google Maps</option>
              </select>
            </div>
          </div>
        </section>

        {/* External Sources */}
        <section className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2 font-medium text-stone-900">
            <Database className="w-5 h-5 text-emerald-600" />
            外部采集源配置
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between p-4 border border-stone-200 rounded-lg">
              <div>
                <div className="font-medium text-stone-900 text-sm">小红书体验信息抓取</div>
                <div className="text-xs text-stone-500 mt-1">用于分析游客真实反馈与拥挤度</div>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle1" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-emerald-500 translate-x-5" />
                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-emerald-500 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
