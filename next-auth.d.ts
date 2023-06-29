import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: UserSession;
    expires: ISODateString;
  }

  interface UserSession {
    id: string;
    email: string;
    accessToken: string;
    name: string;
    secondName: string;
    lastName: string;
    secondLastName: string;
    documentNumber: string;
    documentType: DOCUMENT_TYPE;
    state: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    status: UserStatus;
    activateAccountToken?: string;
  }

  interface User {
    status: string;
    message: string;
    data: string;
    timestamp: string;
    error?: string
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
