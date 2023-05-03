import { FC, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Container } from '@components/container';
import { LayoutGroup } from 'framer-motion';
import { useScreenSize } from 'hooks/usescreensize';
import { LayoutProps } from 'layout/types';

const PublicLayout: FC<LayoutProps> = ({ children }) => {
  const { screenHeight } = useScreenSize();

  const [minH, setMinH] = useState(0);

  useEffect(() => {
    setMinH(
      screenHeight - (document?.getElementById('appFooter')?.clientHeight ?? 80)
    );
  }, [screenHeight]);

  return (
    <LayoutGroup>
      <Container minH={`${minH}px`}>
        <Flex
          py={8}
          w={'100%'}
          direction={'column'}
          align={'center'}
          minH={'100vh'}>
          {children}
        </Flex>
      </Container>
    </LayoutGroup>
  );
};

export default PublicLayout;
