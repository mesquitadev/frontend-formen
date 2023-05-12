import Head from 'next/head';
import {
  Box,
  Button,
  chakra,
  Container,
  createIcon,
  Divider,
  Flex,
  Heading,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Hero from '@/Components/hero';
import BlogCard from '@/Components/BlogCard';
import { BsArrowRight } from 'react-icons/bs';
import Footer from '@/Components/Footer';

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

export const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 109 125',
  d: 'M100.083 94.552c-.88-.525-1.995-.438-2.757.262-4.723 4.084-23.144 2.567-28.365 1.546-1.144-.233-3.05-2.45-3.813-4.958-.44-1.458-.41-2.712.088-3.208.762-.758 3.578-1.604 6.54-2.508 6.19-1.867 15.577-4.696 26.048-11.666 16.28-10.79 10.853-55.559 7.656-64.833-.44-1.254-1.437-4.17-3.96-3.996-2.67.204-8.037 5.687-31.943 32.723-2.347 2.654-4.605 5.22-6.776 7.641.323-1.662.499-3.266.47-4.812-.352-12.57-2.816-34.56-15.342-40.51a2.31 2.31 0 0 0-2.053 0 2.455 2.455 0 0 0-1.29 1.604c-1.79 7.846-8.33 28.99-17.101 32.49-6.366 2.537-10.53 6.445-12.32 11.607-2.17 6.183-.47 12.833 1.672 17.82-.616-.087-1.261-.146-1.848-.233-3.11-.35-5.867.408-8.213 2.304C.997 70.49.059 80.61 0 81.02a2.436 2.436 0 0 0 .85 2.041c.617.496 1.409.67 2.171.438.059-.03 5.485-1.575 10.443 0l.85.262c4.605 1.43 5.31 1.662 11.733 10.324 4.84 6.533 10.413 7.029 14.49 7.35 2.787.233 4.283.408 5.251 1.691.47.642 1.056 1.459 1.73 2.421 4.518 6.475 13.523 19.424 24.67 19.424.968 0 1.965-.088 2.992-.321 1.877-.408 3.607-.992 5.25-1.662.176-.059.323-.117.499-.205 15.81-6.795 20.034-24.906 20.239-25.752a2.246 2.246 0 0 0-1.085-2.479Zm-80.4-47.072c1.349-3.82 4.575-6.795 9.62-8.808 10.59-4.2 16.925-24.294 19.155-32.547 1.935 1.662 3.49 3.995 4.751 6.707-2.845 8.312-11.058 28.232-19.8 33.394a2.357 2.357 0 0 0-.82 3.237 2.415 2.415 0 0 0 2.053 1.167c.41 0 .821-.117 1.202-.32 8.947-5.28 16.31-21.437 19.888-30.536 1.496 5.483 2.23 11.345 2.581 15.807-3.901 4.754-13.14 15.282-17.629 17.295a2.32 2.32 0 0 0-1.173 3.12c.381.875 1.261 1.4 2.17 1.4.323 0 .646-.058.969-.204 4.488-2.012 11.469-9.45 15.898-14.553-.733 8.4-8.037 20.065-14.226 24.469-3.198 2.275-9.181 3.004-16.427 1.983-1.906-.262-3.608-1.4-4.546-3.062-2.405-4.112-5.984-11.928-3.667-18.549Zm59.984 70.754c-3.989-1.342-9.24-6.533-11.029-8.575-.85-.991-2.346-1.079-3.344-.233-.997.846-1.085 2.333-.234 3.325.557.612 4.048 4.549 8.242 7.408-9.093.991-17.658-11.258-21.853-17.295a78.555 78.555 0 0 0-1.848-2.596c-2.258-3.004-5.66-3.295-8.623-3.558-3.696-.32-7.51-.641-11.088-5.454-7.099-9.595-8.536-10.295-14.138-12.045l-.851-.262c-3.52-1.108-7.099-1.02-9.65-.7.704-2.975 2.082-6.854 4.546-8.837 1.32-1.08 2.875-1.487 4.664-1.283.939.116 1.936.233 2.963.379l2.053.262c1.73 2.625 4.546 4.433 7.685 4.87 2.083.293 4.4.497 6.805.497 4.605 0 9.445-.788 13.024-3.325 3.813-2.712 7.89-7.583 11-13.008l.264-.175c4.018-4.345 9.298-10.324 14.871-16.653 9.416-10.645 23.114-26.131 27.925-30.273.293.817.587 1.925.85 3.267-.85 1.808-11.674 24.236-31.825 38.906a2.361 2.361 0 0 0-.528 3.295c.469.642 1.173.963 1.906.963a2.33 2.33 0 0 0 1.408-.467C88.41 45.351 98.47 30.01 103.192 21.698c.528 4.084.909 8.808.997 13.737-.146.175-16.191 18.053-25.636 24.265a2.376 2.376 0 0 0-.675 3.267c.47.67 1.203 1.05 1.965 1.05.44 0 .91-.117 1.32-.38 7.216-4.754 17.57-15.399 22.968-21.173-.147 3.645-.44 7.291-1.027 10.703-.029.03-.059.03-.088.059-8.536 8.049-18.45 13.707-18.538 13.765a2.342 2.342 0 0 0-.88 3.209 2.38 2.38 0 0 0 2.053 1.195c.41 0 .792-.087 1.174-.32.352-.205 7.01-4.025 14.285-9.946-1.496 4.258-3.52 7.291-5.955 8.896-9.914 6.561-18.86 9.274-24.815 11.082-4.166 1.254-6.923 2.1-8.536 3.675-1.79 1.779-2.259 4.666-1.262 7.903 1.086 3.558 3.99 7.525 7.422 8.196.205.029 16.69 2.77 26.868.058a39.382 39.382 0 0 1-3.314 6.387c-7.979 1.283-13.552-2.712-13.816-2.887-1.027-.788-2.522-.583-3.314.466a2.33 2.33 0 0 0 .469 3.296c.264.204 5.28 3.85 12.847 4.083-2.14 2.333-4.78 4.433-8.037 5.95Z',
});

