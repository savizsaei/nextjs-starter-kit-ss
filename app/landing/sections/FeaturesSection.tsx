'use client';
import React from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import Icon from '@/components/ui/Icon';

const FeaturesSection = ({ id }: { id: string }) => (
  <Box
    id={id}
    className="features-section"
    bg={useColorModeValue('gray.50', 'gray.800')}
    py={10}
    px={5}
    textAlign="center"
  >
    <Heading as="h2" size="xl" mb={4}>
      Features
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Box>
        <Icon name="fast" />
        <Text fontSize="lg">Quick setup and blazing-fast performance.</Text>
      </Box>
      <Box>
        <Icon name="scalable" />
        <Text fontSize="lg">Scalable architecture for growing projects.</Text>
      </Box>
      <Box>
        <Icon name="customizable" />
        <Text fontSize="lg">Fully customizable to fit any use case.</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default FeaturesSection;
