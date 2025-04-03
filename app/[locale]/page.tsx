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
// import { useTranslations } from 'next-intl';

import Link from 'next/link';
import ComponentsSection from './landing/sections/ComponentsSection';
import DocsSection from './landing/sections/DocsSection';
import InstallationSection from './landing/sections/InstallationSection';
import TestimonialsSection from './landing/sections/TestimonialsSection';
import FooterSection from './landing/sections/FooterSection';
import Form from '../../components/Form/Form.js';
import ArtGallery from '../../components/ArtGallary/ArtGallery1'; // Adjusted import path
export default async function HomePage() {
  // const t = useTranslations('HomePage');
  // const intl = await getIntl(locale);

  return (
    <>
      <main>
      <Form/>
      <HeroSection id="hero" />
      <ArtGallery id="art" />
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
