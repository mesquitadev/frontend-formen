import {
  Box,
  Center,
  Text,
  VStack,
  Container,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <Box
        w="100vw"
        display="flex"
        flexDir="column"
        className="degrade"
        bgGradient="linear(to-l, #FFB800 14.87%, #000 490.12%, #FFDE00 97.84%)"
      >
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
                  Catálogo Formen SLZ
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
