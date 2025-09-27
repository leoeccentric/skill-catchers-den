import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Calculator, 
  Brain, 
  HelpCircle, 
  Zap, 
  Trophy, 
  Users, 
  Target,
  ArrowRight,
  Play
} from "lucide-react";
import heroImage from "@/assets/skill-monsters-hero.png";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "Aptitude-mon",
    description: "Master quantitative aptitude, logical reasoning, and numerical skills",
    icon: <Calculator className="h-8 w-8" />,
    color: "primary" as const,
    challenges: "200+ Challenges"
  },
  {
    name: "Code-mon", 
    description: "Conquer coding challenges in C++, Python, Java, and more",
    icon: <Code className="h-8 w-8" />,
    color: "secondary" as const,
    challenges: "500+ Problems"
  },
  {
    name: "Logic-mon",
    description: "Enhance problem-solving and analytical thinking abilities", 
    icon: <Brain className="h-8 w-8" />,
    color: "accent" as const,
    challenges: "150+ Puzzles"
  },
  {
    name: "Quiz-mon",
    description: "Test knowledge across technical and general topics",
    icon: <HelpCircle className="h-8 w-8" />,
    color: "warning" as const,
    challenges: "300+ Questions"
  }
];

const features = [
  { icon: <Zap className="h-6 w-6" />, title: "Gamified Learning", description: "Level up with XP, badges, and achievements" },
  { icon: <Trophy className="h-6 w-6" />, title: "Leaderboards", description: "Compete with trainers worldwide" },
  { icon: <Users className="h-6 w-6" />, title: "Battle Challenges", description: "Face off in coding and aptitude battles" },
  { icon: <Target className="h-6 w-6" />, title: "Targeted Practice", description: "AI-powered weakness analysis" }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Placemon
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button variant="pokeball">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 w-fit">
                ⚡ Catch Every Skill
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Gotcha!
                  <br />
                  <span className="text-warning">Crack Them All</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Catch every skill, ace every round, and level up your placement prep with our AI-powered training platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                  <Play className="h-5 w-5" />
                  Start Catching Skills
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  View Leaderboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Skill Monsters"
                className="w-full rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Skill Monsters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each skill monster represents a different area of placement preparation. Catch them all to become the ultimate placement champion!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const colorClasses = {
                primary: "bg-primary/10 border-primary/20 hover:border-primary/40",
                secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40",
                accent: "bg-accent/10 border-accent/20 hover:border-accent/40",
                warning: "bg-warning/10 border-warning/20 hover:border-warning/40"
              };

              return (
                <Card key={skill.name} className={`p-6 ${colorClasses[skill.color]} hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer border-2`}>
                  <div className="text-center space-y-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${
                      skill.color === 'primary' ? 'from-primary/20 to-primary/30 text-primary' :
                      skill.color === 'secondary' ? 'from-secondary/20 to-secondary/30 text-secondary' :
                      skill.color === 'accent' ? 'from-accent/20 to-accent/30 text-accent' :
                      'from-warning/20 to-warning/30 text-warning'
                    } mx-auto w-fit`}>
                      {skill.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {skill.challenges}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Level Up Your Prep Game</h2>
            <p className="text-xl text-muted-foreground">
              Experience placement preparation like never before with our gamified approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center space-y-4">
                <div className="p-4 bg-gradient-hero rounded-xl text-white w-fit mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-battle text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become the Champion?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of trainers who are already leveling up their placement preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}