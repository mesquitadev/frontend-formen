import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  ScaleFade,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenAlert(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const menu = [
    {
      label: 'Início',
      href: '/',
    },
    {
      label: 'Nossa História',
      href: '/nossa-historia',
    },
    {
      label: 'Serviços',
      href: '/#servicos',
    },
    {
      label: 'Contato',
      href: '/conato',
    },
    {
      label: 'Blog',
      href: '/blog',
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

  const router = useRouter();

  return (
    <Flex direction="column" width="100%">
      <ScaleFade initialScale={0.9}>
        <Flex
          position="fixed"
          direction="column"
          width="100%"
          justifyContent="center"
          alignItems="flex-end"
          paddingLeft={4}
          mt={2}
          paddingRight={4}
          zIndex={999}
        >
          {isOpenAlert && (
            <Flex borderRadius={5} shadow="dark-lg">
              <Button
                as={Link}
                href="#plantao"
                bgColor="primary.dark"
                color="white"
                fontSize={30}
                _hover={{ bgColor: 'primary.darkest' }}
                width="100%"
                py={10}
              >
                Plantão 24H
              </Button>
            </Flex>
          )}
        </Flex>
      </ScaleFade>
      <Box position="relative" py={12}>
        <Box position="relative" zIndex={1}>
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container py={{ base: '4', lg: '4' }} maxW="container.lg">
              <HStack spacing="10" justify="space-between">
                <Box bgColor="white" p={4} borderRadius={10}>
                  <Image
                    alt="Logomarca da pax união desde 1976"
                    src="/logo-pax.png"
                    width={128}
                    height={126}
                  />
                </Box>
                {isDesktop ? (
                  <Flex justify="flex-end" flex="1">
                    <ButtonGroup variant="unstyled" spacing="2">
                      {menu.map(item => {
                        // Verifique se a rota atual corresponde ao href do link
                        const isActive = router.pathname === item.href;

                        // Defina os estilos baseados no estado isActive
                        const linkStyles = {
                          color: isActive ? 'primary.dark' : 'gray.500',
                          fontWeight: isActive ? 'bold' : 'normal',
                          // Adicione outros estilos de acordo com suas necessidades
                        };
                        return (
                          <ChakraLink
                            as={Link}
                            key={item.href}
                            href={item.href}
                            color="white"
                            fontWeight="bold"
                            style={linkStyles}
                            _hover={{
                              color: 'primary.darkest',
                            }}
                          >
                            {item.label}
                          </ChakraLink>
                        );
                      })}
                    </ButtonGroup>
                  </Flex>
                ) : (
                  <IconButton
                    variant="button"
                    onClick={onOpen}
                    bgColor="white"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </HStack>
            </Container>
          </Box>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Grupo Pax União</DrawerHeader>

              <DrawerBody>
                <Stack
                  direction={{ base: 'column', sm: 'column', md: 'column' }}
                  display={{
                    base: isOpen ? 'block' : 'none',
                    sm: isOpen ? 'block' : 'none',
                    md: 'flex',
                  }}
                >
                  {menu.map(item => (
                    <Flex key={item.label} width="100%">
                      <ChakraLink
                        as={Link}
                        href={item.href}
                        color="black"
                        fontWeight="bold"
                        _hover={{
                          color: 'primary.darkest',
                        }}
                      >
                        {item.label}
                      </ChakraLink>
                    </Flex>
                  ))}
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <Flex
                  direction="column"
                  width="100%"
                  align="center"
                  justify="center"
                >
                  <Text>Grupo Pax União &copy; 2023</Text>
                  <HStack spacing="4" mt="8" as="ul">
                    {socialLinks.map((link, idx) => (
                      <SocialButton key={idx} href={link.href}>
                        <Box srOnly>{link.label}</Box>
                        {link.icon}
                      </SocialButton>
                    ))}
                  </HStack>
                </Flex>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
        {/* Vídeo como plano de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/familia-2.webm" type="video/webm" />
        </video>
      </Box>
    </Flex>
  );
}

export default Header;
