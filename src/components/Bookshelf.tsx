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
          className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-xl shadow-2xl overflow-visible border-4 border-amber-700"
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
                <div className="flex items-end justify-start px-8 py-4 
                  bg-gradient-to-b from-amber-900/70 via-amber-800/90 to-amber-900 
                 border-b-4 border-amber-700/70 
                 shadow-inner relative min-h-[160px] overflow-visible
                ">
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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">

      {/* Bookmark buttons (top-right corner) */}
      <div className="absolute -top-3 right-4 flex space-x-2">
        {userRole === 'admin' && (
          <button
            onClick={() => {
              onDeleteLetter(selectedLetter.id);
              setSelectedLetter(null);
            }}
            className="px-4 py-2 bg-red-600 text-white font-serif font-semibold clip-path-bookmark shadow-md hover:bg-red-700 transition"
          >
            Delete
          </button>
        )}
        <button
          onClick={() => setSelectedLetter(null)}
          className="px-4 py-2 bg-gray-600 text-white font-serif font-semibold clip-path-bookmark shadow-md hover:bg-gray-700 transition"
        >
          Close
        </button>
      </div>

      {/* Book pages */}
      <div className="grid grid-cols-2 gap-8 bg-amber-50 p-8 rounded-lg shadow-inner min-h-[500px] max-h-[700px]">
        {/* Left Page */}
        <div className="relative bg-white/90 rounded-lg p-6 shadow-md border border-amber-200 flex flex-col">
          <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4 text-center">
            {selectedLetter.title}
          </h3>
          <p className="text-gray-700 font-serif text-lg leading-relaxed whitespace-pre-line overflow-y-auto pr-2 flex-grow">
            {selectedLetter.content}
          </p>
        </div>

        {/* Right Page */}
        <div className="relative bg-white/80 rounded-lg p-6 shadow-md border border-amber-200">
          <p className="text-sm text-gray-500 italic">
            Written by: {selectedLetter.author}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(selectedLetter.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}

