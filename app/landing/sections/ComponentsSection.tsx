'use client';
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Collapse,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Button from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import Card from '@/components/ui/Card';

const ComponentsSection = ({ id }: { id: string }) => {
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});

  const toggleCodeVisibility = (buttonType: string) => {
    setShowCode((prev) => ({ ...prev, [buttonType]: !prev[buttonType] }));
  };

  const buttonData = [
    {
      type: 'Primary Button',
      color: 'primary' as const,
      code: `<Button
    text="Primary Button"
    color="primary"
    size="medium"
    onClick={() => alert('Primary Button Clicked')}
  />`,
    },
    {
      type: 'Secondary Button',
      color: 'secondary' as const,
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
      color: 'danger' as const,
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
      color: 'success' as const,
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
      color: 'warning' as const,
      code: `<Button
    text="Warning Button"
    color="warning"
    size="medium"
    onClick={() => alert('Warning Button Clicked')}
    style={{ marginLeft: '10px' }}
  />`,
    },
  ];
  const alertData = [
    {
      type: 'Info Alert',
      status: 'info' as const,
      code: `<Alert
    status="info"
    title="Info Alert"
    description="This is an info alert."
  />`,
    },
    {
      type: 'Warning Alert',
      status: 'warning' as const,
      code: `<Alert
    status="warning"
    title="Warning Alert"
    description="This is a warning alert."
  />`,
    },
    {
      type: 'Success Alert',
      status: 'success' as const,
      code: `<Alert
    status="success"
    title="Success Alert"
    description="This is a success alert."
  />`,
    },
    {
      type: 'Error Alert',
      status: 'error' as const,
      code: `<Alert
    status="error"
    title="Error Alert"
    description="This is an error alert."
  />`,
    },
  ];

  const cardData = [
    {
      type: 'User Card',
      code: `<Card
  avatarSrc="https://bit.ly/dan-abramov"
  avatarName="Dan Abramov"
  heading="Dan Abramov"
  subheading="React Developer"
  bodyText="Dan is a software engineer working on React."
  imageSrc="https://bit.ly/2Z4KKcF"
  imageAlt="Dan Abramov"
  onCommentClick={() => alert('Comment Clicked')}
  onShareClick={() => alert('Share Clicked')}
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {buttonData.map((button) => (
            <Box key={button.type} textAlign="left">
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
              <IconButton
                mt={2}
                aria-label={`Toggle ${button.type} code`}
                icon={
                  showCode[button.type] ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )
                }
                onClick={() => toggleCodeVisibility(button.type)}
              />
              <Collapse in={showCode[button.type]} animateOpacity>
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
              </Collapse>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={6}>
        <Heading as="h3" size="lg" mb={4}>
          Alert Component
        </Heading>
        <Text fontSize="md" mb={4}>
          The `Alert` component is a versatile and reusable alert element with
          various styles and statuses.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {alertData.map((alert) => (
            <Box key={alert.type} textAlign="left">
              <Heading as="h4" size="md" mb={2}>
                {alert.type}
              </Heading>
              <Alert
                status={alert.status}
                title={alert.type}
                description={`This is a ${alert.type.toLowerCase()}.`}
              />
              <IconButton
                mt={2}
                aria-label={`Toggle ${alert.type} code`}
                icon={
                  showCode[alert.type] ? <ChevronUpIcon /> : <ChevronDownIcon />
                }
                onClick={() => toggleCodeVisibility(alert.type)}
              />
              <Collapse in={showCode[alert.type]} animateOpacity>
                <pre
                  style={{
                    textAlign: 'left',
                    backgroundColor: '#f5f5f5',
                    padding: '10px',
                    borderRadius: '5px',
                    marginTop: '10px',
                  }}
                >
                  <code>{alert.code}</code>
                </pre>
              </Collapse>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={6}>
        <Heading as="h3" size="lg" mb={4}>
          Card Component
        </Heading>
        <Text fontSize="md" mb={4}>
          The `Card` component is a versatile and reusable card element with
          various styles and configurations.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {cardData.map((card) => (
            <Box key={card.type} textAlign="left">
              <Heading as="h4" size="md" mb={2}>
                {card.type}
              </Heading>
              <Card
                avatarSrc="https://bit.ly/dan-abramov"
                avatarName="Dan Abramov"
                heading="Dan Abramov"
                subheading="React Developer"
                bodyText="Dan is a software engineer working on React."
                imageSrc="https://bit.ly/2Z4KKcF"
                imageAlt="Dan Abramov"
                onCommentClick={() => alert('Comment Clicked')}
                onShareClick={() => alert('Share Clicked')}
              />
              <IconButton
                mt={2}
                aria-label={`Toggle ${card.type} code`}
                icon={
                  showCode[card.type] ? <ChevronUpIcon /> : <ChevronDownIcon />
                }
                onClick={() => toggleCodeVisibility(card.type)}
              />
              <Collapse in={showCode[card.type]} animateOpacity>
                <pre
                  style={{
                    textAlign: 'left',
                    backgroundColor: '#f5f5f5',
                    padding: '10px',
                    borderRadius: '5px',
                    marginTop: '10px',
                  }}
                >
                  <code>{card.code}</code>
                </pre>
              </Collapse>
            </Box>
          ))}
        </SimpleGrid>
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
