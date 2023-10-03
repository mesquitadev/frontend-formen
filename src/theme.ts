import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  global: {
    body: {
      backgroundColor: '#ffff',
    },
  },
  colors: {
    primary: {
      dark: '#512450',
      darkest: '#004426',
    },
    secondary: {
      100: '#FFF5DB',
    },
    gray: {
      100: '#F5F5F5',
    },
  },
  fonts: {
    body: 'Exo 2, sans-serif',
    heading: 'Exo 2, sans-serif',
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
});