export default function Home() {
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
        <Hero />

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

        <Container maxW="container.lg" id="servicos">
          <Box as="section">
            <Flex direction="column" justify="space-between" py={10}>
              <Box>
                <Heading size="lg" mb="4" color="black">
                  Conheça nossos serviços
                </Heading>
              </Box>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing={{ base: '8', sm: '16', md: '16', lg: '16' }}
                mx="auto"
                justifyItems="center"
                alignItems="center"
              >
                <Box>
                  <Flex
                    as={Link}
                    href="/central-de-velorios"
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/pomba.svg" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Central de Velórios
                  </Text>
                </Box>
                <Box>
                  <Flex
                    as={Link}
                    href="/lanchonete"
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lanchonete.svg" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Lanchonete
                  </Text>
                </Box>
                <Box>
                  <Flex
                    as={Link}
                    href="/floricultura"
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/floricultura.svg" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Floricultura
                  </Text>
                </Box>
                <Box>
                  <Flex
                    as={Link}
                    href="/memorial"
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lapide.svg" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Memorial
                  </Text>
                </Box>
                <Box>
                  <Flex
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lapide.png" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Crematório
                  </Text>
                </Box>

                <Box>
                  <Flex
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lapide.png" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Laboratório
                  </Text>
                </Box>
                <Box>
                  <Flex
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lapide.svg" />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Traslado
                  </Text>
                </Box>

                <Box>
                  <Flex
                    _hover={{
                      zIndex: 1,
                      transform: 'scale(1.05)',
                      shadow: 'dark-lg',
                    }}
                    as={Link}
                    href="/planos"
                    borderRadius={10}
                    bgColor="primary.dark"
                    w={195}
                    h={195}
                    mb={2}
                    justify="center"
                    align="center"
                  >
                    <Img src="/lapide.svg" />
                  </Flex>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="black"
                    maxW="100%"
                  >
                    Planos
                  </Text>
                </Box>
              </SimpleGrid>
            </Flex>
          </Box>
          <Divider />
        </Container>

        <Container maxW="container.lg">
          <Box
            as="section"
            py={{
              base: '10',
              sm: '24',
            }}
          >
            <Box
              maxW={{
                base: 'xl',
                md: '7xl',
              }}
              mx="auto"
              px={{
                base: '6',
                md: '8',
              }}
            >
              <Heading size="xl" mb="8" fontWeight="extrabold">
                Confira Nosso Blog
              </Heading>
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 3,
                }}
                spacing="12"
                mb="10"
              >
                <BlogCard
                  category="Fashion"
                  media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="7 Steps to Get Professional Facial Results At Home"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                  href="#"
                  author={{
                    name: 'Segun Adebayo',
                    href: '#',
                  }}
                />
                <BlogCard
                  category="Valentine"
                  media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="The Best Excuses To Spend A Cozy Valentine’s Day In"
                  description="As much as I love an over-the-top, romantic Valentine’s date, part of me is looking"
                  href="#"
                  author={{
                    name: 'Segun Adebayo',
                    href: '#',
                  }}
                />
                <BlogCard
                  category="My Style"
                  media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
                  description="HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for"
                  href="#"
                  author={{
                    name: 'Segun Adebayo',
                    href: '#',
                  }}
                />
              </SimpleGrid>
              <ChakraLink fontSize="xl" fontWeight="bold" color="primary.dark">
                <span>Ver todos</span>
                <Box as={BsArrowRight} display="inline-block" ms="2" />
              </ChakraLink>
            </Box>
          </Box>
        </Container>

        <Flex w="100%" pb={40} id="plantao">
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

      <Footer />
    </>
  );
}
