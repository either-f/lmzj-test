import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Clock, FileText } from 'lucide-react';

export default function ReviewDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/review')}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-serif font-medium text-stone-900">审核详情</h1>
              <span className="px-2 py-0.5 rounded text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200">
                中风险
              </span>
            </div>
            <p className="text-stone-500 text-sm mt-1">任务 ID: {id || 'T-1019'} · 提交人: 王研究员 · 2小时前</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: Diff Content */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
              <h2 className="font-medium text-stone-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-stone-400" />
                服务信息变更 (ServiceInfoSnapshot)
              </h2>
            </div>
            
            <div className="p-0">
              <table className="w-full text-sm text-left">
                <thead className="bg-stone-50 text-stone-500">
                  <tr>
                    <th className="px-5 py-3 font-medium w-1/4">字段</th>
                    <th className="px-5 py-3 font-medium w-3/8 text-red-600 bg-red-50/30">原内容 (线上)</th>
                    <th className="px-5 py-3 font-medium w-3/8 text-emerald-600 bg-emerald-50/30">新内容 (待审)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="px-5 py-4 font-medium text-stone-700">开放时间</td>
                    <td className="px-5 py-4 text-stone-500 bg-red-50/10 line-through">旺季 06:00-21:00</td>
                    <td className="px-5 py-4 text-emerald-700 bg-emerald-50/10 font-medium">旺季 06:00-22:00 (21:00停止入园)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-stone-700">预约方式</td>
                    <td className="px-5 py-4 text-stone-500">微信公众号预约</td>
                    <td className="px-5 py-4 text-stone-500">微信公众号预约</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5">
            <h3 className="text-sm font-medium text-blue-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              AI 核验建议
            </h3>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              已自动比对天坛官方网站最新公告，开放时间变更属实（公告发布于昨日）。建议放行。
            </p>
          </div>
        </div>

        {/* Right: Decision Panel */}
        <div className="col-span-1">
          <div className="bg-white border border-stone-200 rounded-xl shadow-sm p-5 sticky top-20">
            <h2 className="font-medium text-stone-900 mb-4">审核决策</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">审核意见 (选填)</label>
                <textarea 
                  rows={3}
                  placeholder="输入驳回原因或补充说明..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => navigate('/review')}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                审核通过 (放行)
              </button>
              <button 
                onClick={() => navigate('/review')}
                className="w-full py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                打回：要求补充证据
              </button>
              <button 
                onClick={() => navigate('/review')}
                className="w-full py-2.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-4 h-4" />
                直接驳回
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
