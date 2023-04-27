import { FC } from 'react';
import { Alert, CloseButton } from '@chakra-ui/react';

import { AlertProps } from './types';

const SigninAlert: FC<AlertProps> = ({ children, onClose, spaceProps }) => {
  return (
    <Alert
      {...spaceProps}
      status="error"
      color="red"
      border="1px solid"
      borderColor="red.500"
      borderRadius="6px"
      py="0.3em"
      pr="0.9em"
      w={'100%'}>
      {onClose && <CloseButton onClick={onClose} mr="1em" />}
      {children}
    </Alert>
  );
};

export default SigninAlert;
