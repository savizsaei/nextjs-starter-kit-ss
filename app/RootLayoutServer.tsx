// app/RootLayoutServer.tsx
import React from 'react';
import { getMessages } from 'next-intl/server';
import RootLayoutClient from './RootLayoutClient';

export default async function RootLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = 'en'; // Set your default locale or determine it dynamically
  const messages = await getMessages({locale});

  return <RootLayoutClient locale={locale} messages={messages}>{children}</RootLayoutClient>;
}