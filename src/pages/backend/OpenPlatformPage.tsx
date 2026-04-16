import { Key, Code, FileJson, ShieldCheck, Copy, ExternalLink } from 'lucide-react';

export default function OpenPlatformPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-medium text-stone-900">开放平台 (Open API)</h1>
        <p className="text-stone-500 text-sm mt-1">将结构化建筑档案与 AI 导览能力赋能给第三方生态</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-stone-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="text-xl font-medium mb-2">构建无边界的文旅生态</h2>
            <p className="text-stone-400 text-sm mb-6 max-w-md leading-relaxed">
              通过 RESTful API，第三方博物馆、旅行社小程序、甚至 AR 眼镜硬件厂商，都可以接入《梁木之间》的权威建筑知识库。
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-stone-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors flex items-center gap-2">
                <FileJson className="w-4 h-4" />
                查看 API 文档
              </button>
              <button className="bg-stone-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors flex items-center gap-2 border border-stone-700">
                <Code className="w-4 h-4" />
                下载 SDK
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-center">
          <div className="text-stone-500 text-sm mb-1">本月 API 调用量</div>
          <div className="text-4xl font-serif text-stone-900 mb-4">1.2M <span className="text-base font-sans text-stone-400">/ 5M</span></div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-amber-500 h-full w-[24%]" />
          </div>
          <div className="text-xs text-stone-400 text-right">健康状态：良好</div>
        </div>
      </div>

      {/* API Keys Management */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-stone-900">
            <Key className="w-5 h-5 text-stone-500" />
            API 密钥管理
          </div>
          <button className="text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg hover:bg-amber-100 transition-colors">
            + 创建新密钥
          </button>
        </div>
        <div className="p-0">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 text-stone-500 border-b border-stone-100">
              <tr>
                <th className="px-6 py-3 font-medium">应用名称</th>
                <th className="px-6 py-3 font-medium">API Key</th>
                <th className="px-6 py-3 font-medium">权限范围</th>
                <th className="px-6 py-3 font-medium">状态</th>
                <th className="px-6 py-3 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-medium text-stone-900">北京文旅官方小程序</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded w-fit">
                    lm_live_8f92...3a1b
                    <Copy className="w-3 h-3 cursor-pointer hover:text-stone-900" />
                  </div>
                </td>
                <td className="px-6 py-4 text-stone-600">只读 (Read-only)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-xs font-medium">
                    <ShieldCheck className="w-3 h-3" /> 活跃
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-stone-400 hover:text-stone-900 font-medium">撤销</button>
                </td>
              </tr>
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-medium text-stone-900">某 AR 眼镜测试端</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded w-fit">
                    lm_test_4c21...9d8e
                    <Copy className="w-3 h-3 cursor-pointer hover:text-stone-900" />
                  </div>
                </td>
                <td className="px-6 py-4 text-stone-600">全部 (Full Access)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-stone-500 bg-stone-100 px-2 py-1 rounded text-xs font-medium">
                    已停用
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-stone-400 hover:text-stone-900 font-medium">启用</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
