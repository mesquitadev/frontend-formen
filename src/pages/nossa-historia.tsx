import Head from 'next/head';
import {
  Alert,
  AlertTitle,
  AspectRatio,
  Avatar,
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
  Icon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiUser } from 'react-icons/fi';
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

const testimonials = [
  {
    name: 'Brandon P.',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Krysta B.',
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Daniel T.',
    role: 'Musician',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
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

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={mode('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        top: 0,
        left: 0,
      }}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
        </chakra.p>
      </Flex>
    </Flex>
  );
}

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
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/familia-2.webm" type="video/webm" />
          </video>
        </Box>
      </Flex>

      <Container maxW="container.lg">
        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          mt={10}
        >
          <Flex py={10} justify="center" align="center">
            <Heading size="2xl" mb="4" color="black" fontWeight="extrabold">
              Nossa História
            </Heading>
          </Flex>
          <Stack spacing={4} align="center">
            <Img
              htmlWidth="500px"
              htmlHeight="320px"
              height={{
                md: '320px',
              }}
              objectFit="cover"
              src="/complexo-2.png"
              alt="Imagem da central de velórios da pax união do canto da fabril em são luís."
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
              borderBottomRightRadius={20}
            />
            <Box width="100%">
              <Text
                fontSize={{
                  md: 'lg',
                }}
                mb="6"
              >
                A Pax União foi fundada no dia 7 de agosto de 1976 pelo casal
                goianiense Moacir Machado e Donizette Machado, em São Luís do
                Maranhão. <br /> O negócio surgiu através da constatação de que
                o povo maranhense não tinha um serviço de prevenção familiar, o
                que gerava um impacto mais doloroso ainda ao se perder um ente
                querido. Com essa visão e com o carinho e valorização mútuos
                entre a empresa e o povo Ludovicense, o fundador Moacir Machado
                liderou as atividades do Grupo Empresarial Pax união, que
                tornou-se uma grande referência nacional em complexo de apoio
                aos familiares, em serviços fúnebres como salas de velórios,
                jazigos e até mesmo grupos de apoio para aqueles que mais
                precisam de acolhimento após o luto. <br /> <br /> A Pax União é
                um grande exemplo de empreendedorismo, serviço sério, humanizado
                e de demonstração de amor às pessoas através de serviços
                prestados. Durante os mais de 40 anos de serviços prestados,
                continuamos em ascensão, porque o foco foi e continua sendo o de
                entregar o melhor serviço e sentimento possíveis para que o povo
                maranhense homenageie as pessoas amadas, as pessoas mais
                importantes das suas vidas. Daí nasce o lema, “Preservar
                memórias é um ato de amor”.
              </Text>
            </Box>
          </Stack>
        </Flex>
        <Divider />

        <Box as="section">
          <Flex
            direction="column"
            justify="space-between"
            px={10}
            py={10}
            bgColor="primary.dark"
          >
            <Box>
              <Heading size="lg" mb="4" color="white">
                Conheça nosso Complexo
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: '16', lg: '16' }}
              mx="auto"
              justifyItems="center"
              alignItems="center"
            >
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/pomba.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Central de Velórios
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/lanchonete.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Lanchonete
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/flores.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Floricultura
                </Text>
              </Box>
              <Box>
                <Flex
                  borderRadius={10}
                  bgColor="card.secondary"
                  w={195}
                  h={195}
                  mb={2}
                  justify="center"
                  align="center"
                >
                  <Img src="/lapide.png" />
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Memorial
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
        <Divider />
      </Container>

      <Flex w="100%" mb={20}>
        <Container maxW="container.lg">
          <Box as="section" py="8" mb={5}>
            <Flex py={6} justifyContent="center" alignItems="center">
              <Text fontWeight="extrabold" fontSize="3xl">
                Depoimentos
              </Text>
            </Flex>
          </Box>

          <Flex
            textAlign={'center'}
            pt={5}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
          >
            <SimpleGrid
              columns={{ base: 1, xl: 2 }}
              spacing={'20'}
              mt={16}
              mb={16}
              mx={'auto'}
            >
              {testimonials.map((cardInfo, index) => (
                <TestimonialCard key={index} {...cardInfo} index={index} />
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </Flex>

      <Flex w="100%" mb={20}>
        <Container maxW="container.lg">
          <Box as="section" py="8" mb={5}>
            <Flex py={6} justifyContent="center" alignItems="center">
              <Text fontWeight="extrabold" fontSize="3xl">
                Conheça um pouco mais da nossa história
              </Text>
            </Flex>
          </Box>

          <AspectRatio maxH={500} ratio={1}>
            <iframe
              title="História do grupo Pax União"
              src="https://www.youtube.com/embed/DIGE5XON1Gc"
              allowFullScreen
            />
          </AspectRatio>
        </Container>
      </Flex>

      <Container maxW="container.lg">
        <Divider />
      </Container>

      <Flex w="100%" mb={20}>
        <Container maxW="container.lg">
          <Box as="section" py="8" mb={5}>
            <Flex
              py={6}
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Stack spacing={4} align="center">
                <Text fontWeight="extrabold" fontSize="4xl">
                  ATENDIMENTO 24H
                </Text>
                <Text>Floricultura - Laboratório - Lanchonete</Text>
                <Button bgColor="primary.dark" color="white">Entre em Contato</Button>
              </Stack>
            </Flex>
          </Box>
        </Container>
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
