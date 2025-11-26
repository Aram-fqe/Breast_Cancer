import { Users, Heart, MessageCircle, Baby, Clock, Shield, BookOpen, Star, Phone, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";

export function FamilySupportPage() {
  const familyRoles = [
    {
      role: "Spouses & Partners",
      icon: Heart,
      challenges: [
        "Balancing caregiver role with relationship",
        "Managing own emotions while supporting partner",
        "Maintaining intimacy during treatment",
        "Handling increased responsibilities"
      ],
      supportStrategies: [
        "Attend appointments together when possible",
        "Communicate openly about fears and needs",
        "Seek couples counseling if needed",
        "Take breaks and maintain your own interests"
      ],
      resources: ["Couples support groups", "Caregiver counseling", "Intimacy resources", "Respite care"]
    },
    {
      role: "Children & Teens",
      icon: Baby,
      challenges: [
        "Understanding the diagnosis at their age level",
        "Fear of losing their parent",
        "Changes in family routine and dynamics",
        "Academic or behavioral changes"
      ],
      supportStrategies: [
        "Use age-appropriate explanations",
        "Maintain routines when possible",
        "Encourage questions and expression of feelings",
        "Connect with school counselors"
      ],
      resources: ["Children's support groups", "School counseling", "Age-appropriate books", "Family therapy"]
    },
    {
      role: "Adult Children",
      icon: Users,
      challenges: [
        "Balancing own family with caregiving",
        "Making medical decisions or advocating",
        "Managing relationships with siblings",
        "Dealing with role reversal"
      ],
      supportStrategies: [
        "Divide responsibilities among siblings",
        "Attend key medical appointments",
        "Use family meetings to coordinate care",
        "Seek family counseling for conflicts"
      ],
      resources: ["Adult children support groups", "Family mediation", "Caregiver resources", "Legal/financial guidance"]
    },
    {
      role: "Extended Family",
      icon: Home,
      challenges: [
        "Knowing how to help without overstepping",
        "Understanding treatment and prognosis",
        "Coordinating support efforts",
        "Managing their own grief and worry"
      ],
      supportStrategies: [
        "Ask specific ways you can help",
        "Respect family boundaries and decisions",
        "Coordinate with primary caregivers",
        "Provide consistent, reliable support"
      ],
      resources: ["Extended family support groups", "Educational materials", "Volunteer coordination", "Respite support"]
    }
  ];

  const communicationTips = [
    {
      situation: "Talking About the Diagnosis",
      tips: [
        "Choose a quiet, private time to talk",
        "Use simple, honest language appropriate for age",
        "Allow time for questions and emotions",
        "Reassure about love and family stability",
        "Emphasize the medical team's expertise"
      ]
    },
    {
      situation: "During Treatment",
      tips: [
        "Keep family informed about appointments and results",
        "Be honest about side effects without alarming",
        "Ask for help with specific tasks",
        "Share both challenges and positive moments",
        "Maintain open dialogue about changing needs"
      ]
    },
    {
      situation: "Managing Disagreements",
      tips: [
        "Focus on the patient's wishes and needs",
        "Listen to different perspectives respectfully",
        "Consider family counseling for ongoing conflicts",
        "Separate personal relationships from medical decisions",
        "Seek professional guidance when stuck"
      ]
    },
    {
      situation: "Planning for the Future",
      tips: [
        "Discuss practical matters like finances and care",
        "Create advance directives together",
        "Talk about hopes and fears openly",
        "Make memory books or recordings",
        "Plan special experiences together"
      ]
    }
  ];

  const practicalSupport = [
    {
      category: "Household Management",
      tasks: [
        "Meal planning and preparation",
        "Grocery shopping and errands",
        "Cleaning and laundry",
        "Pet care",
        "Home maintenance"
      ],
      tips: [
        "Create a meal train with friends",
        "Use grocery delivery services",
        "Hire help when budget allows",
        "Accept offers of assistance",
        "Simplify household routines"
      ]
    },
    {
      category: "Transportation & Appointments",
      tasks: [
        "Driving to medical appointments",
        "Taking children to activities",
        "Pharmacy runs",
        "Emergency transportation",
        "Procedure escort services"
      ],
      tips: [
        "Create a transportation schedule",
        "Use ride-sharing or medical transport",
        "Ask family/friends to help with driving",
        "Plan for multiple appointment days",
        "Keep emergency contacts updated"
      ]
    },
    {
      category: "Financial & Legal",
      tasks: [
        "Insurance coordination",
        "Medical billing management",
        "Work/disability paperwork",
        "Legal document preparation",
        "Financial planning"
      ],
      tips: [
        "Organize important documents",
        "Consider power of attorney",
        "Meet with financial advisors",
        "Understand insurance benefits",
        "Keep detailed medical expense records"
      ]
    },
    {
      category: "Emotional Support",
      tasks: [
        "Being present during difficult times",
        "Celebrating treatment milestones",
        "Maintaining normal activities",
        "Creating positive distractions",
        "Preserving hope and optimism"
      ],
      tips: [
        "Follow the patient's lead on activities",
        "Share funny stories or watch comedies",
        "Plan small celebrations",
        "Create new traditions",
        "Focus on quality time together"
      ]
    }
  ];

  const caregiverselfCare = [
    {
      area: "Physical Health",
      practices: [
        "Maintain regular sleep schedule",
        "Eat nutritious meals",
        "Exercise regularly, even if brief",
        "Attend your own medical appointments",
        "Take breaks from caregiving"
      ]
    },
    {
      area: "Emotional Wellbeing",
      practices: [
        "Join caregiver support groups",
        "Practice stress management techniques",
        "Express feelings through journaling",
        "Seek counseling when needed",
        "Maintain perspective and hope"
      ]
    },
    {
      area: "Social Connections",
      practices: [
        "Stay connected with friends",
        "Accept help from others",
        "Communicate needs clearly",
        "Maintain some personal interests",
        "Use respite care services"
      ]
    },
    {
      area: "Practical Management",
      practices: [
        "Organize medical information",
        "Use calendars and reminder systems",
        "Learn about the diagnosis and treatment",
        "Prepare questions for doctor visits",
        "Know when to seek emergency help"
      ]
    }
  ];

  const ageSpecificGuidance = [
    {
      ageGroup: "Young Children (3-7)",
      keyPoints: [
        "Mommy/Daddy is sick but doctors are helping",
        "Use simple words like 'sick' instead of 'cancer'",
        "Reassure that they didn't cause the illness",
        "Maintain routines and familiar activities",
        "Show them it's okay to have feelings"
      ],
      warningSigns: ["Changes in eating or sleeping", "Regression in development", "Increased clinginess", "Acting out behaviors"]
    },
    {
      ageGroup: "School Age (8-12)",
      keyPoints: [
        "Explain cancer in age-appropriate terms",
        "Answer questions honestly but simply",
        "Discuss how treatment works",
        "Acknowledge their fears and concerns",
        "Include them in family decisions when appropriate"
      ],
      warningS: ["Declining grades", "Withdrawal from activities", "Difficulty concentrating", "Physical complaints"]
    },
    {
      ageGroup: "Teenagers (13-18)",
      keyPoints: [
        "Provide honest, detailed information",
        "Respect their need for independence",
        "Allow them to be involved in care decisions",
        "Support their social needs and activities",
        "Recognize their unique challenges"
      ],
      warningSigns: ["Risk-taking behaviors", "Social isolation", "Academic problems", "Substance use"]
    },
    {
      ageGroup: "Young Adults (18+)",
      keyPoints: [
        "Treat them as adults in discussions",
        "Include them in medical decision-making",
        "Respect their independence while offering support",
        "Discuss impact on their life plans",
        "Support their own support network"
      ],
      warningSigns: ["Career or education disruption", "Relationship problems", "Financial stress", "Anxiety about their own health"]
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Family Support Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cancer affects the whole family. Find guidance, resources, and support for family members and caregivers as you navigate this journey together with love, understanding, and strength.
          </p>
        </div>

        {/* Family Role-Specific Support */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Support for Different Family Roles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each family member faces unique challenges and needs tailored support
            </p>
          </div>

          <Tabs defaultValue="spouses" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="spouses" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Spouses</span>
              </TabsTrigger>
              <TabsTrigger value="children" className="flex items-center space-x-2">
                <Baby className="h-4 w-4" />
                <span className="hidden sm:inline">Children</span>
              </TabsTrigger>
              <TabsTrigger value="adult-children" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Adult Children</span>
              </TabsTrigger>
              <TabsTrigger value="extended" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Extended</span>
              </TabsTrigger>
            </TabsList>

            {familyRoles.map((role, index) => (
              <TabsContent key={index} value={index === 0 ? 'spouses' : index === 1 ? 'children' : index === 2 ? 'adult-children' : 'extended'}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl">
                        <role.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-[#2C2C2C]">{role.role}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3">Common Challenges:</h4>
                        <ul className="space-y-2">
                          {role.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#FF6F91] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3">Support Strategies:</h4>
                        <ul className="space-y-2">
                          {role.supportStrategies.map((strategy, strategyIndex) => (
                            <li key={strategyIndex} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3">Available Resources:</h4>
                        <ul className="space-y-2">
                          {role.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {resource}
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

        {/* Communication Strategies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Communication Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to have difficult conversations and maintain healthy family communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {communicationTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-[#2C2C2C] flex items-center">
                    <MessageCircle className="h-5 w-5 text-[#E91E63] mr-3" />
                    {tip.situation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.tips.map((tipText, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {tipText}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Age-Specific Guidance for Children */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Talking to Children by Age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate guidance for helping children understand and cope
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ageSpecificGuidance.map((guidance, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#2C2C2C] flex items-center">
                    <Baby className="h-5 w-5 text-[#C7A4C4] mr-3" />
                    {guidance.ageGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] mb-2">Key Points to Discuss:</h4>
                      <ul className="space-y-1">
                        {guidance.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] mb-2">Warning Signs to Watch:</h4>
                      <ul className="space-y-1">
                        {guidance.warningS.map((sign, signIndex) => (
                          <li key={signIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#FF6F91] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practical Support Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Practical Support Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete ways families can help with daily tasks and responsibilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {practicalSupport.map((support, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#2C2C2C]">{support.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] mb-2">Common Tasks:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {support.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mr-3"></div>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] mb-2">Helpful Tips:</h4>
                      <div className="space-y-1">
                        {support.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Caregiver Self-Care */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Caregiver Self-Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can't pour from an empty cup. Taking care of yourself helps you better care for your loved one
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caregiverselfCare.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-2xl mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#2C2C2C]">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {area.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <Alert className="mb-8 border-[#3BAFA9] bg-[#E6F7F5]">
          <Shield className="h-4 w-4 text-[#3BAFA9]" />
          <AlertDescription className="text-[#2C2C2C]">
            <strong>Remember:</strong> Every family is different, and there's no "right" way to handle a cancer diagnosis. Be patient with yourselves and each other as you learn to navigate this journey. Professional family counseling can be invaluable during this time.
          </AlertDescription>
        </Alert>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#3BAFA9] to-[#2E8B8B] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              Families Are Stronger Together
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Our family support specialists understand the unique challenges each family member faces. We're here to help your family navigate this journey with grace, understanding, and unity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#3BAFA9] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Schedule Family Counseling
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3BAFA9] px-8 py-3 rounded-xl"
              >
                Join Family Support Group
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}