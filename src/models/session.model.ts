import { statusLoginEnum } from '../constants/enum';

export interface UserSession {
  data: string;
  exp: number;
  iat: number;
  id: string;
  jti: string;
  message: string;
  status: statusLoginEnum;
  timestamp: string;
}
