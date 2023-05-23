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
import Link from 'next/link';

export default function Memorial() {
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
      <Header
        titulo="Memorial"
        subtitulo="Um Espaço de Acolhimento e Respeito para Honrar a Memória dos Entes Queridos"
        bg="https://res.cloudinary.com/dxin0mfj4/image/upload/v1684529986/Pax%20Uni%C3%A3o/complexo-2_d9micy.png"
      />

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
                O memorial é muito mais do que um cemitério tradicional. É um
                espaço dedicado a honrar e preservar a memória dos entes
                queridos, proporcionando um ambiente de acolhimento, respeito e
                serenidade.
                <br />
                <br />
                No nosso memorial, valorizamos a importância do acolhimento,
                reconhecendo que esse é um momento delicado e que cada família
                enfrenta sua própria jornada de luto. Compreendemos que
                encontrar um local que transmita paz e serenidade é fundamental
                para honrar a memória dos entes queridos.
                <br />
                <br />
                Ao entrar em nosso memorial, você será recebido por um ambiente
                tranquilo e acolhedor, projetado para proporcionar conforto e
                serenidade. Nossos jardins cuidadosamente planejados, com amplas
                áreas verdes e arborizadas, criam um ambiente de paz e conexão
                com a natureza. Aqui, você encontrará um refúgio onde poderá
                refletir, recordar e homenagear seus entes queridos de maneira
                especial.
                <br />
                <br />
                <b>O Respeito em Cada Detalhe</b>
                <br />
                <br />
                No nosso memorial, o respeito é um valor fundamental que permeia
                todas as nossas ações. Compreendemos a importância de cuidar dos
                entes queridos que partiram e respeitar as necessidades e
                desejos das famílias em momentos de luto.
                <br />
                <br />
                Nossa equipe está treinada para oferecer um atendimento
                respeitoso e compassivo em todos os momentos. Estamos aqui para
                ouvir suas histórias, compreender suas necessidades e apoiá-lo
                em cada etapa do processo. Nosso compromisso é garantir que você
                se sinta confortável e amparado durante sua visita ao memorial,
                permitindo que você se concentre em honrar a memória dos seus
                entes queridos da maneira mais significativa para você.
                <br />
                <br />
                <b>Um Ambiente Arborizado e Sereno</b>
                <br />
                <br />
                Nosso memorial se destaca por sua beleza natural e ambiente
                arborizado. Cuidamos meticulosamente dos jardins, buscando criar
                um espaço de paz e tranquilidade, onde as pessoas possam
                encontrar conforto em meio à natureza.
                <br />
                <br />
                Os jardins são projetados para proporcionar um cenário sereno,
                com árvores majestosas, caminhos tranquilos e áreas de descanso
                acolhedoras. Aqui, você encontrará um local onde pode caminhar,
                sentar-se e refletir, criando momentos de conexão com a memória
                dos seus entes queridos.
                <br />
                <br />
                <b>Equipe Treinada para Todos os Momentos</b>
                <br />
                <br />
                No nosso memorial, contamos com uma equipe altamente treinada e
                sensível, pronta para oferecer suporte e assistência em todos os
                momentos. Sabemos que cada família tem necessidades únicas
                durante o processo de despedida, e estamos aqui para ajudar a
                tornar esse momento o mais tranquilo possível.
                <br />
                <br />
                Nossos profissionais são especializados em lidar com situações
                de luto e estão preparados para oferecer orientação e apoio
                emocional. Eles estão disponíveis para esclarecer suas dúvidas,
                fornecer informações sobre os serviços disponíveis no memorial e
                auxiliá-lo na escolha da melhor opção para homenagear a memória
                de seu ente querido.
                <br />
                <br />
                Além disso, nossa equipe está pronta para coordenar todos os
                detalhes logísticos do funeral, como preparação do local,
                transporte do corpo e realização das cerimônias. Você pode
                contar conosco para cuidar de todos os aspectos práticos,
                permitindo que você se concentre em estar presente e se despedir
                de maneira significativa.
                <br />
                <br />
                <b>Atendimento Humanizado em Todas as Etapas</b>
                <br />
                <br />
                No nosso memorial, acreditamos na importância de um atendimento
                humanizado, que reconheça a singularidade de cada pessoa e
                ofereça suporte emocional durante o processo de luto. Nossa
                equipe está comprometida em proporcionar um ambiente acolhedor e
                empático, onde você se sinta compreendido e respeitado.
                <br />
                <br />
                Durante todo o processo, desde o momento em que você entra em
                contato conosco até a realização das cerimônias, nossa equipe
                estará ao seu lado, oferecendo apoio emocional e orientações
                personalizadas. Entendemos que o luto é uma jornada individual e
                que cada pessoa lida com a perda de maneira única. Por isso,
                estamos aqui para ouvir suas necessidades, respeitar suas
                escolhas e adaptar nossos serviços para atender às suas
                expectativas.
                <br />
                <br />
                <b>Convidamos Você a Conhecer Nosso Memorial</b>
                <br />
                <br />
                Convidamos você a visitar nosso memorial e vivenciar a
                tranquilidade, o respeito e o acolhimento que oferecemos. Aqui,
                você encontrará um espaço cuidadosamente planejado, onde a
                natureza e a serenidade se unem para criar um ambiente propício
                para homenagens e momentos de reflexão.
                <br />
                <br />
                Estamos prontos para auxiliá-lo na organização das cerimônias e
                na escolha dos serviços mais adequados, garantindo que cada
                detalhe seja cuidado com o máximo de qualidade e respeito. Nosso
                objetivo é proporcionar uma despedida significativa e
                reconfortante, onde a memória de seus entes queridos seja
                honrada da maneira que eles merecem.
                <br />
                <br />
                Nossa equipe treinada está pronta para oferecer suporte e
                orientação em todos os momentos, garantindo um atendimento
                humanizado e respeitoso.
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
