import { Stethoscope, Zap, Shield, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function TreatmentOptions() {
  const { t } = useLanguage();

  const treatmentTypes = [
    {
      icon: <Stethoscope className="h-6 w-6 text-[#E91E63]" />,
      title: t('surgery'),
      description: t('surgeryDescription')
    },
    {
      icon: <Zap className="h-6 w-6 text-[#E91E63]" />,
      title: t('chemotherapy'),
      description: t('chemotherapyDescription')
    },
    {
      icon: <Shield className="h-6 w-6 text-[#E91E63]" />,
      title: t('radiation'),
      description: t('radiationDescription')
    },
    {
      icon: <Heart className="h-6 w-6 text-[#E91E63]" />,
      title: t('targetedTherapy'),
      description: t('targetedTherapyDescription')
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
            <Stethoscope className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('treatmentOptionsTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('treatmentOptionsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {treatmentTypes.map((treatment, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl">
                    {treatment.icon}
                  </div>
                  <CardTitle className="text-xl text-[#2C2C2C]">{treatment.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">{treatment.description}</p>
                <Button variant="outline" className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white">
                  {t('learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}