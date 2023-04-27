export type ConfirmationModalProps = {
  id?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading?: boolean;
};
