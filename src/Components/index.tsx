import {
  Box,
  BoxProps,
  ButtonGroup,
  ButtonGroupProps,
  Flex,
  HStack,
  IconButton,
  Img,
  Stack,
  Text,
  TextProps,
  useColorModeValue as mode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';

interface StatProps extends BoxProps {
  title: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { title, value, ...rest } = props;
  return (
    <Stack
      direction="column-reverse"
      maxW="12rem"
      mx="auto"
      as="dl"
      textAlign="center"
      justify="center"
      {...rest}
    >
      <Box as="dt" color="rgba(0, 0, 0, 0.54)" fontWeight="medium">
        {title}
      </Box>
      <Box
        as="dd"
        fontSize="5xl"
        lineHeight="1"
        fontWeight="extrabold"
        color="rgba(0, 0, 0, 0.87)"
      >
        {value}
      </Box>
    </Stack>
  );
};

export const Rating = (props: any) => {
  const { value = 5, ...rest } = props;
  return (
    <HStack {...rest}>
      {Array.from({
        length: 5,
      }).map((_, i) => {
        const fade = i + 1 > value;
        return (
          <Box
            as={FaStar}
            color={fade ? 'whiteAlpha.500' : 'black'}
            fontSize="xl"
            key={i}
          />
        );
      })}
    </HStack>
  );
};

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
);

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" color="white" {...props}>
    &copy; {new Date().getFullYear()} Carvalho & Brum Advogados Associados.
  </Text>
);

export const Testimonial = (props: any) => {
  const { image, company, name, children, ...rest } = props;
  return (
    <Stack
      spacing={6}
      h="100%"
      rounded="2xl"
      shadow="md"
      py={{
        base: '6',
        md: '6',
      }}
      px={{
        base: '6',
        md: '7',
      }}
      bg={mode('#C5B358', '#C5B358')}
      color={mode('gray.800', 'gray.300')}
      {...rest}
    >
      <Box
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        flex="1"
      >
        {children}
        <Rating mt="10" value={4} />
      </Box>
      <HStack
        spacing={{
          base: 3,
          md: 5,
        }}
      >
        <Img objectFit="cover" rounded="full" boxSize={14} src={image} />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
            {company}
          </Text>
        </Flex>
      </HStack>
    </Stack>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
