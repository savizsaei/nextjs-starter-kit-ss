'use client';

import React from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   useColorModeValue,
//   Image,
//   SimpleGrid,
// } from '@chakra-ui/react';
// import Image from 'next/image';

const StackSection = ({ id }: { id: string }) => (
  <section
    id={id}
    aria-label="Features for simplifying everyday business tasks"
    className="relative overflow-hidden pb-28 pt-20 sm:py-32"
  >
    {/* <Image
      className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] z-0"
      src={backgroundImage}
      alt=""
      width={2245}
      height={1636}
      unoptimized
    /> */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mx-auto max-w-2xl md:text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Tech Stack{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="3000.000000pt"
              height="2000.000000pt"
              viewBox="0 0 3000.000000 2000.000000"
              preserveAspectRatio="none"
              className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-300/70"
            >
              <g
                transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
                fill="#b3d6fe"
                stroke="none"
              >
                <path
                  d="M4230 12099 c-14 -6 -39 -8 -57 -6 -22 4 -33 1 -37 -9 -4 -11 -26
-14 -89 -14 -57 0 -102 -6 -141 -20 -53 -18 -61 -18 -93 -5 -30 13 -47 13 -97
4 -34 -6 -78 -20 -99 -31 -21 -11 -45 -17 -54 -14 -9 4 -42 -7 -74 -24 -32
-16 -65 -30 -74 -30 -9 0 -45 -11 -80 -25 -61 -25 -64 -25 -104 -9 l-41 16
-42 -37 c-40 -35 -46 -37 -95 -32 -39 4 -60 1 -87 -14 -20 -10 -43 -19 -51
-19 -8 0 -40 -16 -70 -36 -31 -19 -73 -38 -93 -41 -20 -3 -47 -16 -60 -29 -19
-20 -29 -23 -61 -18 -37 6 -39 5 -46 -24 -6 -28 -11 -31 -69 -41 -34 -6 -77
-11 -95 -11 -39 0 -78 -19 -111 -55 -39 -42 -81 -62 -143 -70 -52 -6 -57 -8
-52 -28 9 -38 -8 -52 -48 -40 -28 8 -38 8 -49 -3 -8 -8 -54 -28 -104 -45 -58
-20 -100 -41 -121 -61 -20 -20 -37 -28 -48 -24 -28 11 -56 -11 -49 -39 5 -21
3 -25 -16 -25 -12 0 -29 4 -39 10 -14 7 -26 1 -56 -30 -40 -41 -62 -48 -94
-31 -22 12 -108 -42 -143 -89 -14 -20 -28 -28 -39 -25 -11 4 -36 -12 -72 -45
-42 -38 -74 -57 -129 -76 -86 -29 -137 -61 -173 -108 -15 -20 -49 -49 -76 -65
-26 -17 -56 -42 -65 -56 -10 -15 -49 -42 -91 -62 -59 -28 -73 -39 -73 -58 0
-28 -48 -95 -94 -130 -29 -22 -35 -33 -34 -61 1 -19 -6 -42 -15 -52 -10 -10
-17 -26 -17 -34 0 -9 -10 -23 -23 -32 -20 -14 -21 -17 -6 -28 15 -12 15 -19 1
-78 l-16 -64 42 -80 c30 -57 42 -93 42 -122 0 -37 4 -43 48 -74 26 -18 49 -35
50 -36 2 -1 -4 -16 -14 -32 l-17 -30 63 -71 c35 -39 72 -71 81 -71 21 0 35
-18 37 -48 1 -33 18 -50 64 -64 53 -16 61 -34 37 -87 -10 -24 -19 -47 -19 -51
0 -5 21 -8 47 -8 27 1 119 -1 206 -4 l159 -5 121 57 c67 31 149 77 182 102 33
24 87 62 120 83 33 21 90 66 126 100 62 58 76 66 250 135 215 85 267 110 293
138 11 13 75 39 165 68 80 25 173 61 206 79 33 19 125 60 205 93 80 33 204 87
277 121 72 34 137 61 143 61 7 0 67 24 134 54 66 30 157 64 201 76 44 12 89
30 100 40 36 32 184 90 231 90 12 0 46 11 75 25 84 38 347 115 394 115 50 0
81 -25 51 -42 -17 -9 -17 -10 0 -23 17 -12 15 -14 -19 -28 -34 -15 -37 -19
-37 -55 0 -34 -4 -41 -35 -58 -23 -12 -43 -34 -57 -64 -11 -25 -44 -83 -72
-130 -35 -59 -51 -97 -52 -125 -2 -33 -10 -47 -53 -87 -41 -40 -53 -60 -67
-111 -9 -34 -19 -82 -21 -107 -2 -25 -8 -81 -13 -125 -9 -71 -8 -86 10 -134
13 -32 20 -72 18 -100 -3 -66 25 -144 115 -321 84 -167 137 -292 137 -327 0
-12 18 -48 40 -79 41 -59 48 -90 29 -126 -15 -28 -7 -31 40 -12 47 19 58 15
42 -14 -6 -12 -11 -29 -11 -39 0 -10 -10 -24 -22 -32 l-22 -13 27 -14 c26 -14
45 -54 33 -72 -3 -5 6 -14 19 -20 16 -7 25 -20 25 -34 0 -13 9 -42 20 -66 10
-23 22 -58 26 -77 4 -25 22 -49 61 -85 30 -28 60 -50 67 -50 21 0 135 -79 157
-110 17 -22 35 -32 78 -41 31 -6 82 -22 113 -35 121 -51 225 -66 498 -76 301
-10 368 -15 395 -34 23 -16 61 -18 70 -4 10 16 61 12 76 -6 17 -21 68 -13 108
17 24 18 35 20 53 12 17 -7 34 -7 60 3 21 7 53 10 71 7 22 -3 55 3 95 17 54
20 66 21 92 10 29 -12 34 -10 75 19 41 29 48 31 82 22 59 -17 94 -13 132 13
22 14 64 28 108 35 39 6 93 20 120 32 45 19 53 20 125 8 l77 -12 53 35 c29 20
72 39 94 42 23 3 66 17 95 31 30 14 65 25 78 25 14 0 33 8 44 17 15 14 37 18
105 18 77 0 95 4 153 31 37 18 86 35 110 39 24 4 65 18 91 31 26 13 62 24 81
24 22 0 44 10 67 29 32 26 37 28 52 14 15 -13 22 -12 73 12 68 32 210 64 284
65 35 0 71 8 99 21 36 18 48 20 69 10 23 -10 29 -9 52 12 45 42 76 57 117 56
84 0 139 9 142 24 2 9 18 17 40 20 141 18 320 67 361 99 28 22 67 24 78 3 7
-12 23 -8 96 21 76 31 92 34 119 25 17 -6 34 -9 38 -6 4 3 13 27 20 54 l11 48
52 7 c29 3 82 6 119 6 46 0 81 7 115 21 26 12 91 27 143 33 l95 11 11 35 12
35 78 3 c44 1 88 6 99 11 57 25 199 73 232 78 22 3 51 18 68 33 22 21 43 29
80 33 72 7 390 91 455 121 30 14 67 27 82 30 24 5 26 10 21 39 l-5 32 69 1
c46 1 98 11 163 31 52 17 117 34 145 38 50 7 177 53 218 79 12 8 51 17 87 21
36 3 85 13 110 21 25 8 92 23 150 34 87 17 109 25 135 50 25 25 46 32 119 45
49 9 93 18 99 22 10 6 202 22 322 27 39 1 104 11 145 23 41 11 115 26 164 32
l88 12 62 -41 c34 -22 83 -47 109 -56 34 -12 56 -28 84 -65 20 -27 45 -52 55
-55 21 -6 33 -27 41 -71 4 -19 32 -63 68 -105 34 -40 75 -101 92 -135 30 -61
32 -63 84 -74 42 -10 57 -19 73 -43 23 -39 83 -96 134 -130 42 -28 103 -34
152 -16 21 8 31 7 44 -5 20 -18 156 -54 208 -56 21 0 69 3 108 7 60 5 85 2
160 -19 103 -30 227 -31 329 -3 32 9 95 16 139 16 67 0 101 7 217 45 76 25
155 45 176 45 40 0 161 26 278 59 39 11 82 20 98 20 15 1 66 15 115 32 48 16
204 64 347 105 143 41 301 88 350 105 129 43 176 56 207 58 14 0 59 10 100 20
40 11 116 27 168 36 86 14 281 54 435 90 33 8 90 17 127 20 37 4 91 13 120 21
29 9 116 19 193 23 90 6 167 16 215 30 41 11 165 32 275 47 110 14 234 32 275
39 41 8 122 14 180 15 58 0 146 5 195 11 50 5 155 14 235 18 88 6 163 15 190
25 37 14 52 15 91 5 39 -10 56 -9 110 5 50 14 76 16 116 8 38 -7 59 -6 84 5
24 10 45 11 82 4 37 -7 65 -5 106 6 31 8 72 12 91 9 19 -3 60 1 93 10 32 8 61
13 66 10 4 -3 68 2 142 10 128 15 227 13 309 -5 27 -6 41 -3 63 12 25 17 40
18 205 12 250 -9 307 -8 392 5 49 7 100 8 147 3 54 -7 78 -6 95 4 30 16 76 16
124 -1 22 -7 72 -16 111 -20 62 -6 82 -4 134 15 58 21 63 22 111 6 36 -11 56
-13 69 -6 13 6 25 6 38 0 14 -8 22 -7 31 4 8 10 21 13 33 9 11 -3 117 -7 236
-9 127 -1 238 -7 268 -14 46 -11 55 -11 69 3 18 18 24 19 43 7 9 -6 26 -3 48
7 30 14 41 14 111 1 64 -12 89 -13 142 -3 177 34 209 35 360 15 126 -16 177
-18 385 -11 175 5 260 12 314 25 60 15 80 16 107 6 42 -15 342 -17 413 -2 34
7 99 9 175 5 106 -6 131 -4 197 15 96 27 115 26 180 -4 51 -23 59 -24 149 -15
141 14 224 12 269 -6 28 -11 45 -13 58 -6 10 6 176 11 393 13 347 3 378 2 409
-15 30 -16 39 -17 73 -5 27 9 50 10 76 3 21 -5 158 -6 327 -2 743 18 787 18
839 1 72 -23 269 -12 320 18 27 16 45 19 69 15 17 -4 83 -12 146 -17 l113 -10
56 28 c30 15 64 40 76 56 29 40 56 32 74 -20 15 -48 26 -53 43 -20 6 12 13 23
14 25 1 1 22 -9 46 -22 32 -19 45 -22 51 -13 12 19 9 27 -13 36 -25 9 -59 89
-59 139 0 32 -1 33 -29 27 -52 -11 -89 -8 -116 9 -36 24 -41 42 -21 83 19 39
39 39 44 0 4 -32 26 -35 62 -10 l24 17 -60 53 c-58 52 -59 54 -59 105 0 29 4
65 9 81 8 26 7 27 -33 27 -23 0 -63 5 -87 11 -35 9 -58 9 -99 -1 -68 -16 -102
-8 -123 32 -43 79 -77 87 -133 28 -40 -42 -57 -48 -77 -28 -19 19 -14 36 10
40 12 2 23 8 25 13 6 21 -14 34 -57 37 -42 3 -45 2 -50 -27 -5 -29 -7 -30 -68
-33 l-64 -3 16 23 c22 31 20 41 -6 35 -12 -4 -47 1 -77 9 -29 9 -70 14 -91 11
-20 -2 -51 2 -70 9 -26 11 -41 12 -68 3 -20 -7 -55 -9 -86 -5 -28 4 -96 11
-151 15 -55 5 -117 12 -137 16 -36 7 -38 6 -38 -19 0 -22 -4 -26 -29 -26 -53
0 -94 13 -98 31 -6 22 -32 29 -115 29 -59 0 -67 -2 -73 -21 -8 -23 -7 -23
-125 9 -41 11 -119 29 -173 38 -93 17 -101 17 -166 0 -66 -17 -71 -17 -172 2
-179 35 -213 37 -280 12 -57 -22 -60 -22 -79 -5 -16 15 -36 17 -112 16 -51 -1
-119 -7 -150 -12 -46 -9 -71 -8 -132 5 -58 13 -80 15 -96 6 -16 -9 -34 -9 -68
-1 -34 9 -79 8 -167 0 -146 -13 -140 -13 -195 -2 -32 6 -77 4 -160 -10 -111
-17 -115 -17 -130 0 -14 17 -20 18 -90 6 -41 -7 -96 -11 -122 -7 -35 4 -48 2
-48 -7 0 -9 -38 -10 -173 -5 -142 6 -180 4 -216 -9 -54 -19 -98 -19 -133 -1
-24 13 -29 13 -36 -1 -7 -12 -32 -15 -140 -14 -98 1 -140 -2 -168 -14 -34 -14
-41 -14 -94 6 -58 21 -56 21 -267 9 -13 -1 -104 -1 -204 0 -145 1 -185 -1
-203 -14 -17 -11 -33 -12 -62 -6 -21 5 -59 10 -84 11 -57 2 -239 -21 -264 -33
-12 -7 -33 -6 -63 2 -33 10 -47 10 -56 1 -6 -6 -38 -11 -71 -11 -47 0 -65 5
-82 21 -21 19 -26 20 -81 9 -32 -7 -75 -19 -95 -27 -40 -17 -68 -7 -68 24 0
11 -9 9 -35 -11 -33 -26 -36 -26 -102 -15 -37 6 -135 12 -218 14 -82 1 -166 5
-187 9 -31 7 -37 5 -42 -12 -12 -36 -32 -46 -66 -32 -16 7 -30 16 -30 20 0 4
-80 6 -177 4 -340 -6 -387 -9 -428 -26 -34 -14 -42 -14 -59 -2 -11 8 -41 14
-66 14 -29 0 -54 7 -70 20 -14 11 -29 20 -35 20 -5 0 -23 -20 -40 -45 -23 -34
-35 -44 -50 -41 -11 3 -60 14 -109 25 -50 12 -91 21 -93 21 -2 0 0 -12 3 -26
l7 -27 -46 32 c-53 36 -85 38 -146 11 -24 -11 -58 -20 -76 -20 -19 0 -44 -4
-57 -9 -29 -11 -148 3 -215 26 -51 16 -53 16 -74 -3 -18 -16 -36 -19 -123 -19
-70 0 -108 -5 -123 -15 -17 -11 -27 -12 -48 -2 -21 10 -33 9 -62 -3 -20 -9
-64 -15 -102 -15 -36 1 -99 -2 -139 -5 -68 -6 -73 -9 -88 -37 -13 -24 -19 -29
-37 -22 -12 4 -42 7 -67 6 -76 -2 -203 -3 -240 -1 -19 1 -108 -3 -197 -8 -141
-9 -166 -13 -199 -33 -33 -21 -48 -23 -138 -21 -92 2 -105 0 -149 -23 -53 -29
-81 -32 -139 -14 -34 10 -44 9 -85 -12 -34 -17 -67 -24 -117 -25 -138 -4 -206
-16 -234 -40 -35 -30 -23 -41 27 -27 47 15 131 16 131 2 0 -5 -3 -10 -7 -10
-5 0 -48 -7 -98 -15 -130 -21 -176 -20 -182 5 -4 16 -11 19 -27 14 -23 -7 -56
-32 -69 -51 -4 -7 -17 -13 -27 -13 -16 0 -20 7 -20 31 0 28 -3 31 -22 24 -56
-16 -95 -25 -123 -25 -16 0 -57 -14 -89 -30 -49 -25 -71 -30 -121 -29 -41 1
-72 -4 -94 -15 -51 -27 -150 -44 -194 -34 -32 7 -45 4 -90 -22 -36 -20 -67
-30 -96 -30 -23 0 -56 -7 -73 -16 -18 -9 -42 -14 -59 -10 -16 3 -31 1 -34 -4
-3 -5 -22 -14 -43 -20 -51 -16 -109 -39 -159 -63 -37 -19 -44 -20 -67 -7 -21
11 -38 11 -90 2 -35 -7 -76 -12 -91 -12 -15 0 -40 -9 -56 -21 -25 -17 -34 -19
-60 -10 -25 9 -38 7 -72 -10 -22 -12 -101 -41 -175 -65 -125 -40 -136 -42
-162 -29 -17 9 -41 12 -58 9 -17 -3 -38 -2 -48 4 -13 7 -21 5 -34 -10 -14 -17
-20 -19 -38 -9 -33 17 -41 14 -48 -24 -7 -39 -11 -41 -33 -21 -13 12 -33 13
-121 4 -191 -20 -527 -5 -603 27 -21 9 -42 31 -62 64 -22 39 -39 55 -72 68
-46 19 -50 28 -28 57 14 18 13 22 -13 46 -20 18 -33 44 -42 81 -7 30 -35 98
-61 151 -27 54 -49 104 -49 112 0 8 -15 29 -32 48 -18 18 -57 65 -87 103 -37
48 -85 94 -155 145 -107 78 -147 93 -255 90 -38 0 -50 5 -80 34 l-36 34 -196
6 c-161 6 -216 11 -300 32 -76 18 -127 25 -189 23 -87 -2 -258 9 -272 17 -4 3
-48 -3 -98 -13 -66 -12 -98 -14 -118 -7 -19 7 -39 6 -67 -2 -22 -6 -61 -9 -87
-7 -37 5 -55 1 -92 -20 -42 -23 -51 -25 -151 -19 l-106 5 -88 -42 -87 -41 -76
11 c-73 11 -79 10 -133 -15 -33 -15 -75 -26 -100 -26 -25 0 -48 -6 -54 -14 -7
-8 -31 -18 -54 -21 -23 -4 -64 -16 -90 -26 -40 -16 -58 -18 -105 -10 -70 11
-106 -5 -96 -43 5 -22 2 -24 -61 -31 -37 -4 -92 -15 -121 -26 -76 -25 -260
-69 -294 -69 -15 0 -79 -24 -142 -54 -108 -51 -118 -53 -155 -43 -36 9 -44 7
-105 -26 -36 -21 -72 -37 -80 -37 -9 0 -22 -9 -29 -20 -13 -20 -16 -20 -55 -6
-41 14 -42 14 -69 -14 -29 -31 -101 -60 -145 -60 -15 0 -60 -11 -100 -25 -40
-14 -90 -25 -110 -25 -28 0 -43 -7 -63 -30 -29 -32 -40 -35 -102 -20 -37 8
-44 6 -101 -30 -41 -27 -72 -40 -95 -40 -51 0 -189 -44 -239 -75 -23 -14 -61
-28 -84 -30 -23 -3 -61 -11 -85 -20 -24 -8 -51 -15 -60 -15 -9 0 -35 -9 -56
-20 -27 -14 -58 -20 -95 -19 -42 0 -76 -8 -142 -35 -64 -26 -103 -36 -142 -36
-44 0 -60 -5 -85 -26 -24 -20 -35 -24 -45 -15 -10 8 -16 8 -26 -3 -6 -8 -32
-27 -56 -41 -36 -21 -44 -31 -44 -54 0 -18 -7 -31 -16 -35 -21 -8 -105 23
-103 38 3 25 -2 33 -26 44 -42 19 -61 14 -86 -23 -26 -38 -52 -44 -80 -19 -16
15 -21 14 -56 -14 -23 -18 -56 -33 -83 -37 -25 -4 -52 -14 -62 -22 -9 -8 -40
-21 -70 -28 -29 -8 -79 -23 -111 -35 -32 -11 -108 -26 -170 -34 -96 -11 -124
-19 -195 -54 -51 -25 -105 -43 -140 -48 -31 -3 -69 -13 -84 -20 -15 -8 -39
-12 -52 -8 -32 8 -220 -48 -304 -90 -99 -50 -209 -83 -230 -70 -12 8 -31 8
-67 -1 -149 -35 -206 -46 -216 -39 -7 4 -19 -2 -28 -14 -15 -20 -27 -21 -159
-23 -87 -2 -147 2 -153 8 -7 7 16 49 73 135 46 68 121 189 168 269 71 122 91
150 129 175 36 23 47 37 52 64 9 49 24 85 59 134 16 24 40 68 53 99 14 31 39
65 56 78 17 12 31 32 31 43 1 37 28 98 50 113 20 14 21 21 15 78 -9 86 0 115
35 115 l27 0 -28 85 c-16 47 -29 99 -29 114 0 15 -9 36 -20 46 -11 10 -20 31
-21 49 0 26 -12 40 -75 91 -68 54 -79 69 -118 150 -51 106 -86 204 -86 243 0
15 -4 43 -9 62 -5 19 -12 47 -15 62 -4 18 -11 25 -20 22 -11 -4 -18 7 -26 38
-25 104 -34 121 -90 187 -33 38 -60 76 -60 84 0 25 -90 117 -139 141 -25 13
-64 26 -86 30 -22 4 -67 25 -100 46 -96 62 -136 72 -201 48 -23 -8 -40 -9 -56
-2 -19 9 -132 6 -243 -6 -5 -1 -89 10 -185 24 -187 27 -470 35 -520 15z"
                />
              </g>
            </svg>

            <span className="relative"> Overview</span>
          </span>{' '}
        </h2>
        <p className="mt-6 mb-8 text-lg tracking-tight px-4 md:px-8">
          Boost your development process with a powerful, feature-rich Next.js
          starter designed for speed, scalability, and developer productivity.
          Here’s what makes it stand out:
        </p>
      </div>
      <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Next.js</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Fast by default, with config optimized for performance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Tailwind CSS</h3>
          <p className="text-gray-500 dark:text-gray-400">
            A utility-first CSS framework for rapid UI development.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">ESlint &amp; Prettier</h3>
          <p className="text-gray-500 dark:text-gray-400">
            For clean, consistent, and error-free code.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">
            Extremely strict TypeScript
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Leveraging TypeScript for unmatched type safety and robust
            application development.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">
            Jest &amp; React Testing Library
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            For rock-solid unit and integration tests.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Cypress</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Utilizing Cypress to ensure seamless user experiences through
            reliable and efficient testing workflows.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Storybook</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Create, test, and showcase your components.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">
            Conventional commits git hook
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Keep your commit history neat and tidy.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Absolute imports</h3>
          <p className="text-gray-500 dark:text-gray-400">
            No more spaghetti imports.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">Chakra UI</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Headless UI components for endless customization.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">
            Streamlined CI/CD Workflows
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Harnessing GitHub Actions to automate builds, tests, and deployments
            with precision and efficiency.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700  lg:h-12 lg:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold ">
            State Management Simplified{' '}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Empowering applications with Redux for predictable and scalable
            state management solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StackSection;
