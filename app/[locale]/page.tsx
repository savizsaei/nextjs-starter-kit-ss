// app/(routes)/page.tsx
// 'use client';
import React from 'react';
// import { useTranslations } from 'next-intl';
import HeroSection from './landing/sections/HeroSection';
import FeaturesSection from './landing/sections/FeaturesSection';
import StackSection from './landing/sections/StackSection';
// import { getIntl } from '@/i18n/request';
// Import ExampleComponent
//import ClientWrapper from '@/components/examples/ClientWrapper';
import ArtGallery from '../../components/ArtGallary/ArtGallery1'; // Adjusted import path
import ComponentsSection from './landing/sections/ComponentsSection'; // Import ComponentsSection
import DocsSection from './landing/sections/DocsSection'; // Import DocsSection
import FooterSection from './landing/sections/FooterSection'; // Import FooterSection
import InstallationSection from './landing/sections/InstallationSection'; // Import InstallationSection
import TestimonialsSection from './landing/sections/TestimonialsSection'; // Import TestimonialsSection
export default async function HomePage() {
  // const t = useTranslations('HomePage');
  // const intl = await getIntl(locale);

  return (
    <>
      <main>
        <HeroSection id="hero" />
        <ArtGallery id="art" /> {/* Render the ArtGallery component */}
        <FeaturesSection id="features" />
        <StackSection id="stack" />
        <ComponentsSection id="components" />
        <DocsSection id="docs" />
        <InstallationSection id="install" />
        <TestimonialsSection id="testimonial" />
        <FooterSection id="footer" /> 
      </main>
    </>
  );
}
