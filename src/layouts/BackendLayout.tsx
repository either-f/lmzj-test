import { Outlet, NavLink, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  UploadCloud, 
  Database, 
  Link as LinkIcon, 
  Map, 
  Send, 
  CheckSquare, 
  LogOut,
  ShieldAlert,
  Image as ImageIcon,
  Sparkles,
  History,
  Settings,
  Archive,
  Network,
  BarChart3,
  Webhook
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function BackendLayout() {
  const { role, logout } = useAuth();

  // Redirect anonymous or standard visitors away from backend
  if (role === 'anonymous' || role === 'visitor') {
    return <Navigate to="/login" replace />;
  }

  const researcherLinks = [
    { to: '/upload', icon: UploadCloud, label: '素材上传' },
    { to: '/archive', icon: Database, label: '建档管理' },
    { to: '/evidence', icon: LinkIcon, label: '证据绑定' },
    { to: '/guide-gen', icon: Map, label: '导览生成' },
    { to: '/publish', icon: Send, label: '发布中心' },
  ];

  const t1Links = [
    { to: '/story', icon: ImageIcon, label: '故事卡 (T1)' },
    { to: '/version', icon: History, label: '版本追溯 (T1)' },
    { to: '/ai', icon: Sparkles, label: 'AI 工具 (T1)' },
    { to: '/settings', icon: Settings, label: '系统设置 (T1)' },
  ];

  const t2Links = [
    { to: '/knowledge-graph', icon: Network, label: '知识图谱 (T2)' },
  ];

  const t3Links = [
    { to: '/dashboard', icon: BarChart3, label: '数据大屏 (T3)' },
    { to: '/open-platform', icon: Webhook, label: '开放平台 (T3)' },
  ];

  const reviewerLinks = [
    { to: '/review', icon: CheckSquare, label: '审核队列' },
    { to: '/review-history', icon: Archive, label: '审核历史 (T1)' },
  ];

  const links = role === 'reviewer' ? reviewerLinks : 
                role === 'researcher' ? [...researcherLinks, ...t1Links, ...t2Links, ...t3Links] : 
                [...researcherLinks, ...t1Links, ...t2Links, ...t3Links, ...reviewerLinks]; // admin sees all

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="h-14 flex items-center px-6 border-b border-stone-200">
          <span className="font-serif font-medium text-lg tracking-wide">梁木之间 工作台</span>
        </div>
        
        <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>当前角色: <strong className="text-stone-900 capitalize">{role}</strong></span>
          </div>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-stone-100 text-stone-900" 
                  : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
              )}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-stone-200">
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm font-medium text-stone-500 hover:bg-stone-50 hover:text-stone-900 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            退出登录
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
