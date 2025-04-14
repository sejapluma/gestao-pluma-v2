import React from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import HighlightBar from '../components/HighlightBar';
import PainPoints from '../components/PainPoints';
import SolutionBridge from '../components/SolutionBridge';
import ProductFeatures from '../components/ProductFeatures';
import Benefits from '../components/Benefits';
import TargetAudience from '../components/TargetAudience';
import ComparisonTable from '../components/ComparisonTable';
import BonusSection from '../components/BonusSection';
import PricingSection from '../components/PricingSection';
import CalloutBanner from '../components/CalloutBanner';
import AboutSection from '../components/AboutSection';
import WhatsAppSection from '../components/WhatsAppSection';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureSection />
      <PainPoints />
      <SolutionBridge />
      <HighlightBar />
      <ProductFeatures />
      <Benefits />
      <TargetAudience />
      <ComparisonTable />
      <BonusSection />
      <PricingSection />
      <CalloutBanner />
      <AboutSection />
      <WhatsAppSection />
    </main>
  );
};

export default HomePage; 