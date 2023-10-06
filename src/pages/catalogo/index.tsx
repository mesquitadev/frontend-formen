import Head from 'next/head';
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';
import Link from 'next/link';

import Loading from '@/Components/Loading';

export default function Home() {
  const [categories, setCategories] = useState<any>([]);

  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const handleGetCategories = useCallback(() => {
    setLoading(true);

    client
      .query({
        query: gql`
          query Categorias {
            categorias {
              data {
                id
                attributes {
                  nome
                  imagem {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then(response => {
        setCategories(response.data.categorias.data);
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
  }, [toast]);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Catálogo</title>
      </Head>
      <Container maxW="container.lg">
        <Box as="section">
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: '8', sm: '10', md: '10', lg: '16' }}
          >
            {loading ? (
              <Loading />
            ) : (
              categories.map((data: any) => {
                return (
                  <Flex
                    as={Link}
                    href={{
                      pathname: `catalogo/categoria`,
                      query: {
                        categoriaId: data.id,
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
                      <Flex px="3" py="2" flexDirection="column">
                        <Image
                          src={
                            data.attributes.imagem.data?.attributes.url
                              ? data.attributes.imagem.data?.attributes.url
                              : 'https://placehold.co/200x270?text=Produto+Sem+Imagem'
                          }
                          alt={`Imagem do produto ${data?.attributes?.nome}`}
                          rounded="lg"
                          minWidth={150}
                        />
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
}
