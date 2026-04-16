import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, User, Globe, Users, MessageCircle } from 'lucide-react';
import AICompanionChat from '../components/frontend/AICompanionChat';

export default function FrontendLayout() {
  const { role, logout } = useAuth();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4EFE5] text-[#3E322C] font-serif selection:bg-[#EBE2D0] relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      <header className="sticky top-0 z-50 bg-[#F4EFE5]/90 backdrop-blur-md border-b border-[#EBE2D0]">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between relative z-10">
          <Link to="/" className="font-serif font-bold text-xl tracking-widest text-[#8B2522]">
            梁木之间
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/community" className="flex items-center gap-1.5 text-[#B59662] hover:text-[#8B2522] transition-colors">
              <Users className="w-4 h-4" />
              <span>社区</span>
            </Link>

            <button className="flex items-center gap-1.5 text-[#B59662] hover:text-[#8B2522] transition-colors">
              <Globe className="w-4 h-4" />
              <span>中 / EN</span>
            </button>

            {role === 'anonymous' ? (
              <Link to="/login" className="flex items-center gap-2 text-[#B59662] hover:text-[#8B2522] transition-colors">
                <LogIn className="w-4 h-4" />
                <span>登录</span>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/my-footprints" className="flex items-center gap-2 text-[#B59662] hover:text-[#8B2522] transition-colors">
                  <User className="w-4 h-4" />
                  <span>我的足迹</span>
                </Link>
                {role !== 'visitor' && (
                  <Link to="/archive" className="text-[#8B2522] hover:text-[#5A1816] font-bold">
                    进入工作台
                  </Link>
                )}
                <button onClick={logout} className="text-[#B59662] hover:text-[#8B2522]">
                  退出
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto w-full pb-24 relative z-10">
        <Outlet />
      </main>

      {/* Global AI FAB */}
      <button 
        onClick={() => setIsAIChatOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#8B2522] text-[#F4EFE5] rounded-full flex items-center justify-center shadow-xl border-2 border-[#B59662]/50 hover:bg-[#7A1A1A] hover:scale-105 transition-all z-40 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#B59662] rounded-full border-2 border-[#F4EFE5]" />
      </button>

      <AICompanionChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}

