// app/RootLayoutClient.tsx
'use client';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/index';


export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <html lang={locale}>
      <body>
        <Provider store={store}>
          <ReactQueryProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <header>Main Header</header>
              <main>{children}</main>
              <footer>Main Footer</footer>
            </NextIntlClientProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}