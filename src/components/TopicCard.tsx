import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Star } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  progress: number;
  totalQuestions: number;
  completedQuestions: number;
  averageTime: string;
  userCount: number;
  icon: React.ReactNode;
  color: "primary" | "secondary" | "accent" | "warning";
}

export function TopicCard({ 
  title, 
  description, 
  difficulty, 
  category,
  progress,
  totalQuestions,
  completedQuestions,
  averageTime,
  userCount,
  icon,
  color 
}: TopicCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 border-primary/20 hover:border-primary/40 text-primary",
    secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40 text-secondary",
    accent: "bg-accent/10 border-accent/20 hover:border-accent/40 text-accent", 
    warning: "bg-warning/10 border-warning/20 hover:border-warning/40 text-warning"
  };

  const difficultyColors = {
    Beginner: "bg-victory text-white",
    Intermediate: "bg-warning text-warning-foreground",
    Advanced: "bg-defeat text-white"
  };

  return (
    <Card className={`p-6 ${colorClasses[color]} hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer border-2`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-current/10 to-current/20">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
          
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold">{completedQuestions}/{totalQuestions} completed</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <BookOpen className="h-3 w-3" />
            </div>
            <p className="text-xs text-muted-foreground">Questions</p>
            <p className="font-semibold text-sm">{totalQuestions}</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
            </div>
            <p className="text-xs text-muted-foreground">Avg Time</p>
            <p className="font-semibold text-sm">{averageTime}</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Users className="h-3 w-3" />
            </div>
            <p className="text-xs text-muted-foreground">Trainers</p>
            <p className="font-semibold text-sm">{userCount}</p>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full" 
          variant={progress > 0 ? "secondary" : "default"}
        >
          {progress > 0 ? "Continue Battle" : "Start Battle"}
        </Button>
      </div>
    </Card>
  );
}