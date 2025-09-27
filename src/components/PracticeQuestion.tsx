import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Zap, Star } from "lucide-react";
import { useState } from "react";

interface PracticeQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  xpReward: number;
  timeLimit: number;
  onAnswer: (isCorrect: boolean, xp: number) => void;
}

export function PracticeQuestion({ 
  question, 
  options, 
  correctAnswer, 
  difficulty, 
  topic, 
  xpReward,
  timeLimit,
  onAnswer 
}: PracticeQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    const isCorrect = answerIndex === correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect, isCorrect ? xpReward : 0);
    }, 1500);
  };

  const difficultyColors = {
    Easy: "bg-victory text-white",
    Medium: "bg-warning text-warning-foreground", 
    Hard: "bg-defeat text-white"
  };

  const progressPercentage = (timeLeft / timeLimit) * 100;

  return (
    <Card className="p-8 bg-gradient-card shadow-card border-2 border-primary/20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge className={difficultyColors[difficulty]}>
              {difficulty}
            </Badge>
            <Badge variant="secondary">{topic}</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-warning">
              <Star className="h-4 w-4" />
              <span className="font-semibold">{xpReward} XP</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="font-semibold">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Time Progress */}
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold leading-relaxed">{question}</h2>
        </div>

        {/* Options */}
        <div className="grid gap-3">
          {options.map((option, index) => {
            let buttonClass = "justify-start text-left h-auto p-4 font-normal";
            
            if (answered) {
              if (index === correctAnswer) {
                buttonClass += " bg-victory text-white hover:bg-victory/90";
              } else if (index === selectedAnswer && selectedAnswer !== correctAnswer) {
                buttonClass += " bg-defeat text-white hover:bg-defeat/90";
              } else {
                buttonClass += " opacity-50";
              }
            } else {
              buttonClass += " hover:bg-primary/10 hover:border-primary/30";
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswer(index)}
                disabled={answered}
              >
                <span className="font-semibold mr-3 text-primary">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            );
          })}
        </div>

        {/* Result Message */}
        {answered && (
          <div className="text-center space-y-2">
            {selectedAnswer === correctAnswer ? (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-victory flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6" />
                  You caught it! 
                </div>
                <p className="text-muted-foreground">+{xpReward} XP earned!</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-defeat">It escaped...</div>
                <p className="text-muted-foreground">Better luck next time, trainer!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}