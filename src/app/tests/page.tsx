'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TEST_DATA, TestQuestion } from '@/lib/app-constants';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

export default function TestsPage() {
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    // Shuffle questions for variety, run only on client
    setQuestions(TEST_DATA.sort(() => Math.random() - 0.5));
    setStartTime(new Date());
  }, []);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(false);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(TEST_DATA.sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizFinished(false);
    setStartTime(new Date());
  };
  
  if (questions.length === 0 || !startTime) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-xl">Loading test...</p>
      </div>
    );
  }

  if (quizFinished) {
    const timeTaken = startTime ? Math.round((new Date().getTime() - startTime.getTime()) / 1000) : 0;
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-4xl font-headline">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-2xl">Your Score: <span className="font-bold text-primary">{score}</span> / {questions.length}</p>
            <p className="text-lg">Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
            <p className="text-lg">Time taken: {timeTaken} seconds</p>
            {score === questions.length && <p className="text-2xl text-green-600 font-semibold">Excellent! You're a photography whiz!</p>}
            {score < questions.length && score >= questions.length / 2 && <p className="text-xl text-yellow-600">Good job! Keep learning!</p>}
            {score < questions.length / 2 && <p className="text-xl text-destructive">Keep practicing! Review the modules to improve.</p>}
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full text-lg py-6">
              <RotateCcw className="mr-2 h-5 w-5" /> Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-headline font-bold mb-3">Photography Quiz</h1>
        <p className="text-xl text-muted-foreground">Test your knowledge on film photography concepts.</p>
        <p className="text-sm text-muted-foreground mt-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
      </header>
      
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline leading-relaxed">{currentQuestion.question}</CardTitle>
          <CardDescription className="text-base">Topic: {currentQuestion.topic}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswer || ''}
            onValueChange={handleAnswerSelection}
            className="space-y-3"
            disabled={showResult}
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-lg cursor-pointer flex-1">{option}</Label>
              </div>
            ))}
          </RadioGroup>

          {showResult && (
            <div className={`mt-6 p-4 rounded-md text-lg font-medium flex items-center gap-2 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-100 text-green-700 border-green-300' : 'bg-red-100 text-red-700 border-red-300'} border`}>
              {selectedAnswer === currentQuestion.correctAnswer ? 
                <CheckCircle className="h-6 w-6" /> : 
                <XCircle className="h-6 w-6" />}
              <span>
                {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
              </span>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {showResult ? (
            <Button onClick={handleNextQuestion} className="w-full text-lg py-6">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          ) : (
            <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="w-full text-lg py-6">
              Submit Answer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
