import { Phone, Mail, MapPin, Heart, Calendar, Users, Book, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] text-white">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-white" />
              <span className="font-semibold">24/7 Crisis Support Hotline</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:1-800-227-2345" className="text-xl font-bold hover:underline">
                1-800-227-2345
              </a>
              <Badge className="bg-white/20 text-white">
                Free & Confidential
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand & Mission */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-[#E91E63] to-[#FF6F91] p-3 rounded-2xl">
                  <Heart className="h-7 w-7 text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BreastCare</h3>
                  <p className="text-gray-400">Awareness & Support</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering women with knowledge, support, and resources for early detection 
                and comprehensive breast cancer care. Together, we fight for awareness and healing.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm" 
                  className="bg-[#E91E63] hover:bg-[#C2185B] text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Screening
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6F91] transition-colors group">
                    <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>Schedule Appointment</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6F91] transition-colors group">
                    <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>Find Support Groups</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6F91] transition-colors group">
                    <Book className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>Educational Resources</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6F91] transition-colors group">
                    <HelpCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>Risk Assessment</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Self-Exam Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Screening Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Treatment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Survivor Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Myths vs Facts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF6F91] transition-colors">
                    Latest Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Community */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get Support</h4>
              
              {/* Support Lines */}
              <div className="space-y-4">
                <div className="bg-[#E91E63]/10 p-4 rounded-xl border border-[#E91E63]/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4 text-[#FF6F91]" />
                    <span className="font-medium text-white">Crisis Helpline</span>
                  </div>
                  <p className="text-[#FF6F91] font-mono text-lg">1-800-227-2345</p>
                  <p className="text-xs text-gray-400">24/7 Support Available</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-4 w-4 text-[#3BAFA9]" />
                    <span>support@breastcare.org</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="h-4 w-4 text-[#C7A4C4]" />
                    <span>Find Local Centers</span>
                  </div>
                </div>
              </div>

              {/* Community Forums */}
              <div className="bg-[#3BAFA9]/10 p-4 rounded-xl border border-[#3BAFA9]/20">
                <h5 className="font-medium text-white mb-2">Community Forums</h5>
                <p className="text-sm text-gray-300 mb-3">
                  Connect with others, share experiences, and find support
                </p>
                <Button 
                  size="sm" 
                  className="bg-[#3BAFA9] hover:bg-[#359B95] text-white w-full"
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 BreastCare. This platform provides educational information only.
              </p>
              <p className="text-sm text-gray-500">
                Always consult with healthcare professionals for medical advice and treatment.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FF6F91] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F91] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F91] transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F91] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}