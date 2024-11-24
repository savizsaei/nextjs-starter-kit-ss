'use client';

import Button from '@/components/ui/Button';
import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const HeroSection = ({ id }: { id: string }) => (
  <Box
    id={id}
    className="hero-section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={10}
    px={5}
    textAlign="center"
  >
    <Heading as="h1" size="2xl" mb={4}>
      Welcome to Next.js Starter
    </Heading>
    <Text fontSize="lg" mb={6}>
      Your go-to solution for fast project setups!
    </Text>
    <Button
      type="button"
      variant="solid"
      color="blue"
      onClick={() => window.scrollTo(0, document.body.scrollHeight)}
      className="mb-4 md:mb-0"
    >
      Get Started
    </Button>
    <Button
      type="button"
      variant="solid"
      color="slate"
      onClick={() =>
        window.open('https://github.com/aelabid/Next-StarterKit', '_blank')
      }
      className="ml-0 md:ml-4"
    >
      View on GitHub
    </Button>
  </Box>
);

export default HeroSection;
