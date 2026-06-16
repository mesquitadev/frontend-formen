import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { client } from '@/service';
import { gql } from '@apollo/client';
import { WhatsappShareButton } from 'react-share';
import { FaWhatsapp } from 'react-icons/fa';
import ModalImage from 'react-modal-image';
import PageHeading from '@/Components/PageHeading';
import Loading from '@/Components/Loading';
import Seo from '@/Components/Seo';
import { formatPrice } from '@/Utils/format';

const PLACEHOLDER =
  'https://placehold.co/400x540/0f3325/f2e9d8?text=Produto+sem+imagem';

const Produtos = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { tamanhoId, subCategoriaId } = router.query;
  const [produtos, setProdutos] = useState<any>([]);
  const [subCategoriaText, setSubCategoriaText] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const fail = useCallback(() => {
    enqueueSnackbar('Não foi possível carregar os dados. Tente novamente.', {
      variant: 'error',
    });
  }, [enqueueSnackbar]);

  const handleGetProducts = useCallback(() => {
    if (!router.isReady) return;
    setLoading(true);
    client
      .query({
        query: gql`
          query Produtos($filters: ProdutoFiltersInput) {
            produtos(filters: $filters) {
              data {
                id
                attributes {
                  nome
                  mostrar_preco
                  preco
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
            sub_categoria: { id: { eq: subCategoriaId } },
            tamanho: { id: { eq: tamanhoId } },
          },
        },
      })
      .then(response => setProdutos(response.data.produtos.data))
      .catch(fail)
      .finally(() => setLoading(false));
  }, [router.isReady, subCategoriaId, tamanhoId, fail]);

  const handleGetSubCategories = useCallback(() => {
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
        variables: { subCategoriaId },
      })
      .then(response =>
        setSubCategoriaText(response.data.subCategoria.data.attributes.nome),
      )
      .catch(fail);
  }, [router.isReady, subCategoriaId, fail]);

  useEffect(() => {
    handleGetProducts();
    handleGetSubCategories();
  }, [handleGetProducts, handleGetSubCategories]);

  return (
    <>
      <Seo
        title={subCategoriaText || 'Produtos'}
        path="/catalogo/produtos"
        noindex
      />

      <PageHeading
        showBackButton={showBackButton}
        pageTitle={subCategoriaText || 'Produtos'}
      />

      <section className="mx-auto max-w-shell px-5 py-12 md:px-10">
        {loading ? (
          <Loading />
        ) : produtos.length === 0 ? (
          <p className="py-16 text-center text-inkDim">
            Nenhum produto disponível nesta seleção.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {produtos.map((data: any) => {
              const url =
                data.attributes.imagem.data?.attributes?.url || PLACEHOLDER;
              return (
                <article
                  key={data.id}
                  className="flex flex-col overflow-hidden rounded border border-ink/10 bg-surface"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-surfaceHi [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
                    <ModalImage
                      small={url}
                      large={url}
                      alt={data?.attributes?.nome || 'Produto'}
                      hideDownload
                      hideZoom
                    />
                  </div>

                  <div className="flex flex-1 flex-col items-center gap-3 p-4 text-center">
                    {data?.attributes.mostrar_preco && (
                      <p className="font-display text-2xl font-extrabold tracking-tight text-accent">
                        {formatPrice(data?.attributes.preco)}
                      </p>
                    )}
                    <WhatsappShareButton
                      url={data?.attributes.imagem.data?.attributes.url}
                      title={`Tenho interesse: ${data?.attributes.sub_categoria?.data.attributes.nome} — Tamanho ${data?.attributes?.tamanho?.data?.attributes.nome}`}
                      separator=" :: "
                      className="mt-auto w-full"
                    >
                      <span className="flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-canvas transition-colors hover:bg-accent-hi">
                        <FaWhatsapp /> Consultar
                      </span>
                    </WhatsappShareButton>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Produtos;
