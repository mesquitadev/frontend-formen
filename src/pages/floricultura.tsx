import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Footer from '@/Components/Footer';
import Header from '@/Components/header';

export default function Floricultura() {
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
      <Header />

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
              Floricultura
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
                Os arranjos florais são uma forma de expressar os sentimentos e
                homenagear aqueles que já não estão mais entre nós. Eles
                transmitem a ideia de que, mesmo em momentos de dor, ainda há
                beleza e vida ao nosso redor. Além disso, a presença de flores
                pode proporcionar um alívio para a tristeza e ajudar a acalmar o
                coração. <br /> <br />
                A equipe de floristas da pax é altamente capacitada e está
                sempre disposta a ouvir e atender às necessidades de cada
                cliente, buscando sempre oferecer opções que possam trazer
                conforto e acolhimento nesse momento tão delicado. <br /> <br />
                A escolha das flores é muito importante, pois cada espécie tem
                um significado e uma simbologia própria. Na floricultura da Pax
                união, as opções são diversas, desde as tradicionais rosas até
                as delicadas margaridas e lírios. Além disso, é possível
                personalizar os arranjos de acordo com as preferências do
                cliente, seja com a escolha de cores específicas ou a inclusão
                de mensagens ou fotos. <br /> <br />
                Buscamos oferecer não apenas produtos de qualidade, mas também
                um atendimento diferenciado e humanizado, com o objetivo de
                tornar esse momento tão difícil um pouco mais reconfortante. Os
                floristas são treinados para entender as necessidades de cada
                cliente e ajudá-los a escolher o arranjo ideal para homenagear
                seu ente querido. Eles estão sempre disponíveis para esclarecer
                dúvidas e oferecer suporte emocional. <br /> <br />
                Por fim, a nossa floricultura é um espaço que busca oferecer um
                atendimento acolhedor e personalizado, com arranjos florais de
                qualidade que possam ajudar a eternizar a memória daqueles que
                já se foram. Afinal, como já dizia o poeta, &ldquo;as flores
                falam uma linguagem que ultrapassa as barreiras do tempo e do
                espaço&ldquo;. <br /> <br />
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
                  _hover={{
                    zIndex: 1,
                    transform: 'scale(1.05)',
                  }}
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
                  _hover={{
                    zIndex: 1,
                    transform: 'scale(1.05)',
                  }}
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
                  _hover={{
                    zIndex: 1,
                    transform: 'scale(1.05)',
                  }}
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
                  _hover={{
                    zIndex: 1,
                    transform: 'scale(1.05)',
                  }}
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
