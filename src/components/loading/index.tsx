import { Flex, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex
      w="full"
      h="full"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      color="primary.normal">
      <Spinner />
    </Flex>
  );
};

export default Loading;
