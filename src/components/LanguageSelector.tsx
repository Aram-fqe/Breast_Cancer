import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as const, name: 'Deutsch', flag: '🇩🇪' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative group">
      <Button 
        variant="ghost" 
        size="sm" 
        className="hover:bg-[#FDE2E4] text-[#2C2C2C] flex items-center space-x-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{currentLanguage?.code.toUpperCase()}</span>
      </Button>
      
      {/* Language Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-lg border border-[#FDE2E4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2 space-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-[#FDE2E4] rounded-lg transition-colors flex items-center space-x-2 ${
                language === lang.code ? 'bg-[#FDE2E4] text-[#E91E63]' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}