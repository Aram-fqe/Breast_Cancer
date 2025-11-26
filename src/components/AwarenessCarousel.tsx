import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Book, Calendar, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const slides = [
  {
    id: 1,
    title: "Know the Signs",
    subtitle: "Early Detection",
    description: "Learn about the warning signs and symptoms that could indicate breast cancer. Regular self-exams and awareness are your first line of defense.",
    icon: Target,
    color: "from-[#E91E63] to-[#FF6F91]",
    accentColor: "bg-[#FDE2E4]",
    stats: "Self-exams can detect 40% of breast cancers",
    action: "Learn Self-Exam",
    actionType: "about"
  },
  {
    id: 2,
    title: "Screening Schedule",
    subtitle: "Prevention & Care",
    description: "Follow evidence-based screening guidelines. Mammograms starting at 40, clinical exams, and genetic counseling when appropriate.",
    icon: Calendar,
    color: "from-[#3BAFA9] to-[#4ECDC4]",
    accentColor: "bg-[#E6F7F5]",
    stats: "Mammograms reduce death risk by 20-40%",
    action: "Schedule Screening",
    actionType: "schedule"
  },
  {
    id: 3,
    title: "Survivor Stories",
    subtitle: "Hope & Inspiration",
    description: "Be inspired by the courage and resilience of breast cancer survivors. Every journey is unique, but no one walks alone.",
    icon: Users,
    color: "from-[#C7A4C4] to-[#D8BFD8]",
    accentColor: "bg-[#F5F0F5]",
    stats: "3.8 million survivors in the US",
    action: "Read Stories",
    actionType: "survivor-stories"
  },
  {
    id: 4,
    title: "Risk Factors",
    subtitle: "Knowledge is Power",
    description: "Understand your personal risk factors including age, family history, genetics, and lifestyle factors you can control.",
    icon: Book,
    color: "from-[#FF6F91] to-[#FF8E9B]",
    accentColor: "bg-[#FFF0F2]",
    stats: "Only 5-10% are hereditary",
    action: "Take the Test",
    actionType: "risk-assessment"
  }
];

interface AwarenessCarouselProps {
  setActiveSection?: (section: string) => void;
}

export function AwarenessCarousel({ setActiveSection }: AwarenessCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleActionClick = (actionType: string) => {
    if (setActiveSection) {
      setActiveSection(actionType);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">
            Breast Cancer Awareness
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Essential information to help you stay informed and take control of your breast health
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-0 bg-white">
          <CardContent className="p-0">
            <div className="relative h-96">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? "opacity-100 translate-x-0" 
                      : index < currentSlide 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className={`h-full bg-gradient-to-br ${slide.color} flex items-center`}>
                    <div className="container mx-auto px-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-xl ${slide.accentColor}/20 backdrop-blur-sm`}>
                              <slide.icon className="h-8 w-8 text-white" />
                            </div>
                            <Badge className="bg-white/20 text-white backdrop-blur-sm">
                              {slide.subtitle}
                            </Badge>
                          </div>
                          
                          <h3 className="text-4xl font-bold leading-tight">
                            {slide.title}
                          </h3>
                          
                          <p className="text-xl leading-relaxed text-white/90">
                            {slide.description}
                          </p>
                          
                          <div className="flex items-center space-x-4">
                            <Button 
                              size="lg"
                              onClick={() => handleActionClick(slide.actionType)}
                              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg"
                            >
                              {slide.action}
                            </Button>
                            <div className="text-sm text-white/80">
                              💡 {slide.stats}
                            </div>
                          </div>
                        </div>
                        
                        <div className="hidden lg:flex justify-center">
                          <div className={`${slide.accentColor} p-8 rounded-3xl shadow-xl`}>
                            <slide.icon className="h-32 w-32 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? "bg-white w-8 h-3" 
                        : "bg-white/50 w-3 h-3 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}