import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';
import PageHeading from '@/Components/PageHeading';

const Categoria = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { categoriaId } = router.query;

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
  }, [router.isReady, categoriaId, toast]);

  useEffect(() => {
    handleGetTamanhos();
  }, [handleGetTamanhos]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Tamanhos</title>
      </Head>

      <PageHeading showBackButton={showBackButton} pageTitle="Tamanhos" />
      <Container maxW="container.lg">
        <Box as="section" id="palestrantes">
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
                backgroundColor="rgba(0, 0, 0, 0.6)"
                zIndex="9999"
                alignItems="center"
                justifyContent="center"
              >
                <Spinner size="xl" color="white" />
              </Flex>
            ) : (
              tamanhos.map((data: any) => {
                return (
                  <Flex
                    as={Link}
                    href={{
                      pathname: `/catalogo/categoria/subcategoria`,
                      query: {
                        tamanhoId: data.id,
                        categoriaId: categoriaId,
                      },
                    }}
                    key={data.id}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    my={10}
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
                      <Flex px="3" py="2" flexDirection="column" p={5}>
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

export default Categoria;
