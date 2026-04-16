import { useState } from 'react';
import { Download, Search, Filter, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function ReviewHistoryPage() {
  const [records] = useState([
    { id: 'R-20231024-05', target: '天坛祈年殿 (ServiceInfo)', result: 'approved', reviewer: '王审核', date: '2023-10-24 14:30', note: '官网已核实' },
    { id: 'R-20231024-04', target: '故宫太和殿 (Guide)', result: 'rejected', reviewer: '李审核', date: '2023-10-24 11:15', note: '导览词存在史实错误' },
    { id: 'R-20231023-09', target: '颐和园佛香阁 (Archive)', result: 'evidence_required', reviewer: '王审核', date: '2023-10-23 16:00', note: '高度数据缺乏可靠来源' },
    { id: 'R-20231023-08', target: '圆明园大水法 (Story)', result: 'approved', reviewer: '李审核', date: '2023-10-23 10:20', note: '-' },
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">审核历史</h1>
          <p className="text-stone-500 text-sm mt-1">查看历史审核记录与决策追溯</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          导出记录 (CSV)
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input 
            type="text" 
            placeholder="搜索记录 ID 或对象名称..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-600 hover:bg-stone-50">
          <Filter className="w-4 h-4" />
          结果筛选
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 font-medium">
            <tr>
              <th className="px-6 py-4">记录 ID</th>
              <th className="px-6 py-4">审核对象</th>
              <th className="px-6 py-4">审核结果</th>
              <th className="px-6 py-4">审核人</th>
              <th className="px-6 py-4">审核时间</th>
              <th className="px-6 py-4">备注意见</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 font-mono text-stone-600">{record.id}</td>
                <td className="px-6 py-4 font-medium text-stone-900">{record.target}</td>
                <td className="px-6 py-4">
                  {record.result === 'approved' && <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-xs font-medium"><CheckCircle2 className="w-3.5 h-3.5"/> 已放行</span>}
                  {record.result === 'rejected' && <span className="inline-flex items-center gap-1 text-red-700 bg-red-50 px-2 py-1 rounded text-xs font-medium"><XCircle className="w-3.5 h-3.5"/> 已驳回</span>}
                  {record.result === 'evidence_required' && <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-1 rounded text-xs font-medium"><AlertTriangle className="w-3.5 h-3.5"/> 待补证据</span>}
                </td>
                <td className="px-6 py-4 text-stone-600">{record.reviewer}</td>
                <td className="px-6 py-4 text-stone-500">{record.date}</td>
                <td className="px-6 py-4 text-stone-500 max-w-xs truncate" title={record.note}>{record.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
