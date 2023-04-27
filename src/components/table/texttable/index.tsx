import { FC } from 'react';
import { Flex, Tooltip } from '@chakra-ui/react';

import { TextTableProps } from '../types';

const TextTable: FC<TextTableProps> = ({
  label,
  paddingLeft = '0px',
  fontWeight = 'medium',
  color = '#282828',
  align = 'center',
  showTooltip = true,
  ...rest
}) => {
  return (
    <Tooltip label={showTooltip && label}>
      <Flex
        align={align}
        pl={paddingLeft}
        fontSize="12px"
        color={color ? color : '#282828'}
        textAlign={'center'}
        mt={2}
        fontWeight={fontWeight ? fontWeight : 'medium'}
        noOfLines={2}
        {...rest}>
        {label || ''}
      </Flex>
    </Tooltip>
  );
};

export default TextTable;
