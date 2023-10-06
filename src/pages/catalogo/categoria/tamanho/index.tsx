import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box, Container, Flex, SimpleGrid, useToast } from '@chakra-ui/react';
import Loading from '@/Components/Loading';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';

const Tamanho = () => {
  const router = useRouter();
  const { tamanhoId, categoriaId, subCategoriaId } = router.query;
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

  useEffect(() => {
    handleGetTamanhos();
  }, [handleGetTamanhos]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Tamanhos</title>
      </Head>
      <Container maxW="container.lg">
        <Box as="section" id="palestrantes">
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: '8', sm: '10', md: '10', lg: '16' }}
          >
            {loading ? (
              <Loading />
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
                      <Flex px="3" py="2" flexDirection="column" p={20}>
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
