import Head from 'next/head';
import {
  Box,
  Button,
  Container,
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
import Hero from '@/Components/hero';
import BlogCard from '@/Components/BlogCard';
import { BsArrowRight } from 'react-icons/bs';
import Footer from '@/Components/Footer';

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
                    <Img src="/cemetery.png" />
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
                    <Img src="/ashes.png" />
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
                    <Img src="/medical-lab.png" />
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
                    <Img src="/airplane.png " />
                  </Flex>
                  <Text fontSize="xl" fontWeight="bold" color="black">
                    Translado
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
                    <Img src="/parchment.png" />
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
                  category="Luto, Comunidade"
                  media="grupo-apoio.jpg"
                  title="Conheça o nosso grupo de enfrentamento ao Luto"
                  description="Você não está sozinho(a). O luto é uma jornada dolorosa, mas juntos podemos superar. Apresentamos o Grupo de Enfrentamento ao Luto, um espaço seguro e acolhedor para compartilhar experiências, encontrar apoio e descobrir forças dentro de si mesmo(a). Aqui, você encontrará uma comunidade de pessoas que entendem a dor que você está passando e estão dispostas a caminhar ao seu lado."
                  href="#"
                  author={{
                    name: 'Pax União',
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
