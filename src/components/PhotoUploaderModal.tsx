import { useState, useRef } from 'react';
import { Camera, Upload, Check, RefreshCw, X, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onPhotoChange: (newPhotoUrl: string) => void;
}

export default function PhotoUploaderModal({
  isOpen,
  onClose,
  currentPhoto,
  onPhotoChange,
}: PhotoUploaderModalProps) {
  const [urlInput, setUrlInput] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onPhotoChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onPhotoChange(urlInput.trim());
      setUrlInput('');
    }
  };

  const handleResetDefault = () => {
    onPhotoChange(PERSONAL_INFO.defaultPortrait);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#12141d] border border-white/15 p-6 shadow-2xl text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Customize Profile Photo
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Upload your personal portrait to display in the hero section
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Photo Preview */}
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#090a0f] border border-white/10 mb-5">
          <div className="w-16 h-20 rounded-lg overflow-hidden border border-white/20 shrink-0">
            <img
              src={currentPhoto}
              alt="Current portrait preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
              Active Photo
            </span>
            <p className="text-xs text-neutral-300 mb-2">
              Currently displayed on your hero banner, about me cards, and quote sections.
            </p>
            <button
              onClick={handleResetDefault}
              className="text-[11px] font-mono text-red-400 hover:text-red-300 underline cursor-pointer flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to default cinematic portrait</span>
            </button>
          </div>
        </div>

        {/* Presets Selector */}
        <div className="mb-5">
          <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
            Available Portrait Options
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onPhotoChange('assets/employee_record-manager.jpg')}
              className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                currentPhoto === 'assets/employee_record-manager.jpg'
                  ? 'border-red-500 bg-red-500/10 text-white'
                  : 'border-white/10 bg-white/5 hover:border-white/20 text-neutral-300'
              }`}
            >
              <img
                src="assets/employee_record-manager.jpg"
                alt="Employee Record Manager"
                className="w-10 h-12 rounded object-cover border border-white/20"
              />
              <div className="min-w-0">
                <span className="text-xs font-bold block truncate">Employee Photo</span>
                <span className="text-[10px] text-neutral-400 font-mono block truncate">Project Portfolio</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onPhotoChange('/src/assets/images/kokul_new_portrait_1790004448046.jpg')}
              className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                currentPhoto.includes('kokul_new_portrait')
                  ? 'border-red-500 bg-red-500/10 text-white'
                  : 'border-white/10 bg-white/5 hover:border-white/20 text-neutral-300'
              }`}
            >
              <img
                src="/src/assets/images/kokul_new_portrait_1790004448046.jpg"
                alt="Cinematic Red Portrait"
                className="w-10 h-12 rounded object-cover border border-white/20"
              />
              <div className="min-w-0">
                <span className="text-xs font-bold block truncate">Cinematic Ember</span>
                <span className="text-[10px] text-neutral-400 font-mono block truncate">Dark & Red Glow</span>
              </div>
            </button>
          </div>
        </div>

        {/* Drag & Drop Upload Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`p-6 rounded-xl border-2 border-dashed transition-all cursor-pointer text-center mb-5 ${
            dragOver
              ? 'border-red-500 bg-red-500/10'
              : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
          />
          <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
          <p className="text-xs sm:text-sm font-semibold text-white">
            Click to upload your photo or drag and drop
          </p>
          <p className="text-[11px] font-mono text-neutral-400 mt-1">
            Supports JPG, PNG, WEBP (Instant local preview)
          </p>
        </div>

        {/* URL Input */}
        <form onSubmit={handleUrlSubmit} className="space-y-2 mb-6">
          <label className="text-xs font-mono uppercase text-neutral-400 block">
            Or paste image URL
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/my-photo.jpg"
              className="flex-1 px-3 py-2 rounded-xl bg-[#090a0f] border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 font-mono"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>

        {/* Done Button */}
        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
          >
            Finished
          </button>
        </div>

      </div>
    </div>
  );
}
