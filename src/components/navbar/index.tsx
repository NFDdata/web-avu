import { FC,  } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

import { DesktopMenu } from './menu/DesktopMenu';
import { NavbarProps } from './types';

// componente Navbar
export const Navbar: FC<NavbarProps> = ({ onCloseMenu, onOpenMenu }) => {
  // Hooks usados
  const notShowText = useBreakpointValue({ base: true, lg: false });

  // Función logout con redirección al login
  const onLogOut = async () => {
    await signOut({
      callbackUrl: process.env.NEXTAUTH_URL,
      redirect: true
    });
  };

  return (
    <DesktopMenu
      notShowText={notShowText}
      onLogOut={onLogOut}
      onCloseMenu={onCloseMenu}
      onOpen={onOpenMenu}
    />
  );
};
