import Head from 'next/head';
import {
  AspectRatio,
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import Footer from '@/Components/Footer';
import Header from '@/Components/header';
import Link from 'next/link';

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

export default function NossaHistoria() {
  return (
    <>
      <Head>
        <title>
          Pax União - Eternizar Memórias é um Ato de Amor! | Nossa História
        </title>
        <meta
          name="description"
          content="A história da Pax União remonta a 1976, quando nossa empresa foi fundada com o objetivo de oferecer serviços funerários de qualidade, atendendo às necessidades das famílias em momentos de luto. Ao longo dos anos, crescemos e nos consolidamos como referência no setor, graças à nossa dedicação, profissionalismo e compromisso com o cuidado e respeito aos entes queridos. Nossa trajetória é marcada por milhares de famílias atendidas, e nos orgulhamos de poder oferecer suporte e assistência em momentos delicados. Saiba mais sobre a nossa história e como nos tornamos uma empresa de confiança e respeito no ramo funerário."
        />
        <meta
          name="keywords"
          content="Funerária em São Luís, Serviços funerários em São Luís, Cuidados funerários em São Luís, Cerimônias fúnebres em São Luís, Cremação em São Luís, Sepultamento em São Luís, Jazigos em São Luís, Translado funerário em São Luís, Velório em São Luís, Luto em São Luís, Assistência funerária em São Luís, Funeral tradicional em São Luís, Urnas funerárias em São Luís, Coroas de flores em São Luís, Memorialização em São Luís, Funerária Pax União em São Luís, Serviços funerários de qualidade em São Luís"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header titulo="Nossa História" />

      <Container maxW="container.lg">
        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          mt={10}
        >
          <Stack spacing={4} align="center">
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
                <Text fontSize="xl" fontWeight="bold" color="black" maxW="100%">
                  Planos
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
        <Divider />
      </Container>

      {/*<Flex w="100%" mb={20}>*/}
      {/*  <Container maxW="container.lg">*/}
      {/*    <Box as="section" py="8" mb={5}>*/}
      {/*      <Flex py={6} justifyContent="center" alignItems="center">*/}
      {/*        <Text fontWeight="extrabold" fontSize="3xl">*/}
      {/*          Depoimentos*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    </Box>*/}

      {/*    <Flex*/}
      {/*      textAlign={'center'}*/}
      {/*      pt={5}*/}
      {/*      justifyContent={'center'}*/}
      {/*      direction={'column'}*/}
      {/*      width={'full'}*/}
      {/*      overflow={'hidden'}*/}
      {/*    >*/}
      {/*      <SimpleGrid*/}
      {/*        columns={{ base: 1, xl: 2 }}*/}
      {/*        spacing={'20'}*/}
      {/*        mt={16}*/}
      {/*        mb={16}*/}
      {/*        mx={'auto'}*/}
      {/*      >*/}
      {/*        {testimonials.map((cardInfo, index) => (*/}
      {/*          <TestimonialCard key={index} {...cardInfo} index={index} />*/}
      {/*        ))}*/}
      {/*      </SimpleGrid>*/}
      {/*    </Flex>*/}
      {/*  </Container>*/}
      {/*</Flex>*/}

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
                <Button
                  bgColor="primary.dark"
                  color="white"
                  as={Link}
                  href="https://api.whatsapp.com/send?phone=5598970085380"
                  target="_blank"
                >
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
