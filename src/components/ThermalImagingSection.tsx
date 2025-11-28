import { useState, useRef } from "react";
import { Upload, Camera, Scan, CheckCircle, AlertTriangle, AlertCircle, Info, Shield, Calendar, MessageCircle, Eye, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useLanguage } from "./LanguageContext";

type RiskLevel = 'clear' | 'suspicious' | 'high-risk' | null;

interface AnalysisResult {
  riskLevel: RiskLevel;
  confidence: number;
  detectedRegions?: Array<{ x: number; y: number; width: number; height: number }>;
  recommendations: string[];
}

export function ThermalImagingSection() {
  const { t } = useLanguage();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingSteps = [
    "Initializing YOLOv11 model...",
    "Processing thermal signature...",
    "Running EfficientNet analysis...",
    "Applying EPSO optimization...",
    "Generating results..."
  ];

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        simulateAIProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAIProcessing = async () => {
    setIsProcessing(true);
    setProcessingStep(0);
    setAnalysisResult(null);

    for (let i = 0; i < processingSteps.length; i++) {
      setProcessingStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Simulate different results (in real app, this would be actual AI analysis)
    const mockResults: AnalysisResult[] = [
      {
        riskLevel: 'clear',
        confidence: 94,
        recommendations: [
          "Continue regular screenings",
          "Maintain healthy lifestyle",
          "Schedule next screening in 12 months"
        ]
      },
      {
        riskLevel: 'suspicious',
        confidence: 76,
        detectedRegions: [{ x: 120, y: 80, width: 40, height: 35 }],
        recommendations: [
          "Schedule professional mammogram within 2 weeks",
          "Consult with healthcare provider",
          "Monitor any physical changes"
        ]
      },
      {
        riskLevel: 'high-risk',
        confidence: 88,
        detectedRegions: [
          { x: 110, y: 75, width: 50, height: 45 },
          { x: 180, y: 95, width: 30, height: 28 }
        ],
        recommendations: [
          "Seek immediate medical consultation",
          "Schedule urgent diagnostic imaging",
          "Contact your healthcare provider today"
        ]
      }
    ];

    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
    setAnalysisResult(randomResult);
    setIsProcessing(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) handleFileUpload(files[0]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const getRiskDisplay = (result: AnalysisResult) => {
    switch (result.riskLevel) {
      case 'clear':
        return {
          icon: CheckCircle,
          title: "No Abnormalities Detected",
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200"
        };
      case 'suspicious':
        return {
          icon: AlertTriangle,
          title: "Suspicious Area Found",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200"
        };
      case 'high-risk':
        return {
          icon: AlertCircle,
          title: "High Risk Detected",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200"
        };
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FDE2E4]/30 via-white to-[#F8F9FA]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#E91E63] to-[#FF6F91] rounded-2xl mb-6">
            <Scan className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            {t('aiThermalTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('aiThermalDescription')}
          </p>

          {/* How it works tooltip */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="text-[#E91E63] hover:bg-[#FDE2E4]">
                  <Info className="h-4 w-4 mr-2" />
                  {t('howItWorks')}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm p-4">
                <p className="text-sm">
                  Thermal imaging detects heat patterns in breast tissue. Abnormal cells often produce 
                  more heat due to increased blood flow and metabolic activity. Our AI analyzes these 
                  patterns using YOLOv11 object detection and EfficientNet classification.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-6 w-6 text-[#E91E63]" />
                  <span>{t('uploadThermalImage')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div
                  className={`border-2 border-dashed p-8 rounded-2xl transition-all duration-200 ${
                    isDragOver
                      ? 'border-[#E91E63] bg-[#FDE2E4]/50'
                      : 'border-gray-300 hover:border-[#E91E63]/50'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  {uploadedImage ? (
                    <div className="text-center">
                      <img
                        src={uploadedImage}
                        alt="Uploaded thermal image"
                        className="max-w-full max-h-48 mx-auto rounded-lg shadow-lg mb-4"
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          setUploadedImage(null);
                          setAnalysisResult(null);
                        }}
                        className="border-[#E91E63]/30 hover:bg-[#E91E63] hover:text-white"
                      >
                        Upload Different Image
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-[#FDE2E4] rounded-full flex items-center justify-center">
                        <Upload className="h-8 w-8 text-[#E91E63]" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          {t('dragDropText')}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          {t('supportedFormats')}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {t('chooseFile')}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#3BAFA9] text-[#3BAFA9] hover:bg-[#3BAFA9] hover:text-white sm:hidden"
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          {t('takePhoto')}
                        </Button>
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="ghost"
                          onClick={() => {
                            // Demo with sample thermal image
                            setUploadedImage("https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGhlcm1hbCUyMGltYWdpbmd8ZW58MXx8fHwxNzU4NzQ2NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080");
                            simulateAIProcessing();
                          }}
                          className="text-[#E91E63] hover:bg-[#FDE2E4] text-sm"
                        >
                          Try Demo with Sample Image
                        </Button>
                      </div>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    className="hidden"
                  />
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Shield className="h-4 w-4 text-[#3BAFA9]" />
                  <span>{t('privacyText')}</span>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-[#E91E63]" />
                  <span>{t('aiAnalysisResults')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isProcessing ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 relative">
                        <div className="w-16 h-16 border-4 border-[#FDE2E4] border-t-[#E91E63] rounded-full animate-spin"></div>
                        <Scan className="absolute inset-0 m-auto h-6 w-6 text-[#E91E63]" />
                      </div>
                      <p className="font-medium text-gray-700 mb-2">
                        {processingSteps[processingStep]}
                      </p>
                      <Progress value={(processingStep + 1) * 20} className="h-2" />
                    </div>
                  </div>
                ) : analysisResult ? (
                  <div className="space-y-6">
                    {/* Result Display */}
                    {(() => {
                      const display = getRiskDisplay(analysisResult);
                      if (!display) return null;
                      
                      return (
                        <Alert className={`${display.bgColor} ${display.borderColor} border-2`}>
                          <display.icon className={`h-5 w-5 ${display.color}`} />
                          <AlertDescription>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className={`font-semibold ${display.color}`}>
                                  {display.title}
                                </span>
                                <Badge variant="secondary" className="text-xs">
                                  {analysisResult.confidence}% confidence
                                </Badge>
                              </div>
                              
                              {analysisResult.detectedRegions && (
                                <div className="text-sm text-gray-600">
                                  <Eye className="h-4 w-4 inline mr-1" />
                                  {analysisResult.detectedRegions.length} region(s) of interest detected
                                </div>
                              )}
                            </div>
                          </AlertDescription>
                        </Alert>
                      );
                    })()}

                    {/* Recommendations */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Recommendations:</h4>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-[#3BAFA9] mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button 
                        className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Screening
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-[#3BAFA9] text-[#3BAFA9] hover:bg-[#3BAFA9] hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Talk to Expert
                      </Button>
                    </div>

                    {/* Save to Reports */}
                    <Button 
                      variant="ghost" 
                      className="w-full text-[#E91E63] hover:bg-[#FDE2E4]"
                    >
                      Save to Medical Reports
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Scan className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Upload a thermal image to begin AI analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Alert className="mt-8 border-[#E91E63]/20 bg-[#FDE2E4]/30">
            <AlertCircle className="h-5 w-5 text-[#E91E63]" />
            <AlertDescription className="text-gray-700">
              <strong>Important Disclaimer:</strong> This AI screening tool is designed to assist with early detection 
              but is not a substitute for professional medical diagnosis. Always consult with a qualified healthcare 
              professional for proper medical evaluation and diagnosis. The results shown here are for educational 
              purposes and should not be used as the sole basis for medical decisions.
            </AlertDescription>
          </Alert>

          {/* Technical Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-500 bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E91E63] rounded-full"></div>
                <span>YOLOv11 Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#3BAFA9] rounded-full"></div>
                <span>EfficientNet Classification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#C7A4C4] rounded-full"></div>
                <span>EPSO Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}