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
        titulo="Crematório PAX"
        subtitulo="Honrando a Vida: Uma Despedida com Dignidade e Respeito"
        bg="https://pbs.twimg.com/media/FZtyFtHXwAEBUUZ.jpg:large"
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
                O crematório da pax é uma referência no estado quando se trata
                de serviços de cremação. Aqui, valorizamos o acolhimento, o
                respeito, o atendimento humanizado e a eficiência em cada etapa
                do processo. Sempre buscamos a excelência na qualidade que
                oferecemos e também proporcionar um ambiente de apoio e conforto
                para as famílias enlutadas.
                <br />
                <br />
                A cremação tem sido uma opção cada vez mais escolhida por
                pessoas que desejam um processo de despedida único e
                personalizado. Compreendemos a importância dessa escolha e a
                necessidade de um serviço que ofereça tranquilidade, respeito e
                dignidade aos entes queridos. Nosso crematório é um local
                projetado para proporcionar um ambiente de acolhimento, onde as
                famílias possam vivenciar o processo de despedida de maneira
                íntima e significativa.
                <br />
                <br />
                Buscamos constantemente a excelência em qualidade, desde a
                estrutura física do nosso crematório até os procedimentos
                técnicos envolvidos. Contamos com equipamentos modernos e
                tecnologicamente avançados, garantindo eficiência e segurança em
                todo o processo de cremação. Nossa equipe altamente capacitada e
                especializada opera de acordo com os mais altos padrões
                profissionais, assegurando um serviço de qualidade diferenciada.
                <br />
                <br />
                Além disso, nosso crematório segue rigorosos protocolos de
                segurança e higiene, garantindo a integridade e o respeito ao
                falecido e à família enlutada. Priorizamos a transparência em
                todas as etapas, oferecendo um acompanhamento detalhado e
                esclarecendo qualquer dúvida que possa surgir durante o processo
                de cremação.
                <br />
                <br />
                Entendemos que a perda de um ente querido é uma experiência
                profundamente dolorosa e sensível. Por isso, buscamos oferecer
                um atendimento acolhedor, respeitoso e humanizado em nosso
                crematório. Nossa equipe está treinada para lidar com empatia e
                compaixão, proporcionando suporte emocional e orientação durante
                todo o processo.
                <br />
                <br />
                Cada família é única, e estamos aqui para ouvir suas
                necessidades e desejos. Oferecemos flexibilidade para
                personalizar os rituais de despedida de acordo com as
                preferências e crenças de cada família, garantindo que o momento
                seja significativo e respeitoso. Nossa equipe está disponível
                para fornecer informações, esclarecimentos e apoio emocional,
                com o objetivo de tornar esse momento difícil um pouco mais leve
                e reconfortante.
                <br />
                <br />
                No nosso crematório, a eficiência e o profissionalismo são
                características fundamentais. Desde a chegada do falecido até a
                entrega das cinzas, todos os processos são conduzidos com
                agilidade, precisão e cuidado. Nossa equipe está preparada para
                realizar todas as etapas do processo de cremação de forma
                eficiente e respeitosa, garantindo a máxima dedicação em cada
                detalhe.
                <br />
                <br />
                Nosso objetivo é proporcionar um serviço fluido e sem
                contratempos, minimizando o tempo de espera e assegurando que
                todas as formalidades sejam cumpridas de acordo com as normas e
                regulamentações vigentes. Ao escolher nosso crematório, as
                famílias podem confiar em nossa experiência e compromisso em
                fornecer um serviço eficiente, sem comprometer a qualidade ou a
                sensibilidade requerida nesse momento tão delicado.
                <br />
                <br />
                Nosso crematório é reconhecido como uma referência estadual em
                serviços de cremação. Construímos essa reputação por meio de um
                trabalho contínuo e dedicado, proporcionando uma experiência
                excepcional para as famílias enlutadas. Recebemos a confiança de
                diversos clientes ao longo dos anos, o que nos motiva a manter e
                superar nossos padrões de qualidade.
                <br />
                <br />
                Nosso compromisso em ser uma referência está presente em cada
                aspecto do nosso serviço. Desde a infraestrutura do crematório
                até a atitude compassiva de nossa equipe, buscamos
                constantemente aprimorar nossos processos e oferecer o melhor
                suporte possível às famílias enlutadas. Sabemos que cada
                despedida é única e merece ser tratada com a máxima atenção e
                respeito, e é esse princípio que nos impulsiona a ser uma
                referência no estado.
                <br />
                <br />
                O crematório da pax é um local onde o acolhimento, o respeito, o
                atendimento humanizado e a eficiência se encontram. Oferecemos
                um serviço de cremação com qualidade diferenciada, buscando
                sempre proporcionar um ambiente de apoio e conforto para as
                famílias enlutadas. Com uma equipe especializada, equipamentos
                modernos e rigorosos padrões de segurança, estamos prontos para
                atender às necessidades individuais de cada família, garantindo
                um processo tranquilo e digno.
                <br />
                <br />
                Ao escolher nosso crematório, você pode confiar na nossa
                reputação como referência estadual em serviços de cremação.
                Estamos comprometidos em superar suas expectativas e oferecer
                uma despedida respeitosa e personalizada para o seu ente
                querido. Conte conosco para proporcionar um serviço de qualidade
                excepcional, acompanhado de um atendimento caloroso e compassivo
                durante esse momento sensível. Estamos aqui para apoiá-lo(a) em
                cada etapa do caminho.
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
