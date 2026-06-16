import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { client } from '@/service';
import { gql } from '@apollo/client';
import PageHeading from '@/Components/PageHeading';
import Loading from '@/Components/Loading';

const Categoria = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { categoriaId } = router.query;

  const [tamanhos, setTamanhos] = useState<any>([]);
  const [categoriaText, setCategoriaText] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const fail = useCallback(() => {
    enqueueSnackbar('Não foi possível carregar os dados. Tente novamente.', {
      variant: 'error',
    });
  }, [enqueueSnackbar]);

  const handleGetTamanhos = useCallback(() => {
    if (!router.isReady) return;
    setLoading(true);
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
        variables: { filters: { categoria: { id: { eq: categoriaId } } } },
      })
      .then(response => setTamanhos(response.data.tamanhos.data))
      .catch(fail)
      .finally(() => setLoading(false));
  }, [router.isReady, categoriaId, fail]);

  const handleGetCategory = useCallback(() => {
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query Categoria($categoriaId: ID) {
            categoria(id: $categoriaId) {
              data {
                attributes {
                  nome
                }
              }
            }
          }
        `,
        variables: { categoriaId },
      })
      .then(response =>
        setCategoriaText(response.data.categoria.data.attributes.nome),
      )
      .catch(fail);
  }, [categoriaId, router.isReady, fail]);

  useEffect(() => {
    handleGetTamanhos();
    handleGetCategory();
  }, [handleGetCategory, handleGetTamanhos]);

  return (
    <>
      <Head>
        <title>Formen Multimarcas — Tamanhos</title>
      </Head>

      <PageHeading
        showBackButton={showBackButton}
        pageTitle={categoriaText || 'Tamanhos'}
      />

      <section className="mx-auto max-w-shell px-5 py-12 md:px-10">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {tamanhos.map((data: any) => (
              <Link
                key={data.id}
                href={{
                  pathname: '/catalogo/categoria/subcategoria',
                  query: { tamanhoId: data.id, categoriaId },
                }}
                className="group grid aspect-square place-items-center rounded border border-ink/10 bg-surface transition-colors duration-300 hover:border-accent hover:bg-surfaceHi"
              >
                <span className="font-display text-5xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-accent md:text-6xl">
                  {data?.attributes.nome}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Categoria;
