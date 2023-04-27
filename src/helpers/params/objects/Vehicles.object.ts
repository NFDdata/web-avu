import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsVehicleObject = (
  search?: string,
  userId?: string,
  page?: number,
  limit?: number
): paramsType => {
  let params: paramsType = {
    page: page || 1,
    limit: limit || 10,
    order: 'deletedAt:DESC'
  };

  if (search)
    params = {
      ...params,
      or: `name:${search}${LIST_SEPARATOR}last_name:${search}`
    };

  if (userId) params = { ...params, where: `user_id:${userId}` };

  return params;
};
