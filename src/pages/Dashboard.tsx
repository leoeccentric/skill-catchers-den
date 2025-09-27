import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrainerCard } from "@/components/TrainerCard";
import { SkillCard } from "@/components/SkillCard";
import { 
  Code, 
  Calculator, 
  Brain, 
  HelpCircle, 
  Zap, 
  Trophy, 
  Target,
  TrendingUp,
  Flame,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Battle Aptitude",
    description: "Face mathematical challenges",
    icon: <Calculator className="h-6 w-6" />,
    color: "primary" as const,
    path: "/aptitude"
  },
  {
    title: "Challenge Coding", 
    description: "Solve programming problems",
    icon: <Code className="h-6 w-6" />,
    color: "secondary" as const,
    path: "/coding"
  },
  {
    title: "Logic Battle",
    description: "Test reasoning skills", 
    icon: <Brain className="h-6 w-6" />,
    color: "accent" as const,
    path: "/logic"
  },
  {
    title: "Quiz Challenge",
    description: "Knowledge competitions",
    icon: <HelpCircle className="h-6 w-6" />,
    color: "warning" as const,
    path: "/quiz"
  }
];

const recentChallenges = [
  { name: "Array Manipulation", type: "Coding", xp: 150, status: "victory" as const },
  { name: "Probability Theory", type: "Aptitude", xp: 100, status: "victory" as const },
  { name: "Pattern Recognition", type: "Logic", xp: 75, status: "defeat" as const },
  { name: "Data Structures", type: "Coding", xp: 200, status: "victory" as const }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Placemon
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Button>
              <Button variant="ghost">
                <Target className="h-4 w-4" />
                Analytics
              </Button>
              <Button variant="pokeball">Profile</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Welcome & Trainer Card */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">Welcome back, Trainer!</h1>
              <div className="flex items-center gap-1 text-warning">
                <Flame className="h-5 w-5" />
                <span className="font-semibold">5 day streak</span>
              </div>
            </div>
            
            <TrainerCard
              name="Alex Thompson"
              level={12}
              currentXp={3420}
              nextLevelXp={4000}
              totalXp={15420}
              rank={87}
              badges={23}
            />
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Quick Battles</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Choose your challenge
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action) => {
                const colorClasses = {
                  primary: "bg-primary/10 border-primary/20 hover:border-primary/40 text-primary",
                  secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40 text-secondary",
                  accent: "bg-accent/10 border-accent/20 hover:border-accent/40 text-accent",
                  warning: "bg-warning/10 border-warning/20 hover:border-warning/40 text-warning"
                };

                return (
                  <Link key={action.title} to={action.path}>
                    <Card className={`p-6 ${colorClasses[action.color]} hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer border-2`}>
                      <div className="space-y-4">
                        <div className="p-3 bg-gradient-to-br from-current/10 to-current/20 rounded-xl w-fit">
                          {action.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                          <p className="text-muted-foreground text-sm">{action.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Skills Progress */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Skill Monsters</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <SkillCard
                title="Aptitude-mon"
                description="Mathematical and logical reasoning mastery"
                progress={75}
                xp={1500}
                maxXp={2000}
                color="primary"
                icon={<Calculator className="h-6 w-6" />}
              />
              
              <SkillCard
                title="Code-mon"
                description="Programming and algorithm expertise"
                progress={60}
                xp={1200}
                maxXp={2000}
                color="secondary"
                icon={<Code className="h-6 w-6" />}
              />
              
              <SkillCard
                title="Logic-mon"
                description="Problem-solving and analytical thinking"
                progress={45}
                xp={900}
                maxXp={2000}
                color="accent"
                icon={<Brain className="h-6 w-6" />}
              />
              
              <SkillCard
                title="Quiz-mon"
                description="Technical and general knowledge"
                progress={80}
                xp={1600}
                maxXp={2000}
                color="warning"
                icon={<HelpCircle className="h-6 w-6" />}
              />
            </div>
          </div>

          {/* Recent Challenges */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Battles</h2>
              <Button variant="ghost" className="text-primary">
                View All
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {recentChallenges.map((challenge, index) => (
                <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{challenge.name}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.type}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning" />
                        <span className="font-semibold">{challenge.xp} XP</span>
                      </div>
                      
                      <Badge 
                        variant={challenge.status === 'victory' ? 'default' : 'destructive'}
                        className={challenge.status === 'victory' ? 'bg-victory text-white' : 'bg-defeat text-white'}
                      >
                        {challenge.status === 'victory' ? 'Victory!' : 'Defeated'}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}