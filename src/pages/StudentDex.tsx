import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentCard } from "@/components/StudentCard";
import { 
  Zap, 
  ArrowLeft, 
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  BookOpen,
  Trophy,
  Target,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const allStudents = [
  {
    id: "001",
    name: "Dragon Master",
    level: 25,
    totalXp: 45230,
    rank: 1,
    badges: 45,
    joinDate: "Jan 2024",
    location: "Bangalore, India",
    specialization: "Full Stack Development",
    strengths: ["Dynamic Programming", "System Design", "Data Structures", "Web Development"],
    currentStreak: 28,
    completionRate: 92
  },
  {
    id: "002", 
    name: "Code Ninja",
    level: 23,
    totalXp: 42100,
    rank: 2,
    badges: 42,
    joinDate: "Feb 2024",
    location: "Mumbai, India",
    specialization: "Machine Learning",
    strengths: ["Algorithms", "Python", "Neural Networks", "Statistics"],
    currentStreak: 25,
    completionRate: 88
  },
  {
    id: "003",
    name: "Logic Lord",
    level: 22,
    totalXp: 38940,
    rank: 3,
    badges: 38,
    joinDate: "Dec 2023",
    location: "Delhi, India",
    specialization: "Data Science",
    strengths: ["Logical Reasoning", "Mathematics", "Data Analysis", "SQL"],
    currentStreak: 22,
    completionRate: 85
  },
  {
    id: "004",
    name: "Alex Thompson",
    level: 12,
    totalXp: 15420,
    rank: 87,
    badges: 23,
    joinDate: "Mar 2024",
    location: "Chennai, India", 
    specialization: "Software Engineering",
    strengths: ["Problem Solving", "Java", "Spring Boot", "Microservices"],
    currentStreak: 5,
    completionRate: 76
  },
  {
    id: "005",
    name: "Skill Hunter",
    level: 20,
    totalXp: 35200,
    rank: 5,
    badges: 35,
    joinDate: "Nov 2023",
    location: "Hyderabad, India",
    specialization: "DevOps Engineer",
    strengths: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    currentStreak: 18,
    completionRate: 82
  },
  {
    id: "006",
    name: "Algorithm Ace",
    level: 19,
    totalXp: 33100,
    rank: 6,
    badges: 33,
    joinDate: "Oct 2023",
    location: "Pune, India",
    specialization: "Competitive Programming",
    strengths: ["Graph Theory", "Greedy Algorithms", "Number Theory", "Combinatorics"],
    currentStreak: 15,
    completionRate: 90
  },
  {
    id: "007",
    name: "Data Detective",
    level: 18,
    totalXp: 31500,
    rank: 7,
    badges: 31,
    joinDate: "Sep 2023", 
    location: "Kolkata, India",
    specialization: "Business Analyst",
    strengths: ["Data Visualization", "Excel", "Tableau", "Business Intelligence"],
    currentStreak: 12,
    completionRate: 78
  },
  {
    id: "008",
    name: "Pattern Pro",
    level: 17,
    totalXp: 29800,
    rank: 8,
    badges: 29,
    joinDate: "Aug 2023",
    location: "Ahmedabad, India",
    specialization: "Frontend Developer",
    strengths: ["React", "JavaScript", "CSS", "User Experience"],
    currentStreak: 20,
    completionRate: 81
  }
];

const topPerformers = allStudents.slice(0, 3);
const recentJoiners = allStudents.filter(s => s.joinDate.includes("2024")).slice(0, 4);

export default function StudentDex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(allStudents);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredStudents(allStudents);
    } else {
      const filtered = allStudents.filter(student => 
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.specialization.toLowerCase().includes(query.toLowerCase()) ||
        student.location.toLowerCase().includes(query.toLowerCase()) ||
        student.strengths.some(strength => 
          strength.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredStudents(filtered);
    }
  };

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
              Advanced Filter
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Student Dex</h1>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover fellow trainers, their specializations, and learning journeys
            </p>
          </div>

          {/* Search Bar */}
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search trainers by name, skill, location..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                <Users className="h-3 w-3 mr-1" />
                {filteredStudents.length} trainers found
              </Badge>
            </div>
          </Card>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">{allStudents.length}</div>
                <div className="text-sm text-muted-foreground">Active Trainers</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="space-y-2">
                <Target className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-secondary">18</div>
                <div className="text-sm text-muted-foreground">Avg Level</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="space-y-2">
                <MapPin className="h-8 w-8 text-accent mx-auto" />
                <div className="text-2xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <div className="space-y-2">
                <Star className="h-8 w-8 text-warning mx-auto" />
                <div className="text-2xl font-bold text-warning">85%</div>
                <div className="text-sm text-muted-foreground">Avg Completion</div>
              </div>
            </Card>
          </div>

          {/* Student Categories */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:grid-cols-3 mx-auto">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                All Trainers
              </TabsTrigger>
              <TabsTrigger value="top" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Top Performers
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                New Joiners
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">All Trainers</h2>
                <p className="text-muted-foreground">Complete directory of all registered trainers</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                  <StudentCard key={student.id} {...student} />
                ))}
              </div>
              
              {filteredStudents.length === 0 && (
                <Card className="p-12 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No trainers found</h3>
                  <p className="text-muted-foreground">Try adjusting your search query</p>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="top" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Top Performers</h2>
                <p className="text-muted-foreground">The highest ranking trainers in our community</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topPerformers.map((student) => (
                  <StudentCard key={student.id} {...student} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">New Trainers</h2>
                <p className="text-muted-foreground">Welcome our newest community members</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentJoiners.map((student) => (
                  <StudentCard key={student.id} {...student} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}