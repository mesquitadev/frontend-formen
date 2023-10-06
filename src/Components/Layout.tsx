import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from '@/Components/Header';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import { useName } from '@/hooks/useName';

export default function Layout({ children }: any) {
  const router = useRouter();
  const showBackButton = router.pathname !== '/';
  const { pageName } = useName();
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1">
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center" mt={5}>
            {showBackButton && (
              <Box>
                <IoIosArrowBack
                  size={30}
                  color="black"
                  onClick={() => router.back()}
                >
                  Voltar
                </IoIosArrowBack>
              </Box>
            )}

            <Box>
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {pageName ? pageName : 'Página sem nome!'}
              </Text>
            </Box>
            <Box></Box>
          </Flex>
        </Container>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
