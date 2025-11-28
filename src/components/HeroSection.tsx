import { Search, Heart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDE2E4] via-white to-[#C7A4C4]/10"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] leading-tight">
                {t('heroTitle')} 
                <span className="text-[#E91E63] block">{t('heroTitleAccent')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('heroDescription')}
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#FF6F91] rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-[#FDE2E4]">
                <div className="flex items-center">
                  <Search className="h-6 w-6 text-[#E91E63] ml-4 mr-3" />
                  <Input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    className="flex-1 border-0 bg-transparent text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                  />
                  <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white rounded-xl px-6 py-3 shadow-lg">
                    {t('search')}
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E91E63]">1 in 8</div>
                <div className="text-sm text-gray-600">{t('womenAffected')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3BAFA9]">99%</div>
                <div className="text-sm text-gray-600">{t('survivalRate')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C7A4C4]">40+</div>
                <div className="text-sm text-gray-600">{t('startScreening')}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-[#FF6F91]/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1598884143267-586d90a32141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJyZWFzdCUyMGNhbmNlciUyMHN1cHBvcnQlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzU4NzQzMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Women supporting each other in breast cancer awareness"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#3BAFA9] text-white p-3 rounded-full shadow-lg">
              <Heart className="h-6 w-6" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#C7A4C4] text-white p-2 rounded-full shadow-lg">
              <div className="w-8 h-8 flex items-center justify-center text-sm font-bold">💪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}