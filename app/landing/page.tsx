// 'use client';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import StackSection from './sections/StackSection';
import InstallationSection from './sections/InstallationSection';
import ComponentsSection from './sections/ComponentsSection';
import DocsSection from './sections/DocsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FooterSection from './sections/FooterSection';
const LandingPage = () => {
  return (
    <>
      <main>
        <HeroSection id="hero" />
        <FeaturesSection id="features" />
        <StackSection id="stack" />
        <InstallationSection id="installation" />
        <ComponentsSection id="components" />
        <DocsSection id="docs" />
        <TestimonialsSection id="testimonials" />
        <FooterSection id="footer" />
      </main>
    </>
  );
};
export default LandingPage;
