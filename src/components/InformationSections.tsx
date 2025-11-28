import { AlertCircle, Search, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const informationSections = [
  {
    id: "basics",
    title: "Breast Cancer Basics",
    subtitle: "Understanding the Fundamentals",
    icon: AlertCircle,
    color: "from-[#E91E63] to-[#FF6F91]",
    accentColor: "bg-[#FDE2E4]",
    borderColor: "border-[#E91E63]/20",
    image: "https://images.unsplash.com/photo-1575853168674-9222301f4f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBjYW5jZXIlMjByaWJib24lMjBwaW5rJTIwYXdhcmVuZXNzfGVufDF8fHx8MTc1ODc0MzIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: [
      { title: "Warning Signs & Symptoms", description: "Recognize early indicators" },
      { title: "Types of Breast Cancer", description: "Understanding different forms" },
      { title: "Risk Factors", description: "What increases your risk" },
      { title: "Stages & Grades", description: "How cancer is classified" }
    ],
    stats: "1 in 8 women will develop breast cancer",
    cta: "Learn the Basics"
  },
  {
    id: "screening",
    title: "Screening & Diagnosis",
    subtitle: "Early Detection Methods",
    icon: Search,
    color: "from-[#3BAFA9] to-[#4ECDC4]",
    accentColor: "bg-[#E6F7F5]",
    borderColor: "border-[#3BAFA9]/20",
    image: "https://images.unsplash.com/photo-1579154341058-50b75faf8e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbWFtbW9ncmFtJTIwc2NyZWVuaW5nfGVufDF8fHx8MTc1ODc0MzIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: [
      { title: "Mammography", description: "Gold standard screening tool" },
      { title: "Ultrasound", description: "Additional imaging option" },
      { title: "MRI Screening", description: "For high-risk individuals" },
      { title: "Biopsy Procedures", description: "Confirming diagnosis" }
    ],
    stats: "Screening reduces death risk by 20-40%",
    cta: "Schedule Screening"
  },
  {
    id: "treatment",
    title: "Treatment Options",
    subtitle: "Comprehensive Care Approaches",
    icon: Shield,
    color: "from-[#C7A4C4] to-[#D8BFD8]",
    accentColor: "bg-[#F5F0F5]",
    borderColor: "border-[#C7A4C4]/20",
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1ODc0MzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    topics: [
      { title: "Surgery Options", description: "Lumpectomy to mastectomy" },
      { title: "Chemotherapy", description: "Systemic treatment approach" },
      { title: "Radiation Therapy", description: "Targeted treatment method" },
      { title: "Targeted Therapy", description: "Precision medicine advances" }
    ],
    stats: "5-year survival rate: 99% when caught early",
    cta: "Explore Treatments"
  }
];

export function InformationSections() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Essential Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources to help you understand breast cancer, screening options, 
            and treatment approaches
          </p>
        </div>

        <div className="space-y-16">
          {informationSections.map((section, index) => (
            <Card 
              key={section.id} 
              className={`overflow-hidden shadow-lg border-2 ${section.borderColor} hover:shadow-2xl transition-all duration-500`}
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg`}>
                          <section.icon className="h-8 w-8 text-white" />
                        </div>
                        <Badge className={`${section.accentColor} text-gray-700 border-0`}>
                          {section.subtitle}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold text-[#2C2C2C]">
                        {section.title}
                      </CardTitle>
                    </CardHeader>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className={`p-4 ${section.accentColor} rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer group`}
                        >
                          <h4 className="font-semibold text-[#2C2C2C] mb-1 group-hover:text-[#E91E63] transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {topic.description}
                          </p>
                          <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-[#E91E63] group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>

                    {/* Stats & CTA */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          💡 <span className="font-medium">{section.stats}</span>
                        </div>
                        <Button 
                          className={`bg-gradient-to-r ${section.color} hover:shadow-lg text-white px-6 py-2 rounded-xl transition-all duration-200`}
                        >
                          {section.cta}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-first' : ''} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                    <ImageWithFallback
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 lg:h-full object-cover relative z-10"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-10 z-20`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}