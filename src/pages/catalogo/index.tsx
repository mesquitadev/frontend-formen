import Head from 'next/head';
import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { useName } from '@/hooks/useName';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';

export default function Home() {
  const [categories, setCategories] = useState<any>([]);

  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const router = useRouter();
  const { setPageName } = useName();
  const showBackButton = router.pathname !== '/';

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
  }, [handleGetCategories, setPageName]);

  return (
    <>
      <Head>
        <title>Formen Ilha | Catálogo</title>
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
                Categorias
              </Text>
            </Box>
            <Box></Box>
          </Flex>
        </Container>
      </Flex>
      <Container maxW="container.lg">
        <Box as="section" pb={10}>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: '8', sm: '8', md: '8', lg: '8' }}
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
                          maxHeight={150}
                          width="150px"
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
