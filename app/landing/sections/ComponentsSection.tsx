'use client';
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button as ChakraButton,
} from '@chakra-ui/react';
import Button from '@/components/ui/Button';

const ComponentsSection = ({ id }: { id: string }) => {
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [selectedButtonCode, setSelectedButtonCode] = useState<string | null>(
    null,
  );

  const toggleCodeVisibility = (buttonType: string, code: string) => {
    setShowCode((prev) => ({ ...prev, [buttonType]: !prev[buttonType] }));
    setSelectedButtonCode(code);
  };

  const buttonData = [
    {
      type: 'Primary Button',
      color: 'primary',
      code: `<Button
  text="Primary Button"
  color="primary"
  size="medium"
  onClick={() => alert('Primary Button Clicked')}
/>`,
    },
    {
      type: 'Secondary Button',
      color: 'secondary',
      code: `<Button
  text="Secondary Button"
  color="secondary"
  size="medium"
  onClick={() => alert('Secondary Button Clicked')}
  style={{ marginLeft: '10px' }}
/>`,
    },
    {
      type: 'Danger Button',
      color: 'danger',
      code: `<Button
  text="Danger Button"
  color="danger"
  size="medium"
  onClick={() => alert('Danger Button Clicked')}
  style={{ marginLeft: '10px' }}
/>`,
    },
    {
      type: 'Success Button',
      color: 'success',
      code: `<Button
  text="Success Button"
  color="success"
  size="medium"
  onClick={() => alert('Success Button Clicked')}
  style={{ marginLeft: '10px' }}
/>`,
    },
    {
      type: 'Warning Button',
      color: 'warning',
      code: `<Button
  text="Warning Button"
  color="warning"
  size="medium"
  onClick={() => alert('Warning Button Clicked')}
  style={{ marginLeft: '10px' }}
/>`,
    },
  ];

  return (
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

      <Box mt={6}>
        <Heading as="h3" size="lg" mb={4}>
          Button Component
        </Heading>
        <Text fontSize="md" mb={4}>
          The `Button` component is a versatile and reusable button element with
          various styles and sizes.
        </Text>
        <Text fontSize="md" mb={4}>
          <strong>Types of Buttons:</strong>
        </Text>
        <ul>
          {buttonData.map((button) => (
            <li key={button.type}>{button.type}</li>
          ))}
        </ul>
        <Text fontSize="md" mb={4}>
          <strong>Usage:</strong>
        </Text>

        {buttonData.map((button) => (
          <Box mt={6} key={button.type}>
            <Heading as="h4" size="md" mb={2}>
              {button.type}
            </Heading>
            <Button
              text={button.type}
              color={button.color}
              size="medium"
              onClick={() => alert(`${button.type} Clicked`)}
              style={{ marginLeft: '10px' }}
            />
            <ChakraButton
              mt={2}
              onClick={() => toggleCodeVisibility(button.type, button.code)}
            >
              {showCode[button.type] ? 'Hide Code' : 'Show Code'}
            </ChakraButton>
            {showCode[button.type] && (
              <pre
                style={{
                  textAlign: 'left',
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                }}
              >
                <code>{button.code}</code>
              </pre>
            )}
          </Box>
        ))}
      </Box>

      {/* Placeholder for other components */}
      <Heading as="h3" size="lg" mt={10} mb={4}>
        Other Components
      </Heading>
      <Text fontSize="md" mb={4}>
        More components like cards and icons will be documented here.
      </Text>
    </Box>
  );
};

export default ComponentsSection;
