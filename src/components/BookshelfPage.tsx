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
    <main className="relative">
      {/* Background ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-50/30 to-stone-100/50 pointer-events-none" />
      
      {/* Magical lighting effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-200/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">Our Collection</h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Each book holds a moment, a feeling, a secret shared between hearts. 
            Click any volume to unfold its treasured contents.
          </p>
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