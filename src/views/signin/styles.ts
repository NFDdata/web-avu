import { colors, fontSizes } from 'theme';

// Flex direction const
const column = 'column' as const;

// styles

export const container = {
  direction: [column],
  align: 'center',
  w: ['full']
};

export const containerView = {
  direction: [column],
  align: ['center'],
  justify: ['center'],
  w: ['full'],
  mx: '10em',
  mt: ['5em', '5em', '5em', '8em', '5em', '6em']
};

export const signInTitle = {
  fontSize: fontSizes.largeHeading,
  fontWeight: 600,
  color: colors.white
};

export const containerForm = {
  direction: [column],
  aling: 'center',
  w: ['90%', '90%', '90%', '50%', '40%', '25%'],
  p: ['35px'],
  mt: 5,
  borderRadius: '6px',
  bgColor: '#012c42'
};

export const signInLabel = {
  fontSize: fontSizes.heading,
  fontWeight: 600,
  color: colors.white
};

export const inputStyle = {
  w: ['full'],
  my: 3
};

export const buttonLoginStyle = {};
