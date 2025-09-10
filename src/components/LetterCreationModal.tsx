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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-3xl w-full">
        <div 
          className="bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 rounded-lg shadow-2xl p-8"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(101, 67, 33, 0.08) 0%, transparent 50%),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                rgba(139, 69, 19, 0.03) 25px
              )
            `
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-amber-800/80 hover:bg-amber-800 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
              <Feather className="mx-4 text-amber-700 w-6 h-6" />
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
            </div>
            
            <h2 
              className="text-3xl font-serif text-amber-900 mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Write a New Letter
            </h2>
            <p className="text-amber-700">Pour your heart onto parchment</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                className="block text-amber-800 text-lg font-serif font-medium mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Letter Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-white/80 text-amber-900 placeholder-amber-500 transition-all text-lg"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                placeholder="Give your letter a name..."
                required
              />
            </div>

            <div>
              <label 
                className="block text-amber-800 text-lg font-serif font-medium mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Your Message
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-white/80 text-amber-900 placeholder-amber-500 transition-all resize-none text-lg leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                placeholder="Dear..."
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span>Add to Library</span>
              </button>
            </div>
          </form>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-amber-200/20 rounded-full blur-sm" />
            <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-stone-300/15 rounded-full blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}