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
      <div className="relative max-w-6xl mx-auto">
        {/* Main bookshelf structure */}
        <div 
          className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-xl shadow-2xl overflow-hidden border-4 border-amber-700"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(92, 51, 23, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(92, 51, 23, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(92, 51, 23, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(92, 51, 23, 0.1) 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        >
          {/* Decorative wood grain effect */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          
          {/* Ornate carved borders */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-amber-600 via-amber-700 to-transparent border-b-2 border-amber-500" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-amber-600 via-amber-700 to-transparent border-t-2 border-amber-500" />
          <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-amber-600 via-amber-700 to-transparent border-r-2 border-amber-500" />
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-amber-600 via-amber-700 to-transparent border-l-2 border-amber-500" />

          {/* Decorative corner pieces */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-amber-500 rounded-full shadow-inner" />
          <div className="absolute top-2 right-2 w-4 h-4 bg-amber-500 rounded-full shadow-inner" />
          <div className="absolute bottom-2 left-2 w-4 h-4 bg-amber-500 rounded-full shadow-inner" />
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-amber-500 rounded-full shadow-inner" />

          {/* Shelves */}
          {Array.from({ length: shelves }, (_, shelfIndex) => {
            const startIndex = shelfIndex * booksPerShelf;
            const shelfBooks = letters.slice(startIndex, startIndex + booksPerShelf);
            
            return (
              <div key={shelfIndex} className="relative">
                {/* Shelf surface */}
                <div className="flex items-end justify-start px-8 py-4 bg-gradient-to-b from-amber-800/50 to-amber-900/50 border-b border-amber-700/50 min-h-[160px]">
                  {shelfBooks.map((letter, bookIndex) => (
                    <Book
                      key={letter.id}
                      letter={letter}
                      onClick={() => setSelectedLetter(letter)}
                      delay={bookIndex * 0.1}
                    />
                  ))}
                </div>
                
                {/* Enhanced shelf lighting */}
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-inner border-t border-amber-600" />
                
                {/* Shelf support brackets */}
                <div className="absolute left-4 top-1/2 w-2 h-8 bg-amber-700 rounded-sm shadow-md transform -translate-y-1/2" />
                <div className="absolute right-4 top-1/2 w-2 h-8 bg-amber-700 rounded-sm shadow-md transform -translate-y-1/2" />
              </div>
            );
          })}

          {/* Enhanced magical ambient glow */}
          <div className="absolute -inset-6 bg-amber-200/8 rounded-3xl blur-2xl pointer-events-none" />
          <div className="absolute -inset-12 bg-amber-300/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Enhanced corner decorations */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full shadow-xl border-2 border-amber-400" />
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-bl from-amber-500 to-amber-700 rounded-full shadow-xl border-2 border-amber-400" />
        <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-tr from-amber-500 to-amber-700 rounded-full shadow-xl border-2 border-amber-400" />
        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-tl from-amber-500 to-amber-700 rounded-full shadow-xl border-2 border-amber-400" />
      </div>

      {/* Book modal */}
      {selectedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-4xl bg-gradient-to-r from-amber-50 to-amber-100 shadow-2xl rounded-xl overflow-hidden border-4 border-amber-700 flex">
            <div className="w-1/2 p-8 font-serif text-amber-900 bg-amber-50 relative">
              <h3 className="text-2xl font-bold mb-4">{selectedLetter.title}</h3>
              <p className="whitespace-pre-line leading-relaxed">{selectedLetter.content}</p>
            </div>

            {/* Spine */}
            <div className="w-1 bg-amber-700 shadow-inner" />

            {/* Right Page */}
            <div className="w-1/2 p-8 font-serif text-amber-900 bg-amber-50 flex flex-col justify-between relative">
              <div>
                <h4 className="italic text-amber-800 mb-6">~ {selectedLetter.author}</h4>
                <p className="text-sm text-amber-700">
                  {new Date(selectedLetter.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                {userRole === 'admin' && (
                  <button
                    onClick={() => {
                      onDeleteLetter(selectedLetter.id);
                      setSelectedLetter(null);
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-md hover:from-red-700 hover:to-red-800 transition-all"
                  >
                    Delete
                  </button>
                )}
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="px-5 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full shadow-md hover:from-gray-500 hover:to-gray-600 transition-all"
                >
                  Close
                </button>
             </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
