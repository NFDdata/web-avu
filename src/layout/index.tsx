import { FC } from 'react';
// import Loading from '@components/loading';
import { useSession } from 'next-auth/react';

import PrivateLayout from './privatelayout';
import PublicLayout from './publiclayout';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  if (!session) return <PublicLayout>{children}</PublicLayout>;

  return <PrivateLayout>{children}</PrivateLayout>;
};
