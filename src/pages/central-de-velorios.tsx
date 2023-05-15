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

export default function CentralDeVelorios() {
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
              Central de Velórios
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
                Perder alguém que amamos é uma das situações mais difíceis que
                podemos enfrentar na vida. Além do sofrimento emocional, muitas
                vezes precisamos lidar com questões práticas, como a organização
                do velório e do funeral. É nesse momento que a nossa Central de
                Velórios entra, oferecendo acolhimento e respeito para você e
                sua família. <br /> <br />
                Na Central de Velórios da pax você encontra uma equipe preparada
                para atender suas necessidades e oferecer o apoio necessário
                nesse momento tão delicado. Nosso objetivo é fazer com que você
                se sinta acolhido e confortado, para que possa lidar com o luto
                da melhor forma possível. <br /> <br />
                O que nos diferencia de outras empresas do ramo é justamente o
                nosso foco no acolhimento e no respeito. Sabemos que cada pessoa
                é única e tem suas próprias crenças e valores. Por isso, estamos
                preparados para atender a todas as demandas, respeitando sempre
                as escolhas e preferências de cada família. <br /> <br />
                Nossa estrutura é pensada para oferecer todo o conforto e
                tranquilidade que você precisa nesse momento. Contamos com salas
                amplas e bem iluminadas, equipadas com ar-condicionado e
                confortáveis poltronas. Além disso, temos uma equipe de limpeza
                que mantém o ambiente sempre limpo e organizado. <br /> <br />
                Nossa arquitetura, paisagismo e prestação de serviços de alta
                qualidade nos tornam referência nacional em conforto e
                atendimento personalizado. Além disso, nossa ampla área comum
                com jardins e praças, transmite calma e conforto para todos os
                visitantes se sentirem acolhidos e cuidados durante este momento
                difícil. <br /> <br />
                Outro diferencial da Central de Velórios é a nossa preocupação
                com o meio ambiente. Sabemos que muitos materiais utilizados em
                velórios e funerais podem causar impactos ambientais negativos.
                Por isso, investimos em soluções mais sustentáveis, como a
                utilização de materiais biodegradáveis e a adoção de práticas de
                reciclagem. <br /> <br />
                Nosso compromisso é com a excelência no atendimento e na
                prestação de serviços. Por isso, investimos constantemente em
                capacitação para nossa equipe, além de modernizar nossos
                equipamentos e tecnologias. Tudo isso para que você tenha a
                melhor experiência possível ao utilizar nossos serviços. <br />{' '}
                <br />
                Se você está em busca de um serviço que oferece acolhimento e
                respeito, não hesite em nos procurar. Estamos sempre prontos
                para ajudar você e sua família nesse momento tão difícil. Venha
                conhecer a Central de Velórios e veja como podemos fazer a
                diferença na hora de se despedir de quem amamos. <br /> <br />
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
