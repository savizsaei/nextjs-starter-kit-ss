'use client';
import React from 'react';
import { TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/ui/Container';

interface Feature {
  name: React.ReactNode;
  summary: string;
  description: string;
  icon: React.ComponentType;
}

const features: Array<Feature> = [
  {
    name: 'Free and Open-Source',
    summary: 'Build, customize, and innovate freely!',
    description:
      'Our Next.js starter is fully open-source, allowing you to contribute, adapt, and stay in sync with the latest industry standards—all without any cost.',
    icon: function OpenSourceIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
  {
    name: 'Modern Development Stack',
    summary:
      'Experience seamless development with Next.js, React, and TypeScript.',
    description:
      'Our starter is designed with scalability in mind, featuring React Query for data fetching, Redux for state management, and Tailwind CSS for rapid UI styling.',
    icon: function DevStackIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
  {
    name: 'Optimized State Management',
    summary: 'Handle complex state easily with Redux and React Query.',
    description:
      'This combination ensures efficient data fetching, caching, and global state management, making your applications fast and responsive.',
    icon: function StateManagementIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
  {
    name: 'Internationalization (i18n)',
    summary:
      'Expand your project’s reach across the globe with built-in i18n support.',
    description:
      'Effortlessly localize your app to enhance user experience and attract a diverse audience with minimal setup.',
    icon: function I18nIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
  {
    name: 'Robust CI/CD & Testing Setup',
    summary:
      'Focus on development while our GitHub Actions pipeline handles automated testing, linting, and deployment checks.',
    description:
      'Unit, integration, and end-to-end testing are integrated for a rock-solid foundation.',
    icon: function CICDIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
  {
    name: 'Developer-First Environment',
    summary:
      'Enjoy a clean, maintainable codebase with tools like ESLint, Prettier, and TypeScript.',
    description:
      'Our starter is optimized for productivity, including reusable UI components, hooks, and a modular architecture designed for fast, scalable development.',
    icon: function DevEnvIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      );
    },
  },
];

function FeatureClass({
  feature,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        'group relative mb-6  px-4 py-1 rounded-xl lg:p-6 bg-white/10 ring-1 ring-inset ring-white/10',
      )}
      {...props}
    >
      <div className="w-9 rounded-lg bg-blue-600">
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className="mt-6 text-sm font-medium text-white">{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-white">{feature.summary}</p>
      <p className="mt-4 text-sm text-blue-100">{feature.description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section
      id="features"
      aria-label="Features for simplifying everyday business tasks"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Choose This Starter?
          </h2>
          <p className="mt-6 mb-8 text-lg tracking-tight text-blue-100 px-4 md:px-8">
            Boost your development process with a powerful, feature-rich Next.js
            starter designed for speed, scalability, and developer productivity.
            Here’s what makes it stand out:
          </p>
        </div>
        <TabGroup>
          <TabList className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-8">
            {features.map((feature) => (
              <FeatureClass
                key={feature.summary}
                feature={feature}
                className="relative"
              />
            ))}
          </TabList>
        </TabGroup>
      </Container>
    </section>
  );
}

export default FeaturesSection;
