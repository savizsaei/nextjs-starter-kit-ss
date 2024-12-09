'use client';

import Button from '@/components/ui/Button';
import React from 'react';

const HeroSection = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-center items-center min-h-screen text-center pt-16 pb-20 lg:pt-32 lg:pb-32"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        viewBox="0 0 800 800"
      >
        <text
          x="125.04451"
          y="517.16989"
          fontFamily="Sofia"
          fontSize="359"
          fill="#363636"
        >
          N
        </text>

        <text
          x="459.65217"
          y="517.16989"
          fontFamily="Sofia"
          fontSize="359"
          fill="#2563EB"
        >
          S
        </text>

        <text
          x="120"
          y="637.40011"
          fontFamily="Afacad"
          fontSize="69"
          fontStyle="italic"
          fill="#2563EB"
        >
          NEXTJS
        </text>

        <text
          x="321.61244"
          y="637.16989"
          fontFamily="Afacad"
          fontSize="69"
          fontStyle="italic"
          fill="#363636"
        >
          STARTER KIT
        </text>
      </svg>{' '}
      <h1 className="mx-auto max-w-4xl font-medium tracking-tight text-gray-900 text-5xl sm:text-7xl mb-6">
        Welcome to{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Next.js Starter</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-slate-700">
        Build faster with our powerful Next.js starter! Packed with essential
        tools like state management, React Query, I18n, CI/CD, and customizable
        UI components, it’s everything you need to kickstart scalable,
        high-performance projects effortlessly.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get Started</Button>
        <Button
          href="https://github.com/aelabid/Next-StarterKit"
          variant="outline"
        >
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
