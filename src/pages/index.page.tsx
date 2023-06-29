import { Box } from '@chakra-ui/react';
import Loading from '@components/loading';
import { MainContainer } from '@components/maincontainer';
import { GetServerSidePropsContext, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { colors } from 'theme';

const Index: NextPage = () => {
  const { data: user } = useSession();
  console.log('buena usuario: ', user?.user);

  // retornar en caso de que falta algo
  if (!user) return <Loading />;

  return (
    <MainContainer title={'Primer Contenedor'} bg={colors.navbar}>
      <Box>Contenedor</Box>
    </MainContainer>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context); // Obtengo la sesión
  const roles = ['superAdmin', 'admin', 'user']; // Usuarios autorizados en la página

  // Si el usuario no tiene sesión redirigr a la página de login
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  // const userRoles = session.user?.rol;

  // if (!roles.some(r => userRoles?.includes(r))) {
  //   // Si el usuario no tiene permiso para acceder a la página, redirigir a la página de de actividades
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   };
  // }

  return {
    props: {
      roles
    }
  };
};

export default Index;
