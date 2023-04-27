import { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { colors } from 'theme';

import { ModalProps } from './types';

// General modal component for all app

export const Modal: FC<ModalProps> = ({
  onClose,
  isOpen,
  title,
  content,
  actionButton,
  hideCloseButton,
  size,
  margin
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose || (() => null)}
      isCentered
      size={size || 'lg'}
      scrollBehavior={'inside'}>
      <ModalOverlay />
      <ModalContent m={margin || '0em'} borderRadius={'6px'}>
        <ModalHeader mb={0}>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Flex direction="column">
              {title && (
                <>
                  <Text fontWeight="bold" fontSize={'20px'}>
                    {title.toUpperCase()}
                  </Text>
                  <Box mt={1} h="1.5px" width="93px" bg={colors.navbar} />
                </>
              )}
            </Flex>
          </Flex>
        </ModalHeader>
        {!hideCloseButton && <ModalCloseButton />}
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Flex
            justify={actionButton ? 'space-between' : 'flex-end'}
            w={'full'}>
            {actionButton}
            <Button onClick={onClose}>Cerrar</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
