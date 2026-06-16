import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { client } from '@/service';
import { gql } from '@apollo/client';
import { useName } from '@/hooks/useName';
import PageHeading from '@/Components/PageHeading';
import Loading from '@/Components/Loading';
import Seo from '@/Components/Seo';

const Tamanho = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { tamanhoId, categoriaId } = router.query;
  const [tamanhos, setTamanhos] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { setPageName } = useName();

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
      .catch(() =>
        enqueueSnackbar(
          'Não foi possível carregar os dados. Tente novamente.',
          { variant: 'error' },
        ),
      )
      .finally(() => setLoading(false));
  }, [categoriaId, router.isReady, enqueueSnackbar]);

  useEffect(() => {
    handleGetTamanhos();
  }, [setPageName, handleGetTamanhos]);

  return (
    <>
      <Seo title="Tamanhos" path="/catalogo/categoria/tamanho" noindex />

      <PageHeading showBackButton={showBackButton} pageTitle="Tamanhos" />

      <section className="mx-auto max-w-shell px-5 py-12 md:px-10">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {tamanhos.map((data: any) => (
              <Link
                key={data.id}
                href={{
                  pathname: 'subcategoria',
                  query: { tamanhoId, subCategoriaId: data.id },
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

export default Tamanho;
