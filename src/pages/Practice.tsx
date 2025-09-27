import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PracticeQuestion } from "@/components/PracticeQuestion";
import { 
  Zap, 
  ArrowLeft, 
  Trophy, 
  Target,
  RotateCcw,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";

const mockQuestions = [
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    difficulty: "Medium" as const,
    topic: "Data Structures",
    xpReward: 150,
    timeLimit: 30
  },
  {
    question: "If 15% of 40 is greater than 25% of a number by 2, what is the number?",
    options: ["16", "20", "24", "28"],
    correctAnswer: 0,
    difficulty: "Easy" as const,
    topic: "Quantitative Aptitude",
    xpReward: 100,
    timeLimit: 45
  },
  {
    question: "Which of the following is not a principle of Object-Oriented Programming?",
    options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    correctAnswer: 2,
    difficulty: "Easy" as const,
    topic: "Programming Concepts",
    xpReward: 100,
    timeLimit: 25
  },
  {
    question: "A train 100m long running at 72 km/hr crosses a platform in 26 seconds. What is the length of the platform?",
    options: ["420m", "520m", "400m", "320m"],
    correctAnswer: 0,
    difficulty: "Hard" as const,
    topic: "Time & Distance",
    xpReward: 200,
    timeLimit: 60
  },
  {
    question: "What will be the output of: console.log(typeof null) in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswer: 2,
    difficulty: "Medium" as const,
    topic: "JavaScript",
    xpReward: 150,
    timeLimit: 20
  }
];

export default function Practice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);

  const handleAnswer = (isCorrect: boolean, xp: number) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setTotalXp(prev => prev + xp);
    }

    setTimeout(() => {
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setSessionComplete(true);
      }
    }, 2000);
  };

  const restartSession = () => {
    setCurrentQuestion(0);
    setTotalXp(0);
    setCorrectAnswers(0);
    setSessionComplete(false);
  };

  if (sessionComplete) {
    const accuracy = Math.round((correctAnswers / mockQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Placemon
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-hero text-white text-center shadow-glow">
            <div className="space-y-6">
              <div className="space-y-4">
                <Trophy className="h-16 w-16 text-warning mx-auto" />
                <h1 className="text-4xl font-bold">Battle Complete!</h1>
                <p className="text-xl text-white/90">
                  Great job, trainer! You've conquered this challenge.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-warning">{totalXp}</div>
                  <div className="text-sm text-white/80">XP Earned</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-warning">{correctAnswers}/{mockQuestions.length}</div>
                  <div className="text-sm text-white/80">Correct</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-warning">{accuracy}%</div>
                  <div className="text-sm text-white/80">Accuracy</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={restartSession}
                >
                  <RotateCcw className="h-5 w-5" />
                  Battle Again
                </Button>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Home className="h-5 w-5" />
                    Return to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Placemon
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Practice Battle</h1>
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {mockQuestions.length}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                <Target className="h-4 w-4 mr-1" />
                {totalXp} XP earned
              </Badge>
              <Badge variant="secondary" className="bg-victory/20 text-victory">
                {correctAnswers} correct
              </Badge>
            </div>
          </div>

          {/* Question */}
          <PracticeQuestion
            {...mockQuestions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
}