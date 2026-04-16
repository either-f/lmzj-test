import { Link } from 'react-router-dom';
import { MapPin, Clock, Ticket, ArrowRight, Sparkles } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="animate-in fade-in duration-500 pb-24 font-serif">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-[#8B2522] overflow-hidden rounded-b-[2rem] shadow-lg">
        <img 
          src="https://picsum.photos/seed/temple/2000/1200" 
          alt="Temple of Heaven" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E322C] via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 text-[#F4EFE5]">
          <div className="flex items-center gap-2 text-[#B59662] text-sm mb-3 font-medium tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>北京 · 东城区</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>天坛祈年殿</h1>
          <p className="text-[#EBE2D0] text-lg max-w-xl font-light leading-relaxed tracking-wide">
            没有一根钉子，却屹立六百年。这是明清两代皇帝孟春祈谷的专用建筑，也是中国古代木结构建筑的巅峰之作。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 space-y-12">
        
        {/* Service Info Card */}
        <div className="bg-[#EFE9DB] rounded-2xl p-8 shadow-md border border-[#EBE2D0] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B59662] opacity-5 rounded-bl-full" />
          <h3 className="text-xl font-bold text-[#8B2522] mb-6 flex items-center gap-2 tracking-wider">
            <Sparkles className="w-5 h-5" />
            参观信息
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE5] border border-[#D8CDB8] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#B59662]" />
              </div>
              <div>
                <div className="text-base font-bold text-[#3E322C] mb-1">开放时间</div>
                <div className="text-sm text-[#3E322C]/70 leading-relaxed">旺季 06:00-22:00 (21:00停止入园)<br/>祈年殿院落 08:00-18:00</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE5] border border-[#D8CDB8] flex items-center justify-center shrink-0">
                <Ticket className="w-5 h-5 text-[#B59662]" />
              </div>
              <div>
                <div className="text-base font-bold text-[#3E322C] mb-1">预约提醒</div>
                <div className="text-sm text-[#3E322C]/70 leading-relaxed">需提前在「天坛」官方微信公众号实名预约，现场刷身份证入园。</div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <article className="prose prose-stone prose-p:leading-relaxed prose-headings:font-serif max-w-none prose-p:text-[#3E322C] prose-headings:text-[#8B2522]">
          <h2 className="text-3xl font-bold tracking-wider mb-6 border-b border-[#D8CDB8] pb-4 inline-block">通天之轴</h2>
          <p className="text-lg leading-loose">
            祈年殿的设计，处处体现着古人对“天”的敬畏。殿高38.2米，直径32.72米，三重蓝琉璃瓦檐层层收进，象征着皇天。
          </p>
          
          <figure className="my-10 relative p-2 bg-[#EFE9DB] rounded-xl border border-[#D8CDB8]">
            <img 
              src="https://picsum.photos/seed/architecture/1200/675" 
              alt="祈年殿建筑细节" 
              className="w-full rounded-lg object-cover aspect-video shadow-inner"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-center text-sm text-[#8B2522] mt-4 font-bold tracking-widest">三重蓝琉璃瓦檐，象征皇天</figcaption>
          </figure>

          <p className="text-lg leading-loose">
            最令人惊叹的是它的内部结构。整个大殿全靠28根楠木大柱和互相咬合的斗拱支撑，没有使用一根铁钉。中央的四根“龙井柱”代表春夏秋冬四季，中层的十二根“金柱”代表十二个月，外层的十二根“檐柱”代表十二时辰。
          </p>
        </article>

        {/* Guide Entry Action */}
        <div className="flex gap-4 pt-8 border-t border-[#D8CDB8]">
          <Link 
            to="/visit-planner/temple-of-heaven"
            className="bg-[#EFE9DB] text-[#8B2522] border border-[#D8CDB8] rounded-xl py-4 px-8 flex items-center justify-center shadow-sm hover:bg-[#EBE2D0] transition-colors shrink-0 font-bold tracking-wider"
          >
            行前规划
          </Link>
          <Link 
            to="/experience/temple-of-heaven/guide"
            className="flex-1 bg-[#8B2522] text-[#F4EFE5] rounded-xl py-4 px-8 flex items-center justify-between shadow-md hover:bg-[#7A1A1A] transition-colors border border-[#5A1816]"
          >
            <span className="font-bold tracking-wider text-lg">进入现场导览</span>
            <ArrowRight className="w-6 h-6 text-[#B59662]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
