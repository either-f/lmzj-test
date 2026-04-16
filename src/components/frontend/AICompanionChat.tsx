import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

interface AICompanionChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AICompanionChat({ isOpen, onClose }: AICompanionChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', content: '您好！我是您的专属 AI 伴游。关于建筑细节、历史故事，或者洗手间、出口等服务信息，都可以随时问我。' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "无钉结构是怎么做到的？",
    "最近的洗手间在哪？",
    "游览祈年殿大概需要多久？"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '这是一个模拟的 AI 回复。在实际应用中，我会结合《梁木之间》的结构化档案为您提供准确的解答。';
      if (text.includes('洗手间')) {
        reply = '距离您最近的洗手间在祈年门东侧，步行约 3 分钟即可到达。';
      } else if (text.includes('无钉')) {
        reply = '祈年殿采用的是中国传统的榫卯结构。柱子和横梁之间通过凹凸结合的方式紧密咬合，不仅不需要一根铁钉，而且在遇到地震时具有极好的柔韧性和抗震性。';
      } else if (text.includes('多久')) {
        reply = '祈年殿院落的建议游览时长约为 40-60 分钟。如果您想仔细听完所有导览，建议预留 1 小时。';
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', content: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#3E322C]/40 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Chat Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-[#F4EFE5] shadow-2xl z-[101] flex flex-col animate-in slide-in-from-right duration-300 border-l border-[#EBE2D0]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#8B2522] text-[#F4EFE5] flex items-center justify-between shrink-0 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#B59662]/20 border border-[#B59662]/50 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#EBE2D0]" />
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg tracking-wider">智能伴游</h3>
              <p className="text-xs text-[#EBE2D0]/80 flex items-center gap-1 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59662]" />
                随时为您解答
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#EBE2D0]/80 hover:text-[#F4EFE5] hover:bg-white/10 rounded-full transition-colors relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F4EFE5] relative">
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] pointer-events-none" />
          
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex gap-3 relative z-10", msg.role === 'user' ? "flex-row-reverse" : "")}>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                msg.role === 'user' 
                  ? "bg-[#EBE2D0] border-[#D8CDB8] text-[#8B2522]" 
                  : "bg-[#8B2522] border-[#7A1A1A] text-[#F4EFE5]"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              </div>
              <div className={cn(
                "max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                msg.role === 'user' 
                  ? "bg-[#8B2522] text-[#F4EFE5] rounded-tr-sm" 
                  : "bg-white border border-[#EBE2D0] text-[#3E322C] rounded-tl-sm"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#8B2522] border border-[#7A1A1A] text-[#F4EFE5] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="bg-white border border-[#EBE2D0] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#B59662] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-[#B59662] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-[#B59662] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#F4EFE5] border-t border-[#EBE2D0] shrink-0 relative z-10">
          {/* Suggested Questions */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="shrink-0 px-3 py-1.5 bg-white border border-[#EBE2D0] hover:border-[#B59662] text-[#3E322C] text-xs rounded-full transition-colors whitespace-nowrap shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>
          
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="问问关于建筑、历史或服务信息..."
              className="w-full pl-4 pr-12 py-3 bg-white border border-[#EBE2D0] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#8B2522] focus:border-[#8B2522] transition-all text-[#3E322C] placeholder:text-[#3E322C]/40 shadow-inner"
            />
            <button 
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-2 text-[#8B2522] hover:bg-[#F4EFE5] rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
