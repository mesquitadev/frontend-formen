import Head from 'next/head';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
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
} from '@chakra-ui/react';
import React from 'react';
import Footer from '@/Components/Footer';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { PricingCard } from '@/Components/PricingCard';
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
      <Header />

      <Container maxW="container.lg">
        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          py={10}
        >
          <Flex py={10} justify="center" align="center">
            <Heading size="2xl" mb="4" color="black" fontWeight="extrabold">
              Planos
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={{ base: '16', lg: '16' }}
            justifyItems="center"
            alignItems="center"
          >
            <Flex flexDir="column" width="100%">
              <Flex justifyItems="center" alignItems="center" py={10}>
                <Text fontWeight="bold" fontSize="48px">
                  Funeral
                </Text>
              </Flex>
              <Accordion>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Flex
                            as="span"
                            width="full"
                            justifyContent="space-between"
                            textAlign="left"
                          >
                            <Text fontWeight="bold" fontSize="md">
                              {' '}
                              Plano Luxo
                            </Text>
                          </Flex>
                          {isExpanded ? (
                            <RxCaretUp fontSize="30px" />
                          ) : (
                            <RxCaretDown fontSize="30px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Inclui urna funerária simples, 2 buquês de flores, 50 km
                        de deslocamento, kit lanche (café e biscoito), velas e
                        paramentações para velório em residência, veste feminina
                        de três peças e tule de nylon para homens, nota de
                        falecimento, cobertura para titular mais seis
                        dependentes, carência de 90 dias. Ato: 45,00 Parcelas:
                        10 x 40,00 À Vista: 445,00 Semestralidades: 120,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Plano Super Luxo
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui urna com visor, 2 buquês de flores, 50 km de
                        deslocamento, kit lanche (café e biscoito), velas e
                        paramentações para velório em residência, veste feminina
                        de três peças e tule de nylon para homens, nota de
                        falecimento, cobertura para titular mais seis
                        dependentes, carência de 90 dias, 100 cartões digitais
                        para missa de sétimo dia. Ato: 65,00 Parcelas: 10 x
                        60,00 À Vista: 665,00 Semestralidades: 200,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Plano Especial
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui urn estilo colonial, 4 buquês de flores, salas de
                        velório ou paramentações para velório em residência,
                        taxa de sepultamento isenta, 50 km de deslocamento, kit
                        lanche (café e biscoito), veste feminina de três peças e
                        tule de nylon para homens, nota de falecimento,
                        cobertura para titular mais seis dependentes, carência
                        de 90 dias, 100 cartões digitais para missa de sétimo
                        dia. Ato: 105,00 Parcelas: 10 x 100,00 À Vista: 1.105,00
                        Semestralidades: 280,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>

            <Flex direction="column" width="100%">
              <Box py={10} justifyItems="center" alignItems="center">
                <Text fontWeight="bold" fontSize="48px">
                  Jazigo
                </Text>
              </Box>
              <Accordion>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            Cova
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, cova. Ato: 185,00 Parcelas: 12 x
                        220,00 À Vista: 2.710,00 Semestralidades: 175,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            2 Gavetas
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, 2 gavetas. Ato: 230,00 Parcelas:
                        12 x 290,00 À Vista: 3.710,00 Semestralidades: 195,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight="bold" fontSize="md">
                            {' '}
                            3 Gavetas
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <RxCaretUp fontSize="30px" />
                        ) : (
                          <RxCaretDown fontSize="30px" />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        Inclui uso familiar (sem limite de dependentes),
                        exumação a cada 5 anos, 3 gavetas. Ato: 310,00 Parcelas:
                        12 x 425,00 À Vista: 5.410,00 Semestralidades: 240,00
                        Cremação Individual: Inclui uso individual. Ato: 400,00
                        Parcelas: 10 x 340,00 À Vista: 3.800,00
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
          </SimpleGrid>
        </Flex>

        <Divider />

        <Flex as="section" direction="column" py="5">
          <Flex py={10} justify="center" align="center">
            <Heading size="2xl" mb="4" color="black" fontWeight="extrabold">
              Planos Especiais
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
            spacing={{ base: '8', lg: '8' }}
            maxW="7xl"
            mx="auto"
            justifyItems="center"
            alignItems="center"
          >
            <PricingCard
              data={{
                price: 'R$: 200,00',
                name: 'Plano Pérola',
                features: [
                  'Funeral Super Luxo',
                  'Jazigo de 2 Gavetas',
                  'Carência de 120 Dias',
                ],
              }}
              icon={<Img src="/perola.png" width={20} height={20} />}
              button={
                <Button
                  bgColor="primary.dark"
                  size="sm"
                  w="full"
                  fontWeight="extrabold"
                  color="white"
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                >
                  Saiba Mais
                </Button>
              }
            />

            <PricingCard
              data={{
                price: 'R$: 250,00',
                name: 'Plano Esmeralda',
                features: [
                  'Funeral Especial',
                  'Jazigo de 2 Gavetas',
                  'Carência de 120 Dias',
                  '50% de desconto na aquisição da cremação individual',
                ],
              }}
              icon={<Img src="/esmeralda.png" width={20} height={20} />}
              button={
                <Button
                  bgColor="primary.dark"
                  size="sm"
                  w="full"
                  fontWeight="extrabold"
                  color="white"
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                >
                  Saiba Mais
                </Button>
              }
            />

            <PricingCard
              data={{
                price: 'R$: 360,00',
                name: 'Plano Rubi',
                features: [
                  'Funeral Especial',
                  'Jazigo de 3 Gavetas',
                  'Carência de 120 dias',
                  '50% de desconto na aquisição da cremação individual',
                ],
              }}
              icon={<Img src="/rubi.png" width={20} height={20} />}
              button={
                <Button
                  bgColor="primary.dark"
                  size="sm"
                  w="full"
                  fontWeight="extrabold"
                  color="white"
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                >
                  Saiba Mais
                </Button>
              }
            />

            <PricingCard
              data={{
                price: '$29',
                name: 'Plano Safira',
                features: [
                  'All application UI components',
                  'Lifetime access',
                  'Use on unlimited projects',
                  'Free Updates',
                ],
              }}
              icon={<Img src="/safira.png" width={20} height={20} />}
              button={
                <Button
                  bgColor="primary.dark"
                  size="sm"
                  w="full"
                  fontWeight="extrabold"
                  color="white"
                  _hover={{
                    bgColor: 'primary.darkest',
                  }}
                >
                  Saiba Mais
                </Button>
              }
            />
          </SimpleGrid>
        </Flex>

        <Divider />

        <Flex
          direction="column"
          justify="center"
          px={10}
          py={10}
          bgColor="primary.dark"
        >
          <Heading size="lg" mb="4" color="white">
            Conheça nosso Complexo
          </Heading>
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

        <Divider />

        <Flex
          my={10}
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
      </Container>

      <Footer />
    </>
  );
}
