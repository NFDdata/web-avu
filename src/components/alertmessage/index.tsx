import { FC, useMemo } from 'react';
import { CloseIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { CheckIcon } from '@components/icons/CheckIcon';
import { ActiveAlertTypeEnum } from 'context/activealertmessage/constants';
import { motion } from 'framer-motion';
import { colors } from 'theme';

import { animation } from './constants';
import { AlertMessageProps, PropsType } from './types';

export const AlertMessage: FC<AlertMessageProps> = ({
  type = ActiveAlertTypeEnum.SUCCESS,
  label,
  isOpen,
  onClose
}) => {
  //react useMemo for color about type of alert
  const props = useMemo(() => {
    let props: PropsType = {
      bgColor: '',
      icon: undefined
    };
    if (type === 'success') {
      props = {
        bgColor: 'green.100',
        icon: <CheckIcon width="20px" height="20px" fill="#38A169" />
      };
    }
    if (type === 'warning') {
      props = {
        bgColor: 'yellow.400',
        icon: <WarningTwoIcon width="20px" height="20px" color={'yellow.100'} />
      };
    }
    if (type === 'error') {
      props = {
        bgColor: colors.error.dark,
        icon: <WarningIcon width="20px" height="20px" color={'red.200'} />
      };
    }

    return props;
  }, [type]);

  return (
    <Flex flex={1} overflow="hidden" w={'full'} ml={60}>
      <Flex
        as={motion.div}
        animation={isOpen ? animation : undefined}
        ml={isOpen ? 0 : '-100vw'}
        transition="1s"
        px="20px"
        h={'45px'}
        align="center"
        bgColor={props.bgColor}
        borderRadius="5px">
        <Flex flex={1} gap={3} mr={10}>
          {props.icon}
          <Text
            fontSize="14px"
            color={type === 'success' ? 'green.700' : 'white'}>
            {label}
          </Text>
        </Flex>
        <CloseIcon
          width="12px"
          height="12px"
          onClick={onClose}
          color={type === 'success' ? 'green.700' : 'white'}
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
};
