import {
  Alert,
  AlertTitle,
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
  Heading,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
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
      href: '/servicos',
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
    <>
      {/*Alert*/}
      <Flex
        position="fixed"
        direction="column"
        justifyContent="right"
        paddingLeft={4}
        mt={4}
        paddingRight={4}
        zIndex={999}
      >
        {isOpenAlert && (
          <Alert
            as={Link}
            href="#AJUDA"
            status="success"
            variant="subtle"
            borderRadius={10}
          >
            <Flex direction="column">
              <AlertTitle mr={2}>
                Perdeu um ente querido? <br /> Clique Aqui!
              </AlertTitle>
            </Flex>
          </Alert>
        )}
      </Flex>
      {/*End Alert*/}
      <Box position="relative" py={10}>
        {/*Header*/}
        <Box position="relative" zIndex={1}>
          <Box as="nav">
            <Container maxW="container.lg">
              <HStack spacing="10" justify="space-between">
                <Box bgColor="white" p={4} borderRadius={10}>
                  <Image
                    alt="Logomarca da pax união desde 1976"
                    src="/logo-pax.png"
                    width={100}
                    height={100}
                  />
                </Box>
                {isDesktop ? (
                  <Flex justify="flex-end" flex="1">
                    <ButtonGroup variant="unstyled" spacing="2">
                      {menu.map(item => (
                        <ChakraLink
                          as={Link}
                          key={item.href}
                          href={item.href}
                          color="white"
                          fontWeight="bold"
                          _hover={{
                            color: 'primary.darkest',
                          }}
                        >
                          {item.label}
                        </ChakraLink>
                      ))}
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
        {/*End Header*/}

        {/* Vídeo como plano de fundo */}
        <Flex
          as="video"
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
            objectFit: 'none',
          }}
        >
          <source src="/familia-2.webm" type="video/webm" />
        </Flex>

        <Container maxW="container.lg" position="relative" zIndex={1}>
          {/* Conteúdo da seção */}

          <Box as="section" my={5}>
            <Flex
              direction="row"
              justify="space-between"
              backgroundColor="rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(8px)"
              w="100%"
              maxW={{ base: '450px', sm: '450px', md: '450px' }}
              p={4}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Heading size="2xl" mb="4" color="white" fontWeight="extrabold">
                  Eternizar memórias <br /> é um ato de Amor
                </Heading>
                <Text
                  fontSize={{
                    md: 'lg',
                  }}
                  mb="6"
                  maxW="md"
                  color="white"
                >
                  Clique em saiba mais e descubra por que somos a melhor solução
                  para você!
                </Text>
                <Button
                  bgColor="primary.dark"
                  rightIcon={<BiChevronRight size={25} />}
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                  color="white"
                >
                  Saiba Mais
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
