'use client';
import React from 'react';
import { TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import backgroundImage from '@/public/images/background-tech-stack.jpg';
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
function SwirlyDoodle(props: any) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
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
          fill="#abd2fd"
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
        'group relative mb-6  px-4 py-1 rounded-xl lg:p-6 ring-1 ring-inset ring-white/10 bg-slate-900',
      )}
      {...props}
    >
      <div className="w-9 h-9 flex items-center justify-center rounded-lg">
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className="mt-6 text-sm font-medium text-white">{feature.name}</h3>
      <div className="my-3 w-8 border-t border-white"></div>
      <p className="mt-2 font-display text-xl" style={{ color: '#abd2fd' }}>
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-blue-100">{feature.description}</p>
    </div>
  );
}

const FeaturesSection = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      aria-label="Features for simplifying everyday business tasks"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
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
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
              <span className="relative">Why Choose</span>
            </span>{' '}
            This Starter?
          </h2>
          <p className="mt-6 mb-8 text-lg tracking-tight px-4 md:px-8">
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
};

export default FeaturesSection;
