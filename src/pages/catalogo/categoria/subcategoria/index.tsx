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

const SubCategoria = () => {
  const router = useRouter();
  const { tamanhoId, categoriaId } = router.query;
  const [subCategorias, setSubCategorias] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const handleGetSubCategories = useCallback(() => {
    setLoading(true);
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query SubCategorias($filters: SubCategoriaFiltersInput) {
            subCategorias(filters: $filters) {
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
            tamanhos: {
              id: {
                eq: tamanhoId,
              },
            },
          },
        },
      })
      .then(response => {
        setSubCategorias(response.data.subCategorias.data);
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
  }, [categoriaId, router.isReady, tamanhoId, toast]);

  useEffect(() => {
    handleGetSubCategories();
  }, [handleGetSubCategories]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Catálogo</title>
      </Head>
      <Container maxW="container.lg">
        <Box as="section" id="palestrantes">
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
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
              subCategorias.map((data: any) => {
                return (
                  <Flex
                    as={Link}
                    href={{
                      pathname: `/catalogo/produtos`,
                      query: {
                        tamanhoId: tamanhoId,
                        categoriaId: categoriaId,
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
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
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

export default SubCategoria;
