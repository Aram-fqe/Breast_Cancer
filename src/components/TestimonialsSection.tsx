import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 45,
    story: "Survivor",
    quote: "Early detection changed everything for me. The mammogram caught my cancer at stage 1, and today I'm 3 years cancer-free. Don't skip your screenings - they truly save lives.",
    image: "",
    location: "Chicago, IL",
    yearsActive: "3 years cancer-free",
    treatment: "Lumpectomy + Radiation"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    age: 38,
    story: "Previor",
    quote: "Having the BRCA gene mutation was scary, but preventive mastectomy was the right choice for me. I feel empowered and protected, and I can watch my daughters grow up worry-free.",
    image: "",
    location: "Miami, FL",
    yearsActive: "2 years post-surgery",
    treatment: "Preventive Mastectomy"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    age: 52,
    story: "Survivor",
    quote: "My journey through chemotherapy was challenging, but the support from my family and medical team made all the difference. Today, I'm stronger than ever and advocate for early detection.",
    image: "",
    location: "Seattle, WA",
    yearsActive: "5 years cancer-free",
    treatment: "Chemotherapy + Surgery"
  },
  {
    id: 4,
    name: "Lisa Thompson",
    age: 41,
    story: "Survivor", 
    quote: "Finding support groups and connecting with other women going through similar experiences was invaluable. We're all warriors in this fight together.",
    image: "",
    location: "Austin, TX",
    yearsActive: "1 year cancer-free",
    treatment: "Targeted Therapy"
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FDE2E4]/30 via-white to-[#C7A4C4]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Stories of Hope & Strength
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real women who have faced breast cancer with courage, 
            hope, and the support of their communities
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white">
            <CardContent className="p-0">
              <div className="relative h-96 md:h-80">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentTestimonial 
                        ? "opacity-100 translate-x-0" 
                        : index < currentTestimonial 
                          ? "opacity-0 -translate-x-full" 
                          : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="h-full bg-gradient-to-br from-white to-[#FDE2E4]/20 flex items-center">
                      <div className="container mx-auto px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                          {/* Quote Section */}
                          <div className="md:col-span-2 space-y-6">
                            <Quote className="h-12 w-12 text-[#E91E63] opacity-60" />
                            
                            <blockquote className="text-2xl lg:text-3xl leading-relaxed text-[#2C2C2C] font-medium">
                              "{testimonial.quote}"
                            </blockquote>
                            
                            <div className="flex items-center space-x-4">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className="h-5 w-5 text-yellow-400" 
                                    fill="currentColor" 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">
                                Verified Story
                              </span>
                            </div>
                          </div>

                          {/* Profile Section */}
                          <div className="space-y-6">
                            <div className="text-center">
                              <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-[#FDE2E4]">
                                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                <AvatarFallback className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] text-white text-2xl">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              
                              <h3 className="text-xl font-bold text-[#2C2C2C]">
                                {testimonial.name}
                              </h3>
                              <p className="text-gray-600">
                                {testimonial.location}
                              </p>
                            </div>

                            <div className="space-y-3">
                              <Badge className="w-full justify-center bg-[#E91E63] text-white py-2">
                                {testimonial.story}
                              </Badge>
                              
                              <div className="text-center space-y-1">
                                <div className="text-sm font-medium text-[#3BAFA9]">
                                  {testimonial.yearsActive}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {testimonial.treatment}
                                </div>
                              </div>
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
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentTestimonial 
                          ? "bg-[#E91E63] w-8 h-3" 
                          : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-4 rounded-xl shadow-lg"
            >
              Share Your Story
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              Help inspire others by sharing your journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}