import { useState } from 'react';
import { UploadCloud, FileType, X, Image as ImageIcon, FileText, Save, ArrowRight } from 'lucide-react';

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-medium text-stone-900">素材上传</h1>
          <p className="text-stone-500 text-sm mt-1">录入建筑基础信息并上传相关文献与图片素材</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            保存草稿
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-2">
            下一步：结构化建档
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column: Basic Info Form */}
        <div className="col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <h2 className="font-medium text-stone-900 mb-4">基础信息</h2>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">建筑名称 *</label>
              <input 
                type="text" 
                placeholder="例如：天坛祈年殿" 
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">所属朝代</label>
              <select className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-stone-600">
                <option>明代 (Ming Dynasty)</option>
                <option>清代 (Qing Dynasty)</option>
                <option>唐代 (Tang Dynasty)</option>
                <option>宋代 (Song Dynasty)</option>
                <option>其他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">地理位置</label>
              <input 
                type="text" 
                placeholder="例如：北京市东城区天坛路" 
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Upload Area */}
        <div className="col-span-2 space-y-6">
          <div 
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
              dragActive ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200 bg-white hover:bg-stone-50'
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
          >
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-stone-900 font-medium mb-1">点击或拖拽文件到此处上传</h3>
            <p className="text-stone-500 text-sm mb-6">支持 JPG, PNG, PDF, TXT 格式，单文件最大 50MB</p>
            <button className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 transition-colors">
              选择文件
            </button>
          </div>

          {/* Uploaded Files List */}
          <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
              <h3 className="text-sm font-medium text-stone-700">已上传素材 (3)</h3>
            </div>
            <div className="divide-y divide-stone-100">
              {[
                { name: '祈年殿结构剖面图.jpg', size: '2.4 MB', type: 'image' },
                { name: '天坛志_卷三.pdf', size: '15.1 MB', type: 'doc' },
                { name: '现场采集录音_01.m4a', size: '4.2 MB', type: 'audio' },
              ].map((file, i) => (
                <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-stone-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-500">
                      {file.type === 'image' ? <ImageIcon className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-stone-900">{file.name}</div>
                      <div className="text-xs text-stone-500">{file.size}</div>
                    </div>
                  </div>
                  <button className="text-stone-400 hover:text-red-500 transition-colors p-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
