import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Flex, Text } from '@chakra-ui/react';
import Loading from '@components/loading';
import { statusLoginEnum } from 'constants/enum';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import LoginService from 'services/loginService';

const Index: NextPage = () => {
  const { data: user } = useSession();

  const router = useRouter();
  const { verify } = router.query;
  const verifyToken = verify as string;

  const { isLoading, mutate } = useMutation(LoginService.verify, {
    onSuccess: res => {
      if (res.message === statusLoginEnum.accountActive) router.push('/login');
    },
    onError: err => console.error(err)
  });

  useEffect(() => {
    if (verifyToken) {
      console.log('se ejecuta');
      mutate({ verifyToken });
    }
  }, [verifyToken, isLoading]);

  if (user?.user) router.push('/');

  if (isLoading) return <Loading />;

  return (
    <Flex direction={'column'}>
      <Text>Estamos procesando su información</Text>
      <Loading />
    </Flex>
  );
};

export default Index;
