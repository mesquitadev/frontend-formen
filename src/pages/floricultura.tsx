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

export default function Floricultura() {
  return (
    <>
      <Head>
        <title>
          Pax União - Eternizar Memórias é um Ato de Amor! | Floricultura
        </title>
        <meta
          name="description"
          content="A Floricultura da Pax União oferece uma ampla variedade de arranjos florais e coroas de flores para homenagear e expressar sentimentos durante os momentos de luto. Nossas flores frescas e de qualidade são cuidadosamente selecionadas para transmitir conforto e simbolizar afeto. Nossa equipe dedicada está pronta para ajudar a escolher as opções mais adequadas, de acordo com suas preferências e necessidades. Além disso, oferecemos entrega rápida e eficiente para garantir que as flores cheguem ao local desejado no momento certo. Confie na Floricultura da Pax União para tornar sua homenagem floral especial e significativa. Entre em contato conosco e descubra as opções disponíveis."
        />
        <meta
          name="keywords"
          content="Funerária em São Luís, Serviços funerários em São Luís, Cuidados funerários em São Luís, Cerimônias fúnebres em São Luís, Cremação em São Luís, Sepultamento em São Luís, Jazigos em São Luís, Translado funerário em São Luís, Velório em São Luís, Luto em São Luís, Assistência funerária em São Luís, Funeral tradicional em São Luís, Urnas funerárias em São Luís, Coroas de flores em São Luís, Memorialização em São Luís, Funerária Pax União em São Luís, Serviços funerários de qualidade em São Luís"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        titulo="Floricultura"
        subtitulo="Acolhimento, Respeito e Excelência em Cada Detalhe Floral"
        bg="https://i.pinimg.com/originals/36/33/7e/36337eca020b787d607755649d70b5db.jpg"
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
