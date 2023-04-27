/* eslint-disable semi */
export interface BaseResponse {
  status: string | boolean;
  result_code?: string;
  errors?: string[];
}

export interface BaseResponseError {
  errors: { message: string }[];
}

export interface BaseDataResponse {
  count: number;
  limit: number;
  page: number;
}

export default interface BaseLoginResponse {
  error?: string;
  ok: boolean;
  status: number;
  url?: string;
}
