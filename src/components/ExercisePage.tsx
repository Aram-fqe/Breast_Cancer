import { Activity, Heart, Dumbbell, Zap, Clock, AlertTriangle, CheckCircle, Play, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";

export function ExercisePage() {
  const exerciseBenefits = [
    {
      title: "Reduces Cancer Risk",
      description: "Regular exercise can reduce breast cancer risk by 20-30%",
      icon: CheckCircle,
      details: "Physical activity helps regulate hormones and boost immune function"
    },
    {
      title: "Improves Treatment Outcomes",
      description: "Exercise during treatment can reduce side effects and improve quality of life",
      icon: Heart,
      details: "Helps manage fatigue, nausea, and maintains muscle strength"
    },
    {
      title: "Prevents Recurrence",
      description: "Post-treatment exercise may reduce risk of cancer recurrence",
      icon: Zap,
      details: "Studies show 25-40% lower recurrence risk in active survivors"
    },
    {
      title: "Enhances Mental Health",
      description: "Physical activity reduces anxiety, depression, and stress",
      icon: Activity,
      details: "Releases endorphins and improves overall mood and well-being"
    }
  ];

  const exerciseTypes = [
    {
      id: "aerobic",
      title: "Aerobic Exercise",
      icon: Heart,
      description: "Cardiovascular activities that strengthen your heart and lungs",
      examples: ["Brisk walking", "Swimming", "Cycling", "Dancing", "Elliptical training"],
      frequency: "150 minutes moderate or 75 minutes vigorous per week",
      benefits: ["Improves heart health", "Boosts energy", "Helps maintain weight", "Reduces treatment fatigue"],
      precautions: ["Start slowly", "Stay hydrated", "Monitor heart rate", "Rest when needed"]
    },
    {
      id: "strength",
      title: "Strength Training",
      icon: Dumbbell,
      description: "Resistance exercises to build and maintain muscle mass",
      examples: ["Weight lifting", "Resistance bands", "Bodyweight exercises", "Pilates", "Functional movements"],
      frequency: "2-3 times per week, all major muscle groups",
      benefits: ["Prevents muscle loss", "Improves bone density", "Boosts metabolism", "Enhances daily activities"],
      precautions: ["Learn proper form", "Start with lighter weights", "Allow rest days", "Avoid overexertion"]
    },
    {
      id: "flexibility",
      title: "Flexibility & Balance",
      icon: Activity,
      description: "Gentle movements to maintain range of motion and stability",
      examples: ["Yoga", "Tai Chi", "Stretching", "Balance exercises", "Gentle movement"],
      frequency: "Daily or most days of the week",
      benefits: ["Improves mobility", "Reduces stiffness", "Prevents falls", "Promotes relaxation"],
      precautions: ["Move gently", "Don't force stretches", "Breathe deeply", "Listen to your body"]
    }
  ];

  const treatmentPhaseGuidelines = [
    {
      phase: "Before Treatment",
      description: "Building strength and endurance for upcoming treatment",
      recommendations: [
        "Establish a regular exercise routine",
        "Focus on cardiovascular fitness",
        "Include strength training",
        "Learn stress management techniques"
      ],
      intensity: "Moderate to vigorous as tolerated",
      duration: "45-60 minutes most days"
    },
    {
      phase: "During Treatment",
      description: "Maintaining activity while managing treatment side effects",
      recommendations: [
        "Reduce intensity but stay active",
        "Listen to your body daily",
        "Focus on gentle movement",
        "Include rest and recovery"
      ],
      intensity: "Light to moderate",
      duration: "15-30 minutes as tolerated"
    },
    {
      phase: "After Treatment",
      description: "Gradually returning to pre-treatment activity levels",
      recommendations: [
        "Slowly increase activity levels",
        "Rebuild strength and endurance",
        "Set new fitness goals",
        "Join support groups or classes"
      ],
      intensity: "Gradually increase to moderate-vigorous",
      duration: "Work up to 45-60 minutes"
    },
    {
      phase: "Long-term Survivorship",
      description: "Maintaining lifelong healthy habits",
      recommendations: [
        "Meet or exceed exercise guidelines",
        "Vary activities to prevent boredom",
        "Include social exercise opportunities",
        "Regular fitness assessments"
      ],
      intensity: "Moderate to vigorous",
      duration: "150+ minutes per week"
    }
  ];

  const sampleWorkouts = [
    {
      title: "Beginner Gentle Routine",
      duration: "20-30 minutes",
      level: "Beginner",
      exercises: [
        { name: "Walking", duration: "10-15 minutes", instructions: "Start with comfortable pace, gradually increase" },
        { name: "Chair Exercises", duration: "5 minutes", instructions: "Arm circles, leg lifts, seated marching" },
        { name: "Gentle Stretching", duration: "5-10 minutes", instructions: "Neck, shoulder, and leg stretches" }
      ]
    },
    {
      title: "Intermediate Strength & Cardio",
      duration: "30-45 minutes",
      level: "Intermediate",
      exercises: [
        { name: "Brisk Walking/Light Jogging", duration: "15-20 minutes", instructions: "Maintain conversational pace" },
        { name: "Bodyweight Strength", duration: "15 minutes", instructions: "Squats, modified push-ups, planks" },
        { name: "Cool-down Stretching", duration: "10 minutes", instructions: "Full body stretching routine" }
      ]
    },
    {
      title: "Advanced Full Body Workout",
      duration: "45-60 minutes",
      level: "Advanced",
      exercises: [
        { name: "Cardio Warm-up", duration: "10 minutes", instructions: "Dynamic movements to prepare body" },
        { name: "Strength Circuit", duration: "25-30 minutes", instructions: "Weights, resistance bands, functional movements" },
        { name: "Flexibility & Recovery", duration: "10-15 minutes", instructions: "Yoga poses, deep stretching" }
      ]
    }
  ];

  const yogaPoses = [
    {
      name: "Child's Pose",
      benefits: "Relieves stress and fatigue",
      instructions: "Kneel with toes together, sit back on heels, fold forward with arms extended"
    },
    {
      name: "Cat-Cow Stretch",
      benefits: "Improves spine flexibility",
      instructions: "On hands and knees, alternate arching and rounding your back"
    },
    {
      name: "Gentle Warrior",
      benefits: "Builds strength and confidence",
      instructions: "Step one foot forward, bend knee, extend arms up or out to sides"
    },
    {
      name: "Legs Up the Wall",
      benefits: "Reduces swelling and fatigue",
      instructions: "Lie on back near wall, extend legs up against wall"
    },
    {
      name: "Seated Spinal Twist",
      benefits: "Improves digestion and mobility",
      instructions: "Sit cross-legged, gently twist spine to each side"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
            <Activity className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Exercise Program for Breast Cancer
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Evidence-based exercise recommendations to support you through prevention, treatment, and survivorship. Discover how physical activity can improve outcomes and quality of life.
          </p>
        </div>

        {/* Benefits of Exercise */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Why Exercise Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular physical activity provides powerful benefits for breast cancer prevention and recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exerciseBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-2xl mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <p className="text-gray-500 text-xs">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exercise Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Types of Exercise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A balanced exercise program includes three key components
            </p>
          </div>

          <Tabs defaultValue="aerobic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {exerciseTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2">
                  <type.icon className="h-4 w-4" />
                  <span>{type.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {exerciseTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-2xl">
                        <type.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-[#2C2C2C]">{type.title}</CardTitle>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-[#3BAFA9] text-white w-fit">
                      {type.frequency}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <Play className="h-4 w-4 text-[#E91E63] mr-2" />
                          Examples
                        </h4>
                        <ul className="space-y-2">
                          {type.examples.map((example, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#3BAFA9] mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center">
                          <AlertTriangle className="h-4 w-4 text-[#FF6F91] mr-2" />
                          Precautions
                        </h4>
                        <ul className="space-y-2">
                          {type.precautions.map((precaution, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#FF6F91] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {precaution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Treatment Phase Guidelines */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Exercise Through Treatment Phases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adapt your exercise routine to match your treatment phase and energy levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {treatmentPhaseGuidelines.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#2C2C2C] flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {phase.phase}
                  </CardTitle>
                  <p className="text-gray-600">{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] mb-2">Recommendations:</h4>
                      <ul className="space-y-1">
                        {phase.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#C7A4C4] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-semibold text-[#2C2C2C]">Intensity: </span>
                        <span className="text-gray-600">{phase.intensity}</span>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="border-[#C7A4C4] text-[#C7A4C4]">
                      {phase.duration}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Workouts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Sample Workout Routines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-follow workout plans for different fitness levels
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sampleWorkouts.map((workout, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-[#2C2C2C]">{workout.title}</CardTitle>
                    <Badge className={`${
                      workout.level === 'Beginner' ? 'bg-[#3BAFA9]' :
                      workout.level === 'Intermediate' ? 'bg-[#FF6F91]' : 'bg-[#E91E63]'
                    } text-white`}>
                      {workout.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{workout.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workout.exercises.map((exercise, exerciseIndex) => (
                      <div key={exerciseIndex} className="border-l-4 border-l-[#E91E63] pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-[#2C2C2C] text-sm">{exercise.name}</h4>
                          <span className="text-xs text-gray-500">{exercise.duration}</span>
                        </div>
                        <p className="text-xs text-gray-600">{exercise.instructions}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Yoga Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Gentle Yoga for Breast Cancer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restorative yoga poses to improve flexibility, reduce stress, and promote healing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaPoses.map((pose, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C7A4C4] to-[#9575AB] rounded-xl mb-4">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-2">{pose.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pose.benefits}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{pose.instructions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Safety Information */}
        <Alert className="mb-8 border-[#E91E63] bg-[#FDE2E4]/50">
          <AlertTriangle className="h-4 w-4 text-[#E91E63]" />
          <AlertDescription className="text-[#2C2C2C]">
            <strong>Important:</strong> Always consult with your healthcare team before starting any exercise program, especially during treatment. Start slowly and listen to your body. Stop exercising and contact your doctor if you experience unusual symptoms, pain, or discomfort.
          </AlertDescription>
        </Alert>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#E91E63] to-[#FF6F91] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              Ready to Get Moving?
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Join our specialized exercise programs designed for breast cancer patients and survivors. Our certified trainers understand your unique needs and will help you exercise safely and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#E91E63] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Join Exercise Program
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#E91E63] px-8 py-3 rounded-xl"
              >
                Schedule Fitness Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}