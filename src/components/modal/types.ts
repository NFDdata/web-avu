import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  content?: ReactNode;
  actionButton?: ReactNode;
  hideCloseButton?: boolean;
  size?: string;
  margin?: string;
};
