import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { gql } from '@apollo/client';
import { client } from '@/service';
import { useName } from '@/hooks/useName';
import PageHeading from '@/Components/PageHeading';
import Loading from '@/Components/Loading';

const PLACEHOLDER =
  'https://placehold.co/400x540/0f3325/f2e9d8?text=Sem+imagem';

export default function Categorias() {
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { setPageName } = useName();

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
      })
      .catch(() => {
        enqueueSnackbar(
          'Não foi possível carregar o catálogo. Tente novamente.',
          { variant: 'error' },
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [enqueueSnackbar]);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories, setPageName]);

  return (
    <>
      <Head>
        <title>Formen Multimarcas — Catálogo</title>
      </Head>

      <PageHeading showBackButton pageTitle="Categorias" />

      <section className="mx-auto max-w-shell px-5 py-12 md:px-10">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((data: any) => (
              <Link
                key={data.id}
                href={{
                  pathname: '/catalogo/categoria',
                  query: { categoriaId: data.id },
                }}
                className="group flex flex-col overflow-hidden rounded border border-ink/10 bg-surface transition-colors duration-300 hover:border-accent"
              >
                <div className="aspect-[3/4] overflow-hidden bg-surfaceHi">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      data.attributes.imagem.data?.attributes.url || PLACEHOLDER
                    }
                    alt={`Categoria ${data?.attributes?.nome ?? ''}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="truncate font-display text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-accent">
                    {data?.attributes.nome}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
