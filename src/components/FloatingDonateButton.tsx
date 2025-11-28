import { useState } from "react";
import { Heart, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function FloatingDonateButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 w-80 shadow-2xl border-0 bg-white animate-in slide-in-from-bottom-2 duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#2C2C2C]">Quick Donate</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-6 w-6 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Support breast cancer research and patient care
            </p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["$25", "$50", "$100", "$250"].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  className="border-[#E91E63]/30 hover:bg-gradient-to-r hover:from-[#E91E63] hover:to-[#FF6F91] hover:text-white hover:border-[#E91E63] transition-all duration-200"
                >
                  {amount}
                </Button>
              ))}
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white"
            >
              <Heart className="h-4 w-4 mr-2" fill="currentColor" />
              Donate Now
            </Button>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full w-14 h-14 shadow-2xl bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white transition-all duration-200 ${
          isExpanded ? 'scale-90' : 'hover:scale-110'
        }`}
      >
        <Heart className="h-6 w-6" fill="currentColor" />
      </Button>
    </div>
  );
}