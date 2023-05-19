import Head from 'next/head';
import {
  Box,
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
        titulo="Laboratório de Tanatopraxia"
        subtitulo="Excelência e Respeito no Tratamento Póstumoo"
        bg="https://cellar-c2.services.clever-cloud.com/s3.seqens.com/uploads/2021/01/AdobeStock_240748958.jpeg"
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
                No delicado momento de despedida de um ente querido, é essencial
                contar com um laboratório de tanatopraxia que ofereça serviços
                de excelência, eficiência e respeito.
                <br />
                <br />
                O nosso laboratório de tanatopraxia desempenha um papel
                fundamental nos cuidados póstumos. Ele é responsável por aplicar
                técnicas e procedimentos que visam preservar o corpo do
                falecido, proporcionando um aspecto natural e digno durante o
                velório e o enterro. Com equipamentos e produtos adequados, o
                laboratório garante a máxima eficiência e respeito nesse momento
                delicado.
                <br />
                <br />
                O sucesso do laboratório de tanatopraxia da pax está diretamente
                relacionado à competência e habilidade dos profissionais
                envolvidos. Os técnicos especializados possuem formação
                qualificada e ampla experiência no tratamento póstumo. Com
                conhecimento anatômico e domínio das técnicas, eles desempenham
                seu trabalho de forma cuidadosa e precisa, proporcionando
                resultados excepcionais.
                <br />
                <br />
                Um aspecto fundamental do laboratório de tanatopraxia é o
                atendimento personalizado oferecido aos familiares enlutados.
                Compreender as necessidades e desejos da família é primordial
                para o sucesso do trabalho. Os profissionais demonstram empatia
                e sensibilidade, criando um ambiente acolhedor e tranquilo. Eles
                estão sempre disponíveis para esclarecer dúvidas, oferecer
                suporte emocional e garantir que as expectativas da família
                sejam atendidas.
                <br />
                <br />
                A eficiência é um dos nossos pilares. Os profissionais trabalham
                de forma organizada e ágil, seguindo procedimentos padronizados
                para garantir resultados de alta qualidade. O uso de técnicas
                avançadas e produtos especializados permite que o corpo seja
                preparado de maneira adequada, respeitando os aspectos estéticos
                e sanitários. A eficiência nos processos de preparação é
                fundamental para que a família possa se despedir de seu ente
                querido de forma digna e tranquila.
                <br />
                <br />
                Estamos comprometidos com a excelência, estamos sempre em busca
                de aprimoramento. Os profissionais se mantêm atualizados em
                relação às técnicas mais recentes e aos avanços na área. Além
                disso, a equipe está aberta a feedbacks e sugestões da família,
                visando aperfeiçoar seus serviços e superar as expectativas.
                Essa busca constante pela melhoria reflete o compromisso em
                oferecer um serviço de qualidade excepcional.
                <br />
                <br />
                O respeito aos rituais e crenças é um princípio fundamental.
                Cada família possui suas tradições e preferências, e os
                profissionais do laboratório estão preparados para acolher e
                respeitar essas escolhas. Eles trabalham em estreita colaboração
                com os familiares, garantindo que todos os aspectos culturais e
                religiosos sejam considerados durante o processo de preparação
                do corpo. Esse respeito fortalece o vínculo de confiança entre a
                família e o laboratório, proporcionando um ambiente de
                compreensão e tranquilidade.
                <br />
                <br />
                O laboratório de tanatopraxia dispõe de instalações adequadas e
                um ambiente respeitoso para realizar o trabalho. As salas de
                preparação são projetadas para atender às necessidades
                específicas, com equipamentos de última geração e condições
                sanitárias ideais.
                <br />
                <br />
                No laboratório de tanatopraxia, a higiene e a segurança são
                prioridades absolutas. Os profissionais seguem rigorosos
                protocolos de limpeza e esterilização para garantir a
                integridade do corpo e a proteção da equipe envolvida. O uso de
                equipamentos de proteção individual (EPIs) é obrigatório,
                visando à segurança de todos os envolvidos no processo. Esses
                padrões elevados de higiene e segurança asseguram que o
                tratamento póstumo seja realizado de forma responsável e
                respeitosa.
                <br />
                <br />O laboratório de tanatopraxia desempenha um papel crucial
                na preparação do corpo para o último adeus. Com profissionais
                altamente competentes, eficiência nos processos, respeito aos
                rituais e crenças, e um ambiente acolhedor, esse espaço oferece
                um serviço de excelência. Ao escolher o laboratório de
                tanatopraxia adequado, você garante que o ente querido será
                tratado com dignidade e respeito até o último momento. Os
                profissionais altamente capacitados se dedicam a oferecer um
                serviço de qualidade, atendendo às expectativas da família e
                buscando sempre superar as suas necessidades individuais.
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

      <Footer />
    </>
  );
}
