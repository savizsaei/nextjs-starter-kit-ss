'use client';

import React from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const StackSection = ({ id }: { id: string }) => (
  <Box
    id={id}
    className="stack-section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={10}
    px={5}
    textAlign="center"
  >
    <Heading as="h2" size="xl" mb={4}>
      Technology Stack
    </Heading>
    <Text fontSize="lg" mb={6}>
      Built with modern, reliable tools:
    </Text>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Image src="/images/tech-logos/nextjs.png" alt="Next.js" />
      <Image src="/images/tech-logos/react.png" alt="React" />
      <Image src="/images/tech-logos/typescript.png" alt="TypeScript" />
    </SimpleGrid>
  </Box>
);

export default StackSection;
