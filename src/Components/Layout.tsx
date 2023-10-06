import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from '@/Components/Header';

export default function Layout({ children }: any) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}
