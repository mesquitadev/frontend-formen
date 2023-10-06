import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

function Loading() {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing={{ base: '8', sm: '10', md: '10', lg: '16' }}
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Skeleton minHeight={200} minWidth={200} />

          <Box p="6">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}

export default Loading;
