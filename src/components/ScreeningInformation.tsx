import { Search, Calendar, Target, Users, Clock, AlertCircle, CheckCircle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ScreeningInformation() {
  const screeningMethods = [
    {
      id: 'mammogram',
      title: 'Mammogram',
      icon: Search,
      description: 'X-ray examination of the breast to detect abnormalities',
      details: 'A mammogram is the gold standard for breast cancer screening. It can detect cancer up to 2 years before it can be felt.',
      ageRecommendation: 'Starting at age 40-50, annually',
      pros: [
        'Can detect cancer before it can be felt',
        'Widely available and covered by insurance',
        'Quick procedure (15-20 minutes)',
        'Proven to reduce breast cancer mortality'
      ],
      cons: [
        'May cause discomfort during compression',
        'Radiation exposure (very low dose)',
        'May miss some cancers in dense breast tissue',
        'Can have false positives'
      ],
      preparation: [
        'Schedule for the week after your period',
        'Avoid deodorant, powder, or lotion on breasts',
        'Wear a two-piece outfit for easy undressing',
        'Bring previous mammogram films if available'
      ]
    },
    {
      id: 'ultrasound',
      title: 'Breast Ultrasound',
      icon: Activity,
      description: 'Uses sound waves to create images of breast tissue',
      details: 'Ultrasound is often used as a supplemental screening tool, especially for women with dense breast tissue.',
      ageRecommendation: 'As recommended by healthcare provider',
      pros: [
        'No radiation exposure',
        'Good for evaluating dense breast tissue',
        'Can distinguish between solid masses and cysts',
        'Comfortable procedure'
      ],
      cons: [
        'May miss small calcifications',
        'Operator dependent',
        'Not typically used as primary screening method',
        'May lead to additional testing'
      ],
      preparation: [
        'No special preparation required',
        'Wear comfortable, two-piece clothing',
        'Remove jewelry from neck and chest area'
      ]
    },
    {
      id: 'mri',
      title: 'Breast MRI',
      icon: Target,
      description: 'Magnetic resonance imaging for detailed breast images',
      details: 'MRI is typically recommended for high-risk women or those with genetic mutations like BRCA1/BRCA2.',
      ageRecommendation: 'For high-risk women, starting at age 25-30',
      pros: [
        'Most sensitive screening method',
        'No radiation exposure',
        'Excellent for high-risk women',
        'Can detect cancer in both breasts simultaneously'
      ],
      cons: [
        'More expensive than mammography',
        'Requires contrast injection',
        'Higher false positive rate',
        'Not suitable for all women (claustrophobia, metal implants)'
      ],
      preparation: [
        'Schedule during specific menstrual cycle days',
        'Fast before contrast injection',
        'Remove all metal objects',
        'Inform technologist of any allergies'
      ]
    },
    {
      id: 'self-exam',
      title: 'Breast Self-Examination',
      icon: Users,
      description: 'Monthly self-examination to check for changes',
      details: 'While not a replacement for professional screening, self-exams help you become familiar with your breasts.',
      ageRecommendation: 'Starting at age 20, monthly',
      pros: [
        'Free and can be done at home',
        'Helps you know your normal breast tissue',
        'Can detect changes between screenings',
        'Empowers women to take charge of their health'
      ],
      cons: [
        'Cannot replace professional screening',
        'May cause anxiety if abnormalities are felt',
        'Requires proper technique',
        'Less effective than professional screening'
      ],
      preparation: [
        'Best done 3-5 days after menstruation',
        'Use mirror and comfortable lighting',
        'Examine in standing and lying positions',
        'Use different pressure levels'
      ]
    }
  ];

  const ageGroups = [
    {
      age: '20-39',
      title: 'Twenties & Thirties',
      recommendations: [
        'Monthly breast self-exams',
        'Clinical breast exam every 3 years',
        'Be aware of family history',
        'Consider genetic counseling if family history is present'
      ],
      riskFactors: 'Lower overall risk, but important to establish baseline awareness'
    },
    {
      age: '40-49',
      title: 'Forties',
      recommendations: [
        'Annual mammograms (discuss timing with doctor)',
        'Continue monthly self-exams',
        'Annual clinical breast exams',
        'Consider additional screening if high-risk'
      ],
      riskFactors: 'Risk begins to increase; mammography becomes more effective'
    },
    {
      age: '50-69',
      title: 'Fifties & Sixties',
      recommendations: [
        'Annual mammograms',
        'Continue self-exams',
        'Clinical breast exams with mammography',
        'Consider bone density screening'
      ],
      riskFactors: 'Peak risk years; regular screening is most important'
    },
    {
      age: '70+',
      title: 'Seventies & Beyond',
      recommendations: [
        'Continue screening if life expectancy > 10 years',
        'Discuss benefits vs. risks with doctor',
        'Consider individual health status',
        'Maintain awareness of breast changes'
      ],
      riskFactors: 'Risk remains high but screening decisions become more individualized'
    }
  ];

  const benefits = [
    {
      title: 'Early Detection',
      description: 'Screening can find cancer 2-3 years before symptoms appear',
      impact: '99% survival rate when caught early'
    },
    {
      title: 'Reduced Mortality',
      description: 'Regular mammography reduces breast cancer death risk',
      impact: '20-40% reduction in mortality'
    },
    {
      title: 'Treatment Options',
      description: 'Earlier detection often means less aggressive treatment needed',
      impact: 'More treatment options available'
    },
    {
      title: 'Peace of Mind',
      description: 'Regular screening provides reassurance and early intervention',
      impact: 'Reduced anxiety about breast health'
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Search className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Breast Cancer Screening Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive information about breast cancer screening methods, benefits of early detection, and age-specific recommendations to help you make informed decisions about your breast health.
          </p>
        </div>

        {/* Benefits of Early Detection */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Benefits of Early Detection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early detection through regular screening dramatically improves outcomes and survival rates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <Badge className="bg-[#3BAFA9] text-white text-xs">
                    {benefit.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Screening Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Screening Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about different screening methods and when they're recommended
            </p>
          </div>

          <Tabs defaultValue="mammogram" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {screeningMethods.map((method) => (
                <TabsTrigger key={method.id} value={method.id} className="flex items-center space-x-2">
                  <method.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{method.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {screeningMethods.map((method) => (
              <TabsContent key={method.id} value={method.id}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl">
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-[#2C2C2C]">{method.title}</CardTitle>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#E91E63]" />
                      <Badge variant="outline" className="border-[#E91E63] text-[#E91E63]">
                        {method.ageRecommendation}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">{method.details}</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#3BAFA9] mr-2" />
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {method.pros.map((pro, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <AlertCircle className="h-4 w-4 text-[#FF6F91] mr-2" />
                          Considerations
                        </h4>
                        <ul className="space-y-2">
                          {method.cons.map((con, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#FF6F91] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <Clock className="h-4 w-4 text-[#C7A4C4] mr-2" />
                          Preparation
                        </h4>
                        <ul className="space-y-2">
                          {method.preparation.map((prep, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {prep}
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

        {/* Age-Specific Recommendations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Age-Specific Screening Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Screening recommendations vary by age group and individual risk factors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-[#2C2C2C]">{group.title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] text-white">
                      Ages {group.age}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{group.riskFactors}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-[#2C2C2C] mb-3">Recommended Screening:</h4>
                  <ul className="space-y-2">
                    {group.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <Alert className="mb-8 border-[#E91E63] bg-[#FDE2E4]/50">
          <AlertCircle className="h-4 w-4 text-[#E91E63]" />
          <AlertDescription className="text-[#2C2C2C]">
            <strong>Important:</strong> These are general guidelines. Your healthcare provider may recommend different screening schedules based on your individual risk factors, family history, and personal health status. Always consult with your healthcare team for personalized recommendations.
          </AlertDescription>
        </Alert>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#3BAFA9] to-[#2E8B8B] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              Ready to Schedule Your Screening?
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Don't wait - early detection saves lives. Schedule your mammogram or consultation with one of our experienced specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#3BAFA9] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Schedule Appointment
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3BAFA9] px-8 py-3 rounded-xl"
              >
                Contact Our Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}