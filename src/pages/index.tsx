import Head from 'next/head';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { Copyright, SocialMediaLinks, Testimonial } from '@/Components';
import { FiMenu, FiUser } from 'react-icons/fi';
import Slider from 'react-slick';
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiChevronRight,
  BiChevronLeft,
} from 'react-icons/bi';
import { PricingCard } from '@/Components/PricingCard';
import { PerolaIcon } from '@/Components/icons';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Head>
        <title>Pax União - Cuidando de você</title>
        <meta
          name="description"
          content="Precisa de ajuda com ações de veículos apreendidos e revisional? Nossos advogados especializados estão prontos para ajudá-lo a obter a melhor solução para o seu caso. Entre em contato conosco agora mesmo para uma consulta gratuita."
        />
        <meta
          name="keywords"
          content="ações de veículos apreendidos, revisional, advogados especializados, consultoria jurídica"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Flex direction="column">
        <Box position="relative">
          <Box position="relative" zIndex={1}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
              <Container py={{ base: '2', lg: '3' }} maxW="container.lg">
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
                        {[
                          'Home',
                          'Sobre Nós',
                          'Serviços',
                          'Contato',
                          'Blog',
                        ].map(item => (
                          <ChakraLink
                            key={item}
                            color="white"
                            fontWeight="bold"
                            _hover={{
                              color: 'primary.darkest',
                            }}
                          >
                            {item}
                          </ChakraLink>
                        ))}
                      </ButtonGroup>
                    </Flex>
                  ) : (
                    <IconButton
                      variant="ghost"
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
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Stack
                    direction={{ base: 'column', sm: 'column', md: 'row' }}
                    display={{
                      base: isOpen ? 'block' : 'none',
                      sm: isOpen ? 'block' : 'none',
                      md: 'flex',
                    }}
                  >
                    <IconButton
                      variant="ghost"
                      aria-label="Minha Conta"
                      icon={<FiUser size={20} />}
                    />
                    <IconButton
                      onClick={onOpenCart}
                      variant="ghost"
                      aria-label="Carrinho"
                      icon={<AiOutlineShoppingCart size={20} />}
                    />
                  </Stack>
                </DrawerBody>

                <DrawerFooter />
              </DrawerContent>
            </Drawer>
          </Box>
          {/* Vídeo como plano de fundo */}
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/familia-2.mp4" type="video/mp4" />
          </video>

          <Container
            maxW="container.lg"
            position="relative"
            zIndex={1}
            minHeight="50vh"
          >
            {/* Conteúdo da seção */}

            <Box as="section">
              <Flex
                direction="row"
                justify="space-between"
                backgroundColor="rgba(255, 255, 255, 0.3)"
                backdropFilter="blur(8px)"
                w="450px"
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
                md: '20',
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
                  Estamos aqui para ajudar na rápida recuperação do seu veículo.
                  Somos especialistas em defesa contra Busca e Apreensão, e
                  revisão de contratos de financiamento de veículos. Não sofra
                  mais com juros abusivos de bancos.
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
              <Img
                htmlWidth="207px"
                htmlHeight="233px"
                // height={{
                //   md: '320px',
                // }}
                // objectFit="cover"
                src="/world.png"
                alt="Imagem dos advogados especialistas em revisão de veículos apreendidos do escritório Carvalho & Brum."
              />
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
                  icon={PerolaIcon}
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
                  icon={SiHive}
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
                  icon={SiMicrosoft}
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
                    name: 'Marketing UI',
                    features: [
                      'All application UI components',
                      'Lifetime access',
                      'Use on unlimited projects',
                      'Free Updates',
                    ],
                  }}
                  icon={SiMarketo}
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

      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        px={{ base: '4', md: '8' }}
        py={8}
        bgColor="#13213A"
      >
        <Container maxW="container.lg">
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="4"
          >
            <Stack align="center">
              <Image
                alt="Logomarca do escritório Carvalho e Brum"
                src="/logo-pax.png"
                width={226}
                height={69}
              />
              <Stack direction="row">
                <ChakraLink as={Link} href="#">
                  <Text color="white" fontSize="15px">
                    Termos de Privacidade
                  </Text>
                </ChakraLink>
                <ChakraLink as={Link} href="#">
                  <Text color="white" fontSize="15px">
                    Termos de Uso
                  </Text>
                </ChakraLink>
              </Stack>
            </Stack>

            <Stack spacing="4" align="center" justify="space-between">
              <Copyright
                alignSelf={{ base: 'center', sm: 'start' }}
                textAlign="center"
              />
              <Link href="mailto:alysson.sousa@aruhub.com">
                <Image
                  alt="Logomarca da agencia ARU HUB, quem desenvolveu o design e Layout do site"
                  src="/arusig.svg"
                  width={226}
                  height={32}
                />
              </Link>
            </Stack>
            <Stack spacing="4" align="center">
              <SocialMediaLinks />
              <ChakraLink as={Link} href="mailto:contato@carvalhoebrum.adv.br">
                <Text color="white" fontSize="15px">
                  contato@carvalhoebrum.adv.br
                </Text>
              </ChakraLink>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
