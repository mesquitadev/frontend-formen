import React, { ReactElement, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { SnackbarProvider } from 'notistack';
import '../styles.css';
import { client } from '@/service';
import Layout from '@/Components/Layout';
import { GetNameProvider } from '@/Contexts/GetNameContext';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Páginas podem optar por um layout próprio (ex.: /links é standalone).
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <GetNameProvider>
          {getLayout(<Component {...pageProps} />)}
        </GetNameProvider>
      </SnackbarProvider>
    </ApolloProvider>
  );
}
