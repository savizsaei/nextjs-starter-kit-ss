// app/(routes)/page.tsx
// 'use client';
import React from 'react';
// import { useTranslations } from 'next-intl';
import HeroSection from './landing/sections/HeroSection';
import FeaturesSection from './landing/sections/FeaturesSection';
import StackSection from './landing/sections/StackSection';
import Link from 'next/link';

// import { getIntl } from '@/i18n/request';
// Import ExampleComponent
//import ClientWrapper from '@/components/examples/ClientWrapper';
import ArtGallery from '../../components/ArtGallary/ArtGallery1'; // Adjusted import path
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
      </main>
    </>
  );
}
