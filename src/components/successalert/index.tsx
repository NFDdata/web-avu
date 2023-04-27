import { FC } from 'react';
import { Alert, CloseButton } from '@chakra-ui/react';

import { SuccessAlertProps } from './types';

export const SuccessAlert: FC<SuccessAlertProps> = ({
  children,
  onClose,
  ...rest
}) => {
  return (
    <Alert
      status="success"
      color="green"
      border="1px solid"
      borderColor="green.500"
      borderRadius="6px"
      py="0.3em"
      pr="0.9em"
      w={'100%'}
      {...rest}>
      {onClose && <CloseButton onClick={onClose} mr="1em" />}
      {children}
    </Alert>
  );
};
