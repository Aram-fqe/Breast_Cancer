import { Phone, Users, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function ResourcesSupport() {
  const { t } = useLanguage();

  const supportTypes = [
    {
      icon: <Phone className="h-6 w-6 text-[#E91E63]" />,
      title: t('helplines'),
      description: t('helplinesDescription')
    },
    {
      icon: <Users className="h-6 w-6 text-[#E91E63]" />,
      title: t('supportGroups'),
      description: t('supportGroupsDescription')
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-[#E91E63]" />,
      title: t('counseling'),
      description: t('counselingDescription')
    },
    {
      icon: <Heart className="h-6 w-6 text-[#E91E63]" />,
      title: t('ngosSupport'),
      description: t('ngosSupportDescription')
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-3xl mb-6 shadow-xl">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('resourcesSupportTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('resourcesSupportDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {supportTypes.map((support, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl">
                    {support.icon}
                  </div>
                  <CardTitle className="text-xl text-[#2C2C2C]">{support.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">{support.description}</p>
                <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] text-white">
                  {t('getSupport')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}