import React from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';
import '../styles.css';
import { client } from '@/service';
import Layout from '@/Components/Layout';
import { GetNameProvider } from '@/Contexts/GetNameContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <GetNameProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GetNameProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
