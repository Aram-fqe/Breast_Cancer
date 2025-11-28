import { Play, Book, FileText, Video, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const articles = [
  {
    id: 1,
    title: "How to Perform a Breast Self-Exam",
    category: "Self-Care",
    readTime: "5 min read",
    description: "Step-by-step guide to monthly self-examinations",
    featured: true
  },
  {
    id: 2,
    title: "Breast Cancer Myths vs Facts",
    category: "Education",
    readTime: "8 min read",
    description: "Debunking common misconceptions about breast cancer",
    featured: true
  },
  {
    id: 3,
    title: "Understanding Your Mammogram Results",
    category: "Screening",
    readTime: "6 min read",
    description: "What BI-RADS categories mean for your health",
    featured: false
  },
  {
    id: 4,
    title: "Nutrition and Breast Health",
    category: "Lifestyle",
    readTime: "10 min read",
    description: "Foods that may help reduce breast cancer risk",
    featured: false
  }
];

const videos = [
  {
    id: 1,
    title: "Breast Self-Exam Tutorial",
    duration: "4:32",
    description: "Visual guide to performing monthly self-examinations",
    thumbnail: "bg-gradient-to-br from-[#E91E63] to-[#FF6F91]"
  },
  {
    id: 2,
    title: "Understanding Mammograms",
    duration: "6:15",
    description: "What to expect during your screening appointment",
    thumbnail: "bg-gradient-to-br from-[#3BAFA9] to-[#4ECDC4]"
  },
  {
    id: 3,
    title: "Genetic Testing Overview",
    duration: "8:20",
    description: "BRCA genes and hereditary breast cancer risk",
    thumbnail: "bg-gradient-to-br from-[#C7A4C4] to-[#D8BFD8]"
  },
  {
    id: 4,
    title: "Treatment Options Explained",
    duration: "12:45",
    description: "Comprehensive overview of breast cancer treatments",
    thumbnail: "bg-gradient-to-br from-[#FF6F91] to-[#FF8E9B]"
  }
];

const resources = [
  {
    id: 1,
    title: "Breast Cancer Risk Assessment Tool",
    type: "Interactive Tool",
    description: "Calculate your personal risk factors",
    action: "Take Assessment"
  },
  {
    id: 2,
    title: "Screening Guidelines by Age",
    type: "PDF Guide",
    description: "Age-specific recommendations for screening",
    action: "Download PDF"
  },
  {
    id: 3,
    title: "Questions for Your Doctor",
    type: "Checklist",
    description: "Important questions to ask at appointments",
    action: "View Checklist"
  },
  {
    id: 4,
    title: "Support Group Directory",
    type: "Directory",
    description: "Find local and online support communities",
    action: "Find Groups"
  }
];

export function EducationalHub() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Educational Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources, articles, videos, and tools to help you stay informed 
            about breast health and cancer prevention
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#FDE2E4] rounded-xl p-1">
            <TabsTrigger 
              value="articles" 
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#E91E63] data-[state=active]:shadow-sm"
            >
              <Book className="h-4 w-4 mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger 
              value="videos"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#E91E63] data-[state=active]:shadow-sm"
            >
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger 
              value="resources"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#E91E63] data-[state=active]:shadow-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className={`hover:shadow-lg transition-all duration-200 cursor-pointer group ${
                    article.featured ? 'ring-2 ring-[#E91E63]/20 bg-gradient-to-br from-white to-[#FDE2E4]/20' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#E91E63]/10 text-[#E91E63] border-0">
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-[#3BAFA9] text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-[#E91E63] transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-[#E91E63] hover:bg-[#FDE2E4] group-hover:translate-x-1 transition-all"
                      >
                        Read More
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Card 
                  key={video.id} 
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer group overflow-hidden"
                >
                  <div className={`relative h-48 ${video.thumbnail} flex items-center justify-center`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-[#E91E63]" fill="currentColor" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#E91E63] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card 
                  key={resource.id} 
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2 flex-1">
                        <Badge className="bg-[#C7A4C4]/20 text-[#C7A4C4] border-0">
                          {resource.type}
                        </Badge>
                        <h3 className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#E91E63] transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                      <div className="ml-4">
                        {resource.type === "PDF Guide" ? (
                          <Download className="h-6 w-6 text-[#3BAFA9]" />
                        ) : (
                          <ExternalLink className="h-6 w-6 text-[#3BAFA9]" />
                        )}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#3BAFA9] to-[#4ECDC4] hover:from-[#359B95] hover:to-[#45B7AA] text-white"
                    >
                      {resource.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-[#FDE2E4] to-[#C7A4C4]/20 border-[#E91E63]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Stay Informed
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest research updates, educational content, and awareness reminders 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-[#E91E63]/20 focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-6 py-3 rounded-xl">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}