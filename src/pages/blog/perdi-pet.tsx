import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
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
      <Header
        titulo="Dicas para Superar o Luto pela Perda de um Pet de Estimação"
        subtitulo="Confira essas dicas que podem você ajudar a lidar melhor com esse momento."
        bg="https://www.minstervet.com/wp-content/uploads/2018/10/mvc-001.jpg"
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
                <b>Permita-se Sentir as Emoções</b>
                Lidar com o luto pela perda de um pet é um processo emocional.
                Permita-se sentir e expressar suas emoções. Saiba como lidar com
                a tristeza, raiva e culpa. Aprenda a superar o luto de maneira
                saudável e respeitando o seu tempo.
                <br />
                <br />
                <b> Permita-se Sentir as Emoções</b>
                Encontre apoio emocional durante o processo de luto pela perda
                do seu pet. Compartilhe suas emoções com pessoas compreensivas e
                encontre consolo no suporte mútuo. Descubra a importância de
                compartilhar suas experiências de luto.
                <br />
                <br />
                <b> Crie um Ritual de Despedida</b>
                Realize um ritual de despedida significativo para honrar a
                memória do seu pet. Descubra maneiras de criar um ambiente
                adequado para a despedida e obtenha conforto através de rituais
                personalizados. Saiba como organizar um momento de encerramento
                para lidar com a perda.
                <br />
                <br />
                <b>Preserve as Memórias</b>
                Preserve as memórias do seu pet de estimação como uma forma de
                lidar com a perda. Saiba como criar um registro duradouro de
                momentos especiais compartilhados com seu animal de estimação.
                Descubra estratégias para manter vivas as lembranças afetuosas.
                <br />
                <br />
                <b>Encontre um Suporte Profissional</b>
                Se necessário, busque apoio profissional para enfrentar o luto
                pela perda de um pet. Aprenda a encontrar terapeutas
                especializados em lidar com o luto pet. Descubra como obter
                orientação e estratégias para enfrentar a dor emocional.
                <br />
                <br />
                <b>Considere adotar um novo Pet</b>
                Após o período de luto, considere a possibilidade de adotar um
                novo pet de estimação. Descubra como encontrar um novo
                companheiro e trazer alegria de volta à sua vida. Saiba como a
                adoção de um novo animal pode ajudar no processo de cura.
                <br />
                <br />
                <b>Busque Apoio em Comunidades Online</b>
                Encontre apoio em comunidades online dedicadas ao luto pet.
                Descubra fóruns e grupos de discussão onde você pode
                compartilhar suas experiências e encontrar suporte. Saiba como
                se conectar com pessoas que compreendem a perda de um animal de
                estimação.
                <br />
                <br />
                <b> Cuide de Si Mesmo</b>
                Durante o luto pela perda de um pet, é essencial cuidar de si
                mesmo. Descubra a importância do autocuidado e como isso pode
                ajudar na cura emocional. Saiba como adotar hábitos saudáveis
                para enfrentar o luto de maneira equilibrada.
              </Text>
            </Box>
          </Stack>
        </Flex>
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
