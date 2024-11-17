'use client';
import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const ComponentsSection = ({ id }: { id: string }) => (
  <Box
    id={id}
    className="components-section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={10}
    px={5}
    textAlign="center"
  >
    <Heading as="h2" size="xl" mb={4}>
      Reusable Components
    </Heading>
    <Text fontSize="lg" mb={6}>
      Explore built-in components like buttons, cards, and icons:
    </Text>
    {/* Example showcase of components */}
  </Box>
);

export default ComponentsSection;
