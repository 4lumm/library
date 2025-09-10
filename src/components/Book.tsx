import React from 'react';
import { Letter } from '../types';

interface BookProps {
  letter: Letter;
  onClick: () => void;
  delay?: number;
}

const bookTextures = [
  {
    gradient: 'bg-gradient-to-b from-red-900 via-red-800 to-red-900',
    texture: 'leather-texture',
    accent: 'from-amber-400 via-yellow-500 to-amber-400'
  },
  {
    gradient: 'bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900',
    texture: 'leather-texture',
    accent: 'from-gold-400 via-amber-500 to-gold-400'
  },
  {
    gradient: 'bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900',
    texture: 'linen-texture',
    accent: 'from-silver-400 via-gray-300 to-silver-400'
  },
  {
    gradient: 'bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900',
    texture: 'leather-texture',
    accent: 'from-amber-400 via-yellow-500 to-amber-400'
  },
  {
    gradient: 'bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900',
    texture: 'leather-texture',
    accent: 'from-gold-400 via-yellow-500 to-gold-400'
  },
  {
    gradient: 'bg-gradient-to-b from-stone-800 via-stone-700 to-stone-800',
    texture: 'linen-texture',
    accent: 'from-amber-400 via-yellow-500 to-amber-400'
  },
  {
    gradient: 'bg-gradient-to-b from-rose-900 via-rose-800 to-rose-900',
    texture: 'leather-texture',
    accent: 'from-rose-gold-400 via-amber-400 to-rose-gold-400'
  },
  {
    gradient: 'bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900',
    texture: 'linen-texture',
    accent: 'from-emerald-400 via-green-500 to-emerald-400'
  }
];

export default function Book({ letter, onClick, delay = 0 }: BookProps) {
  const isWelcome = letter.id === 'welcome';
  const textureIndex = isWelcome ? 0 : Math.abs(letter.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % bookTextures.length;
  
  const bookStyle = bookTextures[textureIndex];

  return (
    <div
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 book-settle"
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className={`
          relative w-16 h-40 mx-1 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500
          ${bookStyle.gradient} ${bookStyle.texture}
          hover:brightness-110 luxury-shadow
          group-hover:book-hover-lift
        `}
      >
        {/* Enhanced book spine texture with wear marks */}
        <div className="absolute inset-0 rounded-sm opacity-30 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 rounded-sm opacity-20 bg-gradient-to-b from-white/10 via-transparent to-black/10" />
        
        {/* Luxury gold spine trim with gradient */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${bookStyle.accent} shadow-inner`} />
        
        {/* Detailed stitching and binding */}
        <div className="absolute left-1.5 top-4 bottom-4 w-px bg-amber-400/60 shadow-sm" />
        <div className="absolute right-1 top-4 bottom-4 w-px bg-amber-400/40" />
        <div className="absolute left-2.5 top-6 bottom-6 w-px bg-amber-300/30" />
        <div className="absolute right-2 top-6 bottom-6 w-px bg-amber-300/20" />
        
        {/* Ornate decorative elements */}
        <div className="absolute top-3 left-1 right-1 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
        <div className="absolute bottom-3 left-1 right-1 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
        <div className="absolute top-5 left-1 right-1 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
        <div className="absolute bottom-5 left-1 right-1 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
        
        {/* Roman numeral with enhanced styling */}
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <div className="transform -rotate-90 origin-center">
            <span 
              className={`text-sm font-serif font-bold tracking-wider ${
                isWelcome ? 'text-amber-200' : 'text-amber-300'
              } drop-shadow-lg`}
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(255,215,0,0.3)',
                fontSize: isWelcome ? '11px' : '13px',
                letterSpacing: '1.5px'
              }}
            >
              {letter.romanNumeral}
            </span>
          </div>
        </div>

        {/* Enhanced aging and wear effects */}
        <div className="absolute inset-0 rounded-sm shadow-inner opacity-40" />
        <div className="absolute top-1 right-0 w-1.5 h-6 bg-black/30 rounded-l-sm" />
        <div className="absolute bottom-1 right-0 w-1.5 h-6 bg-black/30 rounded-l-sm" />
        <div className="absolute top-8 right-0 w-1 h-3 bg-black/20 rounded-l-sm" />
        <div className="absolute bottom-8 right-0 w-1 h-3 bg-black/20 rounded-l-sm" />
        
        {/* Luxury magical glow effects */}
        <div className="absolute -inset-3 bg-amber-200/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
        <div className="absolute -inset-2 bg-amber-300/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
        <div className="absolute -inset-1 bg-amber-400/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect" />
        
        {/* Embossed details */}
        <div className="absolute top-7 left-2 w-1 h-1 bg-amber-400/60 rounded-full shadow-inner" />
        <div className="absolute bottom-7 left-2 w-1 h-1 bg-amber-400/60 rounded-full shadow-inner" />
        <div className="absolute top-12 right-2 w-0.5 h-4 bg-amber-300/40 rounded-full" />
      </div>
      
      {/* Enhanced luxury tooltip */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-amber-900 to-amber-800 text-amber-100 px-5 py-3 rounded-xl text-sm font-serif opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap luxury-shadow z-20 pointer-events-none border border-amber-700">
        <div className="font-medium">{letter.title}</div>
        <div className="text-xs text-amber-300 mt-1">Click to open</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-amber-800" />
      </div>
    </div>
  );
}