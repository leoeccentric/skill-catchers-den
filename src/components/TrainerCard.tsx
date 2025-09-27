import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Zap, Star } from "lucide-react";

interface TrainerCardProps {
  name: string;
  level: number;
  currentXp: number;
  nextLevelXp: number;
  totalXp: number;
  rank: number;
  badges: number;
  avatar?: string;
}

export function TrainerCard({ 
  name, 
  level, 
  currentXp, 
  nextLevelXp, 
  totalXp, 
  rank, 
  badges,
  avatar 
}: TrainerCardProps) {
  const progressPercentage = (currentXp / nextLevelXp) * 100;

  return (
    <Card className="p-6 bg-gradient-hero text-white shadow-glow border-0">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-4 border-white/20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-white/20 text-white font-bold text-xl">
            {name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Level {level}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/80">XP Progress</span>
              <span className="font-semibold">{currentXp}/{nextLevelXp}</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-white/20" />
          </div>
        </div>

        <div className="text-right space-y-2">
          <div className="flex items-center gap-1 text-warning">
            <Trophy className="h-4 w-4" />
            <span className="font-bold">#{rank}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span className="font-semibold">{badges} Badges</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-white/80">
            <Zap className="h-4 w-4" />
            <span>{totalXp.toLocaleString()} Total XP</span>
          </div>
        </div>
      </div>
    </Card>
  );
}