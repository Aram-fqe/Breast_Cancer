import { useState } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AwarenessCarousel } from "./components/AwarenessCarousel";
import { ThermalImagingSection } from "./components/ThermalImagingSection";

import { TestimonialsSection } from "./components/TestimonialsSection";
import { DonatePage } from "./components/DonatePage";
import { EducationalHub } from "./components/EducationalHub";
import { AboutBreastCancer } from "./components/AboutBreastCancer";
import { LivingWithBreastCancer } from "./components/LivingWithBreastCancer";
import { PreventionScreening } from "./components/PreventionScreening";
import { TreatmentOptions } from "./components/TreatmentOptions";
import { ResourcesSupport } from "./components/ResourcesSupport";
import { ResearchInnovation } from "./components/ResearchInnovation";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { YourSchedule } from "./components/YourSchedule";
import { SurvivorStories } from "./components/SurvivorStories";
import { RiskAssessmentTest } from "./components/RiskAssessmentTest";
import { ScreeningInformation } from "./components/ScreeningInformation";
import { NutritionPage } from "./components/NutritionPage";
import { ExercisePage } from "./components/ExercisePage";
import { MentalHealthPage } from "./components/MentalHealthPage";
import { FamilySupportPage } from "./components/FamilySupportPage";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection />
            <AwarenessCarousel
              setActiveSection={setActiveSection}
            />
            <ThermalImagingSection />
            <TestimonialsSection />
          </>
        );
      case "about":
        return (
          <AboutBreastCancer
            setActiveSection={setActiveSection}
          />
        );
      case "schedule":
        return <YourSchedule />;
      case "survivor-stories":
        return <SurvivorStories />;
      case "risk-assessment":
        return <RiskAssessmentTest />;
      case "screening-info":
        return <ScreeningInformation />;
      case "nutrition":
        return <NutritionPage />;
      case "exercise":
        return <ExercisePage />;
      case "mental-health":
        return <MentalHealthPage />;
      case "family-support":
        return <FamilySupportPage />;
      case "donate":
        return <DonatePage />;
      case "educational":
        return <EducationalHub />;
      case "living":
        return (
          <LivingWithBreastCancer
            setActiveSection={setActiveSection}
          />
        );
      case "prevention":
        return <PreventionScreening />;
      case "treatment":
        return <TreatmentOptions />;
      case "resources":
        return <ResourcesSupport />;
      case "research":
        return <ResearchInnovation />;
      case "contact":
        return <ContactUs />;
      default:
        return (
          <>
            <HeroSection />
            <AwarenessCarousel
              setActiveSection={setActiveSection}
            />
            <ThermalImagingSection />
            <TestimonialsSection />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Sticky Header */}
        <Header setActiveSection={setActiveSection} />

        {/* Navigation */}
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Dynamic Content */}
        {renderContent()}

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}