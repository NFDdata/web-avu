import { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Modal } from '@components/modal';

import { ConfirmationModalProps } from './types';

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  isLoading
}) => {
  // function render information for user
  const renderConfirmationModal = () => <Box>¿Desea eliminar el registro?</Box>;

  // function render accept confirmation
  const renderButtons = () => (
    <Button variant="danger" onClick={onOpen} isLoading={isLoading}>
      Continuar
    </Button>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      content={renderConfirmationModal()}
      actionButton={renderButtons()}
      title={'Confirmar eliminación'}
      size={'xs'}
    />
  );
};
