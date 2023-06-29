import axios, { AxiosError } from 'axios';
import NextAuth, { UserSession } from 'next-auth';
import CredentialsProvider, {
  CredentialInput
} from 'next-auth/providers/credentials';


const secret = process.env.SECRET || 'TH151SMYJWT53CR3TK3Y155054F34ND33CUR3';

export type Role = 'superAdmin' | 'admin' | 'user';

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
      

          return response.data;
        } catch (error) {

          const err = error as AxiosError<{ data: { error: string } }>;
        return { ...err?.response?.data, id: '' };
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

      session.user = token.data as UserSession;

      return session;
    },
    signIn: async ({user}) => {
      if(user?.error) throw new Error(user.error);

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
