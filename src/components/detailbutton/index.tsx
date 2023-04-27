import { FC } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { IconButton } from '@chakra-ui/react';

import { DetailButtonProps } from './types';

export const DetailButton: FC<DetailButtonProps> = ({ disabled, ...rest }) => {
  return (
    <IconButton
      fontSize={20}
      disabled={disabled}
      variant="ghost"
      aria-label="Detalle"
      icon={<FcViewDetails />}
      {...rest}
    />
  );
};
