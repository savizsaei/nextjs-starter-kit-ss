// LanguageSwitcher.tsx
import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: 'https://flagcdn.com/w20/gb.png',
  },
  {
    code: 'fr',
    name: 'French',
    flag: 'https://flagcdn.com/w20/fr.png',
  },
  {
    code: 'es',
    name: 'Spanish',
    flag: 'https://flagcdn.com/w20/es.png',
  },
];

const LanguageSwitcher = () => {
//   const router = useRouter();
//   const { locale } = router;
  const currentLanguage = languages[0];
    // languages.find((lang) => lang.code === locale) || languages[0];

  const menuBg = useColorModeValue('white', 'gray.800');
  const menuHoverBg = useColorModeValue('gray.100', 'gray.700');
  const buttonBg = useColorModeValue('white', 'gray.800');
  const buttonColor = useColorModeValue('gray.600', 'gray.300');

//   const handleLanguageChange = (newLocale: string) => {
//     const { pathname, asPath, query } = router;
//     router.push({ pathname, query }, asPath, { locale: newLocale });
//   };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FiChevronDown />}
        bg={buttonBg}
        color={buttonColor}
        _hover={{ bg: menuHoverBg }}
        px={4}
        py={2}
        rounded="md"
      >
        <HStack>
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width="20px"
            height="15px"
          />
          <Text textTransform="uppercase">{currentLanguage.code}</Text>
        </HStack>
      </MenuButton>
      <MenuList bg={menuBg}>
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            // onClick={() => handleLanguageChange(language.code)}
            _hover={{ bg: menuHoverBg }}
          >
            <HStack>
              <Image
                src={language.flag}
                alt={language.name}
                width="24px"
                height="16px"
              />
              <Text>{language.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
