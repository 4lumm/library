import React from 'react';
import { X, Heart, Calendar, User, Trash2 } from 'lucide-react';
import { Letter } from '../types';

interface BookModalProps {
  letter: Letter;
  onClose: () => void;
  onDelete: (letterId: string) => void;
  userRole: 'admin' | 'viewer';
}

export default function BookModal({ letter, onClose, onDelete, userRole }: BookModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Convert to Philippine timezone (GMT+8)
    const philippineTime = new Date(date.getTime() + (8 * 60 * 60 * 1000));
    return philippineTime.toLocaleString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Manila'
    }) + ' (PHT)';
  };

  const handleDelete = () => {
    if (letter.id === 'welcome') return; // Protect welcome letter
    if (window.confirm('Are you sure you want to delete this letter?')) {
      onDelete(letter.id);
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Book opening animation container */}
        <div className="relative bg-amber-900 rounded-lg shadow-2xl overflow-hidden" style={{ perspective: '1000px' }}>
          
          {/* Left page (book spine/cover) */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-amber-800 to-amber-900 rounded-l-lg border-r border-amber-700" />
          
          {/* Right page (letter content) */}
          <div 
            className="relative min-h-[600px] bg-gradient-to-br from-cream-50 via-stone-50 to-cream-100 rounded-lg shadow-inner"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(101, 67, 33, 0.05) 0%, transparent 50%),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 24px,
                  rgba(139, 69, 19, 0.02) 25px
                )
              `
            }}
          >
            {/* Subtle parchment texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-100 via-transparent to-stone-100" />
            
            {/* Action buttons */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              {userRole === 'admin' && letter.id !== 'welcome' && (
                <button
                  onClick={handleDelete}
                  className="bg-red-600/80 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  title="Delete letter"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={handleClose}
                className="bg-amber-800/80 hover:bg-amber-800 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Letter content */}
            <div className="relative z-10 p-12 h-full">
              {/* Header with decorative elements */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
                  <Heart className="mx-4 text-amber-700 w-6 h-6" />
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
                </div>
                
                <h2 
                  className="text-3xl font-serif text-gray-900 mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {letter.title}
                </h2>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{letter.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(letter.createdAt)}</span>
                  </div>
                </div>
              </div>

              {/* Letter content */}
              <div className="max-w-2xl mx-auto">
                <div 
                  className="text-gray-900 leading-relaxed whitespace-pre-wrap text-lg"
                  style={{ 
                    fontFamily: 'Cormorant Garamond, serif',
                    lineHeight: '1.8',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {letter.content}
                </div>
              </div>

              {/* Decorative footer */}
              <div className="mt-12 flex items-center justify-center">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
                <div className="mx-4 text-amber-700">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1" />
              </div>
            </div>

            {/* Subtle aged paper effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Very subtle stains */}
              <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-amber-200/20 rounded-full blur-sm" />
              <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-stone-300/15 rounded-full blur-sm" />
              
              {/* Minimal paper grain */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    radial-gradient(1px 1px at 20% 30%, rgba(139, 69, 19, 0.3), transparent),
                    radial-gradient(1px 1px at 40% 70%, rgba(139, 69, 19, 0.3), transparent),
                    radial-gradient(1px 1px at 90% 40%, rgba(139, 69, 19, 0.3), transparent)
                  `,
                  backgroundSize: '100px 100px, 150px 150px, 200px 200px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}