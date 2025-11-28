import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, BookOpen, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    id: 1,
    title: "Breast Cancer Awareness Month",
    subtitle: "Early Detection Saves Lives",
    description: "Join us in spreading awareness about the importance of regular screenings and self-examinations.",
    image: "https://images.unsplash.com/photo-1675475132186-a55abc369591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhc3QlMjBjYW5jZXIlMjBhd2FyZW5lc3MlMjByaWJib24lMjBwaW5rfGVufDF8fHx8MTc1ODc0MTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Calendar,
    action: "Schedule Screening"
  },
  {
    id: 2,
    title: "Know Your Risk Factors",
    subtitle: "Education is Empowerment",
    description: "Learn about genetic factors, lifestyle choices, and family history that may affect your breast health.",
    image: "https://images.unsplash.com/photo-1748261347768-a32434751a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc1ODYyNzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: BookOpen,
    action: "Take Risk Quiz"
  },
  {
    id: 3,
    title: "Survivor Stories",
    subtitle: "Hope, Strength & Community",
    description: "Be inspired by the courage and resilience of breast cancer survivors in our community.",
    image: "https://images.unsplash.com/photo-1656009178152-1e4402050560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHN1cHBvcnQlMjBncm91cHxlbnwxfHx8fDE3NTg3NDE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users,
    action: "Read Stories"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <Card className="overflow-hidden bg-gradient-to-r from-pink-50 to-white border-2 border-[#FFB6C1]/20">
        <CardContent className="p-0">
          <div className="relative h-80 md:h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex h-full">
                  <div className="flex-1 flex items-center p-8 md:p-12">
                    <div className="max-w-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#FFB6C1] p-2 rounded-lg mr-3">
                          <slide.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-[#FFB6C1] uppercase tracking-wide">
                          {slide.subtitle}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {slide.description}
                      </p>
                      <Button className="bg-[#FFB6C1] hover:bg-[#FF91A4] text-white px-6 py-2 rounded-lg">
                        {slide.action}
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1">
                    <ImageWithFallback
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-[#FFB6C1] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}