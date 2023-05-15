import React from 'react';
import {
  Box,
  chakra,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const links = [
    {
      title: 'Home',
      links: [
        {
          label: 'Nossa História',
          href: '/nossa-historia',
        },
        {
          label: 'Complexo',
          href: '#',
        },
      ],
    },
    {
      title: 'Blog',
      links: [
        {
          label: 'Serviços',
          href: '#',
        },
        {
          label: 'Planos',
          href: '#',
        },
      ],
    },
    {
      title: 'Contato',
      links: [
        {
          label: 'Assessoria de Imprensa',
          href: '#',
        },
      ],
    },
  ];
  const socialLinks = [
    {
      label: 'Facebook',
      icon: <FaFacebook />,
      href: '#',
    },
    {
      label: 'Instagram',
      icon: <FaInstagram />,
      href: '#',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: '#',
    },
    {
      label: 'LinkedIn',
      icon: <FaTwitter />,
      href: '#',
    },
  ];
  const footerLinks = [
    {
      label: 'Termos de Serviço',
      href: '#',
    },
    {
      label: 'Política de Privacidade',
      href: '#',
    },
    {
      label: 'Politica de Cookies',
      href: '#',
    },
  ];

  const SocialButton = chakra('a', {
    baseStyle: {
      rounded: 'lg',
      w: '8',
      h: '8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'blackAlpha.400',
      color: 'white',
      transition: 'all 0.2s',
      _hover: {
        bg: 'blackAlpha.500',
      },
    },
  });
  return (
    <Box as="footer" color="black" py="64px">
      <ChakraLink
        as={Link}
        href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE"
        isExternal
      >
        <IconButton
          icon={<FaWhatsapp />}
          size="lg"
          colorScheme="green"
          isRound
          position="fixed"
          bottom={4}
          right={4}
          zIndex={9999}
          aria-label="Botao de Whatsapp"
        />
      </ChakraLink>
      <Box maxW="7xl" px="8" mx="auto">
        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          pb="8"
          align="flex-start"
          id="top"
        >
          <Flex
            paddingEnd="12"
            mb={{
              base: '10',
              lg: 0,
            }}
            flexDir="column"
            justifyContent={{ sm: 'center', md: 'left' }}
            alignItems={{ sm: 'center', md: 'left' }}
          >
            <Box>
              <Image
                alt="Logomarca da Pax União"
                src="/logo-pax.png"
                width={176}
                height={176}
              />
            </Box>
            <HStack spacing="4" mt="8" as="ul">
              {socialLinks.map((link, idx) => (
                <SocialButton bgColor="primary.dark" key={idx} href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialButton>
              ))}
            </HStack>
          </Flex>
          <SimpleGrid
            w="full"
            maxW={{
              base: 'unset',
              lg: '2xl',
            }}
            columns={{
              base: 2,
              lg: 4,
            }}
            spacing={{
              base: '8',
              md: '4',
            }}
            fontSize="sm"
          >
            {links.map((group, idx) => (
              <Box key={idx}>
                <Text fontWeight="bold" mb="4">
                  {group.title}
                </Text>
                <Stack as="ul" listStyleType="none">
                  {group.links.map((link, idx) => (
                    <Box as="li" key={idx}>
                      <Box
                        as="a"
                        href={link.href}
                        _hover={{
                          textDecor: 'underline',
                        }}
                      >
                        {link.label}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
        <Divider my="10" borderColor="blue.300" />
        <Flex
          direction={{
            base: 'column-reverse',
            lg: 'row',
          }}
          align={{
            base: 'flex-start',
            lg: 'center',
          }}
          justify="space-between"
          fontSize="sm"
        >
          <Wrap
            id="bottom"
            spacing={{
              base: '4',
              lg: '8',
            }}
            mt={{
              base: '4',
              lg: '0',
            }}
          >
            <WrapItem>
              <Box>&copy; Grupo Pax União </Box>
            </WrapItem>
            {footerLinks.map((link, idx) => (
              <WrapItem key={idx}>
                <Box as="a" href={link.href}>
                  {link.label}
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Box>
    </Box>
  );
}
