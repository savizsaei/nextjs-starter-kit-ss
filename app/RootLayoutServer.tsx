// app/RootLayoutServer.tsx
import React from 'react';
import { getMessages } from 'next-intl/server';
import RootLayoutClient from './RootLayoutClient';
import { seoConfig } from 'config/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    url: seoConfig.openGraph.url,
    type: seoConfig.openGraph.type as 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: seoConfig.url,
  },
  authors: [{ name: 'aelabid' }],
};

export default async function RootLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'en';
  const messages = await getMessages({ locale });

  return (
    <RootLayoutClient locale={locale} messages={messages}>
      {children}
    </RootLayoutClient>
  );
}
