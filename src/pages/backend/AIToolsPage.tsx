import { Sparkles, FileText, Languages, RefreshCw, Database } from 'lucide-react';

export default function AIToolsPage() {
  const tools = [
    {
      icon: FileText,
      title: '批量摘要生成',
      desc: '为选定的多个建筑档案自动生成 100 字以内的短摘要，用于列表页展示。',
      status: 'ready'
    },
    {
      icon: Languages,
      title: '多语言翻译 (T2预演)',
      desc: '将已发布的中文导览词一键翻译为英文、日文，并保持专业建筑术语的准确性。',
      status: 'beta'
    },
    {
      icon: RefreshCw,
      title: '语气批量改写',
      desc: '将选定项目的导览词批量转换为“儿童友好”或“专业严谨”风格。',
      status: 'ready'
    },
    {
      icon: Database,
      title: '外部信息结构化',
      desc: '输入一篇公众号文章或维基百科链接，AI 自动提取建筑年份、高度、结构等结构化字段。',
      status: 'ready'
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-medium text-stone-900 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-600" />
          独立 AI 工具页
        </h1>
        <p className="text-stone-500 text-sm mt-1">处理批量任务与高级信息提取的独立工作台</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {tools.map((tool, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-300 transition-colors group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                <tool.icon className="w-6 h-6" />
              </div>
              {tool.status === 'beta' && (
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-blue-50 text-blue-600 uppercase tracking-wider border border-blue-100">
                  Beta
                </span>
              )}
            </div>
            <h3 className="text-lg font-medium text-stone-900 mb-2">{tool.title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              {tool.desc}
            </p>
            <div className="flex items-center text-sm font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
              打开工具 &rarr;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
