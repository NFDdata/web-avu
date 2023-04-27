import { ReactNode } from 'react';
import { SpaceProps } from '@chakra-ui/react';

export type AlertProps = {
  children: ReactNode;
  onClose?: () => void;
  spaceProps?: SpaceProps;
};
