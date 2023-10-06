import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import React from 'react';
import { useRouter } from 'next/router';

interface PageHeadingProps {
  showBackButton: boolean;
  pageTitle: string;
}
const PageHeading = ({ showBackButton, pageTitle }: PageHeadingProps) => {
  const router = useRouter();
  return (
    <Flex shadow={'lg'} my={5} pb={5}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
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
              {pageTitle}
            </Text>
          </Box>
          <Box></Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default PageHeading;
