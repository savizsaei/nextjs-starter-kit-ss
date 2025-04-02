// app/contact/layout.tsx
import React from 'react';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Contact Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
