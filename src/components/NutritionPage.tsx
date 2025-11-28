import { Apple, Salad, Coffee, AlertTriangle, CheckCircle, Clock, Users, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";

export function NutritionPage() {
  const nutritionPrinciples = [
    {
      title: "Maintain a Healthy Weight",
      description: "Keep your BMI within the healthy range (18.5-24.9)",
      benefits: "Reduces risk of breast cancer recurrence and improves overall health",
      tips: ["Monitor portion sizes", "Eat slowly and mindfully", "Stay hydrated", "Regular physical activity"]
    },
    {
      title: "Eat a Rainbow of Foods",
      description: "Include a variety of colorful fruits and vegetables",
      benefits: "Provides antioxidants and phytochemicals that may help prevent cancer",
      tips: ["Aim for 5-9 servings daily", "Choose different colors", "Include both raw and cooked", "Try new varieties regularly"]
    },
    {
      title: "Choose Whole Grains",
      description: "Opt for whole grain versions of bread, rice, and pasta",
      benefits: "Provides fiber, vitamins, and minerals while helping maintain stable blood sugar",
      tips: ["Read labels carefully", "Start gradually", "Include oats, quinoa, brown rice", "Limit refined grains"]
    },
    {
      title: "Include Healthy Fats",
      description: "Focus on omega-3 fatty acids and monounsaturated fats",
      benefits: "Supports heart health and may have anti-inflammatory properties",
      tips: ["Include fatty fish twice weekly", "Use olive oil", "Add nuts and seeds", "Limit saturated fats"]
    }
  ];

  const recommendedFoods = [
    {
      category: "Cruciferous Vegetables",
      foods: ["Broccoli", "Cauliflower", "Brussels sprouts", "Kale", "Cabbage"],
      benefits: "Rich in compounds that may help prevent cancer",
      servingSize: "1-2 cups daily"
    },
    {
      category: "Berries & Antioxidant-Rich Fruits",
      foods: ["Blueberries", "Strawberries", "Raspberries", "Pomegranates", "Cherries"],
      benefits: "High in antioxidants that fight cellular damage",
      servingSize: "1/2 to 1 cup daily"
    },
    {
      category: "Fatty Fish",
      foods: ["Salmon", "Mackerel", "Sardines", "Herring", "Tuna"],
      benefits: "Omega-3 fatty acids support heart and brain health",
      servingSize: "2-3 servings per week"
    },
    {
      category: "Legumes & Beans",
      foods: ["Lentils", "Chickpeas", "Black beans", "Kidney beans", "Soybeans"],
      benefits: "High in fiber and plant protein",
      servingSize: "1/2 to 1 cup daily"
    },
    {
      category: "Nuts & Seeds",
      foods: ["Walnuts", "Flaxseeds", "Chia seeds", "Almonds", "Pumpkin seeds"],
      benefits: "Healthy fats, protein, and fiber",
      servingSize: "1-2 ounces daily"
    },
    {
      category: "Green Tea",
      foods: ["Green tea", "White tea", "Matcha"],
      benefits: "Contains catechins with potential anti-cancer properties",
      servingSize: "2-3 cups daily"
    }
  ];

  const foodsToLimit = [
    {
      category: "Processed Meats",
      foods: ["Bacon", "Sausage", "Hot dogs", "Deli meats", "Cured meats"],
      reason: "Linked to increased cancer risk",
      alternatives: ["Fresh poultry", "Fish", "Plant proteins", "Lean cuts of meat"]
    },
    {
      category: "Refined Sugars & Sweets",
      foods: ["Candy", "Sodas", "Pastries", "White sugar", "Corn syrup"],
      reason: "Can contribute to weight gain and inflammation",
      alternatives: ["Fresh fruit", "Dates", "Small amounts of dark chocolate", "Natural sweeteners"]
    },
    {
      category: "Highly Processed Foods",
      foods: ["Fast food", "Packaged snacks", "Instant meals", "Artificial additives"],
      reason: "Often high in unhealthy fats, sodium, and preservatives",
      alternatives: ["Home-cooked meals", "Fresh snacks", "Minimally processed foods"]
    },
    {
      category: "Excessive Alcohol",
      foods: ["Wine", "Beer", "Spirits"],
      reason: "Alcohol consumption is linked to increased breast cancer risk",
      alternatives: ["Sparkling water", "Herbal teas", "Mocktails", "Limit to special occasions"]
    }
  ];

  const sampleMealPlans = [
    {
      day: "Monday",
      breakfast: {
        main: "Overnight oats with berries and walnuts",
        details: "Steel-cut oats, mixed berries, chopped walnuts, chia seeds, almond milk"
      },
      lunch: {
        main: "Quinoa salad with roasted vegetables",
        details: "Quinoa, roasted bell peppers, zucchini, chickpeas, olive oil vinaigrette"
      },
      dinner: {
        main: "Baked salmon with steamed broccoli",
        details: "Wild-caught salmon, steamed broccoli, sweet potato, side salad"
      },
      snacks: ["Apple with almond butter", "Green tea", "Handful of mixed nuts"]
    },
    {
      day: "Tuesday",
      breakfast: {
        main: "Vegetable omelet with whole grain toast",
        details: "2 eggs, spinach, tomatoes, bell peppers, whole grain bread"
      },
      lunch: {
        main: "Lentil soup with mixed greens",
        details: "Red lentil soup, large mixed green salad, olive oil dressing"
      },
      dinner: {
        main: "Grilled chicken with roasted vegetables",
        details: "Organic chicken breast, roasted Brussels sprouts, brown rice"
      },
      snacks: ["Greek yogurt with berries", "Herbal tea", "Celery with hummus"]
    },
    {
      day: "Wednesday",
      breakfast: {
        main: "Green smoothie bowl",
        details: "Spinach, banana, berries, protein powder, topped with granola"
      },
      lunch: {
        main: "Turkey and avocado wrap",
        details: "Whole grain tortilla, lean turkey, avocado, vegetables, hummus"
      },
      dinner: {
        main: "Vegetarian stir-fry",
        details: "Mixed vegetables, tofu, brown rice, ginger-garlic sauce"
      },
      snacks: ["Trail mix", "Green tea", "Orange slices"]
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
            <Apple className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Nutrition Guide for Breast Cancer
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Evidence-based nutrition recommendations to support your health during treatment, recovery, and beyond. Learn about foods that nourish your body and may help reduce cancer risk.
          </p>
        </div>

        {/* Key Nutrition Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Key Nutrition Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental principles to guide your nutrition choices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nutritionPrinciples.map((principle, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#2C2C2C] flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    {principle.title}
                  </CardTitle>
                  <p className="text-gray-600">{principle.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#2C2C2C] mb-2 flex items-center">
                      <Heart className="h-4 w-4 text-[#E91E63] mr-2" />
                      Benefits
                    </h4>
                    <p className="text-gray-600 text-sm">{principle.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-2">Practical Tips:</h4>
                    <ul className="space-y-1">
                      {principle.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#3BAFA9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Foods to Include and Limit */}
        <div className="mb-16">
          <Tabs defaultValue="include" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="include" className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Foods to Include</span>
              </TabsTrigger>
              <TabsTrigger value="limit" className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Foods to Limit</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="include">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedFoods.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#2C2C2C] flex items-center">
                        <Salad className="h-5 w-5 text-[#3BAFA9] mr-2" />
                        {category.category}
                      </CardTitle>
                      <Badge className="bg-[#3BAFA9] text-white w-fit">
                        {category.servingSize}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-3">{category.benefits}</p>
                      <div className="space-y-1">
                        {category.foods.map((food, foodIndex) => (
                          <div key={foodIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mr-3"></div>
                            {food}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="limit">
              <div className="grid md:grid-cols-2 gap-6">
                {foodsToLimit.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#2C2C2C] flex items-center">
                        <AlertTriangle className="h-5 w-5 text-[#FF6F91] mr-2" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{category.reason}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[#2C2C2C] mb-2">Limit:</h4>
                          <div className="space-y-1">
                            {category.foods.map((food, foodIndex) => (
                              <div key={foodIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-[#FF6F91] rounded-full mr-3"></div>
                                {food}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[#2C2C2C] mb-2">Choose Instead:</h4>
                          <div className="space-y-1">
                            {category.alternatives.map((alt, altIndex) => (
                              <div key={altIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-[#3BAFA9] rounded-full mr-3"></div>
                                {alt}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sample Meal Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[#2C2C2C]">
              Sample Meal Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three days of balanced, nutritious meal ideas to inspire your healthy eating journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sampleMealPlans.map((day, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#2C2C2C] flex items-center">
                    <Clock className="h-5 w-5 text-[#E91E63] mr-2" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-1">Breakfast</h4>
                    <p className="text-sm font-medium text-gray-700">{day.breakfast.main}</p>
                    <p className="text-xs text-gray-600">{day.breakfast.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-1">Lunch</h4>
                    <p className="text-sm font-medium text-gray-700">{day.lunch.main}</p>
                    <p className="text-xs text-gray-600">{day.lunch.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-1">Dinner</h4>
                    <p className="text-sm font-medium text-gray-700">{day.dinner.main}</p>
                    <p className="text-xs text-gray-600">{day.dinner.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-2">Snacks</h4>
                    <div className="space-y-1">
                      {day.snacks.map((snack, snackIndex) => (
                        <div key={snackIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-[#C7A4C4] rounded-full mr-2"></div>
                          {snack}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <Alert className="mb-8 border-[#E91E63] bg-[#FDE2E4]/50">
          <Coffee className="h-4 w-4 text-[#E91E63]" />
          <AlertDescription className="text-[#2C2C2C]">
            <strong>Important:</strong> These are general nutrition guidelines. During treatment, your nutritional needs may be different. Always consult with your healthcare team and a registered dietitian for personalized nutrition advice, especially if you're receiving treatment or have specific dietary restrictions.
          </AlertDescription>
        </Alert>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-[#3BAFA9] to-[#2E8B8B] text-white">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl mb-6">
              Need Personalized Nutrition Support?
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
              Our registered dietitians specialize in oncology nutrition and can help create a personalized plan that fits your needs, preferences, and treatment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-white text-[#3BAFA9] hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                Schedule Nutrition Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#3BAFA9] px-8 py-3 rounded-xl"
              >
                Download Meal Planning Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}