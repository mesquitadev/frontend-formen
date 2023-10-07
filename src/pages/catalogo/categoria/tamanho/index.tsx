import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';
import { useName } from '@/hooks/useName';
import { IoIosArrowBack } from 'react-icons/io';

const Tamanho = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { tamanhoId, categoriaId } = router.query;
  const [tamanhos, setTamanhos] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const handleGetTamanhos = useCallback(() => {
    setLoading(true);
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query Tamanhos($filters: TamanhoFiltersInput) {
            tamanhos(filters: $filters) {
              data {
                id
                attributes {
                  nome
                }
              }
            }
          }
        `,
        variables: {
          filters: {
            categoria: {
              id: {
                eq: categoriaId,
              },
            },
          },
        },
      })
      .then(response => {
        setTamanhos(response.data.tamanhos.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        toast({
          title: 'Erro ao buscar dados!',
          description: 'err',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId, router.isReady, toast]);

  const { setPageName } = useName();
  useEffect(() => {
    handleGetTamanhos();
  }, [setPageName, handleGetTamanhos]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Tamanhos</title>
      </Head>
      <Flex shadow={'lg'} my={5} pb={5}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            {showBackButton && (
              <Box>
                <IoIosArrowBack
                  size={30}
                  color="black"
                  onClick={() => router.back()}
                >
                  Voltar
                </IoIosArrowBack>
              </Box>
            )}

            <Box>
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Tamanhos
              </Text>
            </Box>
            <Box></Box>
          </Flex>
        </Container>
      </Flex>
      <Container maxW="container.lg">
        <Box as="section">
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: '8', sm: '10', md: '10', lg: '16' }}
          >
            {loading ? (
              <Flex
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundColor="rgba(0, 0, 0, 0.6)" // Define um fundo escuro com opacidade
                zIndex="9999" // Coloca o spinner acima de outros elementos
                alignItems="center"
                justifyContent="center"
              >
                <Spinner size="xl" color="white" />{' '}
                {/* Tamanho e cor do spinner */}
              </Flex>
            ) : (
              tamanhos.map((data: any) => {
                return (
                  <Flex
                    as={Link}
                    href={{
                      pathname: 'subcategoria',
                      query: {
                        tamanhoId: tamanhoId,
                        subCategoriaId: data.id,
                      },
                    }}
                    key={data.id}
                    p={50}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Flex px="3" py="2" flexDirection="column" p={10}>
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box
                            fontSize="5xl"
                            fontWeight="semibold"
                            as="h1"
                            lineHeight="tight"
                            isTruncated
                          >
                            {data?.attributes.nome}
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                );
              })
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Tamanho;
