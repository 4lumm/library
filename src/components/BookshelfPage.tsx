import React from 'react';
import Bookshelf from './Bookshelf';
import LetterCreationModal from './LetterCreationModal';
import { Letter } from '../types';

interface BookshelfPageProps {
  letters: Letter[];
  isCreating: boolean;
  onCreateLetter: (title: string, content: string) => void;
  onDeleteLetter: (letterId: string) => void;
  onCloseCreate: () => void;
  userRole: 'admin' | 'viewer';
}

export default function BookshelfPage({ 
  letters, 
  isCreating, 
  onCreateLetter, 
  onDeleteLetter,
  onCloseCreate,
  userRole
}: BookshelfPageProps) {
  return (
    <main className="relative smooth-transition">
      {/* Enhanced background ambiance with luxury gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50/80 via-stone-50/60 to-amber-50/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cream-100/30 to-stone-100/40 pointer-events-none" />
      
      {/* Enhanced magical lighting effects with multiple layers */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none gentle-bounce" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-200/12 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-200/10 rounded-full blur-2xl pointer-events-none" style={{ animationDelay: '2s' }} />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(139, 69, 19, 0.1) 0px,
              rgba(139, 69, 19, 0.1) 1px,
              transparent 1px,
              transparent 60px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(101, 67, 33, 0.08) 0px,
              rgba(101, 67, 33, 0.08) 1px,
              transparent 1px,
              transparent 60px
            )
          `
        }}
      />
      
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-serif text-amber-900 mb-6 tracking-wide"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Our Sacred Collection
          </h2>
          <p 
            className="text-amber-700 text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif',
              lineHeight: '1.8'
            }}
          >
            Each volume holds a moment suspended in time, a feeling crystallized in words, 
            a secret shared between hearts. Click any tome to unfold its treasured contents 
            and step into the sanctuary of our shared memories.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-xs" />
            <div className="mx-6 w-3 h-3 bg-amber-600 rounded-full shadow-sm" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-xs" />
          </div>
        </div>

        <Bookshelf letters={letters} onDeleteLetter={onDeleteLetter} userRole={userRole} />
      </div>

      {isCreating && (
        <LetterCreationModal
          onSubmit={onCreateLetter}
          onClose={onCloseCreate}
        />
      )}
    </main>
  );
}