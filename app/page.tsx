// app/(routes)/page.tsx
"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { ExampleComponent } from '@/components/dataFetching/ExampleQueryComponent';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <ExampleComponent />
      Home Page
    </div>
  );
}
