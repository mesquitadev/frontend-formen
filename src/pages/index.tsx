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
                    as={Link}
                    href="/central-de-velorios"
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

          <Box as="section" id="servicos">
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
                    as={Link}
                    href="/crematorio"
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
                    as={Link}
                    href="/laboratorio"
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
                    as={Link}
                    href="/translado"
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
                  as={Link}
                  href="/"
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
              <Img src="/logo-pax.png" w={200} h={200} />
            </Flex>
          </Box>

          <Divider />

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
                  media="https://img.huffingtonpost.com/asset/5d0252652500006813e4f3f0.jpeg?ops=1778_1000"
                  title="Supere o luto e honre a memória"
                  description="Dicas e conselhos para honrar a memória do seu ente querido e seguir em frente."
                  href="blog/dor-luto"
                  author={{
                    name: 'Pax União',
                    href: 'dor-luto',
                  }}
                />
                <BlogCard
                  category="Dor, Luto"
                  media="https://womenintheworld.org/wp-content/uploads/2022/02/depressed-young-woman-scaled.jpg"
                  title="Perdi alguém, o que fazer? Como lidar com a papelada em um momento tão delicado?"
                  description="Confira algumas dicas para ajudar nesse momento!"
                  href="blog/perdi-alguem"
                  author={{
                    name: 'Pax União',
                    href: 'perdi-alguem',
                  }}
                />
                <BlogCard
                  category="Dor, Pet"
                  media="https://www.minstervet.com/wp-content/uploads/2018/10/mvc-001.jpg"
                  title="Confira algumas dicas para ajudar nesse momento!"
                  description="Confira essas dicas que podem você ajudar a lidar melhor com esse momento."
                  href="blog/perdi-pet"
                  author={{
                    name: 'Pax União',
                    href: 'perdi-pet',
                  }}
                />
              </SimpleGrid>
              {/*<ChakraLink fontSize="xl" fontWeight="bold" color="primary.dark">*/}
              {/*  <span>Ver todos</span>*/}
              {/*  <Box as={BsArrowRight} display="inline-block" ms="2" />*/}
              {/*</ChakraLink>*/}
            </Box>
          </Box>

          <Divider />

          <Box
            as="section"
            background="linear-gradient(#027240, transparent), url('maos.jpg')"
            backgroundBlendMode="overlay"
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius={10}
            id="plantao"
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
                <Heading size="xl" mb="4" color="white" fontWeight="extrabold">
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

      <Footer />
    </>
  );
}
