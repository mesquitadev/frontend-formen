import { Box, Button, Center, Container, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

const Hero = () => {
  return (
    <>
      <Box display="flex" flexDir="column" bgColor="black">
        <Container maxW="container.lg">
          <Box mt="10" mb="10">
            <Center>
              <VStack>
                <Image src="/logo.jpeg" alt="Logo" width={200} height={200} />
                <Text
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                  color="white"
                  textAlign="center"
                >
                  Formen Multimarcas
                </Text>
              </VStack>
            </Center>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
