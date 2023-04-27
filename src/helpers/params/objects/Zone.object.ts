import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsZoneObject = (
  search?: string,
  blockId?: string,
  page?: number,
  limit?: number
): paramsType => {
  let params: paramsType = {
    page: page || 1,
    limit: limit || 10,
    order: 'deletedAt:DESC',
    includes: 'Entrances'
  };

  if (search)
    params = {
      ...params,
      or: `name:${search}${LIST_SEPARATOR}last_name:${search}`
    };

  if (blockId) params = { ...params, where: `block_id:${blockId}` };

  return params;
};
