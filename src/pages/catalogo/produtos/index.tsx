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
  Text,
} from '@chakra-ui/react';
import Loading from '@/Components/Loading';
import React, { useCallback, useEffect, useState } from 'react';
import { client } from '@/service';
import { gql } from '@apollo/client';

import { WhatsappIcon, WhatsappShareButton } from 'react-share';

const Produtos = () => {
  const router = useRouter();
  const { tamanhoId, categoriaId, subCategoriaId } = router.query;
  const [produtos, setProdutos] = useState<any>([]);
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

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts, produtos]);

  // const handleSendWhatsappMessage = useCallback((urlDaImagem: string) => {
  //   const numeroWhatsApp = '+5598991741075';
  //   const mensagem = 'Olá, esse produtos ainda está disponível?';
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

  const handleSendWhatsappMessage = (imageUrl: string) => {
    const image = imageUrl
      ? imageUrl
      : 'https://placehold.co/200x270?text=Produto+Sem+Imagem';
    const message = 'Sua mensagem aqui' + ' ' + image;

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
              produtos.map((data: any) => {
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
                      v
                    >
                      <Image
                        src={
                          data.attributes.imagem.data?.attributes?.url
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
                          <WhatsappShareButton
                            url={data?.attributes.imagem.data?.attributes.url}
                            title={`Produto ${data?.attributes?.tamanho?.data?.attributes.nome} - Tamanho ${data?.attributes.sub_categoria?.data.attributes.nome}`}
                            separator=":: "
                          >
                            <Button>Verificar Disponibilidade</Button>
                          </WhatsappShareButton>
                        </Box>
                      </Box>
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
