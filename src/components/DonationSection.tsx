import { Heart, Users, Shield, Microscope, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const donationImpacts = [
  {
    icon: Microscope,
    title: "Research Funding",
    description: "Supporting breakthrough research for better treatments and potential cures",
    amount: "$100",
    impact: "Funds 1 hour of laboratory research",
    color: "from-[#E91E63] to-[#FF6F91]",
    bgColor: "bg-[#FDE2E4]"
  },
  {
    icon: Users,
    title: "Patient Support",
    description: "Providing direct assistance to patients and their families during treatment",
    amount: "$50",
    impact: "Provides a care package for 1 patient",
    color: "from-[#3BAFA9] to-[#4ECDC4]",
    bgColor: "bg-[#E6F7F5]"
  },
  {
    icon: Shield,
    title: "Screening Programs",
    description: "Making early detection accessible to underserved communities",
    amount: "$25",
    impact: "Sponsors 1 mammogram screening",
    color: "from-[#C7A4C4] to-[#D8BFD8]",
    bgColor: "bg-[#F5F0F5]"
  }
];

const achievements = [
  { label: "Patients Helped", value: "15,432", progress: 78 },
  { label: "Research Studies", value: "127", progress: 64 },
  { label: "Screenings Funded", value: "8,945", progress: 89 },
];

export function DonationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FDE2E4]/20 via-white to-[#C7A4C4]/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#E91E63] to-[#FF6F91] rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" fill="currentColor" />
          </div>
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly supports breast cancer patients, funds vital research, 
            and helps provide life-saving screenings to those who need them most.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donationImpacts.map((impact, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E91E63]/20 group">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 ${impact.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <impact.icon className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle className="text-xl mb-2">{impact.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {impact.description}
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className={`inline-block bg-gradient-to-r ${impact.color} text-white px-6 py-2 rounded-full font-semibold text-lg`}>
                  {impact.amount}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {impact.impact}
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] hover:shadow-lg text-white transition-all duration-200"
                >
                  Donate {impact.amount}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <Card className="mb-12 bg-gradient-to-r from-white to-[#FDE2E4]/30 border-[#E91E63]/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-[#2C2C2C] mb-8">
              Our Impact This Year
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="text-3xl font-bold text-[#E91E63]">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                  <Progress 
                    value={achievement.progress} 
                    className="h-2 bg-gray-200"
                  />
                  <div className="text-sm text-gray-500">
                    {achievement.progress}% of annual goal
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Custom Donation */}
        <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
                Choose Your Impact
              </h3>
              <p className="text-gray-600">
                Every donation, no matter the size, makes a meaningful difference in the fight against breast cancer.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["$25", "$50", "$100", "$250"].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="py-3 border-[#E91E63]/30 hover:bg-gradient-to-r hover:from-[#E91E63] hover:to-[#FF6F91] hover:text-white hover:border-[#E91E63] transition-all duration-200"
                  >
                    {amount}
                  </Button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Or enter custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-[#E91E63]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div className="flex items-center justify-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="frequency" value="once" defaultChecked className="text-[#E91E63]" />
                  <span>One-time</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="frequency" value="monthly" className="text-[#E91E63]" />
                  <span>Monthly</span>
                  <Badge className="bg-[#3BAFA9] text-white text-xs">More Impact</Badge>
                </label>
              </div>

              {/* Trust Indicators */}
              <div className="bg-[#F8F9FA] p-4 rounded-xl">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-[#3BAFA9]" />
                    <span>Secure Donation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-[#3BAFA9]" />
                    <span>Tax Deductible</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-[#3BAFA9]" />
                    <span>Direct Impact</span>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                Donate Now
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Your donation is processed securely and 100% goes toward breast cancer support programs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}