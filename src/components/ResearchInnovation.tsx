import { Brain, Microscope, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function ResearchInnovation() {
  const { t } = useLanguage();

  const researchAreas = [
    {
      icon: <Brain className="h-6 w-6 text-[#E91E63]" />,
      title: t('aiDetection'),
      description: t('aiDetectionDescription')
    },
    {
      icon: <Microscope className="h-6 w-6 text-[#E91E63]" />,
      title: t('latestStudies'),
      description: t('latestStudiesDescription')
    },
    {
      icon: <Zap className="h-6 w-6 text-[#E91E63]" />,
      title: t('newTreatments'),
      description: t('newTreatmentsDescription')
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#E91E63]" />,
      title: t('clinicalTrials'),
      description: t('clinicalTrialsDescription')
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('researchInnovationTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('researchInnovationDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((research, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl">
                    {research.icon}
                  </div>
                  <CardTitle className="text-xl text-[#2C2C2C]">{research.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">{research.description}</p>
                <Button variant="outline" className="border-[#3BAFA9] text-[#3BAFA9] hover:bg-[#3BAFA9] hover:text-white">
                  {t('readMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}