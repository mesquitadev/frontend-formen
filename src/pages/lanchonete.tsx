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

export default function Planos() {
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
        titulo="Lanchonete"
        subtitulo="Produtos de alta qualidade, ambiente tranquilo com atendimento empático e respeitoso"
        bg="https://www.hotelcapuleti.it/wp-content/uploads/2019/02/Free-Breakfast-immagine-banner-1500x630.jpg"
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
            {/*<Img*/}
            {/*  htmlWidth="500px"*/}
            {/*  htmlHeight="320px"*/}
            {/*  height={{*/}
            {/*    md: '320px',*/}
            {/*  }}*/}
            {/*  objectFit="cover"*/}
            {/*  src="/complexo-2.png"*/}
            {/*  alt="Imagem da central de velórios da pax união do canto da fabril em são luís."*/}
            {/*  borderTopLeftRadius={20}*/}
            {/*  borderBottomLeftRadius={20}*/}
            {/*  borderBottomRightRadius={20}*/}
            {/*/>*/}
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

      <Footer />
    </>
  );
}
