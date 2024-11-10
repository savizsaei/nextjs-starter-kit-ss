// app/layout.tsx
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>Main Header</header>
          <main>{children}</main>
          <footer>Main Footer</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
