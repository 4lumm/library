import React from 'react';
import { Letter } from '../types';

interface BookProps {
  letter: Letter;
  onClick: () => void;
  delay?: number;
}

const bookTextures = [
  'bg-gradient-to-b from-red-900 via-red-800 to-red-900', // Rich leather
  'bg-gradient-to-b from-green-900 via-green-800 to-green-900', // Forest leather
  'bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900', // Deep blue
  'bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900', // Royal purple
  'bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900', // Warm amber
  'bg-gradient-to-b from-stone-800 via-stone-700 to-stone-800', // Stone gray
  'bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900', // Deep emerald
  'bg-gradient-to-b from-rose-900 via-rose-800 to-rose-900', // Deep rose
];

export default function Book({ letter, onClick, delay = 0 }: BookProps) {
  const isWelcome = letter.id === 'welcome';
  const textureIndex = isWelcome
    ? 0
    : Math.abs(
        letter.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      ) % bookTextures.length;

  const texture = bookTextures[textureIndex];

  return (
    <div
      className="group cursor-pointer transform transition-all duration-700 hover:scale-125 hover:-translate-y-6 hover:rotate-2 hover:z-10"
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`
          relative w-14 h-36 mx-1 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-700
          ${texture}
          hover:brightness-110
        `}
      >
        {/* Enhanced book spine texture */}
        <div className="absolute inset-0 rounded-sm opacity-30 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* More detailed stitching */}
        <div className="absolute left-1 top-3 bottom-3 w-px bg-amber-400/50" />
        <div className="absolute right-1 top-3 bottom-3 w-px bg-amber-400/50" />
        <div className="absolute left-2 top-4 bottom-4 w-px bg-amber-300/30" />
        <div className="absolute right-2 top-4 bottom-4 w-px bg-amber-300/30" />

        {/* Roman numeral */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transform -rotate-90 origin-center">
            <span
              className={`text-sm font-serif font-bold tracking-wider ${
                isWelcome ? 'text-amber-200' : 'text-amber-300'
              } drop-shadow-md`}
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                fontSize: isWelcome ? '10px' : '12px',
                letterSpacing: '1px',
              }}
            >
              {letter.romanNumeral}
            </span>
          </div>
        </div>

        {/* Enhanced gold embossing effect */}
        <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="absolute bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

        {/* Worn edges and aging */}
        <div className="absolute inset-0 rounded-sm shadow-inner" />
        <div className="absolute top-1 right-0 w-1 h-4 bg-black/20 rounded-l-sm" />
        <div className="absolute bottom-1 right-0 w-1 h-4 bg-black/20 rounded-l-sm" />

        {/* Layered magical glow on hover */}
        {/* Softer magical glow on hover */}
<div className="absolute -inset-4 bg-amber-200/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10" />
<div className="absolute -inset-3 bg-amber-300/15 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10" />
<div className="absolute -inset-2 bg-amber-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg -z-10" />
<div className="absolute -inset-1 bg-amber-500/5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md -z-10" />
      </div>

      {/* Animated book title tooltip */}
      <div
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 
        bg-gradient-to-b from-amber-800 to-amber-900 text-amber-100 px-6 py-4 
        rounded-2xl text-sm font-serif opacity-0 group-hover:opacity-100 
        transition-all duration-700 whitespace-nowrap shadow-2xl z-20 
        pointer-events-none border-2 border-amber-500"
      >
        {letter.title}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-amber-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/15 to-transparent rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/10 via-transparent to-transparent rounded-2xl" />
      </div>
    </div>
  );
}
