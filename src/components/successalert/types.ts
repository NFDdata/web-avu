import { ReactNode } from 'react';
import { SpaceProps } from '@chakra-ui/react';

export interface SuccessAlertProps extends SpaceProps {
  children: ReactNode;
  onClose?: () => void;
}
