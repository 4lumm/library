import React, { useState } from 'react';
import { X, Feather, Heart } from 'lucide-react';

interface LetterCreationModalProps {
  onSubmit: (title: string, content: string) => void;
  onClose: () => void;
}

export default function LetterCreationModal({ onSubmit, onClose }: LetterCreationModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative">
        {/* Close button (top-right X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-serif font-bold text-amber-900 text-center mb-6">
          Write a New Letter
        </h2>
        <p className="text-center text-amber-700 mb-8 italic">
          Pour your heart onto parchment
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-amber-900 font-semibold mb-2">Letter Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-amber-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter a title..."
            />
          </div>

          <div>
            <label className="block text-amber-900 font-semibold mb-2">Your Message</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-amber-300 rounded-md p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Write your letter..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white font-serif rounded-md shadow hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (title.trim() && content.trim()) {
                onSubmit(title, content);
              }
            }}
            className="px-4 py-2 bg-amber-700 text-white font-serif rounded-md shadow hover:bg-amber-800 transition"
          >
            Add to Library
          </button>
        </div>
      </div>
    </div>
  );
}