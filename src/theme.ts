import { extendTheme } from '@chakra-ui/react';
import { Button } from 'uicomponents/Button';

export const breakpoints = {
  xs: '26.5625em', // 425px
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em' // 1536px
};

export const smallScreenheight = '48.688em';

export const colors = {
  selectSidebar: '#002550',
  text: '2C3E50',
  navbar: '#2980B9',
  white: '#FFF',
  primary: {
    normal: '#8E44AD',
    '900': '#ECF0F1',
    '800': '#1366D8',
    '700': '#3786F3',
    '600': '#62A4FF'
  },
  secondary: {
    normal: '#282828',
    '900': '#A0C8FF',
    '800': '#CBDDF9',
    '700': '#D6E7FF',
    '600': '#EAF3FF',
    '500': '#E1E1E1',
    '400': '#F3F6FA',
    '300': '#F9F9F9',
    '200': '#FFFFFF'
  },
  success: {
    dark: '#459A33',
    medium: '#B6DFD6',
    light: '#E6F5F1',
    default: '#22A889'
  },
  warning: {
    dark: '#DBC716',
    medium: '#ECE285',
    light: '#FFFCE5'
  },
  error: {
    dark: 'Red',
    medium: '#E73030',
    light: '#F7E2E1',
    active: '#F9C0BD'
  },
  information: {
    dark: '#166DC2',
    medium: '#80C0FF',
    light: '#E1EBF8'
  },
  rule: {
    ruleChecked: '#14D2BB',
    ruleNotChecked: '#E73030',
    info: '#788791'
  },
  states: {
    default: {
      success: '#47A848',
      info: '#328ADC',
      warning: '#FFE817',
      danger: '#DC3545'
    },
    hover: {
      success: '#00BE02',
      info: '#3FA2FF',
      warning: '#FFD335',
      danger: '#F80018'
    },
    active: {
      success: '#287129',
      info: '#115697',
      warning: '#F0BC02',
      danger: '#AC1927'
    },
    disabled: {
      success: '#B6E7B6',
      info: '#98C6F1',
      warning: '#FFF8B6',
      danger: '#EA808A',
      default: '#B4C0C8'
    },
    actionTable: {
      hover: '#093C83',
      active: '#1567D9',
      disabled: '#B4C0C8'
    },
    actionTableSecondary: {
      hover: '#CBDDF9',
      disabled: '#FFFFFF'
    },
    loginStyle: {
      hover: '#093C83',
      active: '#1567D9',
      disabled: '#B4C0C8'
    },
    loginStyleSecondary: {
      hover: '#CBDDF9',
      disabled: '#FFFFFF'
    },
    loginLink: {
      active: '#093C83'
    },
    overviewKpiButton: {
      default: '#C4C4C4',
      hover: '#788791',
      active: '#F1DA0F'
    }
  },
  legends: {
    real: '#005AD6',
    programmed: '#EF9F56'
  }
};

export const fontSizes = {
  xs: '0.5rem',
  sm: '0.625rem',
  md: '0.75rem',
  lg: '0.875rem',
  large: '0.938rem',
  xl: '1rem',
  'semi-heading': '1.25rem',
  heading: '1.5rem',
  largeHeading: '2rem'
};

export const fonts = {};

export const theme = extendTheme({
  breakpoints,
  fonts,
  fontSizes,
  colors,
  components: { Button }
});
