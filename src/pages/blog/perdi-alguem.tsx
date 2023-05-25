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
        titulo="Perdi alguém, o que fazer? Como lidar com a papelada em um momento tão delicado?"
        subtitulo="Confira algumas dicas para ajudar nesse momento!"
        bg="https://womenintheworld.org/wp-content/uploads/2022/02/depressed-young-woman-scaled.jpg"
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
                Lidar com a burocracia envolvida em um serviço funerário pode
                ser uma tarefa complicada e emocionalmente desgastante,
                especialmente durante um momento tão difícil como o luto. Para
                ajudar a facilitar o processo, aqui estão algumas dicas úteis:
                <br />
                <br />
                <b>CONTRATE UMA EMPRESA ESPECIALIZADA:</b> Uma boa empresa de
                serviços funerários pode lidar com muitos detalhes burocráticos.
                Como obter certidões de óbito e as permissões necessárias para a
                cremação ou enterro. Ter o auxílio de uma empresa, pode
                facilitar o processo e aliviar o estresse e a ansiedade
                envolvidos nesse momento tão difícil.
                <br />
                <br />
                <b>OBTENHA INFORMAÇÕES IMPORTANTES:</b> Entre em contato com o
                hospital onde o seu ente querido estava internado, ou com o
                médico que assinou o atestado de óbito para obter todas as
                informações necessárias para realizar os procedimentos. Ter
                todas as informações importantes em mãos pode ajudar a acelerar
                o processo e evitar atrasos desnecessários.
                <br />
                <br />
                <b>PREPARE DOCUMENTOS:</b> É importante ter os documentos
                necessários, como certidão de óbito e a identidade da pessoa que
                faleceu. Se houver algum plano funerário prévio, leve a
                documentação para a empresa funerária responsável. Isso ajudará
                a garantir que todas as informações necessárias estejam
                disponíveis para dar início no processo funerário.
                <br />
                <br />
                <b>TIRE TODAS AS DÚVIDAS:</b> Não esqueça de perguntar à empresa
                funerária quais são os serviços oferecidos, e o que está incluso
                em cada pacote. Certifique-se de que todas as informações
                estejam bem claras antes de tomar qualquer decisão, e assim
                evitar surpresas indesejáveis no mais tarde.
                <br />
                <br />
                <b>BUSQUE UM ADVOGADO:</b> Se houver problemas ou dúvidas em
                relação aos procedimentos burocráticos, considere buscar ajuda
                de um advogado especializado em questões relacionadas a serviços
                funerários. Isso pode ajudar a garantir que todos os
                procedimentos sejam executados corretamente, e minimizar a
                possibilidade de problemas legais.
                <br />
                <br />
                Lidar com a burocracia envolvida em um serviço funerário pode
                ser desafiador, mas lembre-se de que há muitas pessoas e
                empresas que estão dispostas a ajudar durante esse momento
                difícil. Seguir essas dicas pode ajudar a tornar o processo mais
                fácil e menos estressante. Esperamos que essas dicas tenham sido
                úteis para te ajudar a lidar com a burocracia envolvida em
                serviços funerários.
                <br />
                <br />
                Nós da Pax União, entendemos que esse é um momento extremamente
                delicado e difícil para você e sua família.
                <br />
                <br />
                Por isso prestamos todo nosso auxílio e oferecemos serviços
                funerários PERSONALIZADOS e HUMANIZADOS para te ajudar a lidar
                com todas as questões burocráticas durante este momento difícil.
                Nossa equipe altamente qualificada está à disposição para te
                auxiliar em todas as etapas do processo funerário. E assim
                garantir que a cerimônia seja realizada com respeito e
                dignidade.
                <br />
                <br />
                Entre em contato conosco e tire suas dúvidas! Estamos aqui para
                prestar todo o suporte necessário para que você possa se
                despedir do seu ente querido da forma mais respeitosa possível.
                <br />
                <br />
                Clique no botão abaixo e seja direcionado para nosso WhatsApp de
                atendimento 24 horas!
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
