import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { ElementType, ReactElement } from 'react';
import { HiCheckCircle, HiCheck } from 'react-icons/hi';
import { Card, CardProps } from './Card';

export interface PricingCardData {
  features: string[];
  name: string;
  price: string;
}

interface PricingCardProps extends CardProps {
  data: PricingCardData;
  icon: ElementType;
  button: ReactElement;
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, icon, button, ...rest } = props;
  const { features, price, name } = data;
  const accentColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <Card bgColor="card.primary" rounded={{ sm: 'xl' }} {...rest}>
      <Flex justify="center" align="center" h="100%">
        <VStack spacing={4}>
          <Icon aria-hidden as={icon} fontSize="4xl" color={accentColor} />
          <Heading size="md" fontWeight="extrabold" color="white">
            {name}
          </Heading>
        </VStack>
      </Flex>

      <List spacing="4" mb="8" maxW="28ch" mx="auto" mt={10}>
        {features.map((feature, index) => (
          <Flex justify="space-between" align="center" key={index}>
            <ListItem fontWeight="bold" color="white">
              {feature}
            </ListItem>
            <ListIcon
              fontSize="md"
              as={HiCheck}
              marginEnd={2}
              color={accentColor}
            />
          </Flex>
        ))}
      </List>

      <Flex
        align="center"
        justify="center"
        direction="column"
        fontWeight="extrabold"
        color="white"
        my="8"
        width="100%"
      >
        <Text fontSize='3xl' fontWeight="inherit"  lineHeight="0.9em">
          {price}
        </Text>
        <Text fontWeight="inherit" fontSize="md">
          MENSAL
        </Text>
      </Flex>

      {button}
    </Card>
  );
};
