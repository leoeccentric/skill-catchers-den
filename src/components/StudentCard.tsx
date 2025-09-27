import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Zap, 
  Target,
  Calendar,
  MapPin,
  GraduationCap
} from "lucide-react";

interface StudentCardProps {
  id: string;
  name: string;
  level: number;
  totalXp: number;
  rank: number;
  badges: number;
  joinDate: string;
  location: string;
  specialization: string;
  avatar?: string;
  strengths: string[];
  currentStreak: number;
  completionRate: number;
}

export function StudentCard({ 
  id,
  name, 
  level, 
  totalXp, 
  rank,
  badges, 
  joinDate,
  location,
  specialization,
  avatar,
  strengths,
  currentStreak,
  completionRate
}: StudentCardProps) {
  const getRankBadgeColor = () => {
    if (rank <= 10) return "bg-warning text-warning-foreground";
    if (rank <= 50) return "bg-primary text-primary-foreground";
    if (rank <= 100) return "bg-secondary text-secondary-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <Card className="p-6 bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">{name}</h3>
              <Badge className={getRankBadgeColor()}>
                #{rank}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                <span>{specialization}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 py-3 border-y border-border">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Lv.{level}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Level</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-warning">
              <Zap className="h-4 w-4" />
              <span className="font-bold">{totalXp.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">Total XP</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-warning">
              <Star className="h-4 w-4" />
              <span className="font-bold">{badges}</span>
            </div>
            <p className="text-xs text-muted-foreground">Badges</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-primary">
              <Target className="h-4 w-4" />
              <span className="font-bold">{currentStreak}</span>
            </div>
            <p className="text-xs text-muted-foreground">Streak</p>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Completion Rate</span>
            <span className="font-semibold">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>

        {/* Strengths */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">Strengths</p>
          <div className="flex flex-wrap gap-2">
            {strengths.slice(0, 3).map((strength, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {strength}
              </Badge>
            ))}
            {strengths.length > 3 && (
              <Badge variant="secondary" className="text-xs text-muted-foreground">
                +{strengths.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Join Date */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t border-border">
          <Calendar className="h-3 w-3" />
          <span>Joined {joinDate}</span>
        </div>
      </div>
    </Card>
  );
}