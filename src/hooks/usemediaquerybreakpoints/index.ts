import { useMediaQuery } from '@chakra-ui/react';
import { breakpoints } from 'theme';

const useMediaQueryBreakpoints = () => {
  const [isMobile] = useMediaQuery(`(max-width:  ${breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width:  ${breakpoints.md})`);

  return {
    isMobile,
    isTablet
  };
};

export default useMediaQueryBreakpoints;
