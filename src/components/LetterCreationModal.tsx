import React, { useState } from 'react';
import { X, Feather, Heart } from 'lucide-react';

interface LetterCreationModalProps {
  onSubmit: (title: string, content: string) => void;
  onClose: () => void;
}

export default function LetterCreationModal({ onSubmit, onClose }: LetterCreationModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit(title.trim(), content.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-backdrop-fade">
      <div className="relative max-w-4xl w-full page-flip-open">
        <div 
          className="aged-paper rounded-2xl deep-shadow p-10 border-2 border-amber-200"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                rgba(139, 69, 19, 0.04) 25px,
                rgba(139, 69, 19, 0.04) 26px,
                transparent 27px
              )
            `
          }}
        >
          {/* Close button with luxury styling */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-gradient-to-b from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800 text-amber-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 luxury-shadow hover:scale-110 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Enhanced header with luxury decorations */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
              <div className="mx-6 relative">
                <Feather className="text-amber-700 w-8 h-8 golden-glow" />
                <div className="absolute -inset-2 bg-amber-200/20 rounded-full blur-md" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
            </div>
            
            <h2 
              className="text-4xl font-serif text-amber-900 mb-3 tracking-wide"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Compose a New Letter
            </h2>
            <p 
              className="text-amber-700 text-lg"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Let your heart speak through ink and parchment
            </p>
          </div>

          {/* Enhanced form with luxury styling */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label 
                className="block text-amber-800 text-xl font-serif font-medium mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Letter Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200 bg-white/90 text-amber-900 placeholder-amber-500 transition-all text-xl luxury-shadow"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                placeholder="Give your letter a beautiful name..."
                required
              />
            </div>

            <div>
              <label 
                className="block text-amber-800 text-xl font-serif font-medium mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Your Heartfelt Message
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={14}
                className="w-full px-6 py-4 rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200 bg-white/90 text-amber-900 placeholder-amber-500 transition-all resize-none text-xl leading-relaxed luxury-shadow custom-scrollbar"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  lineHeight: '1.8'
                }}
                placeholder="My dearest love..."
                required
              />
            </div>

            <div className="flex justify-end space-x-6 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 bg-gradient-to-b from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 text-white rounded-xl transition-all duration-300 font-medium text-lg luxury-shadow hover:scale-105"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-4 luxury-button text-white rounded-xl font-medium text-lg flex items-center space-x-3 hover:scale-105"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <Heart className="w-5 h-5" />
                <span>Add to Our Library</span>
              </button>
            </div>
          </form>

          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl opacity-20">
            <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-amber-200/40 rounded-full blur-xl" />
            <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-stone-300/30 rounded-full blur-lg" />
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-amber-300/35 rounded-full blur-md" />
          </div>
        </div>
      </div>
    </div>
  );
}