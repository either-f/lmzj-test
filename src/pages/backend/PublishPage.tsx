import { useState } from 'react';
import { Send, Globe, Clock, History, MoreVertical, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function PublishPage() {
  const [snapshots] = useState([
    { id: 'RC-20231024-01', title: '天坛祈年殿', type: '首次发布', status: 'published', time: '今天 10:30', author: '张研究员' },
    { id: 'RC-20231023-02', title: '故宫太和殿', type: '服务信息更新', status: 'ready', time: '昨天 16:45', author: '李研究员' },
    { id: 'RC-20231020-01', title: '颐和园佛香阁', type: '导览修订', status: 'offline', time: '3 天前', author: '王研究员' },
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-medium text-stone-900">发布中心</h1>
        <p className="text-stone-500 text-sm mt-1">管理已通过审核的发布候选包 (Release Candidate)</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="col-span-3 bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
            <h2 className="font-medium text-stone-900">发布队列</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50/50 border-b border-stone-100 text-stone-500">
              <tr>
                <th className="px-6 py-3 font-medium">候选包 / 对象</th>
                <th className="px-6 py-3 font-medium">发布类型</th>
                <th className="px-6 py-3 font-medium">状态</th>
                <th className="px-6 py-3 font-medium">时间</th>
                <th className="px-6 py-3 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {snapshots.map((snap) => (
                <tr key={snap.id} className="hover:bg-stone-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900">{snap.title}</div>
                    <div className="text-xs text-stone-500 font-mono mt-0.5">{snap.id}</div>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{snap.type}</td>
                  <td className="px-6 py-4">
                    {snap.status === 'published' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"><Globe className="w-3 h-3"/> 已上线</span>}
                    {snap.status === 'ready' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"><CheckCircle2 className="w-3 h-3"/> 待发布</span>}
                    {snap.status === 'offline' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200"><History className="w-3 h-3"/> 已下线</span>}
                  </td>
                  <td className="px-6 py-4 text-stone-500 text-xs">{snap.time}</td>
                  <td className="px-6 py-4 text-right">
                    {snap.status === 'ready' ? (
                      <button className="px-3 py-1.5 bg-stone-900 text-white text-xs font-medium rounded hover:bg-stone-800 transition-colors">
                        立即发布
                      </button>
                    ) : (
                      <button className="p-1.5 text-stone-400 hover:text-stone-600 transition-colors rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="bg-stone-900 text-white p-5 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 text-stone-300 mb-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">线上运行状态</span>
            </div>
            <div className="text-2xl font-serif mb-1">正常</div>
            <div className="text-xs text-stone-400">最后更新: 今天 10:30</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="font-medium text-stone-900 mb-3 text-sm">操作日志</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-emerald-500 text-stone-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-stone-100 bg-stone-50 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-stone-900 text-xs">张研究员 发布了 天坛祈年殿</div>
                  </div>
                  <div className="text-stone-500 text-[10px]">今天 10:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
