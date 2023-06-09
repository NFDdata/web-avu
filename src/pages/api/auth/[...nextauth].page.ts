import axios, { AxiosError } from 'axios';
// import { statusLoginEnum } from 'constants/enum';
import { decodeDictionary } from 'helpers/dictionary/dictionary.helper';
// import Jwt from 'jsonwebtoken';
import { BaseResponse } from 'models/response.model';
import { GetServerSidePropsContext } from 'next';
import NextAuth, { UserSession } from 'next-auth';
import CredentialsProvider, {
  CredentialInput
} from 'next-auth/providers/credentials';
import { getSession } from 'next-auth/react';

const secret = process.env.SECRET || 'TH151SMYJWT53CR3TK3Y155054F34ND33CUR3';

export type Role = 'superAdmin' | 'admin' | 'user';


export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context); // Obtengo la sesión
  // const roles = ['superAdmin', 'admin', 'user']; // Usuarios autorizados en la página

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
      session
    }
  };
};

export default NextAuth({
  providers: [
    // provider que manda la lógica para login con la api
    CredentialsProvider({
      id: 'sign-in',
      name: 'SignIn',
      credentials: {} as Record<string, CredentialInput>,
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/signin`,
            {
              email: credentials?.email,
              password: credentials?.password
            },
            {
              headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
              }
            }
          );
          console.log('el response', response.data);

          return response.data;
        } catch (error) {
          const err = error as AxiosError<BaseResponse>;
          console.log('error', error);
          return {
            ...err.response,
            status: err.response?.status,
            message: decodeDictionary(err.response?.data.result_code as string), // send request result_code to dictionary
            id: ''
          };
        }
      }
    })
  ],
  jwt: { secret: secret },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token = { ...token, ...user });

      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      // const dataProfile = Jwt.decode((token.accessToken as UserSession).token);

      session.user = token.data as UserSession;

      // session.user.rol = (dataProfile as TokenDecode).profile;

      // session.user.openRemoteUser = (dataProfile as TokenDecode).openRemoteUser;

      return session;
    },
    signIn: async () => {
      // agregar casos de no login

      return Promise.resolve(true);
    },
    redirect: async ({ url }) => {
      return url;
    }
  },
  pages: {
    error: '/login',
    signIn: `${process.env.NEXTAUTH_URL}`,
    signOut: `${process.env.NEXTAUTH_URL}/login`
  }
});
