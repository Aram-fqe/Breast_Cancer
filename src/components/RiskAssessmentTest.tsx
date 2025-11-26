import { useState } from "react";
import { ClipboardList, AlertTriangle, CheckCircle, Info, Calendar, Users, Activity, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";

type Question = {
  id: string;
  question: string;
  options: { value: string; label: string; points: number }[];
  category: 'age' | 'family' | 'personal' | 'lifestyle';
};

export function RiskAssessmentTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions: Question[] = [
    {
      id: 'age',
      question: 'What is your current age?',
      category: 'age',
      options: [
        { value: 'under30', label: 'Under 30', points: 0 },
        { value: '30-39', label: '30-39', points: 1 },
        { value: '40-49', label: '40-49', points: 2 },
        { value: '50-59', label: '50-59', points: 3 },
        { value: '60-69', label: '60-69', points: 4 },
        { value: '70plus', label: '70 or older', points: 5 }
      ]
    },
    {
      id: 'family_history',
      question: 'Do you have a family history of breast or ovarian cancer?',
      category: 'family',
      options: [
        { value: 'none', label: 'No family history', points: 0 },
        { value: 'distant', label: 'Distant relative (aunt, cousin)', points: 1 },
        { value: 'second_degree', label: 'Second-degree relative (grandmother, aunt)', points: 2 },
        { value: 'first_degree', label: 'First-degree relative (mother, sister, daughter)', points: 4 },
        { value: 'multiple', label: 'Multiple relatives with breast/ovarian cancer', points: 6 }
      ]
    },
    {
      id: 'genetic_testing',
      question: 'Have you had genetic testing for BRCA1/BRCA2 mutations?',
      category: 'personal',
      options: [
        { value: 'not_tested', label: 'No, I have not been tested', points: 0 },
        { value: 'negative', label: 'Yes, tested negative', points: 0 },
        { value: 'positive', label: 'Yes, tested positive for BRCA mutation', points: 10 },
        { value: 'variant', label: 'Yes, have a variant of uncertain significance', points: 2 }
      ]
    },
    {
      id: 'personal_history',
      question: 'Have you had any previous breast problems?',
      category: 'personal',
      options: [
        { value: 'none', label: 'No previous breast problems', points: 0 },
        { value: 'benign', label: 'Benign breast disease (fibroadenoma, cysts)', points: 1 },
        { value: 'atypia', label: 'Atypical hyperplasia or lobular carcinoma in situ', points: 3 },
        { value: 'cancer', label: 'Previous breast cancer', points: 8 }
      ]
    },
    {
      id: 'menstrual_history',
      question: 'At what age did you start menstruating?',
      category: 'personal',
      options: [
        { value: 'late', label: '14 or older', points: 0 },
        { value: 'normal', label: '12-13 years old', points: 1 },
        { value: 'early', label: 'Before age 12', points: 2 }
      ]
    },
    {
      id: 'pregnancy_history',
      question: 'What is your pregnancy history?',
      category: 'personal',
      options: [
        { value: 'young_first', label: 'First child before age 30', points: 0 },
        { value: 'older_first', label: 'First child after age 30', points: 1 },
        { value: 'no_children', label: 'Never had children', points: 2 }
      ]
    },
    {
      id: 'hormone_therapy',
      question: 'Have you used hormone replacement therapy (HRT)?',
      category: 'lifestyle',
      options: [
        { value: 'never', label: 'Never used HRT', points: 0 },
        { value: 'short_term', label: 'Used HRT for less than 5 years', points: 1 },
        { value: 'long_term', label: 'Used HRT for 5 years or more', points: 2 }
      ]
    },
    {
      id: 'alcohol_consumption',
      question: 'How much alcohol do you typically consume?',
      category: 'lifestyle',
      options: [
        { value: 'none', label: 'I don\'t drink alcohol', points: 0 },
        { value: 'occasional', label: '1-3 drinks per week', points: 0 },
        { value: 'moderate', label: '4-7 drinks per week', points: 1 },
        { value: 'heavy', label: 'More than 7 drinks per week', points: 2 }
      ]
    },
    {
      id: 'physical_activity',
      question: 'How physically active are you?',
      category: 'lifestyle',
      options: [
        { value: 'very_active', label: 'Very active (exercise 5+ times/week)', points: -1 },
        { value: 'moderately_active', label: 'Moderately active (exercise 2-4 times/week)', points: 0 },
        { value: 'somewhat_active', label: 'Somewhat active (exercise 1 time/week)', points: 1 },
        { value: 'sedentary', label: 'Sedentary (little to no exercise)', points: 2 }
      ]
    },
    {
      id: 'weight_status',
      question: 'How would you describe your current weight status?',
      category: 'lifestyle',
      options: [
        { value: 'underweight', label: 'Underweight', points: 0 },
        { value: 'normal', label: 'Normal weight', points: 0 },
        { value: 'overweight', label: 'Overweight', points: 1 },
        { value: 'obese', label: 'Obese', points: 2 }
      ]
    }
  ];

  const getRiskLevel = (score: number) => {
    if (score <= 3) return { level: 'Low', color: 'from-[#3BAFA9] to-[#2E8B8B]', description: 'Your risk factors suggest a lower than average risk for breast cancer.' };
    if (score <= 8) return { level: 'Average', color: 'from-[#FF6F91] to-[#FF8E9B]', description: 'Your risk factors suggest an average risk for breast cancer.' };
    if (score <= 15) return { level: 'Elevated', color: 'from-[#E91E63] to-[#C2185B]', description: 'Your risk factors suggest an elevated risk for breast cancer.' };
    return { level: 'High', color: 'from-[#C2185B] to-[#AD1457]', description: 'Your risk factors suggest a higher than average risk for breast cancer.' };
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let score = 0;
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          score += option.points;
        }
      }
    });
    setTotalScore(score);
    setShowResults(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setTotalScore(0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (showResults) {
    const riskData = getRiskLevel(totalScore);
    
    return (
      <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl mb-6 text-[#2C2C2C]">
                Your Risk Assessment Results
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your responses, here's your personalized breast cancer risk assessment and recommendations.
              </p>
            </div>

            {/* Risk Level Card */}
            <Card className="border-0 shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${riskData.color} rounded-full mb-6 shadow-lg`}>
                    <span className="text-4xl font-bold text-white">{riskData.level}</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-[#2C2C2C] mb-4">
                    {riskData.level} Risk Level
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                    {riskData.description}
                  </p>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Assessment Score: {totalScore} points
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#2C2C2C]">
                    <Calendar className="h-6 w-6 text-[#E91E63]" />
                    <span>Recommended Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskData.level === 'Low' && (
                      <>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                          <span>Continue regular self-exams monthly</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                          <span>Start annual mammograms at age 40</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                          <span>Maintain healthy lifestyle habits</span>
                        </div>
                      </>
                    )}
                    {riskData.level === 'Average' && (
                      <>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#FF6F91] rounded-full mt-2"></div>
                          <span>Regular self-exams and clinical exams</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#FF6F91] rounded-full mt-2"></div>
                          <span>Annual mammograms starting at age 40</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#FF6F91] rounded-full mt-2"></div>
                          <span>Discuss family history with your doctor</span>
                        </div>
                      </>
                    )}
                    {(riskData.level === 'Elevated' || riskData.level === 'High') && (
                      <>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                          <span>Consider earlier and more frequent screening</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                          <span>Discuss genetic counseling with your doctor</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                          <span>Consider additional screening methods (MRI, ultrasound)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                          <span>Consult with a breast cancer specialist</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#2C2C2C]">
                    <Heart className="h-6 w-6 text-[#E91E63]" />
                    <span>Lifestyle Recommendations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                      <span>Maintain a healthy weight through diet and exercise</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                      <span>Limit alcohol consumption</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                      <span>Exercise regularly (at least 150 minutes/week)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                      <span>Eat a balanced diet rich in fruits and vegetables</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mt-2"></div>
                      <span>Avoid smoking and limit exposure to radiation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Important Disclaimer */}
            <Alert className="mb-8 border-[#E91E63] bg-[#FDE2E4]/50">
              <AlertTriangle className="h-4 w-4 text-[#E91E63]" />
              <AlertDescription className="text-[#2C2C2C]">
                <strong>Important:</strong> This assessment is for educational purposes only and should not replace professional medical advice. Please consult with your healthcare provider to discuss your personal risk factors and appropriate screening recommendations.
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-3 rounded-xl"
                >
                  Schedule Screening Appointment
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white px-8 py-3 rounded-xl"
                >
                  Learn More About Screening
                </Button>
              </div>
              <Button 
                variant="ghost"
                onClick={resetTest}
                className="text-gray-600 hover:text-[#E91E63]"
              >
                Take Assessment Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
              <ClipboardList className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
              Breast Cancer Risk Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Answer these questions to get a personalized assessment of your breast cancer risk factors and receive tailored recommendations.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm text-gray-600">{currentQuestion + 1} of {questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-xl mb-8">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="secondary" className="bg-[#E91E63] text-white px-3 py-1">
                  Question {currentQuestion + 1}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {questions[currentQuestion].category}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-[#2C2C2C] leading-relaxed">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={currentAnswer || ''}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer p-4 rounded-lg hover:bg-[#FDE2E4]/30 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-8 py-3 rounded-xl"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-3 rounded-xl"
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            </Button>
          </div>

          {/* Information Alert */}
          <Alert className="mt-8 border-[#3BAFA9] bg-[#E6F7F5]">
            <Info className="h-4 w-4 text-[#3BAFA9]" />
            <AlertDescription className="text-[#2C2C2C]">
              This assessment considers multiple risk factors but cannot predict who will develop breast cancer. It's designed to help you and your healthcare provider make informed decisions about screening and prevention.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}