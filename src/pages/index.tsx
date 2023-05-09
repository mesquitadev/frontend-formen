import Head from 'next/head';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Divider,
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
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu, FiUser } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
import { PricingCard } from '@/Components/PricingCard';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
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
export const socialLinks = [
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
export const footerLinks = [
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

export const SocialButton = chakra('a', {
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

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenAlert(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Pax União - Eternizar Memórias é um Ato de Amor!</title>
        <meta
          name="description"
          content="Precisa de ajuda com ações de veículos apreendidos e revisional? Nossos advogados especializados estão prontos para ajudá-lo a obter a melhor solução para o seu caso. Entre em contato conosco agora mesmo para uma consulta gratuita."
        />
        <meta
          name="keywords"
          content="ações de veículos apreendidos, revisional, advogados especializados, consultoria jurídica"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" width="100%">
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
        <Box position="relative">
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
                        {menu.map(item => (
                          <ChakraLink
                            as={Link}
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
              height: '50vh',
              objectFit: 'cover',
            }}
          >
            <source src="/familia-2.webm" type="video/webm" />
          </video>

          <Container
            maxW="container.lg"
            position="relative"
            zIndex={1}
            minHeight="50vh"
            maxHeight="50vh"
          >
            {/* Conteúdo da seção */}

            <Box as="section">
              <Flex
                direction="row"
                justify="space-between"
                backgroundColor="rgba(255, 255, 255, 0.3)"
                backdropFilter="blur(8px)"
                w="100%"
                maxW={{ base: '450px', sm: '100%', md: '450px' }}
                p={4}
                borderRadius={10}
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <Heading
                    size="2xl"
                    mb="4"
                    color="white"
                    fontWeight="extrabold"
                  >
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
                    Clique em saiba mais e descubra por que somos a melhor
                    solução para você!
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

        <Container maxW="container.lg">
          <Box as="section">
            <Box
              mx="auto"
              py={{
                base: '12',
                md: '12',
              }}
            >
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                spacing="10"
              >
                <Img
                  htmlWidth="500px"
                  htmlHeight="320px"
                  height={{
                    md: '320px',
                  }}
                  objectFit="cover"
                  src="/complexo-1.png"
                  alt="Imagem da central de velórios da pax união do canto da fabril em são luís."
                  borderTopLeftRadius={20}
                  borderBottomLeftRadius={20}
                  borderBottomRightRadius={20}
                />
                <Box>
                  <Heading size="xl" mb="4" fontWeight="extrabold">
                    Nosso Complexo
                  </Heading>
                  <Text
                    fontSize={{
                      md: 'lg',
                    }}
                    mb="6"
                    maxW="md"
                    color={mode('gray.600', 'gray.400')}
                  >
                    A Pax União oferece um complexo funerário completo com
                    laboratórios, floricultura, lanchonete e central de
                    velórios. Sua equipe trabalha junto com a família e amigos
                    para organizar todos os detalhes da cerimônia, garantindo um
                    serviço funerário respeitoso e tranquilo. A empresa valoriza
                    a importância desse momento e oferece suporte completo aos
                    enlutados.
                  </Text>
                  <Button
                    bgColor="primary.dark"
                    rightIcon={<BiChevronRight size={25} />}
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Saiba mais
                  </Button>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
          <Divider />
          <Box as="section">
            <Flex
              direction="row"
              justify="space-between"
              py={{
                base: '12',
                md: '20',
              }}
            >
              <Box>
                <Heading size="xl" mb="4" fontWeight="extrabold">
                  Nossa História
                </Heading>
                <Text
                  fontSize={{
                    md: 'lg',
                  }}
                  mb="6"
                  maxW="md"
                  color={mode('gray.600', 'gray.400')}
                >
                  Preservar memórias é um ato de amor e nosso compromisso é te
                  ajudar a manter essas lembranças vivas para sempre. Conheça
                  nossa história e nossos serviços.
                </Text>
                <Button
                  bgColor="primary.dark"
                  rightIcon={<BiChevronRight size={25} />}
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                  color="white"
                >
                  Saiba mais
                </Button>
              </Box>
            </Flex>
          </Box>
          <Divider />
        </Container>

        <Flex w="100%" bgSize="cover">
          <Container maxW="container.lg">
            <Box
              as="section"
              py="14"
              // px={{ base: '4', md: '8' }}
            >
              <SimpleGrid
                columns={{ base: 1, lg: 4 }}
                spacing={{ base: '8', lg: '8' }}
                maxW="7xl"
                mx="auto"
                justifyItems="center"
                alignItems="center"
              >
                <PricingCard
                  data={{
                    price: 'R$: 200,00',
                    name: 'Plano Pérola',
                    features: [
                      'Funeral Super Luxo',
                      'Jazigo de 2 Gavetas',
                      'Carência de 120 Dias',
                    ],
                  }}
                  icon={<Img src="/perola.png" width={20} height={20} />}
                  button={
                    <Button
                      bgColor="primary.dark"
                      size="sm"
                      w="full"
                      fontWeight="extrabold"
                      color="white"
                      _hover={{
                        bgColor: 'primary.darkest',
                      }}
                    >
                      Saiba Mais
                    </Button>
                  }
                />

                <PricingCard
                  zIndex={1}
                  transform={{ lg: 'scale(1.05)' }}
                  data={{
                    price: 'R$: 250,00',
                    name: 'Plano Esmeralda',
                    features: [
                      'Funeral Especial',
                      'Jazigo de 2 Gavetas',
                      'Carência de 120 Dias',
                      '50% de desconto na aquisição da cremação individual',
                    ],
                  }}
                  icon={<Img src="/esmeralda.png" width={20} height={20} />}
                  button={
                    <Button
                      bgColor="primary.dark"
                      size="sm"
                      w="full"
                      fontWeight="extrabold"
                      color="white"
                      _hover={{
                        bgColor: 'primary.darkest',
                      }}
                    >
                      Saiba Mais
                    </Button>
                  }
                />

                <PricingCard
                  data={{
                    price: 'R$: 360,00',
                    name: 'Plano Rubi',
                    features: [
                      'Funeral Especial',
                      'Jazigo de 3 Gavetas',
                      'Carência de 120 dias',
                      '50% de desconto na aquisição da cremação individual',
                    ],
                  }}
                  icon={<Img src="/rubi.png" width={20} height={20} />}
                  button={
                    <Button
                      bgColor="primary.dark"
                      size="sm"
                      w="full"
                      fontWeight="extrabold"
                      color="white"
                      _hover={{
                        bgColor: 'primary.darkest',
                      }}
                    >
                      Saiba Mais
                    </Button>
                  }
                />

                <PricingCard
                  data={{
                    price: '$29',
                    name: 'Plano Safira',
                    features: [
                      'All application UI components',
                      'Lifetime access',
                      'Use on unlimited projects',
                      'Free Updates',
                    ],
                  }}
                  icon={<Img src="/safira.png" width={20} height={20} />}
                  button={
                    <Button
                      bgColor="primary.dark"
                      size="sm"
                      w="full"
                      fontWeight="extrabold"
                      color="white"
                      _hover={{
                        bgColor: 'primary.darkest',
                      }}
                    >
                      Saiba Mais
                    </Button>
                  }
                />
              </SimpleGrid>
            </Box>
          </Container>
        </Flex>

        <Flex w="100%">
          <Container maxW="container.lg">
            <Box
              id="AJUDA"
              as="section"
              background="linear-gradient(#027240, transparent), url('maos-2.jpg')"
              backgroundBlendMode="overlay"
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius={10}
            >
              <Flex
                direction="row"
                justify="space-between"
                py={{
                  base: '12',
                  md: '20',
                }}
                px={5}
              >
                <Box>
                  <Heading
                    size="xl"
                    mb="4"
                    color="white"
                    fontWeight="extrabold"
                  >
                    Estamos aqui para fornecer <br /> o suporte que você
                    precisa!
                  </Heading>
                  <Text
                    fontSize={{
                      md: 'lg',
                    }}
                    mb="6"
                    maxW="md"
                    color="white"
                  >
                    Entre em contato conosco agora para obter assistência
                    Imediata!
                  </Text>
                  <Button
                    as={Link}
                    href="tel:5598991741075"
                    bgColor="primary.dark"
                    rightIcon={<BiChevronRight size={25} />}
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Fale Conosco Agora!
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </Flex>

        <Flex w="100%">
          <Container maxW="container.lg">
            <Box as="section" py="8">
              <Flex mb={5} py={6} justifyContent="center" alignItems="center">
                <Text fontWeight="extrabold" fontSize="3xl">
                  Confira nosso Blog
                </Text>
              </Flex>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: '4', lg: '4' }}
                maxW="7xl"
                mx="auto"
                justifyItems="center"
                alignItems="center"
              >
                <Box>
                  <Box borderRadius={10}>
                    <Img src="/complexo-1.png" />
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae molestias neque quo similique ut vel voluptate?
                    Deserunt fugit, magnam mollitia nobis perspiciatis ratione
                    repellendus soluta tempora tempore, velit veritatis vero.
                  </Box>
                  <Button
                    as={Link}
                    size="sm"
                    href="tel:5598991741075"
                    bgColor="primary.dark"
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Leia Mais
                  </Button>
                </Box>
                <Box>
                  <Box borderRadius={10}>
                    <Img src="/complexo-1.png" />
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos dolor fugit illum magnam molestias, natus saepe
                    velit veritatis. Assumenda cumque deserunt dicta dolor
                    molestias nemo quis quos repellat. Natus, ut.
                  </Box>
                  <Button
                    as={Link}
                    size="sm"
                    href="tel:5598991741075"
                    bgColor="primary.dark"
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Leia Mais
                  </Button>
                </Box>
                <Box>
                  <Box borderRadius={10}>
                    <Img src="/complexo-1.png" />
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos dolor fugit illum magnam molestias, natus saepe
                    velit veritatis. Assumenda cumque deserunt dicta dolor
                    molestias nemo quis quos repellat. Natus, ut.
                  </Box>
                  <Button
                    as={Link}
                    size="sm"
                    href="tel:5598991741075"
                    bgColor="primary.dark"
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Leia Mais
                  </Button>
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
        </Flex>

        <Flex w="100%" pb={40}>
          <Container maxW="container.lg">
            <Box
              as="section"
              background="linear-gradient(#027240, transparent), url('maos.jpg')"
              backgroundBlendMode="overlay"
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius={10}
            >
              <Flex
                direction="row"
                justify="right"
                textAlign="right"
                py={{
                  base: '12',
                  md: '20',
                }}
                px={5}
              >
                <Box>
                  <Heading
                    size="xl"
                    mb="4"
                    color="white"
                    fontWeight="extrabold"
                  >
                    Nossa equipe de atendimento <br /> está disponível para você
                  </Heading>
                  <Text fontSize="6xl" color="white" fontWeight="extrabold">
                    24 HORAS
                  </Text>
                  <Button
                    as={Link}
                    href="tel:5598991741075"
                    bgColor="primary.dark"
                    _hover={{
                      bgColor: 'primary.darkest',
                    }}
                    color="white"
                  >
                    Fale Conosco Agora!
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Flex>

      <Box as="footer" color="black" py="64px">
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
                  <SocialButton
                    bgColor="primary.dark"
                    key={idx}
                    href={link.href}
                  >
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
    </>
  );
}
