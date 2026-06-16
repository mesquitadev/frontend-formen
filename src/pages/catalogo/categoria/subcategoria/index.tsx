import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { client } from '@/service';
import { gql } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import PageHeading from '@/Components/PageHeading';
import Loading from '@/Components/Loading';
import Seo from '@/Components/Seo';

const SubCategoria = () => {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { tamanhoId, categoriaId } = router.query;
  const [subCategorias, setSubCategorias] = useState<any>([]);
  const [sizeAndName, setSizeAndName] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const fail = useCallback(() => {
    enqueueSnackbar('Não foi possível carregar os dados. Tente novamente.', {
      variant: 'error',
    });
  }, [enqueueSnackbar]);

  const handleGetCategoryNameAndSizes = useCallback(() => {
    if (!router.isReady) return;
    client
      .query({
        query: gql`
          query Categoria($categoriaId: ID, $tamanhoId: ID) {
            categoria(id: $categoriaId) {
              data {
                attributes {
                  nome
                }
              }
            }
            tamanho(id: $tamanhoId) {
              data {
                attributes {
                  nome
                }
              }
            }
          }
        `,
        variables: { categoriaId, tamanhoId },
      })
      .then(response => setSizeAndName(response.data))
      .catch(fail);
  }, [categoriaId, router.isReady, tamanhoId, fail]);

  const handleGetSubCategories = useCallback(() => {
    if (!router.isReady) return;
    setLoading(true);
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
            categoria: { id: { eq: categoriaId } },
            tamanhos: { id: { eq: tamanhoId } },
          },
        },
      })
      .then(response => setSubCategorias(response.data.subCategorias.data))
      .catch(fail)
      .finally(() => setLoading(false));
  }, [categoriaId, router.isReady, tamanhoId, fail]);

  useEffect(() => {
    handleGetSubCategories();
    handleGetCategoryNameAndSizes();
  }, [handleGetCategoryNameAndSizes, handleGetSubCategories]);

  const tamanhoNome = sizeAndName?.tamanho?.data?.attributes?.nome;

  return (
    <>
      <Seo
        title={tamanhoNome ? `Tamanho ${tamanhoNome}` : 'Subcategorias'}
        path="/catalogo/categoria/subcategoria"
        noindex
      />

      <PageHeading
        showBackButton={showBackButton}
        pageTitle={tamanhoNome ? `Tamanho ${tamanhoNome}` : 'Subcategorias'}
      />

      <section className="mx-auto max-w-shell px-5 py-12 md:px-10">
        {loading ? (
          <Loading />
        ) : (
          <ul className="list-none">
            {subCategorias.map((data: any) => (
              <li key={data.id}>
                <Link
                  href={{
                    pathname: '/catalogo/produtos',
                    query: {
                      tamanhoId,
                      categoriaId,
                      subCategoriaId: data.id,
                    },
                  }}
                  className="group flex items-center gap-4 border-b border-ink/10 py-5 pl-1 transition-[padding,color] duration-300 hover:pl-4 hover:text-accent"
                >
                  <span className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {data?.attributes.nome}
                  </span>
                  <FaArrowRight className="ml-auto -translate-x-2 text-inkDim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default SubCategoria;
