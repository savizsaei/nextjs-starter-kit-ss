// app/(routes)/page.tsx
"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { ExampleComponent } from '@/components/examples/ExampleQueryComponent';
import { ExampleReduxComponent } from '@/components/examples/ExampleReduxComponent';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1 data-testid="homepage-title">{t('title')}</h1>
      <ExampleComponent />
      <ExampleReduxComponent />
      Home Page
      <button onClick={navigateToAboutPage}>Go to About Page</button>
    </div>
  );
}
