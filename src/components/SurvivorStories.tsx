import { useState } from "react";
import { Heart, Plus, MessageCircle, Share2, Calendar, Star, Quote, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function SurvivorStories() {
  const [showShareForm, setShowShareForm] = useState(false);
  const [filterStage, setFilterStage] = useState('all');
  const [filterAge, setFilterAge] = useState('all');

  const survivorStories = [
    {
      id: 1,
      name: "Sarah Martinez",
      age: 45,
      diagnosis: "Stage II Breast Cancer",
      yearsStrong: 5,
      image: "https://images.unsplash.com/photo-1594824475520-b49842339f43?auto=format&fit=crop&w=150&q=80",
      story: "When I was first diagnosed, I felt like my world had collapsed. But with the support of my family, medical team, and fellow survivors, I found strength I never knew I had. Today, I'm 5 years cancer-free and more grateful for life than ever before.",
      location: "California, USA",
      treatment: "Surgery + Chemotherapy",
      dateShared: "2024-01-15",
      likes: 127,
      comments: 23,
      stage: "stage2",
      ageGroup: "40-50"
    },
    {
      id: 2,
      name: "Emily Chen",
      age: 38,
      diagnosis: "Stage I Breast Cancer",
      yearsStrong: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      story: "Early detection saved my life. I found a small lump during a self-exam and immediately saw my doctor. The journey wasn't easy, but catching it early made all the difference. I now advocate for regular screenings and self-exams.",
      location: "New York, USA",
      treatment: "Lumpectomy + Radiation",
      dateShared: "2024-02-08",
      likes: 89,
      comments: 15,
      stage: "stage1",
      ageGroup: "30-40"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      age: 52,
      diagnosis: "Stage III Breast Cancer",
      yearsStrong: 7,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      story: "My diagnosis came during a routine mammogram. Despite the advanced stage, I never lost hope. The treatment was challenging, but the love and support from my community carried me through. Seven years later, I'm living proof that there's life after cancer.",
      location: "Texas, USA",
      treatment: "Mastectomy + Chemotherapy + Radiation",
      dateShared: "2024-01-22",
      likes: 156,
      comments: 31,
      stage: "stage3",
      ageGroup: "50-60"
    },
    {
      id: 4,
      name: "Jennifer Williams",
      age: 29,
      diagnosis: "BRCA1 Positive - Preventive Mastectomy",
      yearsStrong: 2,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      story: "After genetic testing revealed I carried the BRCA1 mutation, I made the difficult decision to have a preventive double mastectomy. It wasn't an easy choice, but it gave me peace of mind and allowed me to take control of my future. I want other young women to know they have options.",
      location: "Florida, USA",
      treatment: "Preventive Surgery + Reconstruction",
      dateShared: "2024-02-12",
      likes: 203,
      comments: 45,
      stage: "prevention",
      ageGroup: "20-30"
    },
    {
      id: 5,
      name: "Linda Thompson",
      age: 61,
      diagnosis: "Stage II Breast Cancer",
      yearsStrong: 10,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80",
      story: "Being diagnosed at 51 was terrifying, but it also taught me the importance of living each day to the fullest. Ten years later, I've traveled the world, written a book, and mentored dozens of newly diagnosed women. Cancer tried to stop me, but it only made me stronger.",
      location: "Oregon, USA",
      treatment: "Mastectomy + Chemotherapy",
      dateShared: "2024-01-05",
      likes: 98,
      comments: 28,
      stage: "stage2",
      ageGroup: "60+"
    },
    {
      id: 6,
      name: "Rebecca Davis",
      age: 44,
      diagnosis: "Inflammatory Breast Cancer",
      yearsStrong: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      story: "Inflammatory breast cancer is rare and aggressive, but I refused to let it define my story. With an incredible medical team and unwavering family support, I fought through intensive treatment. Four years later, I'm here to show others that even the rarest forms can be beaten.",
      location: "Illinois, USA",
      treatment: "Chemotherapy + Mastectomy + Radiation",
      dateShared: "2024-02-01",
      likes: 174,
      comments: 37,
      stage: "inflammatory",
      ageGroup: "40-50"
    }
  ];

  const filteredStories = survivorStories.filter(story => {
    const stageMatch = filterStage === 'all' || story.stage === filterStage;
    const ageMatch = filterAge === 'all' || story.ageGroup === filterAge;
    return stageMatch && ageMatch;
  });

  const handleShareStory = (e: React.FormEvent) => {
    e.preventDefault();
    setShowShareForm(false);
    // In a real app, this would submit to a backend
  };

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-3xl mb-6 shadow-xl">
            <Heart className="h-10 w-10 text-white" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Survivor Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Be inspired by the courage, strength, and resilience of breast cancer survivors. Every journey is unique, but no one walks alone. Share your story and inspire others on their journey.
          </p>
        </div>

        {/* Share Your Story Button */}
        <div className="text-center mb-12">
          <Button
            onClick={() => setShowShareForm(true)}
            className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-4 rounded-xl text-lg"
          >
            <Plus className="h-5 w-5 mr-2" />
            Share Your Story
          </Button>
        </div>

        {/* Share Story Form */}
        {showShareForm && (
          <Card className="border-0 shadow-xl mb-12 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C2C2C] text-center">Share Your Inspiring Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleShareStory} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div>
                    <Label htmlFor="age">Age at Diagnosis</Label>
                    <Input id="age" type="number" placeholder="Age" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="diagnosis">Diagnosis</Label>
                    <Input id="diagnosis" placeholder="e.g., Stage II Breast Cancer" required />
                  </div>
                  <div>
                    <Label htmlFor="yearsStrong">Years Cancer-Free</Label>
                    <Input id="yearsStrong" type="number" placeholder="Years" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="story">Your Story</Label>
                  <Textarea
                    id="story"
                    placeholder="Share your journey, challenges, victories, and words of encouragement for others..."
                    className="h-32"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input id="location" placeholder="City, State" />
                  </div>
                  <div>
                    <Label htmlFor="treatment">Treatment Type</Label>
                    <Input id="treatment" placeholder="e.g., Surgery + Chemotherapy" />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowShareForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white"
                  >
                    Share Story
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <Label>Filter by:</Label>
          </div>
          <Select value={filterStage} onValueChange={setFilterStage}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Cancer Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="stage1">Stage I</SelectItem>
              <SelectItem value="stage2">Stage II</SelectItem>
              <SelectItem value="stage3">Stage III</SelectItem>
              <SelectItem value="inflammatory">Inflammatory</SelectItem>
              <SelectItem value="prevention">Prevention</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterAge} onValueChange={setFilterAge}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Age Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="20-30">20-30 years</SelectItem>
              <SelectItem value="30-40">30-40 years</SelectItem>
              <SelectItem value="40-50">40-50 years</SelectItem>
              <SelectItem value="50-60">50-60 years</SelectItem>
              <SelectItem value="60+">60+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStories.map((survivor) => (
            <Card key={survivor.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with survivor info */}
                <div className="bg-gradient-to-br from-[#FDE2E4] to-[#C7A4C4]/30 p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                      <AvatarImage src={survivor.image} alt={survivor.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] text-white text-lg">
                        {survivor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2C2C2C] mb-1">{survivor.name}</h3>
                      <p className="text-gray-600 mb-2">{survivor.diagnosis}</p>
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-[#3BAFA9] text-white">
                          {survivor.yearsStrong} years strong
                        </Badge>
                        <span className="text-sm text-gray-500">{survivor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story content */}
                <div className="p-6">
                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-[#E91E63] mb-2" />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{survivor.story}"
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(survivor.dateShared).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Treatment: {survivor.treatment}</span>
                    </div>
                  </div>

                  {/* Engagement buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-[#E91E63] transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{survivor.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-[#E91E63] transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{survivor.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#E91E63] transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inspirational Message */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#C7A4C4] to-[#9575AB] text-white mt-16">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              Every Story Matters
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-90">
              Your journey, your strength, and your voice can inspire and support someone who needs to hear that they're not alone. Whether you're newly diagnosed, in treatment, or years into survivorship, your story has the power to heal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowShareForm(true)}
                variant="secondary" 
                className="bg-white text-[#9575AB] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Share Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#9575AB] px-8 py-3 rounded-xl"
              >
                Join Support Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}