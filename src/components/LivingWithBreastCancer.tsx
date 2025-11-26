import { Heart, Smile, Users, Activity, Brain, Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLanguage } from "./LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LivingWithBreastCancerProps {
  setActiveSection?: (section: string) => void;
}

export function LivingWithBreastCancer({ setActiveSection }: LivingWithBreastCancerProps) {
  const { t } = useLanguage();

  const lifestyleTipsData = [
    {
      icon: <Activity className="h-6 w-6 text-[#E91E63]" />,
      title: t('stayActiveTitle'),
      description: t('stayActiveDescription'),
      tips: [t('gentleExercise'), t('walkingDaily'), t('yogaStretching'), t('strengthTraining')]
    },
    {
      icon: <Heart className="h-6 w-6 text-[#E91E63]" />,
      title: t('nutritionTitle'),
      description: t('nutritionDescription'),
      tips: [t('balancedDiet'), t('hydration'), t('limitProcessedFoods'), t('antioxidantRich')]
    },
    {
      icon: <Brain className="h-6 w-6 text-[#E91E63]" />,
      title: t('mentalHealthTitle'),
      description: t('mentalHealthDescription'),
      tips: [t('stressManagement'), t('meditationPractice'), t('counselingSupport'), t('socialConnections')]
    },
    {
      icon: <Users className="h-6 w-6 text-[#E91E63]" />,
      title: t('familySupportTitle'),
      description: t('familySupportDescription'),
      tips: [t('openCommunication'), t('shareResponsibilities'), t('qualityTime'), t('professionalGuidance')]
    }
  ];

  const survivorStoriesData = [
    {
      name: "Sarah Martinez",
      age: "45",
      story: t('sarahStory'),
      image: "https://images.unsplash.com/photo-1594824475520-b49842339f43?auto=format&fit=crop&w=150&q=80",
      yearsStrong: "5"
    },
    {
      name: "Emily Chen",
      age: "38",
      story: t('emilyStory'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      yearsStrong: "3"
    },
    {
      name: "Maria Rodriguez",
      age: "52",
      story: t('mariaStory'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      yearsStrong: "7"
    }
  ];

  const copingStrategiesData = [
    {
      strategy: t('buildSupportNetwork'),
      description: t('supportNetworkDescription')
    },
    {
      strategy: t('maintainRoutine'),
      description: t('routineDescription')
    },
    {
      strategy: t('practiceGratitude'),
      description: t('gratitudeDescription')
    },
    {
      strategy: t('setSmallGoals'),
      description: t('smallGoalsDescription')
    },
    {
      strategy: t('stayInformed'),
      description: t('stayInformedDescription')
    },
    {
      strategy: t('expressEmotions'),
      description: t('expressEmotionsDescription')
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Smile className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('livingWithBreastCancerTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('livingWithBreastCancerDescription')}
          </p>
        </div>

        {/* Lifestyle Tips Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('lifestyleTipsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('lifestyleTipsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lifestyleTipsData.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl">
                      {tip.icon}
                    </div>
                    <CardTitle className="text-xl text-[#2C2C2C]">{tip.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <div key={tipIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#E91E63] rounded-full"></div>
                        <span className="text-gray-700">{tipItem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coping Strategies Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('copingStrategiesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('copingStrategiesDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copingStrategiesData.map((strategy, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="bg-[#3BAFA9] text-white rounded-full mt-1 px-3 py-1">
                      {index + 1}
                    </Badge>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-2">{strategy.strategy}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{strategy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Survivor Stories Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('survivorStoriesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('survivorStoriesDescription')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {survivorStoriesData.map((survivor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-[#FDE2E4] to-[#C7A4C4]/30 p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-white shadow-lg">
                      <AvatarImage src={survivor.image} alt={survivor.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] text-white text-xl">
                        {survivor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-[#2C2C2C] mb-1">{survivor.name}</h3>
                    <p className="text-gray-600 mb-2">{t('age')}: {survivor.age}</p>
                    <Badge className="bg-[#3BAFA9] text-white">
                      {survivor.yearsStrong} {t('yearsStrong')}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <Quote className="h-6 w-6 text-[#E91E63] mb-2" />
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">"{survivor.story}"</p>
                    <div className="flex justify-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#FF6F91] fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inspirational Message Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#3BAFA9] to-[#2E8B8B] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <h2 className="text-3xl mb-6">
              {t('inspirationalMessageTitle')}
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-90">
              {t('inspirationalMessage')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#3BAFA9] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                {t('joinSupportGroup')}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3BAFA9] px-8 py-3 rounded-xl"
              >
                {t('shareYourStory')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('additionalResourcesTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Nutrition Guide', icon: <Heart className="h-6 w-6" />, action: 'nutrition' },
              { title: 'Exercise Program', icon: <Activity className="h-6 w-6" />, action: 'exercise' },
              { title: 'Mental Health Support', icon: <Brain className="h-6 w-6" />, action: 'mental-health' },
              { title: 'Family Resources', icon: <Users className="h-6 w-6" />, action: 'family-support' }
            ].map((resource, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl mx-auto mb-4 text-[#E91E63]">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">{resource.title}</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setActiveSection && setActiveSection(resource.action)}
                    className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}