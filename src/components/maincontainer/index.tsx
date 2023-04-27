import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colors } from 'theme';

import { MainContainerProps } from './types';

// This is a main container for all pages

export const MainContainer: FC<MainContainerProps> = ({
  children,
  title,
  fontSize = '25px',
  bg
}) => {
  return (
    <Box
      bg={colors.secondary[300]}
      borderRadius={5}
      borderWidth={1}
      p={['1rem', '1rem', '1rem', '1rem', '2rem', '2rem']}
      mx={'auto'}
      w={['full', 'full', 'full', 'full', 'full', 'full']}
      minH={'90vh'}>
      <Flex direction="column">
        <Flex justifyContent="space-between" flexWrap="wrap" overflowX="hidden">
          <Flex direction="column">
            {title && (
              <>
                <Text fontWeight="bold" fontSize={fontSize}>
                  {title.toUpperCase()}
                </Text>
                <Box mt={1} h="1.5px" width="93px" bg={bg} />
              </>
            )}
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};
