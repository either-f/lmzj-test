import { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Clock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ReviewStatus = 'pending' | 'in_review' | 'evidence_required';
type ObjectType = 'ArchiveSnapshot' | 'GuideSnapshot' | 'ServiceInfoSnapshot';

interface ReviewTask {
  id: string;
  title: string;
  type: ObjectType;
  status: ReviewStatus;
  submitter: string;
  time: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export default function ReviewQueue() {
  const navigate = useNavigate();
  const [tasks] = useState<ReviewTask[]>([
    { id: 'T-1021', title: '天坛祈年殿 - 导览更新', type: 'GuideSnapshot', status: 'pending', submitter: '张研究员', time: '10 分钟前', riskLevel: 'low' },
    { id: 'T-1020', title: '故宫太和殿 - 服务信息', type: 'ServiceInfoSnapshot', status: 'in_review', submitter: '李研究员', time: '1 小时前', riskLevel: 'high' },
    { id: 'T-1019', title: '颐和园佛香阁 - 基础档案', type: 'ArchiveSnapshot', status: 'evidence_required', submitter: '王研究员', time: '2 小时前', riskLevel: 'medium' },
  ]);

  const getRiskBadge = (risk: string) => {
    const styles = {
      low: "text-emerald-700 bg-emerald-50",
      medium: "text-amber-700 bg-amber-50",
      high: "text-red-700 bg-red-50",
    };
    const labels = { low: "低风险", medium: "中风险", high: "高风险" };
    return (
      <span className={cn("px-2 py-1 rounded text-xs font-medium", styles[risk as keyof typeof styles])}>
        {labels[risk as keyof typeof labels]}
      </span>
    );
  };

  const getStatusIcon = (status: ReviewStatus) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-stone-400" />;
      case 'in_review': return <Eye className="w-4 h-4 text-blue-500" />;
      case 'evidence_required': return <AlertTriangle className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">审核队列</h1>
          <p className="text-stone-500 text-sm mt-1">核验内容准确性与服务信息时效性</p>
        </div>
        <button className="px-4 py-2 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 shadow-sm">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          自动批量核验 (T3)
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-stone-500 text-sm mb-1">待审核任务</div>
          <div className="text-3xl font-serif text-stone-900">12</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
          <div className="text-stone-500 text-sm mb-1">今日已处理</div>
          <div className="text-3xl font-serif text-stone-900">45</div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm">
          <div className="text-red-600 text-sm mb-1">高风险预警</div>
          <div className="text-3xl font-serif text-red-700">3</div>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <h2 className="font-medium text-stone-900">待办任务</h2>
        </div>
        <div className="divide-y divide-stone-100">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-stone-50 transition-colors flex items-center justify-between group">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getStatusIcon(task.status)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-stone-900">{task.title}</span>
                    {getRiskBadge(task.riskLevel)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <span>{task.id}</span>
                    <span>•</span>
                    <span className="font-mono text-xs bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">{task.type}</span>
                    <span>•</span>
                    <span>提交人: {task.submitter}</span>
                    <span>•</span>
                    <span>{task.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => navigate(`/review/${task.id}`)}
                  className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
                >
                  开始审核
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
