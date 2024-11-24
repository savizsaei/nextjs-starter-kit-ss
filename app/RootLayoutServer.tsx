// app/RootLayoutServer.tsx
import React from 'react';
import { getMessages } from 'next-intl/server';
import RootLayoutClient from './RootLayoutClient';
import Head from 'next/head';
import { seoConfig } from 'config/seo';

export default async function RootLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'en'; // Set your default locale or determine it dynamically
  const messages = await getMessages({ locale });

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <link rel="canonical" href={seoConfig.url} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta
          property="og:description"
          content={seoConfig.openGraph.description}
        />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="aelabid" />
      </Head>
      <RootLayoutClient locale={locale} messages={messages}>
        {children}
      </RootLayoutClient>
    </>
  );
}
