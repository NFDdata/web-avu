import { FC, useEffect, useRef } from 'react';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useOutsideClick,
  VStack
} from '@chakra-ui/react';
import { AlertMessage } from '@components/alertmessage';
import { useActiveAlertMessage } from 'context/activealertmessage';
// import { useSession } from 'next-auth/react';
import { colors } from 'theme';

import { DesktopMenuProps } from '../types';

// Componete de que maneja los distintos componentes dentro del navbar
export const DesktopMenu: FC<DesktopMenuProps> = ({
  notShowText,
  onLogOut,
  onCloseMenu,
  onOpen,
  ...rest
}) => {
  // Hooks usados
  // const { data: user } = useSession();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, message, type, onClose } = useActiveAlertMessage();

  //ref click for close menu
  const ref = useRef(null);

  useOutsideClick({
    ref,
    handler: onCloseMenu
  });

  useEffect(() => {
    if (message === 'Forbidden access') onLogOut(); // use effect with responsability of logout session with token is defeated
  }, [isOpen]);

  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      position={'fixed'}
      zIndex={999}
      w={'100%'}
      alignItems="center"
      bg={useColorModeValue(colors.navbar, colors.navbar)}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      {!isMobile && (
        <AlertMessage
          isOpen={isOpen}
          label={message}
          type={type}
          onClose={onClose}
        />
      )}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={'white'}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: '2', md: '3' }} w={'50%'} justify={'flex-end'}>
        <Flex align={'center'}>
          <Menu>
            <MenuButton
              p={3}
              height={'3rem'}
              borderRadius={6}
              transition="all 0.3s"
              bg={useColorModeValue('white', 'gray.900')}
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Usuario</Text>
                  <Text fontSize="xs" color="gray.600">
                    {/* {user?.user?.rol?.toUpperCase()} */}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Perfil</MenuItem>
              <MenuDivider />
              <MenuItem onClick={onLogOut}>Cerrar sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
