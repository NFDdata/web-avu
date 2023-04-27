export const primary = {
  fontSize: 'lg',
  p: 5,
  fontWeight: 600,
  color: 'white',
  bg: '#003250',
  _disabled: {
    pointerEvents: 'none'
  },
  _hover: {
    bg: 'states.actionTable.hover',
    _disabled: { bg: 'states.actionTalbe.disabled' }
  },
  _active: {
    bg: 'secondary.900'
  }
};
