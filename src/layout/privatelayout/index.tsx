import { FC, useEffect, useState } from 'react';
import { Drawer, DrawerContent, Flex, useDisclosure } from '@chakra-ui/react';
import { Container } from '@components/container';
import { Navbar } from '@components/navbar';
import { SideBar } from '@components/sidebar';
import { useScreenSize } from 'hooks/usescreensize';
import { LayoutProps } from 'layout/types';

const PrivateLayout: FC<LayoutProps> = ({ children }) => {
  const { screenHeight } = useScreenSize();
  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu
  } = useDisclosure();

  const [minH, setMinH] = useState(0);

  useEffect(() => {
    setMinH(
      screenHeight - (document?.getElementById('appFooter')?.clientHeight ?? 80)
    );
  }, [screenHeight]);

  return (
    <Container minH={`${minH}px`} overflowY="hidden">
      <Navbar onCloseMenu={onCloseMenu} onOpenMenu={onOpenMenu} />
      <SideBar onClose={onCloseMenu} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpenMenu}
        placement="left"
        onClose={onCloseMenu}
        returnFocusOnClose={false}
        onOverlayClick={onCloseMenu}
        size="full">
        <DrawerContent>
          <SideBar onClose={onCloseMenu} />
        </DrawerContent>
      </Drawer>
      <Flex
        overflowY={'hidden'}
        mt={20}
        scrollBehavior={'smooth'}
        ml={{ base: 0, md: 60 }}
        p="4">
        {children}
      </Flex>
    </Container>
  );
};

export default PrivateLayout;
