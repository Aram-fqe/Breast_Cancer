import { Calendar, TestTube, FileText, Bot } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const actions = [
  {
    id: 1,
    title: "Book Appointment",
    description: "Schedule with specialists",
    icon: Calendar,
    emoji: "🩺",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Health Checkups",
    description: "Regular screening schedules",
    icon: TestTube,
    emoji: "🧪",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    title: "Test & Results",
    description: "View your medical reports",
    icon: FileText,
    emoji: "📊",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Ask AI Assistant",
    description: "Get instant health guidance",
    icon: Bot,
    emoji: "🤖",
    color: "bg-pink-50 border-[#FFB6C1]",
    iconColor: "text-[#FFB6C1]"
  }
];

export function QuickActionCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Quick Actions</h2>
        <p className="text-gray-600">Access your most-used features instantly</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action) => (
          <Card 
            key={action.id} 
            className={`${action.color} hover:shadow-lg transition-all duration-200 cursor-pointer group border-2`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <span className="text-3xl mb-2 block">{action.emoji}</span>
                  <action.icon className={`h-6 w-6 ${action.iconColor} absolute -bottom-1 -right-1 bg-white rounded-full p-1`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group-hover:bg-white/50 w-full"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}