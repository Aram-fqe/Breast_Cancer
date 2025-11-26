import { useLanguage } from "./LanguageContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('aboutBreastCancer') },
    { id: 'schedule', label: 'Your Schedule' },
    { id: 'educational', label: t('educationalHub') },
    { id: 'living', label: t('livingWithBreastCancer') },
    { id: 'prevention', label: t('preventionScreening') },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close menu on mobile when item is clicked
  };

  return (
    <nav className="sticky top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-[#FDE2E4] shadow-sm">
      <div className="container mx-auto px-6">
        {/* Desktop Navigation - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-4 whitespace-nowrap transition-all duration-200 border-b-2 rounded-t-lg ${
                  activeSection === item.id
                    ? 'border-[#E91E63] text-[#E91E63] bg-[#FDE2E4]/30'
                    : 'border-transparent text-gray-600 hover:text-[#E91E63] hover:border-[#FF6F91]/30 hover:bg-[#FDE2E4]/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Navigation - Hamburger Menu */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-[#E91E63]">Menu</span>
          
          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#FDE2E4]/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#E91E63]" />
            ) : (
              <Menu className="w-6 h-6 text-[#E91E63]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#FDE2E4] bg-gradient-to-r from-[#FDE2E4] to-white">
          <h2 className="text-[#E91E63]">Navigation</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-white/80 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-[#E91E63]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-4 px-3">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-6 py-4 my-1 rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-[#E91E63] text-white shadow-md shadow-[#E91E63]/30'
                  : 'text-gray-700 hover:bg-[#FDE2E4] hover:text-[#E91E63] hover:shadow-sm'
              }`}
            >
              <span className={activeSection === item.id ? '' : ''}>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#FDE2E4] bg-gradient-to-r from-white to-[#FDE2E4]">
          <p className="text-gray-500 text-center text-sm">
            Breast Cancer Awareness & Care
          </p>
        </div>
      </div>
    </nav>
  );
}