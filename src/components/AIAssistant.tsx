import { useState } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

const sampleQuestions = [
  "What are the early signs of breast cancer?",
  "How often should I get a mammogram?",
  "What lifestyle changes can reduce my risk?",
  "I found a lump, what should I do?"
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI health assistant. I can help answer questions about breast health, screening guidelines, and provide general health information. How can I help you today?",
      isBot: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your question. Based on current medical guidelines, I recommend consulting with a healthcare professional for personalized advice. Would you like me to help you find specialists in your area?",
          isBot: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuestionClick = (question: string) => {
    setMessage(question);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#FFB6C1] hover:bg-[#FF91A4] text-white rounded-full p-4 shadow-lg z-50 h-14 w-14"
        aria-label="Open AI Assistant"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-end p-4">
          <Card className="w-full md:w-96 h-[600px] md:h-[500px] flex flex-col md:mr-6 md:mb-6">
            <CardHeader className="bg-[#FFB6C1] text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>AI Health Assistant</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <Badge className="bg-white/20 text-white w-fit">
                Available 24/7
              </Badge>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Quick Questions */}
              <div className="p-4 border-b bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                <div className="space-y-1">
                  {sampleQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="text-xs text-[#FFB6C1] hover:text-[#FF91A4] hover:underline block text-left"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.isBot
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-[#FFB6C1] text-white'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about breast health..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-[#FFB6C1] hover:bg-[#FF91A4] text-white px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ⚠️ For medical emergencies, please call 911 or contact your doctor immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}