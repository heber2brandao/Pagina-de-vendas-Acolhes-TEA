import React from 'react';
// Header removed as requested
import { Hero } from './components/Hero';
import { EmpathySection } from './components/EmpathySection';
import { Features } from './components/Features';
import { Disclaimer } from './components/Disclaimer';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-tea-text antialiased selection:bg-tea-yellow selection:text-tea-text">
      <main>
        <Hero />
        <EmpathySection />
        <Features />
        <Disclaimer />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;