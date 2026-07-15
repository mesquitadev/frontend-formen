import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import '../styles.css';
import Layout from '@/Components/Layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Páginas podem optar por um layout próprio (ex.: a home/linktree é standalone).
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
