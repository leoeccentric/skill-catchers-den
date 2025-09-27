import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  title: string;
  description: string;
  progress: number;
  xp: number;
  maxXp: number;
  color: "primary" | "secondary" | "accent" | "warning";
  icon: React.ReactNode;
}

export function SkillCard({ title, description, progress, xp, maxXp, color, icon }: SkillCardProps) {
  const colorClasses = {
    primary: "text-primary bg-primary/10 border-primary/20",
    secondary: "text-secondary bg-secondary/10 border-secondary/20", 
    accent: "text-accent bg-accent/10 border-accent/20",
    warning: "text-warning bg-warning/10 border-warning/20"
  };

  return (
    <Card className="p-6 bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/30">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]} flex items-center justify-center`}>
          {icon}
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{title}</h3>
            <Badge variant="secondary" className="font-semibold">
              {xp}/{maxXp} XP
            </Badge>
          </div>
          
          <p className="text-muted-foreground text-sm">{description}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>
    </Card>
  );
}