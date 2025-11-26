import { Bell, Heart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "./LanguageContext";

interface HeaderProps {
  setActiveSection: (section: string) => void;
}

export function Header({ setActiveSection }: HeaderProps) {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#FDE2E4] shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] p-3 rounded-2xl shadow-lg">
                <Heart className="h-7 w-7 text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FDE2E4] rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#2C2C2C]">BreastCare</h1>
              <p className="text-sm text-gray-600">Awareness & Support</p>
            </div>
          </div>

          {/* Tagline - Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="bg-gradient-to-r from-[#FDE2E4] to-[#C7A4C4]/20 px-6 py-3 rounded-full border border-[#FDE2E4]">
              <h2 className="text-lg font-medium text-[#E91E63] text-center">
                "{t('tagline')}"
              </h2>
            </div>
          </div>

          {/* Language, Donate & Profile */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            {/* Donate Button */}
            <Button 
              onClick={() => setActiveSection('donate')}
              className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hidden sm:flex"
            >
              <Heart className="h-4 w-4 mr-2" fill="currentColor" />
              {t('donate')}
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              className="relative hover:bg-[#FDE2E4] text-[#2C2C2C]"
            >
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#E91E63] text-white text-xs flex items-center justify-center p-0">
                2
              </Badge>
            </Button>
            
            <Avatar className="h-10 w-10 ring-2 ring-[#FDE2E4]">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] text-white">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}