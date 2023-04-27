import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: UserSession;
    expires: ISODateString;
  }

  interface UserSession {
    token: string;
    rol?: string;
    openRemoteUser: RemoteUser;
    userData: UserData;
  }

  interface User {
    status: string;
    message: string;
    data: string;
    timestamp: string;
    id: string;
  }

  interface RemoteUser {
    id: number;
    identifier: string;
  }

  interface TokenDecode {
    id: number;
    full_name: string;
    email: string;
    profile: string;
    Communities: CommunitiesData[];
    openRemoteUser: RemoteUser;
    role: string;
    exp: number;
    iat: number;
    jti: string;
    nonce: string;
  }
}
