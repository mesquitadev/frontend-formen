import { createIcon } from '@chakra-ui/icons';

// using `path`
export const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
});

// OR using the `d` value of a path (the path definition) directly
export const PerolaIcon = createIcon({
  displayName: 'PerolaIcon',
  viewBox: '0 0 200 200',
  d: 'M25.066 50.132c13.844 0 25.066-11.222 25.066-25.066S38.91 0 25.066 0 0 11.222 0 25.066s11.222 25.066 25.066 25.066Z',
});
