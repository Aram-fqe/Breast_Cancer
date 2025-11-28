import { Target, UserCheck, Heart, Newspaper, Phone, MapPin, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Oncologist",
    rating: 4.9,
    distance: "2.3 miles",
    nextAvailable: "Tomorrow, 2:00 PM",
    image: "https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg3NDE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialty: "Radiologist",
    rating: 4.8,
    distance: "1.7 miles",
    nextAvailable: "Friday, 10:30 AM",
    image: "https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg3NDE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const supportGroups = [
  {
    name: "Breast Cancer Warriors",
    members: 247,
    nextMeeting: "Thursday, 7:00 PM",
    description: "A supportive community for survivors and fighters"
  },
  {
    name: "Young Women's Support Circle",
    members: 89,
    nextMeeting: "Saturday, 2:00 PM",
    description: "Support for women under 40 facing breast cancer"
  }
];

const latestNews = [
  {
    title: "New Breakthrough in Early Detection Technology",
    summary: "Researchers develop AI-powered imaging that can detect cancer 2 years earlier",
    date: "2 days ago",
    category: "Research"
  },
  {
    title: "FDA Approves New Targeted Therapy",
    summary: "New treatment shows 40% better outcomes in clinical trials",
    date: "1 week ago",
    category: "Treatment"
  },
  {
    title: "Genetic Testing Guidelines Updated",
    summary: "New recommendations for BRCA testing in younger women",
    date: "2 weeks ago",
    category: "Guidelines"
  }
];

export function AdditionalSections() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Risk Assessment Quiz */}
      <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Target className="h-6 w-6 text-orange-600" />
            <span>Risk Assessment Quiz</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-medium text-gray-900 mb-2">Know Your Risk Level</h3>
              <p className="text-gray-600 mb-4">
                Take our comprehensive assessment to understand your personal risk factors and get personalized recommendations.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>🎯 10 minutes</span>
                <span>📊 Personalized results</span>
                <span>👩‍⚕️ Doctor-reviewed</span>
              </div>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
              Start Assessment
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Find Specialists */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <UserCheck className="h-6 w-6 text-blue-600" />
              <span>Find Specialists</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {specialists.map((doctor) => (
                <div key={doctor.id} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{doctor.name}</h4>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <span>{doctor.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{doctor.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-blue-600">
                View All Specialists
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Groups */}
        <Card className="border-2 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-green-600" />
              <span>Support Groups & Helplines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">24/7 Available</Badge>
                </div>
                <h4 className="font-medium text-gray-900">Crisis Helpline</h4>
                <p className="text-lg font-mono text-green-700">1-800-SUPPORT</p>
              </div>
              
              {supportGroups.map((group, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{group.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{group.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{group.members} members</span>
                    <span>Next: {group.nextMeeting}</span>
                  </div>
                </div>
              ))}
              
              <Button variant="ghost" className="w-full text-green-600">
                Join a Support Group
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Research & Updates */}
      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Newspaper className="h-6 w-6 text-purple-600" />
              <span>Latest Research & Updates</span>
            </div>
            <Button variant="outline" size="sm">
              View All News
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg">
                <Badge className="mb-2 bg-purple-100 text-purple-800">
                  {news.category}
                </Badge>
                <h4 className="font-medium text-gray-900 mb-2">{news.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{news.summary}</p>
                <p className="text-xs text-gray-500">{news.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}