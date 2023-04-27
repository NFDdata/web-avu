import { BiUserCircle } from 'react-icons/bi';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { colors } from 'theme';

const NavMenu = () => {
  // next and react hooks

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onLogOut = async () => {
    await signOut();
    router.push('/login');
  };

  const drawerHeight =
    typeof window !== 'undefined' ? `${window.innerHeight - 10}px` : 'auto';

  // useEffect for select communities

  // functions for render navbar options
  const renderMenuOptions = () => {
    return (
      <Flex
        direction={'column'}
        align={'center'}
        gridGap={10}
        height={'100%'}
        mt={10}>
        <Box w="100%">
          <Text
            fontWeight={600}
            fontSize={['14px', '14px', '14px', '22px', '22px', '22px']}
            lineHeight={'36px'}>
            Comunidad:
          </Text>
        </Box>
        <Button
          py={5}
          px={24}
          colorScheme={'unset'}
          bg={colors.navbar}
          color={'white'}
          borderRadius={5}
          onClick={onLogOut}>
          Cerrar sesión
          <Icon as={BiUserCircle} ml="5px" w="1.5em" h="1.5em" />
        </Button>
      </Flex>
    );
  };

  return (
    <>
      <HamburgerIcon
        mx={2}
        w="1.5em"
        h="1.5em"
        onClick={onOpen}
        color={'#FFF'}
      />
      <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={10} maxH={drawerHeight}>
            {renderMenuOptions()}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
