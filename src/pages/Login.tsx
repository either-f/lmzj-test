import { useNavigate } from 'react-router-dom';
import { useAuth, Role } from '../contexts/AuthContext';
import { User, BookOpen, CheckSquare, Shield } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    if (role === 'visitor') {
      navigate('/experience/temple-of-heaven');
    } else if (role === 'reviewer') {
      navigate('/review');
    } else {
      navigate('/archive');
    }
  };

  const roles = [
    { id: 'visitor', label: '游客 (Visitor)', icon: User, desc: '查看故事与导览' },
    { id: 'researcher', label: '研究员 (Researcher)', icon: BookOpen, desc: '上传、建档、生成导览' },
    { id: 'reviewer', label: '审核员 (Reviewer)', icon: CheckSquare, desc: '核验内容与服务信息' },
    { id: 'admin', label: '管理员 (Admin)', icon: Shield, desc: '全权限与演示越权' },
  ] as const;

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl font-medium text-stone-900 mb-2">梁木之间</h1>
          <p className="text-stone-500 text-sm">T0 阶段原型演示 · 角色分流</p>
        </div>

        <div className="space-y-3">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => handleLogin(r.id)}
              className="w-full flex items-center p-4 rounded-xl border border-stone-200 hover:border-amber-600/30 hover:bg-amber-50/30 transition-all group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-100/50 group-hover:text-amber-700 transition-colors mr-4">
                <r.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-stone-900">{r.label}</div>
                <div className="text-xs text-stone-500 mt-0.5">{r.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
