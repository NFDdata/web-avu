import { ComponentStyleConfig } from '@chakra-ui/react';

import { variants } from './custombuttontheme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '18px',
    fontWeight: 600
  },
  variants: {
    primary: variants.primary,
    secondary: variants.secondary,
    loginStyle: variants.loginStyle,
    loginStyleSecondary: variants.loginStyleSecondary,
    actionTable: variants.actionTable,
    actionTableSecondary: variants.actionTableSecondary,
    danger: variants.danger,
    primaryLight: variants.primaryLight,
    secondaryLight: variants.secondaryLight
  },
  sizes: {
    lg: {
      width: '120px',
      height: '40px'
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};
