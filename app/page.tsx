// app/(routes)/page.tsx
"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { ExampleComponent } from '@/components/examples/ExampleQueryComponent';
import { ExampleReduxComponent } from '@/components/examples/ExampleReduxComponent';
export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1 data-testid="homepage-title">{t('title')}</h1>
      <ExampleComponent />
      <ExampleReduxComponent />
      Home Page
    </div>
  );
}
