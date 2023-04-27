import { FC } from 'react';
import { Flex, Tooltip, useDisclosure } from '@chakra-ui/react';
import { colors } from 'theme';

import { CustomTooltipProps } from './types';

const CustomTooltip: FC<CustomTooltipProps> = ({
  children,
  label,
  labelColor = colors.text,
  color = colors.information.dark,
  maxWidth = '200px',
  placement,
  width,
  padding = '5px 10px',
  height = '40px',
  colorText = colors.text,
  pt = '4px',
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tooltip
      boxShadow={0}
      label={label}
      isOpen={isOpen}
      hasArrow
      arrowShadowColor={color}
      placement={placement}
      bg="#fff"
      textColor={colorText}
      color={labelColor}
      border={`1px solid ${color}`}
      padding={padding}
      fontSize="md"
      maxWidth={maxWidth}
      {...rest}>
      <Flex
        width={width ? width : 'fit-content'}
        height={height}
        pt={pt}
        align={'center'}
        justify={'center'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}>
        {children}
      </Flex>
    </Tooltip>
  );
};

export default CustomTooltip;
