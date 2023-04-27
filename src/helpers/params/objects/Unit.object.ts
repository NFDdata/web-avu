import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsUnitObject = (
  search?: string,
  blockId?: string,
  page?: number,
  limit?: number
): paramsType => {
  let params: paramsType = {
    page,
    limit,
    includes: 'User',
    order: `deletedAt:DESC${LIST_SEPARATOR}number:ASC`
  };

  if (search)
    params = {
      ...params,
      or: `name:${search}${LIST_SEPARATOR}last_name:${search}`
    };

  if (blockId) params = { ...params, where: `block_id:${blockId}` };

  return params;
};
