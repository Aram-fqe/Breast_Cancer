import { Shield, Calendar, Search, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function PreventionScreening() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('preventionScreeningTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('preventionScreeningDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-[#E91E63]" />
              </div>
              <CardTitle className="text-center">{t('regularScreenings')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{t('regularScreeningsDescription')}</p>
              <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] text-white">
                {t('scheduleScreening')}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl mb-4 mx-auto">
                <Search className="h-6 w-6 text-[#E91E63]" />
              </div>
              <CardTitle className="text-center">{t('selfExamination')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{t('selfExaminationDescription')}</p>
              <Button variant="outline" className="border-[#E91E63] text-[#E91E63]">
                {t('learnSelfExam')}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl mb-4 mx-auto">
                <Heart className="h-6 w-6 text-[#E91E63]" />
              </div>
              <CardTitle className="text-center">{t('healthyLifestyle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{t('healthyLifestyleDescription')}</p>
              <Button variant="outline" className="border-[#E91E63] text-[#E91E63]">
                {t('lifestyleTips')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}