// app/RootLayoutServer.tsx
import React from 'react';
import { getMessages } from 'next-intl/server';
import RootLayoutClient from './RootLayoutClient';
import Head from 'next/head';

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
        <title>Next.js Starter</title>
        <meta
          name="description"
          content="A powerful and scalable Next.js starter for developers."
        />
        <link
          rel="canonical"
          href="https://next-starter-kit-neon.vercel.app/"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Next.js Starter" />
        <meta
          property="og:description"
          content="A powerful and scalable Next.js starter for developers."
        />
        <meta
          property="og:url"
          content="https://next-starter-kit-neon.vercel.app/"
        />
        <meta property="og:type" content="website" />
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
