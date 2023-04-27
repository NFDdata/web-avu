import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { CloseButton, Flex, Icon, Img, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { colors } from 'theme';

import { SidebarProps } from './types';

export const SideBar: FC<SidebarProps> = ({ onClose, ...rest }) => {
  const { data } = useSession();
  const router = useRouter();

  const createItem = (
    name: string,
    path: string,
    icon: IconType,
    roles: string[]
  ) => ({
    name,
    path,
    icon,
    roles
  });

  const staticItems = [
    createItem('Principal', '/', RiArrowLeftRightFill, [
      'superAdmin',
      'admin',
      'user'
    ])
  ];

  return (
    <Flex
      direction={'column'}
      w={{ base: 'full', md: 60 }}
      transition="3s ease"
      bg={colors.navbar}
      h={'full'}
      zIndex={1000}
      overflowY="hidden"
      position="fixed"
      top={0}
      color={'#FFF'}
      pt={'50px'}
      borderRight={'2px solid gray'}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justify="space-between">
        <Img
          // src={logo.src}
          w={'64px'}
          h={'36px'}
          width={'auto'}
          cursor="pointer"
          onClick={() => router.push('/')}
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {staticItems.map((item, idx) => {
        return (
          <Link
            key={idx.toString()}
            onClick={() => item.path && router.push(item.path)}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
              align="center"
              p="4"
              mx="4"
              bg={router.asPath === item.path ? 'blue.400' : 'none'}
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'blue.400',
                color: 'white'
              }}>
              {item.icon && (
                <Icon
                  mr="4"
                  fontSize="20"
                  _groupHover={{
                    color: 'white'
                  }}
                  as={item.icon}
                />
              )}

              <Text fontSize={'18px'}>{item.name}</Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};
