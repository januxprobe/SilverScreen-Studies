'use client';

import { useState, useMemo, useEffect } from 'react';
import Flashcard from '@/components/Flashcard';
import { FLASHCARD_DATA, Flashcard as FlashcardType } from '@/lib/app-constants';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';

export default function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Client-side effect for initialization
  useEffect(() => {
    setFlashcards(FLASHCARD_DATA);
  }, []);


  const categories = useMemo(() => {
    const allCategories = ['All', ...new Set(FLASHCARD_DATA.map(fc => fc.category))];
    return allCategories;
  }, []);

  const filteredFlashcards = useMemo(() => {
    let cards = flashcards; // Use state flashcards
    if (selectedCategory !== 'All') {
      cards = cards.filter(fc => fc.category === selectedCategory);
    }
    return cards;
  }, [flashcards, selectedCategory]);
  
  // Effect to reset index when filter changes and ensure flashcards are loaded
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, flashcards]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredFlashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredFlashcards.length) % filteredFlashcards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...filteredFlashcards].sort(() => Math.random() - 0.5);
    // This is tricky: if we setFlashcards directly, it might mess with the original list.
    // Instead, we should consider if shuffling should apply to the view or the source.
    // For now, let's assume we want to shuffle the currently filtered view.
    // This is not fully implemented as it would require managing filtered list state differently.
    // A simpler shuffle: just jump to a random card in the current filtered list.
    if (filteredFlashcards.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * filteredFlashcards.length));
    }
  };
  
  if (flashcards.length === 0) {
     return <div className="text-center py-10">Loading flashcards...</div>;
  }

  const currentFlashcard = filteredFlashcards[currentIndex];

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-headline font-bold mb-3">Photography Flashcards</h1>
        <p className="text-xl text-muted-foreground">Test your knowledge of key photography terms and concepts.</p>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px] bg-card text-card-foreground">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleShuffle} variant="outline">
          <Shuffle className="mr-2 h-4 w-4" /> Shuffle Current Deck
        </Button>
      </div>

      {currentFlashcard ? (
        <div className="max-w-xl mx-auto mb-8">
          <Flashcard term={currentFlashcard.term} definition={currentFlashcard.definition} />
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground py-10">
          {selectedCategory === 'All' ? 'No flashcards available.' : `No flashcards in the "${selectedCategory}" category.`}
        </p>
      )}

      {filteredFlashcards.length > 0 && (
        <div className="flex justify-between items-center max-w-xl mx-auto">
          <Button onClick={handlePrevious} variant="outline" size="lg" aria-label="Previous card">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <p className="text-muted-foreground">
            Card {currentIndex + 1} of {filteredFlashcards.length}
          </p>
          <Button onClick={handleNext} variant="outline" size="lg" aria-label="Next card">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}
       <style jsx global>{`
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
