import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';

import { WhatsappShareButton } from 'react-share';
import PageHeading from '@/Components/PageHeading';

const Produtos = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { tamanhoId, subCategoriaId } = router.query;
  const [produtos, setProdutos] = useState<any>([]);
  const [subCategoriaText, setSubCategoriaText] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const handleGetProducts = useCallback(() => {
    setLoading(true);
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query Attributes($filters: ProdutoFiltersInput) {
            produtos(filters: $filters) {
              data {
                attributes {
                  nome
                  imagem {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  tamanho {
                    data {
                      attributes {
                        nome
                      }
                    }
                  }
                  sub_categoria {
                    data {
                      attributes {
                        nome
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          filters: {
            sub_categoria: {
              id: {
                eq: subCategoriaId,
              },
            },
            tamanho: {
              id: {
                eq: tamanhoId,
              },
            },
          },
        },
      })
      .then(response => {
        const products = response.data.produtos.data;
        setProdutos(products);
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
  }, [router.isReady, subCategoriaId, tamanhoId, toast]);
  const handleGetSubCategories = useCallback(() => {
    setLoading(true);
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query SubCategoria($subCategoriaId: ID) {
            subCategoria(id: $subCategoriaId) {
              data {
                attributes {
                  nome
                }
              }
            }
          }
        `,
        variables: {
          subCategoriaId: subCategoriaId,
        },
      })
      .then(response => {
        setSubCategoriaText(response.data.subCategoria.data.attributes.nome);
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
  }, [router.isReady, subCategoriaId, toast]);

  useEffect(() => {
    handleGetProducts();
    handleGetSubCategories();
  }, [handleGetProducts, produtos]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Catálogo</title>
      </Head>
      <PageHeading
        showBackButton={showBackButton}
        pageTitle={subCategoriaText}
      />
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
                <Spinner size="xl" color="white" />{' '}
              </Flex>
            ) : (
              produtos.map((data: any) => {
                return (
                  <Flex key={data.id} py={10}>
                    <Box borderWidth="1px" rounded="lg" shadow="lg">
                      <Image
                        src={
                          data.attributes.imagem.data?.attributes?.url
                            ? data.attributes.imagem.data?.attributes.url
                            : 'https://placehold.co/200x270?text=Produto+Sem+Imagem'
                        }
                        alt={`Imagem do produto ${data?.attributes?.nome}`}
                        roundedTop="lg"
                      />

                      <Flex
                        py="3"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                      >
                        <Box mt={2}>
                          <WhatsappShareButton
                            url={data?.attributes.imagem.data?.attributes.url}
                            title={`Produto ${data?.attributes.sub_categoria?.data.attributes.nome}  - Tamanho - ${data?.attributes?.tamanho?.data?.attributes.nome}`}
                            separator=":: "
                          >
                            <Button>
                              Consultar <br /> Disponibilidade
                            </Button>
                          </WhatsappShareButton>
                        </Box>
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

export default Produtos;
