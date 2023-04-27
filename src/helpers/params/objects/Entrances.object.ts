import { paramsType } from '../types';

export const ParamsEntranceObject = (
  search?: string,
  zoneId?: string,
  page?: number,
  limit?: number
): paramsType => {
  let params: paramsType = {
    page: page || 1,
    limit: limit || 100,
    order: 'name:ASC'
  };

  if (search)
    params = {
      ...params,
      or: `name:${search}`
    };

  if (zoneId)
    params = {
      ...params,
      where: `zone_id:${zoneId}`
    };

  return params;
};
