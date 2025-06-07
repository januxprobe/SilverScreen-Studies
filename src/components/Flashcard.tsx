'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { RotateCcw } from 'lucide-react';

interface FlashcardProps {
  term: string;
  definition: string;
}

export default function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-64 perspective cursor-pointer group"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={isFlipped}
      aria-label={`Flashcard: ${term}. Click to see definition.`}
    >
      <Card
        className={cn(
          "relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out shadow-lg",
          isFlipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-card rounded-lg border">
          <h3 className="text-2xl font-headline text-center font-semibold text-primary">{term}</h3>
          <RotateCcw className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-accent rounded-lg border">
          <p className="text-center text-accent-foreground text-sm md:text-base">{definition}</p>
          <RotateCcw className="absolute bottom-4 right-4 h-5 w-5 text-accent-foreground/70 group-hover:text-accent-foreground transition-colors" />
        </div>
      </Card>
    </div>
  );
}

// Add global styles for 3D transform if not already handled by Tailwind/browser
// This usually goes in globals.css or a shared style file
// .perspective { perspective: 1000px; }
// .transform-style-3d { transform-style: preserve-3d; }
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); }
// These classes can be added to globals.css or directly used via Tailwind JIT if configured.
// For simplicity here, relying on Tailwind's transform utilities which might require explicit transform-gpu.
// Added directly in className for now.
// For the 3D effect to work correctly, a parent element might need `perspective`.
// And the card itself needs `transform-style: preserve-3d`.
// Backface visibility hidden is also important.
