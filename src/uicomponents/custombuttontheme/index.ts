import { SystemStyleInterpolation } from '@chakra-ui/theme-tools';

import { primary } from './primary';
import { secondary } from './secondary';

export const variants: Record<string, SystemStyleInterpolation> = {
  primary,
  secondary,
  danger: {
    ...secondary,
    color: 'error.dark',
    _hover: {
      bg: 'error.light'
    },
    _active: {
      bg: 'error.active'
    }
  },
  loginStyle: {
    bg: 'primary.normal',
    color: 'white',
    paddingX: '18px',
    paddingY: '18px',
    borderRadius: '5px',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: 600,
    width: '300px',
    height: '32px',
    lineHeight: '32px',
    _hover: {
      bg: 'states.loginStyle.hover',
      _disabled: { bg: 'states.loginStyle.disabled' }
    },
    _active: {
      bg: 'states.loginStyle.active'
    },
    _disabled: {
      bg: 'states.loginStyle.disabled'
    }
  },
  loginStyleSecondary: {
    borderColor: 'primary.normal',
    borderWidth: '1px',
    color: 'primary.normal',
    paddingX: '18px',
    paddingY: '18px',
    borderRadius: '5px',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: 600,
    width: '146px',
    height: '32px',
    lineHeight: '32px',
    _hover: {
      bg: 'states.loginStyleSecondary.hover'
    },
    _disabled: {
      bg: 'states.loginStyleSecondary.disabled'
    }
  },
  actionTable: {
    bg: 'primary.normal',
    color: 'white',
    paddingX: '16px',
    borderRadius: '5px',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: 600,
    width: '116px',
    height: '32px',
    lineHeight: '32px',
    _hover: {
      bg: 'states.actionTable.hover',
      _disabled: {
        bg: 'states.actionTable.disabled'
      }
    },
    _active: {
      bg: 'states.actionTable.active'
    },
    _disabled: {
      bg: 'states.actionTable.disabled'
    }
  },
  actionTableSecondary: {
    borderColor: 'primary.normal',
    borderWidth: '1px',
    color: 'primary.normal',
    paddingX: '16px',
    borderRadius: '5px',
    boxShadow: 'none',
    fontSize: '14px',
    fontWeight: 600,
    width: '116px',
    height: '32px',
    lineHeight: '32px',
    _hover: {
      bg: 'states.actionTableSecondary.hover',
      _disabled: {
        bg: 'states.actionTableSecondary.disabled'
      }
    },
    _disabled: {
      bg: 'states.actionTableSecondary.disabled'
    }
  },
  primaryLight: {
    fontSize: 'lg',
    p: '17px 20px',
    h: '34px',
    fontWeight: 700,
    border: 'none',
    color: 'white',
    bg: 'primary.700',
    _disabled: {
      pointerEvents: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  },
  secondaryLight: {
    fontSize: 'lg',
    p: '17px 20px',
    h: '34px',
    fontWeight: 700,
    border: 'none',
    color: '#718096',
    bg: '#EDF2F7',
    _disabled: {
      pointerEvents: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  }
};
