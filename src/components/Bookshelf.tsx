import React, { useState } from 'react';
import Book from './Book';
import BookModal from './BookModal';
import { Letter } from '../types';

interface BookshelfProps {
  letters: Letter[];
  onDeleteLetter: (letterId: string) => void;
  userRole: 'admin' | 'viewer';
}

export default function Bookshelf({ letters, onDeleteLetter, userRole }: BookshelfProps) {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const booksPerShelf = 8;
  const shelves = Math.max(6, Math.ceil(letters.length / booksPerShelf));

  return (
    <>
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced ambient lighting */}
        <div className="absolute -inset-12 bg-gradient-to-br from-amber-200/15 via-transparent to-green-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -inset-8 bg-gradient-to-tl from-gold-200/10 via-transparent to-amber-300/15 rounded-full blur-2xl pointer-events-none" />
        
        {/* Main luxury bookshelf structure */}
        <div 
          className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-2xl deep-shadow overflow-hidden border-4 border-amber-700 wood-grain"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(92, 51, 23, 0.15) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(92, 51, 23, 0.15) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(92, 51, 23, 0.15) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(92, 51, 23, 0.15) 75%),
              repeating-linear-gradient(
                0deg,
                rgba(139, 69, 19, 0.1) 0px,
                rgba(139, 69, 19, 0.1) 2px,
                transparent 2px,
                transparent 40px
              )
            `,
            backgroundSize: '30px 30px, 30px 30px, 30px 30px, 30px 30px, 100% 100%'
          }}
        >
          {/* Enhanced decorative wood grain overlay */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-amber-600/20 via-transparent to-amber-700/20" />
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          
          {/* Luxury carved borders with intricate details */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-600 via-amber-700 to-transparent border-b-4 border-amber-500 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 via-gold-400/30 to-amber-500/50" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-600 via-amber-700 to-transparent border-t-4 border-amber-500 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 via-gold-400/30 to-amber-500/50" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-amber-600 via-amber-700 to-transparent border-r-4 border-amber-500 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/50 via-gold-400/30 to-amber-500/50" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-amber-600 via-amber-700 to-transparent border-l-4 border-amber-500 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/50 via-gold-400/30 to-amber-500/50" />
          </div>

          {/* Ornate corner decorations with luxury details */}
          <div className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-gold-400 to-amber-600 rounded-full shadow-inner border-2 border-amber-400">
            <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full" />
          </div>
          <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-bl from-gold-400 to-amber-600 rounded-full shadow-inner border-2 border-amber-400">
            <div className="absolute inset-1 bg-gradient-to-bl from-amber-300 to-amber-500 rounded-full" />
          </div>
          <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-tr from-gold-400 to-amber-600 rounded-full shadow-inner border-2 border-amber-400">
            <div className="absolute inset-1 bg-gradient-to-tr from-amber-300 to-amber-500 rounded-full" />
          </div>
          <div className="absolute bottom-3 right-3 w-6 h-6 bg-gradient-to-tl from-gold-400 to-amber-600 rounded-full shadow-inner border-2 border-amber-400">
            <div className="absolute inset-1 bg-gradient-to-tl from-amber-300 to-amber-500 rounded-full" />
          </div>

          {/* Enhanced shelves with luxury details */}
          {Array.from({ length: shelves }, (_, shelfIndex) => {
            const startIndex = shelfIndex * booksPerShelf;
            const shelfBooks = letters.slice(startIndex, startIndex + booksPerShelf);
            
            return (
              <div key={shelfIndex} className="relative">
                {/* Luxury shelf surface with enhanced texturing */}
                <div className="flex items-end justify-start px-10 py-6 bg-gradient-to-b from-amber-800/60 to-amber-900/60 border-b-2 border-amber-700/60 min-h-[180px] wood-grain">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 via-transparent to-amber-700/20" />
                  {shelfBooks.map((letter, bookIndex) => (
                    <Book
                      key={letter.id}
                      letter={letter}
                      onClick={() => setSelectedLetter(letter)}
                      delay={bookIndex * 0.15}
                    />
                  ))}
                </div>
                
                {/* Enhanced shelf lighting with multiple layers */}
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-inner" />
                <div className="absolute inset-x-0 top-1 h-2 bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-inner border-t-2 border-amber-600 wood-grain">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700/30 via-gold-500/20 to-amber-700/30" />
                </div>
                
                {/* Enhanced shelf support brackets with ornate details */}
                <div className="absolute left-6 top-1/2 w-3 h-12 bg-gradient-to-b from-amber-700 to-amber-800 rounded-lg shadow-lg transform -translate-y-1/2 border border-amber-600">
                  <div className="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-700 rounded-md" />
                </div>
                <div className="absolute right-6 top-1/2 w-3 h-12 bg-gradient-to-b from-amber-700 to-amber-800 rounded-lg shadow-lg transform -translate-y-1/2 border border-amber-600">
                  <div className="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-700 rounded-md" />
                </div>
                
                {/* Additional decorative elements */}
                <div className="absolute left-12 top-1/2 w-1 h-6 bg-amber-600/60 rounded-full transform -translate-y-1/2" />
                <div className="absolute right-12 top-1/2 w-1 h-6 bg-amber-600/60 rounded-full transform -translate-y-1/2" />
              </div>
            );
          })}

          {/* Enhanced magical ambient glow with multiple layers */}
          <div className="absolute -inset-8 bg-amber-200/10 rounded-3xl blur-2xl pointer-events-none" />
          <div className="absolute -inset-12 bg-amber-300/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -inset-16 bg-gold-200/6 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Enhanced luxury corner decorations */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold-400 via-amber-500 to-amber-700 rounded-full deep-shadow border-3 border-amber-400">
          <div className="absolute inset-2 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full inner-glow" />
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-bl from-gold-400 via-amber-500 to-amber-700 rounded-full deep-shadow border-3 border-amber-400">
          <div className="absolute inset-2 bg-gradient-to-bl from-amber-300 to-amber-600 rounded-full inner-glow" />
        </div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-gold-400 via-amber-500 to-amber-700 rounded-full deep-shadow border-3 border-amber-400">
          <div className="absolute inset-2 bg-gradient-to-tr from-amber-300 to-amber-600 rounded-full inner-glow" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-tl from-gold-400 via-amber-500 to-amber-700 rounded-full deep-shadow border-3 border-amber-400">
          <div className="absolute inset-2 bg-gradient-to-tl from-amber-300 to-amber-600 rounded-full inner-glow" />
        </div>
      </div>

      {/* Enhanced book modal */}
      {selectedLetter && (
        <BookModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
          onDelete={onDeleteLetter}
          userRole={userRole}
        />
      )}
    </>
  );
}