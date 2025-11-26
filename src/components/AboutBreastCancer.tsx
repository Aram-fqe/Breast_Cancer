import { Heart, AlertTriangle, Search, Shield, Brain, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutBreastCancerProps {
  setActiveSection?: (section: string) => void;
}

export function AboutBreastCancer({ setActiveSection }: AboutBreastCancerProps) {
  const { t } = useLanguage();

  const earlySignsData = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#E91E63]" />,
      title: t('lumpOrThickening'),
      description: t('lumpDescription')
    },
    {
      icon: <Search className="h-6 w-6 text-[#E91E63]" />,
      title: t('skinChanges'),
      description: t('skinChangesDescription')
    },
    {
      icon: <Shield className="h-6 w-6 text-[#E91E63]" />,
      title: t('nippleChanges'),
      description: t('nippleChangesDescription')
    },
    {
      icon: <Clock className="h-6 w-6 text-[#E91E63]" />,
      title: t('breastSizeChanges'),
      description: t('breastSizeChangesDescription')
    }
  ];

  const riskFactorsData = [
    t('ageRiskFactor'),
    t('familyHistoryRiskFactor'),
    t('geneticMutationsRiskFactor'),
    t('hormoneExposureRiskFactor'),
    t('lifestyleFactorsRiskFactor'),
    t('previousBreastCancerRiskFactor')
  ];

  const statisticsData = [
    {
      number: "1 in 8",
      label: t('womenLifetimeRisk'),
      color: "from-[#E91E63] to-[#FF6F91]"
    },
    {
      number: "99%",
      label: t('fiveYearSurvivalEarly'),
      color: "from-[#3BAFA9] to-[#2E8B8B]"
    },
    {
      number: "2.3M",
      label: t('newCasesAnnually'),
      color: "from-[#C7A4C4] to-[#9575AB]"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
            <Heart className="h-10 w-10 text-white" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('aboutBreastCancerTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutBreastCancerDescription')}
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {statisticsData.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What is Breast Cancer Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl mb-6 text-[#2C2C2C]">
              {t('whatIsBreastCancer')}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t('breastCancerDefinition1')}</p>
              <p>{t('breastCancerDefinition2')}</p>
              <p>{t('breastCancerDefinition3')}</p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => setActiveSection && setActiveSection('screening-info')}
                className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-3 rounded-xl"
              >
                Learn More about Screening
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FDE2E4] to-[#C7A4C4]/30 rounded-3xl transform rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
              alt="Breast cancer awareness"
              className="relative rounded-3xl w-full h-80 object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Early Signs Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('earlySignsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('earlySignsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earlySignsData.map((sign, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FDE2E4] rounded-2xl mb-4 mx-auto">
                    {sign.icon}
                  </div>
                  <CardTitle className="text-lg text-[#2C2C2C]">{sign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{sign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Risk Factors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              {t('riskFactorsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('riskFactorsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskFactorsData.map((factor, index) => (
              <Card key={index} className="border-l-4 border-l-[#E91E63] border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-[#FDE2E4] text-[#E91E63] rounded-full">
                      {index + 1}
                    </Badge>
                    <span className="text-gray-700">{factor}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Awareness Matters Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FDE2E4] to-[#C7A4C4]/20">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6 text-[#2C2C2C]">
              {t('whyAwarenessMatters')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('awarenessImportanceText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-3 rounded-xl">
                {t('scheduleScreening')}
              </Button>
              <Button variant="outline" className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white px-8 py-3 rounded-xl">
                {t('findSupportGroup')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}