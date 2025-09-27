import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaderboardCard } from "@/components/LeaderboardCard";
import { 
  Zap, 
  ArrowLeft, 
  Trophy, 
  Calendar,
  TrendingUp,
  Users,
  Crown,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

const weeklyLeaders = [
  { rank: 1, name: "Dragon Master", level: 25, totalXp: 45230, badges: 45, weeklyXp: 3420, avatar: "", isCurrentUser: false },
  { rank: 2, name: "Code Ninja", level: 23, totalXp: 42100, badges: 42, weeklyXp: 3200, avatar: "", isCurrentUser: false },
  { rank: 3, name: "Logic Lord", level: 22, totalXp: 38940, badges: 38, weeklyXp: 2890, avatar: "", isCurrentUser: false },
  { rank: 4, name: "Alex Thompson", level: 12, totalXp: 15420, badges: 23, weeklyXp: 2450, avatar: "", isCurrentUser: true },
  { rank: 5, name: "Skill Hunter", level: 20, totalXp: 35200, badges: 35, weeklyXp: 2340, avatar: "", isCurrentUser: false },
  { rank: 6, name: "Algorithm Ace", level: 19, totalXp: 33100, badges: 33, weeklyXp: 2100, avatar: "", isCurrentUser: false },
  { rank: 7, name: "Data Detective", level: 18, totalXp: 31500, badges: 31, weeklyXp: 1980, avatar: "", isCurrentUser: false },
  { rank: 8, name: "Pattern Pro", level: 17, totalXp: 29800, badges: 29, weeklyXp: 1850, avatar: "", isCurrentUser: false },
  { rank: 9, name: "Math Magician", level: 16, totalXp: 28200, badges: 28, weeklyXp: 1720, avatar: "", isCurrentUser: false },
  { rank: 10, name: "Quiz Queen", level: 15, totalXp: 26500, badges: 26, weeklyXp: 1650, avatar: "", isCurrentUser: false }
];

const allTimeLeaders = [
  { rank: 1, name: "Legend Larry", level: 50, totalXp: 125300, badges: 89, weeklyXp: 2100, avatar: "", isCurrentUser: false },
  { rank: 2, name: "Supreme Sarah", level: 48, totalXp: 118200, badges: 85, weeklyXp: 1900, avatar: "", isCurrentUser: false },
  { rank: 3, name: "Master Mike", level: 45, totalXp: 98500, badges: 78, weeklyXp: 2300, avatar: "", isCurrentUser: false },
  { rank: 4, name: "Dragon Master", level: 25, totalXp: 45230, badges: 45, weeklyXp: 3420, avatar: "", isCurrentUser: false },
  { rank: 5, name: "Code Ninja", level: 23, totalXp: 42100, badges: 42, weeklyXp: 3200, avatar: "", isCurrentUser: false },
  { rank: 6, name: "Logic Lord", level: 22, totalXp: 38940, badges: 38, weeklyXp: 2890, avatar: "", isCurrentUser: false },
  { rank: 87, name: "Alex Thompson", level: 12, totalXp: 15420, badges: 23, weeklyXp: 2450, avatar: "", isCurrentUser: true }
];

const stats = {
  totalTrainers: 15420,
  activeThisWeek: 8230,
  averageLevel: 18,
  topXpThisWeek: 3420
};

export default function Leaderboard() {
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
            
            <Button variant="ghost">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-warning" />
              <h1 className="text-4xl font-bold">Trainer Leaderboard</h1>
              <Crown className="h-8 w-8 text-warning" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how you rank against fellow trainers in the Placemon universe
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">{stats.totalTrainers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Trainers</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-secondary">{stats.activeThisWeek.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Active This Week</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="space-y-2">
                <Trophy className="h-8 w-8 text-accent mx-auto" />
                <div className="text-2xl font-bold text-accent">Lv.{stats.averageLevel}</div>
                <div className="text-sm text-muted-foreground">Average Level</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-warning mx-auto" />
                <div className="text-2xl font-bold text-warning">{stats.topXpThisWeek.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Top XP This Week</div>
              </div>
            </Card>
          </div>

          {/* Leaderboard Tabs */}
          <Tabs defaultValue="weekly" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:w-fit lg:grid-cols-2 mx-auto">
              <TabsTrigger value="weekly" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Weekly Leaders
              </TabsTrigger>
              <TabsTrigger value="alltime" className="flex items-center gap-2">
                <Crown className="h-4 w-4" />
                All-Time Legends
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="space-y-4">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">This Week's Champions</h2>
                <p className="text-muted-foreground">Updated every Monday at midnight</p>
              </div>
              
              <div className="space-y-4">
                {weeklyLeaders.map((trainer) => (
                  <LeaderboardCard key={`weekly-${trainer.rank}`} {...trainer} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alltime" className="space-y-4">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Hall of Fame</h2>
                <p className="text-muted-foreground">The greatest trainers of all time</p>
              </div>
              
              <div className="space-y-4">
                {allTimeLeaders.slice(0, 6).map((trainer) => (
                  <LeaderboardCard key={`alltime-${trainer.rank}`} {...trainer} />
                ))}
                
                {/* Current User Position */}
                <div className="py-4">
                  <div className="text-center text-muted-foreground text-sm mb-4">
                    ... and {allTimeLeaders[6].rank - 7} more trainers
                  </div>
                  <LeaderboardCard {...allTimeLeaders[6]} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}