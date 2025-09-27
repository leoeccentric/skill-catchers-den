import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Zap, TrendingUp, Crown } from "lucide-react";

interface LeaderboardCardProps {
  rank: number;
  name: string;
  level: number;
  totalXp: number;
  badges: number;
  weeklyXp: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

export function LeaderboardCard({ 
  rank, 
  name, 
  level, 
  totalXp, 
  badges, 
  weeklyXp, 
  avatar,
  isCurrentUser = false 
}: LeaderboardCardProps) {
  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-warning" />;
      case 2:
        return <Trophy className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Trophy className="h-6 w-6 text-accent" />;
      default:
        return <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankColor = () => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-warning/20 to-warning/10 border-warning/30";
      case 2:
        return "bg-gradient-to-r from-muted/20 to-muted/10 border-muted/30";
      case 3:
        return "bg-gradient-to-r from-accent/20 to-accent/10 border-accent/30";
      default:
        return isCurrentUser ? "bg-primary/10 border-primary/30" : "bg-card";
    }
  };

  return (
    <Card className={`p-6 hover:shadow-card transition-all duration-300 hover:scale-105 border-2 ${getRankColor()}`}>
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex items-center justify-center w-12 h-12">
          {getRankIcon()}
        </div>

        {/* Avatar */}
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            {name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{name}</h3>
            {isCurrentUser && (
              <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                You
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Level {level}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span>{badges} badges</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-right space-y-2">
          <div className="flex items-center gap-1 justify-end">
            <Zap className="h-4 w-4 text-warning" />
            <span className="font-bold text-lg">{totalXp.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 justify-end text-sm text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            <span>+{weeklyXp} this week</span>
          </div>
        </div>
      </div>
    </Card>
  );
}