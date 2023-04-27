import { FC } from 'react';
import { Box, FormLabel, Input } from '@chakra-ui/react';

import { InputDisabledProps } from './types';

const InputDisabled: FC<InputDisabledProps> = ({ label, value }) => {
  return (
    <Box my={'5px'}>
      <FormLabel>{label}</FormLabel>
      <Input disabled value={value as unknown as string} />
    </Box>
  );
};

export default InputDisabled;
