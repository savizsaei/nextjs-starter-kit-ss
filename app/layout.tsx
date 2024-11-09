// app/layout.tsx
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>Main Header</header>
        <main>{children}</main>
        <footer>Main Footer</footer>
      </body>
    </html>
  );
}
