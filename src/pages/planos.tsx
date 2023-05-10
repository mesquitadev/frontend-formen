import Head from 'next/head';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
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
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';

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
              Planos
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={{ base: '16', lg: '16' }}
            mx="auto"
            justifyItems="center"
            alignItems="center"
          >
            <Box>
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                py={10}
              >
                <Text fontWeight="bold" fontSize="48px">
                  Funeral
                </Text>
              </Flex>
              <Accordion
                allowToggle
                borderTopRadius={10}
                borderColor="primary.dark"
              >
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Plano Luxo
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui urna funerária simples, 2 buquês de flores, 50 km
                        de deslocamento, kit lanche (café e biscoito), velas e
                        paramentações para velório em residência, veste feminina
                        de três peças e tule de nylon para homens, nota de
                        falecimento, cobertura para titular mais seis
                        dependentes, carência de 90 dias. Ato: 45,00 Parcelas:
                        10 x 40,00 À Vista: 445,00 Semestralidades: 120,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Plano Super Luxo
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui urna com visor, 2 buquês de flores, 50 km de
                        deslocamento, kit lanche (café e biscoito), velas e
                        paramentações para velório em residência, veste feminina
                        de três peças e tule de nylon para homens, nota de
                        falecimento, cobertura para titular mais seis
                        dependentes, carência de 90 dias, 100 cartões digitais
                        para missa de sétimo dia. Ato: 65,00 Parcelas: 10 x
                        60,00 À Vista: 665,00 Semestralidades: 200,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Plano Especial
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui urn estilo colonial, 4 buquês de flores, salas de
                        velório ou paramentações para velório em residência,
                        taxa de sepultamento isenta, 50 km de deslocamento, kit
                        lanche (café e biscoito), veste feminina de três peças e
                        tule de nylon para homens, nota de falecimento,
                        cobertura para titular mais seis dependentes, carência
                        de 90 dias, 100 cartões digitais para missa de sétimo
                        dia. Ato: 105,00 Parcelas: 10 x 100,00 À Vista: 1.105,00
                        Semestralidades: 280,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Box>

            <Box>
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                py={10}
              >
                <Text fontWeight="bold" fontSize="48px">
                  Jazigo
                </Text>
              </Flex>
              <Accordion
                allowToggle
                borderTopRadius={10}
                borderColor="primary.dark"
              >
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Cova
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, cova. Ato: 185,00 Parcelas: 12 x
                        220,00 À Vista: 2.710,00 Semestralidades: 175,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            2 Gavetas
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, 2 gavetas. Ato: 230,00 Parcelas:
                        12 x 290,00 À Vista: 3.710,00 Semestralidades: 195,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            3 Gavetas
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, 3 gavetas. Ato: 310,00 Parcelas:
                        12 x 425,00 À Vista: 5.410,00 Semestralidades: 240,00
                        Cremação Individual: Inclui uso individual. Ato: 400,00
                        Parcelas: 10 x 340,00 À Vista: 3.800,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Box>
          </SimpleGrid>
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
