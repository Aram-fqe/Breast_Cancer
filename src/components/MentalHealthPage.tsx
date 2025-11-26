import { Brain, Heart, Users, MessageCircle, Phone, Shield, Lightbulb, Smile, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";

export function MentalHealthPage() {
  const mentalHealthServices = [
    {
      id: "counseling",
      title: "Individual Counseling",
      icon: MessageCircle,
      description: "One-on-one therapy sessions with oncology-trained counselors",
      benefits: ["Personalized support", "Process emotions", "Develop coping strategies", "Work through specific concerns"],
      whatToExpect: [
        "Initial assessment of your needs and goals",
        "Regular sessions (weekly or bi-weekly)",
        "Evidence-based therapeutic approaches",
        "Confidential and supportive environment"
      ],
      goodFor: ["Processing diagnosis", "Managing anxiety", "Working through depression", "Relationship concerns"]
    },
    {
      id: "support-groups",
      title: "Support Groups",
      icon: Users,
      description: "Connect with others who understand your journey",
      benefits: ["Shared experiences", "Peer support", "Reduced isolation", "Practical advice"],
      whatToExpected: [
        "Small groups (6-12 people)",
        "Facilitated by trained professionals",
        "Regular weekly or monthly meetings",
        "Safe space to share and listen"
      ],
      goodFor: ["Feeling less alone", "Learning from others", "Building friendships", "Ongoing support"]
    },
    {
      id: "stress-management",
      title: "Stress Management",
      icon: Brain,
      description: "Learn techniques to manage stress and anxiety",
      benefits: ["Reduced anxiety", "Better sleep", "Improved mood", "Enhanced coping"],
      whatToExpected: [
        "Mindfulness and meditation training",
        "Breathing and relaxation techniques",
        "Cognitive behavioral strategies",
        "Homework and practice exercises"
      ],
      goodFor: ["High stress levels", "Sleep problems", "Overwhelming thoughts", "Physical tension"]
    }
  ];

  const copingStrategies = [
    {
      category: "Immediate Coping",
      strategies: [
        {
          name: "Deep Breathing",
          description: "4-7-8 breathing technique to calm anxiety",
          howTo: "Inhale for 4, hold for 7, exhale for 8. Repeat 3-4 times."
        },
        {
          name: "Grounding Exercise",
          description: "5-4-3-2-1 technique to stay present",
          howTo: "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste."
        },
        {
          name: "Progressive Muscle Relaxation",
          description: "Tense and release muscle groups",
          howTo: "Start with toes, tense for 5 seconds, then relax. Move up your body."
        }
      ]
    },
    {
      category: "Daily Coping",
      strategies: [
        {
          name: "Journaling",
          description: "Express thoughts and emotions through writing",
          howTo: "Write for 10-15 minutes daily. No rules - just write freely."
        },
        {
          name: "Mindfulness Meditation",
          description: "Practice being present in the moment",
          howTo: "Start with 5 minutes daily. Focus on breath or body sensations."
        },
        {
          name: "Gentle Movement",
          description: "Light exercise to boost mood",
          howTo: "Walk, stretch, or do yoga for 10-30 minutes daily."
        }
      ]
    },
    {
      category: "Long-term Coping",
      strategies: [
        {
          name: "Building Support Network",
          description: "Cultivate relationships with family, friends, and professionals",
          howTo: "Reach out regularly, join groups, maintain connections."
        },
        {
          name: "Meaning-Making",
          description: "Find purpose and meaning in your experience",
          howTo: "Reflect on values, help others, engage in meaningful activities."
        },
        {
          name: "Self-Compassion",
          description: "Treat yourself with kindness and understanding",
          howTo: "Speak to yourself as you would a good friend. Practice forgiveness."
        }
      ]
    }
  ];

  const commonEmotions = [
    {
      emotion: "Fear & Anxiety",
      description: "Worry about the future, treatment, or recurrence",
      isNormal: true,
      copingTips: [
        "Focus on what you can control",
        "Practice relaxation techniques",
        "Limit medical information searches",
        "Talk to your healthcare team about concerns"
      ]
    },
    {
      emotion: "Sadness & Grief",
      description: "Mourning losses - health, plans, sense of normalcy",
      isNormal: true,
      copingTips: [
        "Allow yourself to feel sad",
        "Share feelings with trusted friends",
        "Consider counseling support",
        "Practice self-compassion"
      ]
    },
    {
      emotion: "Anger & Frustration",
      description: "Feeling upset about the diagnosis or situation",
      isNormal: true,
      copingTips: [
        "Acknowledge anger as valid",
        "Find healthy outlets (exercise, journaling)",
        "Communicate needs clearly",
        "Seek professional help if overwhelming"
      ]
    },
    {
      emotion: "Guilt & Shame",
      description: "Feeling responsible or different from others",
      isNormal: true,
      copingTips: [
        "Remember cancer is not your fault",
        "Challenge negative self-talk",
        "Connect with other survivors",
        "Focus on self-care, not self-blame"
      ]
    }
  ];

  const crisisResources = [
    {
      service: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis counseling and support",
      whenToCall: "If you have thoughts of suicide or self-harm"
    },
    {
      service: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 text-based crisis support",
      whenToCall: "If you prefer texting over talking"
    },
    {
      service: "Cancer Support Helpline",
      number: "1-800-227-2345",
      description: "Cancer-specific emotional support",
      whenToCall: "For cancer-related emotional crises"
    },
    {
      service: "Your Oncology Team",
      number: "Contact your cancer center",
      description: "Your medical team can provide immediate support",
      whenToCall: "For medical or treatment-related concerns"
    }
  ];

  const selfCareActivities = [
    {
      category: "Physical Self-Care",
      icon: Heart,
      activities: [
        "Take relaxing baths or showers",
        "Get adequate sleep (7-9 hours)",
        "Eat nourishing foods",
        "Gentle exercise or movement",
        "Deep breathing exercises"
      ]
    },
    {
      category: "Emotional Self-Care",
      icon: Smile,
      activities: [
        "Practice gratitude journaling",
        "Express feelings through art or music",
        "Laugh - watch comedies or funny videos",
        "Cry when you need to",
        "Celebrate small victories"
      ]
    },
    {
      category: "Social Self-Care",
      icon: Users,
      activities: [
        "Spend time with loved ones",
        "Join support groups",
        "Ask for help when needed",
        "Set healthy boundaries",
        "Share your story when ready"
      ]
    },
    {
      category: "Spiritual Self-Care",
      icon: Star,
      activities: [
        "Practice meditation or prayer",
        "Spend time in nature",
        "Read inspiring books",
        "Connect with your values",
        "Practice mindfulness"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-3xl mb-6 shadow-xl">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Mental Health Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your emotional wellbeing is just as important as your physical health. Find comprehensive mental health resources, coping strategies, and professional support to help you through every step of your journey.
          </p>
        </div>

        {/* Mental Health Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Professional Mental Health Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access specialized mental health support designed for cancer patients and survivors
            </p>
          </div>

          <Tabs defaultValue="counseling" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {mentalHealthServices.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center space-x-2">
                  <service.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mentalHealthServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-2xl">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-[#2C2C2C]">{service.title}</CardTitle>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <Heart className="h-4 w-4 text-[#E91E63] mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <Clock className="h-4 w-4 text-[#3BAFA9] mr-2" />
                          What to Expect
                        </h4>
                        <ul className="space-y-2">
                          {service.whatToExpect.map((expect, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {expect}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <Lightbulb className="h-4 w-4 text-[#FF6F91] mr-2" />
                          Good For
                        </h4>
                        <ul className="space-y-2">
                          {service.goodFor.map((goodFor, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#FF6F91] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {goodFor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Common Emotions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Understanding Your Emotions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's normal to experience a wide range of emotions. You're not alone in feeling this way.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {commonEmotions.map((emotion, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-[#2C2C2C]">{emotion.emotion}</CardTitle>
                    <Badge className="bg-[#3BAFA9] text-white">
                      Normal
                    </Badge>
                  </div>
                  <p className="text-gray-600">{emotion.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#2C2C2C] mb-3">Coping Tips:</h4>
                  <ul className="space-y-2">
                    {emotion.copingTips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coping Strategies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Coping Strategies Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical techniques you can use anytime to manage stress and difficult emotions
            </p>
          </div>
          
          <div className="space-y-8">
            {copingStrategies.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-[#2C2C2C] mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.strategies.map((strategy, strategyIndex) => (
                    <Card key={strategyIndex} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-[#2C2C2C] mb-2">{strategy.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{strategy.description}</p>
                        <div className="bg-[#FDE2E4]/50 p-3 rounded-lg">
                          <h5 className="font-medium text-[#2C2C2C] text-xs mb-1">How to do it:</h5>
                          <p className="text-xs text-gray-600">{strategy.howTo}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Care Activities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Self-Care Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurture your wellbeing with these self-care practices across different areas of your life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfCareActivities.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl mb-4 mx-auto">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#2C2C2C]">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {category.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Crisis Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're in crisis or need immediate support, these resources are available 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg border-l-4 border-l-[#E91E63]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#E91E63] rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">{resource.service}</h3>
                      <p className="text-2xl font-bold text-[#E91E63] mb-2">{resource.number}</p>
                      <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                      <p className="text-xs text-gray-500">{resource.whenToCall}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <Alert className="mb-8 border-[#C7A4C4] bg-[#F5F0F5]">
          <Shield className="h-4 w-4 text-[#C7A4C4]" />
          <AlertDescription className="text-[#2C2C2C]">
            <strong>Remember:</strong> Seeking mental health support is a sign of strength, not weakness. Everyone copes differently, and professional help can make a significant difference in your quality of life and recovery.
          </AlertDescription>
        </Alert>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#C7A4C4] to-[#9575AB] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              You Don't Have to Face This Alone
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Our compassionate mental health professionals understand the unique challenges of cancer. Take the first step toward emotional healing and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#9575AB] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Schedule Counseling Session
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#9575AB] px-8 py-3 rounded-xl"
              >
                Join Support Group
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}