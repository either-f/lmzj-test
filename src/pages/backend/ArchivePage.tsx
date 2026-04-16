import { useState } from 'react';
import { Search, Filter, Plus, FileText, AlertCircle, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { cn } from '../../lib/utils';

type ArchiveStatus = 'raw' | 'archived' | 'evidence_bound' | 'guide_ready';

interface ArchiveItem {
  id: string;
  title: string;
  status: ArchiveStatus;
  updatedAt: string;
  missingFields?: number;
  image: string;
}

export default function ArchivePage() {
  const [items] = useState<ArchiveItem[]>([
    { id: '1', title: '天坛祈年殿', status: 'guide_ready', updatedAt: '10 分钟前', image: 'https://picsum.photos/seed/temple/200/200' },
    { id: '2', title: '故宫太和殿', status: 'evidence_bound', updatedAt: '2 小时前', image: 'https://picsum.photos/seed/palace/200/200' },
    { id: '3', title: '颐和园佛香阁', status: 'archived', updatedAt: '1 天前', missingFields: 2, image: 'https://picsum.photos/seed/garden/200/200' },
    { id: '4', title: '圆明园大水法', status: 'raw', updatedAt: '2 天前', missingFields: 5, image: 'https://picsum.photos/seed/ruins/200/200' },
  ]);

  const getStatusBadge = (status: ArchiveStatus) => {
    const styles = {
      raw: "bg-stone-100 text-stone-600 border-stone-200",
      archived: "bg-blue-50 text-blue-700 border-blue-200",
      evidence_bound: "bg-purple-50 text-purple-700 border-purple-200",
      guide_ready: "bg-emerald-50 text-emerald-700 border-emerald-200",
    };
    
    const labels = {
      raw: "原始素材",
      archived: "已建档",
      evidence_bound: "证据已绑定",
      guide_ready: "导览已生成",
    };

    return (
      <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border", styles[status])}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">建档管理</h1>
          <p className="text-stone-500 text-sm mt-1">管理结构化档案与服务信息</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-sm">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            协作评论 (T2)
          </button>
          <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-stone-800 transition-colors">
            <Plus className="w-4 h-4" />
            新建档案
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input 
            type="text" 
            placeholder="搜索建筑名称..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors">
          <Filter className="w-4 h-4" />
          状态筛选
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-medium">
            <tr>
              <th className="px-6 py-4">建筑名称</th>
              <th className="px-6 py-4">内容状态</th>
              <th className="px-6 py-4">数据完整度</th>
              <th className="px-6 py-4">最后更新</th>
              <th className="px-6 py-4 text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-stone-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-10 h-10 rounded-lg object-cover border border-stone-200"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-medium text-stone-900">{item.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(item.status)}
                </td>
                <td className="px-6 py-4">
                  {item.missingFields ? (
                    <div className="flex items-center gap-1.5 text-amber-600 text-xs font-medium bg-amber-50 px-2 py-1 rounded w-fit">
                      <AlertCircle className="w-3.5 h-3.5" />
                      缺失 {item.missingFields} 个字段
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      信息完整
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-stone-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {item.updatedAt}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-amber-600 font-medium hover:text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    编辑档案
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
