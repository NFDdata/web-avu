import { FC } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useDelayText } from 'hooks/usedelay';

import { SearchBarProps } from './types';

export const SearchBar: FC<SearchBarProps> = ({ placeholder, setSearch }) => {
  const { delay: searchDelay } = useDelayText(text => setSearch(text), 300);

  const onInputChange = (value: string) => {
    searchDelay(value);
  };

  const searchInput = () => {
    return (
      <Box
        w={'100%'}
        // border={'1px solid black'}
        borderRadius={6}
        boxShadow={'0.5px 0.5px 0.5px #F5F5F5'}>
        <InputGroup>
          <Input
            bg={'#FFF'}
            h={'2.3rem'}
            focusBorderColor="none"
            borderRadius={'6px'}
            border={'1px solid black'}
            placeholder={placeholder}
            onChange={e => onInputChange(e.target.value)}
          />
          <InputLeftElement>
            <SearchIcon color="gray.700" />
          </InputLeftElement>
        </InputGroup>
      </Box>
    );
  };

  return <>{searchInput()}</>;
};
