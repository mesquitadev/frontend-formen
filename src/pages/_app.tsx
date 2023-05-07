import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';
import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then(x => x.default)
  //     .then(ReactPixel => {
  //       ReactPixel.init('684042070336801');
  //       ReactPixel.pageView();
  //
  //       router.events.on('routeChangeComplete', () => {
  //         ReactPixel.pageView();
  //       });
  //     });
  //
  //   TagManager.initialize({
  //     gtmId: 'GTM-NGFDXL6',
  //   });
  // }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
