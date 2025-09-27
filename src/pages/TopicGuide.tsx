import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TopicCard } from "@/components/TopicCard";
import { 
  Zap, 
  ArrowLeft, 
  Code, 
  Calculator, 
  Brain, 
  HelpCircle,
  BookOpen,
  Search,
  Filter,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const codingTopics = [
  {
    title: "Arrays & Strings",
    description: "Master fundamental data structures with array manipulation and string processing techniques",
    difficulty: "Beginner" as const,
    category: "Data Structures",
    progress: 75,
    totalQuestions: 45,
    completedQuestions: 34,
    averageTime: "12m",
    userCount: 2340,
    icon: <Code className="h-6 w-6" />,
    color: "secondary" as const
  },
  {
    title: "Dynamic Programming",
    description: "Solve complex optimization problems using memoization and tabulation approaches",
    difficulty: "Advanced" as const,
    category: "Algorithms",
    progress: 30,
    totalQuestions: 35,
    completedQuestions: 11,
    averageTime: "25m",
    userCount: 890,
    icon: <Code className="h-6 w-6" />,
    color: "secondary" as const
  },
  {
    title: "Trees & Graphs",
    description: "Navigate hierarchical data structures and graph traversal algorithms",
    difficulty: "Intermediate" as const,
    category: "Data Structures",
    progress: 60,
    totalQuestions: 40,
    completedQuestions: 24,
    averageTime: "18m",
    userCount: 1560,
    icon: <Code className="h-6 w-6" />,
    color: "secondary" as const
  },
  {
    title: "Object-Oriented Programming",
    description: "Learn encapsulation, inheritance, polymorphism, and design patterns",
    difficulty: "Intermediate" as const,
    category: "Programming Concepts",
    progress: 85,
    totalQuestions: 30,
    completedQuestions: 26,
    averageTime: "15m",
    userCount: 1890,
    icon: <Code className="h-6 w-6" />,
    color: "secondary" as const
  }
];

const aptitudeTopics = [
  {
    title: "Quantitative Aptitude",
    description: "Strengthen your numerical skills with arithmetic, algebra, and geometry",
    difficulty: "Beginner" as const,
    category: "Mathematics",
    progress: 80,
    totalQuestions: 60,
    completedQuestions: 48,
    averageTime: "8m",
    userCount: 3200,
    icon: <Calculator className="h-6 w-6" />,
    color: "primary" as const
  },
  {
    title: "Logical Reasoning",
    description: "Develop analytical thinking with puzzles, patterns, and deductive reasoning",
    difficulty: "Intermediate" as const,
    category: "Logic",
    progress: 55,
    totalQuestions: 50,
    completedQuestions: 28,
    averageTime: "12m",
    userCount: 2800,
    icon: <Brain className="h-6 w-6" />,
    color: "accent" as const
  },
  {
    title: "Data Interpretation",
    description: "Analyze charts, graphs, and tables to extract meaningful insights",
    difficulty: "Advanced" as const,
    category: "Analytics",
    progress: 40,
    totalQuestions: 35,
    completedQuestions: 14,
    averageTime: "20m",
    userCount: 1200,
    icon: <Calculator className="h-6 w-6" />,
    color: "primary" as const
  },
  {
    title: "Verbal Reasoning",
    description: "Enhance comprehension skills with reading passages and verbal logic",
    difficulty: "Intermediate" as const,
    category: "Language",
    progress: 65,
    totalQuestions: 45,
    completedQuestions: 29,
    averageTime: "10m",
    userCount: 2100,
    icon: <HelpCircle className="h-6 w-6" />,
    color: "warning" as const
  }
];

const generalTopics = [
  {
    title: "Computer Science Fundamentals",
    description: "Core concepts in operating systems, networks, and computer architecture",
    difficulty: "Intermediate" as const,
    category: "Computer Science",
    progress: 70,
    totalQuestions: 55,
    completedQuestions: 39,
    averageTime: "14m",
    userCount: 2500,
    icon: <BookOpen className="h-6 w-6" />,
    color: "accent" as const
  },
  {
    title: "Database Management",
    description: "SQL queries, database design, normalization, and transaction management",
    difficulty: "Advanced" as const,  
    category: "Databases",
    progress: 45,
    totalQuestions: 40,
    completedQuestions: 18,
    averageTime: "16m",
    userCount: 1800,
    icon: <BookOpen className="h-6 w-6" />,
    color: "accent" as const
  },
  {
    title: "General Knowledge",
    description: "Current affairs, history, geography, and general awareness topics",
    difficulty: "Beginner" as const,
    category: "Knowledge",
    progress: 90,
    totalQuestions: 100,
    completedQuestions: 90,
    averageTime: "5m",
    userCount: 4200,
    icon: <HelpCircle className="h-6 w-6" />,
    color: "warning" as const
  }
];

export default function TopicGuide() {
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
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
                Search
              </Button>
              <Button variant="ghost" size="sm">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Topic Guide</h1>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master every skill with structured learning paths and targeted practice
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="p-6 bg-gradient-hero text-white shadow-glow">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">12</div>
                <div className="text-sm text-white/80">Topics Mastered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">385</div>
                <div className="text-sm text-white/80">Questions Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">68%</div>
                <div className="text-sm text-white/80">Average Score</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">2,450</div>
                <div className="text-sm text-white/80">XP This Week</div>
              </div>
            </div>
          </Card>

          {/* Topic Categories */}
          <Tabs defaultValue="coding" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:grid-cols-3 mx-auto">
              <TabsTrigger value="coding" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Coding
              </TabsTrigger>
              <TabsTrigger value="aptitude" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Aptitude
              </TabsTrigger>
              <TabsTrigger value="general" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                General
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coding" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Coding & Algorithms</h2>
                <p className="text-muted-foreground">Master programming concepts and problem-solving</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {codingTopics.map((topic, index) => (
                  <TopicCard key={index} {...topic} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aptitude" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Aptitude & Reasoning</h2>
                <p className="text-muted-foreground">Sharpen analytical and mathematical skills</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {aptitudeTopics.map((topic, index) => (
                  <TopicCard key={index} {...topic} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="general" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">General Knowledge</h2>
                <p className="text-muted-foreground">Expand knowledge across various domains</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {generalTopics.map((topic, index) => (
                  <TopicCard key={index} {...topic} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Stats */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Keep up the momentum!</h3>
                <p className="text-muted-foreground">You're on track to complete 5 more topics this month</p>
              </div>
              <Button variant="hero">
                Continue Learning
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}