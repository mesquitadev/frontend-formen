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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '@/Components/Footer';

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
    label: 'Planos',
    href: '/planos',
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
                            key={item.href}
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
              Lanchonete
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
                A perda de um ente querido é uma das experiências mais difíceis
                pela qual podemos passar na vida. E, em meio a todo o processo
                de luto, é importante contar com o apoio de profissionais que
                entendam a importância desse momento e possam oferecer suporte
                em todas as etapas. É nesse sentido que a pax união se destaca,
                oferecendo um atendimento completo e cuidadoso aos seus
                clientes. <br /> <br />
                Muitos não sabem, mas a Pax União conta com uma lanchonete
                própria, pensada para atender às necessidades dos nossos
                clientes e parceiros. E não se trata de uma simples lanchonete,
                mas sim de um espaço cuidadosamente planejado para oferecer
                conforto e acolhimento em todos os momentos. <br /> <br />
                Ao entrar na nossa lanchonete, o primeiro aspecto que chama a
                atenção é a decoração cuidadosa e discreta, que busca criar um
                ambiente acolhedor e tranquilo. As cores são suaves, os móveis
                são confortáveis e há detalhes que remetem ao tema esperança.{' '}
                <br /> <br />
                Mas o ponto alto da lanchonete não é a decoração, e sim a
                qualidade dos produtos oferecidos. Ao contrário do que se pode
                imaginar, não se trata de uma lanchonete comum, com opções
                apenas de fast food e refrigerantes. Pelo contrário, investimos
                em produtos de alta qualidade e preparados com cuidado e
                carinho. <br /> <br />
                Os funcionários são treinados para oferecer um atendimento
                atencioso e empático, entendendo que os clientes que passam por
                ali estão em um momento singular e que precisam do máximo apoio.{' '}
                <br /> <br />
                Assim, além de se preocupar com a qualidade dos produtos
                oferecidos, também buscamos oferecer um ambiente acolhedor e uma
                experiência positiva aos seus clientes. <br /> <br />
                É comum ver funcionários conversando com os clientes, oferecendo
                um ombro amigo ou simplesmente escutando as histórias e memórias
                que eles têm do ente querido. <br /> <br />
                Assim, ao oferecer um ambiente acolhedor e produtos de
                qualidade, a lanchonete da PAX união contribui para que as
                memórias daqueles que se foram possam ser guardadas com carinho
                e ternura. E, como diz o nosso lema, &ldquo;eternizar memórias é
                um ato de amor&ldquo;. E é exatamente isso que buscamos oferecer
                aos nossos clientes: não apenas um serviço de qualidade, mas
                também um suporte emocional e uma forma de honrar a memória
                daqueles que partiram. <br /> <br />
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
                <Button bgColor="primary.dark" color="white">
                  Entre em Contato
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Container>
      </Flex>

      <Footer />
    </>
  );
}
