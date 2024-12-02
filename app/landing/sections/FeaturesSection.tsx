'use client';
import React from 'react';
import { TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import codeSvg from '@/public/images/screenshots/code.svg';
import backgroundImage from '@/public/images/background-features.jpg';

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
    icon: function DevStackIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c1b4ef"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          // class="feather feather-cpu"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c1b4ef"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          // class="feather feather-database"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c1b4ef"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          // class="feather feather-globe"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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
        <svg
          fill="#c1b4ef"
          className="size-6"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#c1b4ef"
          strokeWidth="0.6839999999999999"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>ci_cd_line</title>{' '}
            <g id="a9b55181-08cd-4e23-b315-7b35ac037aca" data-name="Layer 3">
              {' '}
              <path d="M23.53,19.81a7.45,7.45,0,0,1-1.65-.18,10.48,10.48,0,0,1,.72,2.13c.3,0,.61,0,.93,0a9.52,9.52,0,0,0,3-.49l-.93-1.81A7.67,7.67,0,0,1,23.53,19.81Z"></path>{' '}
              <path d="M18.36,17.87,18,17.49a7.4,7.4,0,0,1-2.2-5.92,7.31,7.31,0,0,1,1.54-4L17.26,9A1,1,0,0,0,18.17,10h.09a1,1,0,0,0,1-.91L19.6,5a1,1,0,0,0-.29-.79A1,1,0,0,0,18.52,4l-4.09.35a1,1,0,0,0,.17,2l1.29-.11a9.45,9.45,0,0,0-2.05,5.32,9.28,9.28,0,0,0,2.67,7.26l.31.37a7.33,7.33,0,0,1,2.06,4.91,7.39,7.39,0,0,1-.26,2.47l1.8.91a8.76,8.76,0,0,0,.45-3.51A9.28,9.28,0,0,0,18.36,17.87Z"></path>{' '}
              <path d="M32.4,17.91,31.19,18A9.65,9.65,0,0,0,23.53,2.45a9.33,9.33,0,0,0-3,.49l.91,1.8a7.67,7.67,0,0,1,9.76,7.39,7.58,7.58,0,0,1-1.65,4.72l.1-1.54a1,1,0,1,0-2-.13l-.28,4.08a1,1,0,0,0,.31.78.94.94,0,0,0,.69.28h.1l4.08-.42a1,1,0,0,0,.9-1.1A1,1,0,0,0,32.4,17.91Z"></path>{' '}
              <path d="M4.07,20.44h.08l4.09-.35a1,1,0,1,0-.17-2l-1.39.12a7.63,7.63,0,0,1,4.52-1.49,7.9,7.9,0,0,1,1.63.18,10.23,10.23,0,0,1-.71-2.13c-.3,0-.61,0-.92,0a9.66,9.66,0,0,0-5.9,2l.12-1.31a1,1,0,0,0-.92-1.08,1,1,0,0,0-1.08.91l-.35,4.08a1,1,0,0,0,1,1.08Z"></path>{' '}
              <path d="M18.42,28.23l-4.09.27a1,1,0,0,0,.13,2L16,30.39a7.71,7.71,0,0,1-12.54-6,7.6,7.6,0,0,1,.29-2L2,21.46a9.59,9.59,0,0,0-.47,2.95A9.7,9.7,0,0,0,17.19,32l-.12,1.18a1,1,0,0,0,.89,1.1h.11a1,1,0,0,0,1-.9l.42-4.06a1,1,0,0,0-1.06-1.1Z"></path>{' '}
            </g>{' '}
          </g>
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
        <svg
          className="size-6"
          viewBox="0 0 1024.00 1024.00"
          fill="#c1b4ef"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#c1b4ef"
          strokeWidth="0.01024"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="2.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M40.61 224.088c-4.414 0-8.076-3.576-8.076-7.998s3.498-7.998 7.918-7.998h0.156c4.42 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.996 7.998zM72.6 224.088c-4.414 0-8.076-3.576-8.076-7.998s3.498-7.998 7.918-7.998h0.158c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM104.59 224.088c-4.414 0-8.076-3.576-8.076-7.998s3.498-7.998 7.918-7.998h0.156c4.42 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.996 7.998z"
              fill=""
            ></path>
            <path
              d="M839.894 240.084H8.144a7.994 7.994 0 0 1-7.998-7.998v-15.996c0-13.23 10.762-23.994 23.992-23.994h799.764c13.23 0 23.992 10.762 23.992 23.994v15.996a7.994 7.994 0 0 1-8 7.998zM16.14 224.088h815.758v-7.998c0-4.342-3.672-7.998-7.996-7.998H24.138a8.008 8.008 0 0 0-7.998 7.998v7.998z"
              fill=""
            ></path>
            <path
              d="M839.894 384.04a7.992 7.992 0 0 1-7.996-7.998v-143.956a7.994 7.994 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v143.956a7.994 7.994 0 0 1-8 7.998zM8.144 831.902a7.994 7.994 0 0 1-7.998-7.998V232.086a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v591.818a7.996 7.996 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M775.914 831.902H8.144c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h767.77c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM839.894 831.902a7.912 7.912 0 0 1-5.386-2.094 7.996 7.996 0 0 1-0.532-11.292l159.95-175.446a7.96 7.96 0 0 1 11.308-0.516 7.98 7.98 0 0 1 0.516 11.292L845.8 829.292a7.944 7.944 0 0 1-5.906 2.61z"
              fill=""
            ></path>
            <path
              d="M839.878 831.902a7.83 7.83 0 0 1-3.558-0.844 7.99 7.99 0 0 1-3.578-10.73l79.976-159.952c1.98-3.936 6.762-5.576 10.73-3.578a8.012 8.012 0 0 1 3.578 10.732l-79.976 159.95a8.024 8.024 0 0 1-7.172 4.422z"
              fill=""
            ></path>
            <path
              d="M919.856 671.952a8.008 8.008 0 0 1-7.84-6.482 8.006 8.006 0 0 1 6.324-9.372l79.976-15.496a8 8 0 0 1 9.372 6.342 7.996 7.996 0 0 1-6.324 9.374l-79.976 15.494c-0.516 0.092-1.032 0.14-1.532 0.14z"
              fill=""
            ></path>
            <path
              d="M999.848 656.458a7.936 7.936 0 0 1-5.672-2.36l-79.972-80.476a7.978 7.978 0 0 1 0.032-11.308 7.98 7.98 0 0 1 11.308 0.032l79.972 80.476a8.004 8.004 0 0 1-0.032 11.308 8.008 8.008 0 0 1-5.636 2.328z"
              fill=""
            ></path>
            <path
              d="M919.872 671.952a7.99 7.99 0 0 1-7.996-7.998v-95.97c0-4.42 3.574-7.998 7.996-7.998s7.996 3.578 7.996 7.998v95.97a7.992 7.992 0 0 1-7.996 7.998z"
              fill=""
            ></path>
            <path
              d="M919.872 671.952a8.016 8.016 0 0 1-6.152-2.874l-79.976-95.972a7.998 7.998 0 0 1 1.032-11.262 8.01 8.01 0 0 1 11.262 1.016l79.976 95.97a8.002 8.002 0 0 1-6.142 13.122z"
              fill=""
            ></path>
            <path
              d="M759.906 671.952a7.962 7.962 0 0 1-5.11-1.86 8 8 0 0 1-1.032-11.262l79.976-95.97a8.03 8.03 0 0 1 11.278-1.016 7.998 7.998 0 0 1 1.016 11.262l-79.976 95.972a8.008 8.008 0 0 1-6.152 2.874z"
              fill=""
            ></path>
            <path
              d="M919.872 671.952h-159.95c-4.422 0-8-3.576-8-7.998a7.994 7.994 0 0 1 8-7.996h159.95a7.99 7.99 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998z"
              fill=""
            ></path>
            <path
              d="M839.894 831.902a8 8 0 0 1-7.152-4.422l-79.976-159.95a7.992 7.992 0 0 1 3.578-10.732c3.938-1.998 8.746-0.358 10.73 3.578l79.976 159.952a8.004 8.004 0 0 1-7.156 11.574zM679.946 656.458a7.99 7.99 0 0 1-5.64-2.328 7.986 7.986 0 0 1-0.032-11.308l79.976-80.476c3.11-3.138 8.168-3.124 11.308-0.032a8.008 8.008 0 0 1 0.032 11.308l-79.976 80.476a7.95 7.95 0 0 1-5.668 2.36z"
              fill=""
            ></path>
            <path
              d="M759.922 671.952c-0.5 0-1.016-0.046-1.532-0.14l-79.976-15.494a8.004 8.004 0 0 1-6.324-9.374c0.84-4.326 5.028-7.108 9.372-6.342l79.976 15.496a7.992 7.992 0 0 1 6.324 9.372 7.988 7.988 0 0 1-7.84 6.482z"
              fill=""
            ></path>
            <path
              d="M839.894 831.902a7.982 7.982 0 0 1-5.918-2.61l-159.954-175.446a8.002 8.002 0 0 1 0.532-11.292c3.25-2.984 8.344-2.766 11.292 0.516l159.954 175.446a7.98 7.98 0 0 1-0.516 11.292 7.944 7.944 0 0 1-5.39 2.094zM759.922 671.952c-4.422 0-8-3.576-8-7.998v-95.97a7.994 7.994 0 0 1 8-7.998 7.994 7.994 0 0 1 7.996 7.998v95.97a7.992 7.992 0 0 1-7.996 7.998z"
              fill=""
            ></path>
            <path
              d="M919.872 575.98h-159.95c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h159.95c4.422 0 7.996 3.578 7.996 7.998s-3.576 7.998-7.996 7.998zM839.894 527.996a7.994 7.994 0 0 1-7.996-7.998v-95.97a7.994 7.994 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v95.97a7.994 7.994 0 0 1-8 7.998zM727.93 543.99a7.966 7.966 0 0 1-5.652-2.342l-63.98-63.982a7.996 7.996 0 1 1 11.308-11.31l63.98 63.98a8 8 0 0 1-5.656 13.654zM951.864 543.99a7.996 7.996 0 0 1-5.656-13.652l63.996-63.98a7.996 7.996 0 1 1 11.308 11.31l-63.996 63.982a7.986 7.986 0 0 1-5.652 2.34z"
              fill=""
            ></path>
            <path
              d="M40.134 831.902a7.994 7.994 0 0 1-7.998-7.998V232.086a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v591.818a7.996 7.996 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 304.064H8.144c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 352.048H8.144c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 400.036H8.144a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 448.02H8.144a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 496.004H8.144a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 543.99H8.144a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.994a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 591.976H8.144c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 639.96H8.144c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 687.946H8.144a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.996z"
              fill=""
            ></path>
            <path
              d="M24.138 735.932H8.144a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.994a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M24.138 783.916H8.144a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.994a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998z"
              fill=""
            ></path>
            <path
              d="M152.098 304.064h-63.98c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h63.98c4.42 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM424.016 352.048H216.08c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h207.936c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM184.088 352.048H104.114c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h79.976c4.42 0 7.998 3.576 7.998 7.998s-3.58 7.998-8 7.998zM615.964 400.036H408.02a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h207.944a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.998zM376.03 400.036H120.108a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h255.922a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM168.094 496.004H120.108a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM421.516 496.004H200.084a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h221.432a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM168.094 687.946H120.108a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.996zM421.516 687.946H200.084a7.992 7.992 0 0 1-7.998-7.996 7.992 7.992 0 0 1 7.998-7.998h221.432a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.996zM487.996 448.02H136.104a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h351.892a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM472 543.99h-143.956a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996H472a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM360.036 591.976H104.114c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h255.922c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM280.06 735.932H104.114a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h175.946a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM535.988 639.96H312.05c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h223.938c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM280.06 639.96H120.108c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h159.952c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM152.098 783.916h-63.98a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h63.98a7.992 7.992 0 0 1 7.998 7.996 7.992 7.992 0 0 1-7.998 7.998zM487.996 591.976h-95.97c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h95.97c4.422 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM296.054 543.99H120.108a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h175.946a7.992 7.992 0 0 1 7.998 7.996 7.992 7.992 0 0 1-7.998 7.998z"
              fill=""
            ></path>
          </g>
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
