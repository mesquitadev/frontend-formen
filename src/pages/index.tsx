import Head from 'next/head';
import {
  Badge,
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Select,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import Hero from '@/Components/hero';
import { client } from '@/service';
import { gql } from '@apollo/client';
import Link from 'next/link';
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from '@ajna/pagination';

export default function Home() {
  const [produtos, setProdutos] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [sizes, setSizes] = useState<any>([]);
  const [manufacturers, setManufacturer] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const handleGetProducts = useCallback(
    (page = 1, categoryId = null, marcaId = null, tamanhoId = null) => {
      setLoading(true);
      let filters: any = {};
      let shouldApplyFilters = false;

      if (categoryId !== null) {
        filters.categoria = { id: { eq: categoryId } };
        shouldApplyFilters = true;
      }

      if (marcaId !== null) {
        filters.marca_fabricante = { id: { eq: marcaId } };
        shouldApplyFilters = true;
      }

      if (tamanhoId !== null) {
        filters.tamanho = { id: { eq: tamanhoId } };
        shouldApplyFilters = true;
      }

      if (!shouldApplyFilters) {
        filters = null;
      }

      client
        .query({
          query: gql`
            query Products(
              $filters: ProductFiltersInput
              $page: Int
              $pageSize: Int
            ) {
              products(
                filters: $filters
                pagination: { page: $page, pageSize: $pageSize }
              ) {
                data {
                  attributes {
                    categoria {
                      data {
                        attributes {
                          nome
                        }
                        id
                      }
                    }
                    nome
                    preco
                    em_estoque
                    imagem {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    marca_fabricante {
                      data {
                        attributes {
                          nome
                        }
                        id
                      }
                    }
                    tamanho {
                      data {
                        attributes {
                          tamanho
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            filters,
            page,
            pageSize: 10,
          },
        })
        .then(response => {
          const products = response.data.products.data;
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
    },
    [toast],
  );

  const handleMultipleFilters = (
    categoryId: any,
    marcaId: any,
    tamanhoId: any,
  ) => {
    const filteredCategoryId = categoryId == 'Todos' ? null : categoryId;
    const filteredMarcaId = marcaId == 'Todos' ? null : marcaId;
    const filteredTamanhoId = tamanhoId == 'Todos' ? null : tamanhoId;
    handleGetProducts(
      1,
      filteredCategoryId,
      filteredMarcaId,
      filteredTamanhoId,
    );
  };

  function handleGetCategories() {
    setLoading(true);
    client
      .query({
        query: gql`
          query GetCategories {
            categories {
              data {
                id
                attributes {
                  nome
                }
              }
            }
          }
        `,
      })
      .then(response => {
        setCategories(response.data.categories.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleGetSizes() {
    setLoading(true);
    client
      .query({
        query: gql`
          query Tamanhos {
            tamanhos {
              data {
                attributes {
                  tamanho
                }
              }
            }
          }
        `,
      })
      .then(response => {
        setSizes(response.data.tamanhos.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleGetManufacturers() {
    setLoading(true);
    client
      .query({
        query: gql`
          query Attributes {
            marcas {
              data {
                attributes {
                  nome
                }
              }
            }
          }
        `,
      })
      .then(response => {
        setManufacturer(response.data.marcas.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    handleGetProducts();
    handleGetCategories();
    handleGetSizes();
    handleGetManufacturers();
  }, [handleGetProducts]);
  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    isDisabled,
    pageSize,
    setPageSize,
  } = usePagination({
    total: produtos.length,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1,
    },
  });

  // handlers
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log('request new data with ->', nextPage);
  };

  // const handleSendWhatsappMessage = useCallback((urlDaImagem: string) => {
  //   const numeroWhatsApp = '+5598991741075';
  //   const mensagem = 'Olá, esse produto ainda está disponível?';
  //   // Construa o link com a URL da imagem
  //   const linkDaImagem = urlDaImagem
  //     ? urlDaImagem
  //     : 'https://placehold.co/200x270?text=Produto+Sem+Imagem';
  //   // Concatene a mensagem com o link da imagem1
  //   const mensagemComLink = `${mensagem}\n${linkDaImagem}`;
  //
  //   // Encode a mensagem para usar na URL
  //   const mensagemEncoded = encodeURIComponent(mensagemComLink);
  //
  //   // Construa o link do WhatsApp
  //   const linkDoWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemEncoded}`;
  //
  //   window.open(linkDoWhatsApp, '_blank');
  // }, []);

  // useEffect(() => {
  //   if (navigator.share === undefined) {
  //     if (window.location.protocol === 'http:') {
  //       window.location.replace(
  //         window.location.href.replace(/^http:/, 'https:'),
  //       );
  //     }
  //   }
  // }, []);

  // const handleOnSubmit = async () => {
  //   const whatsappLink =
  //     'https://api.whatsapp.com/send?text=YOUR_MESSAGE_HERE&url=URL_OF_THE_LINK_TO_SHARE';
  //   const imageUrl = 'URL_OF_THE_IMAGE_TO_SHARE';
  //
  //   try {
  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();
  //     const file = new File([blob], 'share.jpg', { type: blob.type });
  //
  //     if (navigator.canShare && navigator.canShare({ files: [file] })) {
  //       await navigator.share({
  //         title: 'title',
  //         text: 'your text',
  //         url: whatsappLink,
  //         files: [file],
  //       });
  //       console.log('Successful share');
  //     } else {
  //       console.log('O sistema não suporta o compartilhamento de arquivos.');
  //     }
  //   } catch (error) {
  //     console.error('Erro ao compartilhar', error);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (navigator.share === undefined) {
  //     console.log('O sistema não suporta o compartilhamento.');
  //   }
  // }, []);

  const handleSendWhatsappMessage = () => {
    const imageUrl = 'https://placehold.co/200x270?text=Produto+Sem+Imagem'; // Substitua 'URL_DA_IMAGEM' pelo URL da imagem que você deseja compartilhar.
    const message = 'Sua mensagem aqui' + ' ' + imageUrl;

    // Construa o link do WhatsApp com a mensagem e a imagem
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5598991741075&text=${encodeURIComponent(
      message,
    )}&data&media=${encodeURIComponent(imageUrl)}`;

    // Abre o link do WhatsApp
    window.open(whatsappLink);
  };

  // useEffect(() => {
  //   if (window.location.protocol === 'http:') {
  //     window.location.replace(window.location.href.replace(/^http:/, 'https:'));
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Formen Ilha | Catálogo</title>
      </Head>
      <Flex direction="column" width="100%">
        <Hero />

        <Container maxW="container.lg">
          <Box as="section" id="palestrantes">
            <Flex direction="column" justify="space-between" mt={10}>
              <Box mb={10}>
                <Text fontWeight="bold">Filtros:</Text>
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                  spacing={{ base: '8', sm: '16', md: '16', lg: '16' }}
                  mx="auto"
                  justifyItems="center"
                  alignItems="center"
                >
                  <FormControl>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      placeholder="Selecionar Categoria"
                      onChange={e =>
                        handleMultipleFilters(e.target.value, null, null)
                      }
                    >
                      <option value="Todos">Todos</option>
                      {categories.map((category: any) => {
                        return (
                          <option key={category.id} value={category.id}>
                            {category.attributes.nome}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Tamanho</FormLabel>
                    <Select
                      placeholder="Selecionar Tamanho"
                      onChange={e =>
                        handleMultipleFilters(null, null, e.target.value)
                      }
                    >
                      {sizes.map((size: any) => {
                        return (
                          <option key={size.id} value={size.id}>
                            {size.attributes.tamanho}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Marca</FormLabel>
                    <Select
                      placeholder="Selecionar Marca"
                      onChange={e =>
                        handleMultipleFilters(null, e.target.value, null)
                      }
                    >
                      {manufacturers.map((manufacturer: any) => {
                        return (
                          <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.attributes.nome}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </SimpleGrid>
              </Box>
            </Flex>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: '8', sm: '10', md: '10', lg: '16' }}
            >
              {loading && (
                <>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      {/* <SkeletonCircle size="10" /> */}
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      {/* <SkeletonCircle size="10" /> */}
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                  <Flex w="full" alignItems="center" justifyContent="center">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Skeleton minHeight={200} minWidth={200} />

                      <Box p="6">
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        />
                      </Box>
                    </Box>
                  </Flex>
                </>
              )}
              {produtos.map((data: any) => {
                return (
                  <Flex
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
                    >
                      <Image
                        src={
                          data.attributes.imagem.data?.attributes.url
                            ? data.attributes.imagem.data?.attributes.url
                            : 'https://placehold.co/200x270?text=Produto+Sem+Imagem'
                        }
                        alt={`Imagem do produto ${data?.attributes?.nome}`}
                        roundedTop="lg"
                        minWidth={200}
                      />

                      <Box px="3" py="2">
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
                        <Box mt={2}>
                          <Badge colorScheme="red" color="white">
                            {data?.attributes.marca_fabricante?.data?.attributes
                              ?.nome
                              ? data?.attributes.marca_fabricante?.data
                                  ?.attributes?.nome
                              : 'Não Cadastrado'}
                          </Badge>
                        </Box>

                        <Box mt={2}>
                          <Text>Tamanho:</Text>
                          <Badge colorScheme="red" color="white">
                            {data?.attributes.tamanho?.data?.attributes?.tamanho
                              ? data?.attributes.tamanho?.data?.attributes
                                  ?.tamanho
                              : 'Não Cadastrado'}
                          </Badge>
                        </Box>

                        <Box mt={2}>
                          <Text>Categoria:</Text>
                          <Badge colorScheme="red" color="white">
                            {data?.attributes.categoria?.data?.attributes?.nome
                              ? data?.attributes.categoria?.data?.attributes
                                  ?.nome
                              : 'Não Cadastrado'}
                          </Badge>
                        </Box>

                        <Box mt={2}>
                          <Text>Disponibilidade:</Text>
                          <Badge
                            colorScheme={
                              data?.attributes.em_estoque ? 'green' : 'red'
                            }
                            color="white"
                          >
                            {data?.attributes.em_estoque
                              ? 'Disponível'
                              : 'Indisponivel'}
                          </Badge>
                        </Box>

                        <Box mt={2}>
                          <Button onClick={() => handleSendWhatsappMessage()}>
                            Verificar Disponibilidade
                          </Button>
                        </Box>

                        <Flex
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box fontSize="2xl">
                            <Text fontWeight="bold">
                              R$: {data?.attributes.preco?.toFixed(2)}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                );
              })}
            </SimpleGrid>
          </Box>
          <Flex py={10} justify="center" align="center">
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              isDisabled={isDisabled}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="space-between"
                p={4}
                w="full"
              >
                <PaginationPrevious
                  _hover={{
                    bg: 'yellow.400',
                  }}
                  bg="yellow.300"
                  onClick={() =>
                    console.log(
                      'Im executing my own function along with Previous component functionality',
                    )
                  }
                >
                  <Text>Anterior</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                  isInline
                  align="center"
                  separator={
                    <PaginationSeparator
                      onClick={() =>
                        console.log(
                          'Im executing my own function along with Separator component functionality',
                        )
                      }
                      bg="blue.300"
                      fontSize="sm"
                      w={7}
                      jumpSize={11}
                    />
                  }
                >
                  {pages.map((page: number) => (
                    <PaginationPage
                      w={7}
                      bg="red.300"
                      key={`pagination_page_${page}`}
                      page={page}
                      onClick={() =>
                        console.log(
                          'Im executing my own function along with Page component functionality',
                        )
                      }
                      fontSize="sm"
                      _hover={{
                        bg: 'green.300',
                      }}
                      _current={{
                        bg: 'green.300',
                        fontSize: 'sm',
                        w: 7,
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  _hover={{
                    bg: 'yellow.400',
                  }}
                  bg="yellow.300"
                  onClick={() =>
                    console.log(
                      'Im executing my own function along with Next component functionality',
                    )
                  }
                >
                  <Text>Próximo</Text>
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </Flex>
        </Container>
      </Flex>

      {/* <Footer /> */}
    </>
  );
}
