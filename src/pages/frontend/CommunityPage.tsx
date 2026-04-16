import { useState } from 'react';
import { MapPin, PenTool, ScrollText } from 'lucide-react';

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: '建筑迷小李',
      avatar: 'https://picsum.photos/seed/user1/100/100',
      image: 'https://picsum.photos/seed/post1/600/800',
      content: '今天终于看到了祈年殿的无钉结构，古人的智慧真的令人叹为观止！配合现场的 AI 导览，听到了很多以前不知道的细节。',
      location: '天坛祈年殿',
      likes: 128,
      comments: 12
    },
    {
      id: 2,
      author: 'Sarah in Beijing',
      avatar: 'https://picsum.photos/seed/user2/100/100',
      image: 'https://picsum.photos/seed/post2/800/600',
      content: 'The architectural details here are absolutely stunning. The blue roof tiles against the clear sky is a perfect color palette. 💙',
      location: '天坛祈年殿',
      likes: 89,
      comments: 5
    },
    {
      id: 3,
      author: '老北京胡同游',
      avatar: 'https://picsum.photos/seed/user3/100/100',
      image: 'https://picsum.photos/seed/post3/600/600',
      content: '太和殿的重檐庑殿顶，是中国古代建筑的最高等级。每次来都有新的感悟。',
      location: '故宫太和殿',
      likes: 256,
      comments: 34
    },
    {
      id: 4,
      author: '木结构研究者',
      avatar: 'https://picsum.photos/seed/user4/100/100',
      image: 'https://picsum.photos/seed/post4/600/900',
      content: '斗拱的咬合极其精密，这是我拍到的最清晰的一张细节图。',
      location: '天坛祈年殿',
      likes: 412,
      comments: 56
    }
  ];

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-[#F4EFE5] pb-24 animate-in fade-in duration-500 font-serif relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none fixed" />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-[#8B2522] to-[#5A1816] text-[#F4EFE5] px-6 py-16 relative overflow-hidden shadow-lg border-b-8 border-[#3E322C]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B59662]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ScrollText className="w-8 h-8 text-[#B59662]" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>雅集</h1>
            <ScrollText className="w-8 h-8 text-[#B59662] scale-x-[-1]" />
          </div>
          <p className="text-[#EBE2D0] text-sm leading-relaxed max-w-lg mx-auto tracking-widest">
            群贤毕至，少长咸集。在此分享足迹与感悟，共赏古建之美。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-20">
        {/* Masonry Grid (Simulated with columns) */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="break-inside-avoid bg-[#EFE9DB] rounded-xl shadow-md border border-[#D8CDB8] overflow-hidden group relative p-2">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#B59662] opacity-50 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#B59662] opacity-50 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#B59662] opacity-50 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#B59662] opacity-50 rounded-br-xl" />

              <div className="relative rounded-lg overflow-hidden border border-[#D8CDB8] shadow-inner">
                <img src={post.image} alt="Post" className="w-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              
              <div className="p-4">
                <p className="text-base text-[#3E322C] leading-loose mb-4 line-clamp-3 tracking-wide">
                  {post.content}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#8B2522] font-bold mb-4 bg-[#F4EFE5] w-fit px-3 py-1.5 rounded border border-[#D8CDB8] shadow-sm tracking-widest">
                  <MapPin className="w-3 h-3 text-[#B59662]" />
                  {post.location}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#D8CDB8]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-[#B59662] overflow-hidden">
                      <img src={post.avatar} alt={post.author} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-sm font-bold text-[#3E322C] tracking-wider">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 group/btn">
                      <div className="w-6 h-6 rounded-sm border border-[#8B2522] text-[#8B2522] flex items-center justify-center bg-[#F4EFE5] group-hover/btn:bg-[#8B2522] group-hover/btn:text-[#F4EFE5] transition-colors rotate-3 shadow-sm">
                        <span className="text-[10px] font-bold">赏</span>
                      </div>
                      <span className="text-xs font-bold text-[#3E322C]/70">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 group/btn">
                      <div className="w-6 h-6 rounded-sm border border-[#B59662] text-[#B59662] flex items-center justify-center bg-[#F4EFE5] group-hover/btn:bg-[#B59662] group-hover/btn:text-[#F4EFE5] transition-colors -rotate-3 shadow-sm">
                        <span className="text-[10px] font-bold">评</span>
                      </div>
                      <span className="text-xs font-bold text-[#3E322C]/70">{post.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button for Posting */}
      <button className="fixed bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 z-40 bg-[#8B2522] text-[#F4EFE5] px-8 py-4 rounded-full shadow-xl font-bold tracking-widest hover:bg-[#7A1A1A] transition-colors flex items-center gap-2 border-2 border-[#B59662]/50 hover:scale-105">
        <PenTool className="w-5 h-5" />
        <span>落笔题词</span>
      </button>
    </div>
  );
}
