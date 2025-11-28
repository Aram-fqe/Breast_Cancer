import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "./LanguageContext";

export function ContactUs() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#E91E63]" />,
      title: t('helplineNumber'),
      info: "1-800-BREAST-CARE",
      description: t('helplineDescription')
    },
    {
      icon: <Mail className="h-6 w-6 text-[#E91E63]" />,
      title: t('emailSupport'),
      info: "support@breastcare.org",
      description: t('emailDescription')
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#E91E63]" />,
      title: t('centerLocations'),
      info: t('findNearestCenter'),
      description: t('centerDescription')
    },
    {
      icon: <Clock className="h-6 w-6 text-[#E91E63]" />,
      title: t('operatingHours'),
      info: "24/7 Emergency Support",
      description: t('hoursDescription')
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
            <Phone className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            {t('contactUsTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('contactUsDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl mb-8 text-[#2C2C2C]">{t('getInTouch')}</h2>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#FDE2E4] rounded-xl flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2C2C2C] mb-1">{contact.title}</h3>
                        <p className="text-[#E91E63] font-medium mb-2">{contact.info}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2C2C2C]">{t('sendMessage')}</CardTitle>
              <p className="text-gray-600">{t('formDescription')}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('firstName')}
                  </label>
                  <Input placeholder={t('firstNamePlaceholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('lastName')}
                  </label>
                  <Input placeholder={t('lastNamePlaceholder')} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailAddress')}
                </label>
                <Input type="email" placeholder={t('emailPlaceholder')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phoneNumber')}
                </label>
                <Input type="tel" placeholder={t('phonePlaceholder')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <Input placeholder={t('subjectPlaceholder')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <Textarea 
                  placeholder={t('messagePlaceholder')} 
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white py-3">
                {t('sendMessage')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}