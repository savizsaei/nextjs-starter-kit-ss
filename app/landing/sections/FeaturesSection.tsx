'use client';
import React from 'react';
import { TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import backgroundImage from '@/public/images/background-features.jpg';
import DevStackIcon from '@/public/images/icons/DevStackIcon.svg';
import StateManagementIcon from '@/public/images/icons/StateManagementIcon.svg';
import I18nIcon from '@/public/images/icons/I18nIcon.svg';
import CICDIcon from '@/public/images/icons/CICDIcon.svg';
import DevEnvIcon from '@/public/images/icons/DevEnvIcon.svg';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#c1b4ef"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
            clipRule="evenodd"
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
    icon: DevStackIcon,
  },
  {
    name: 'Optimized State Management',
    summary: 'Handle complex state easily with Redux and React Query.',
    description:
      'This combination ensures efficient data fetching, caching, and global state management, making your applications fast and responsive.',
    icon: StateManagementIcon,
  },
  {
    name: 'Internationalization (i18n)',
    summary:
      'Expand your project’s reach across the globe with built-in i18n support.',
    description:
      'Effortlessly localize your app to enhance user experience and attract a diverse audience with minimal setup.',
    icon: I18nIcon,
  },
  {
    name: 'Robust CI/CD & Testing Setup',
    summary:
      'Focus on development while our GitHub Actions pipeline handles automated testing, linting, and deployment checks.',
    description:
      'Unit, integration, and end-to-end testing are integrated for a rock-solid foundation.',
    icon: CICDIcon,
  },
  {
    name: 'Developer-First Environment',
    summary:
      'Enjoy a clean, maintainable codebase with tools like ESLint, Prettier, and TypeScript.',
    description:
      'Our starter is optimized for productivity, including reusable UI components, hooks, and a modular architecture designed for fast, scalable development.',
    icon: DevEnvIcon,
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
        'group relative mb-6  px-4 py-1 rounded-xl lg:p-6 ring-1 ring-inset ring-white/10',
      )}
      {...props}
      style={{ backgroundColor: '#3c74ed' }}
    >
      <div className="w-9 h-9 flex items-center justify-center rounded-lg">
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className="mt-6 text-sm font-medium text-white">{feature.name}</h3>
      <div className="my-3 w-8 border-t border-white"></div>
      <p className="mt-2 font-display text-xl" style={{ color: '#c1b4ef' }}>
        {feature.summary}
      </p>
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
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] z-0"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl md:text-center xl:max-w-none">
          <h2
            className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: '#c1b4ef' }}
          >
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
