import { hasSpace } from 'helpers/Strings.helpers';

import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsUserObject = (
  search?: string,
  identifier?: string,
  phone?: string,
  status?: string,
  page?: number,
  limit?: number
): paramsType => {
  let params: paramsType = {
    page: page || 1,
    limit: limit && limit > 0 ? limit : 10,
    includes: `Vehicles${LIST_SEPARATOR}Units`,
    order: `deletedAt:DESC${LIST_SEPARATOR}status:DESC`
  };

  const searchString = search?.trim();
  const isStringSpace = hasSpace(searchString || '');

  if (!isStringSpace && search) {
    params = {
      ...params,
      or: `name${LIST_SEPARATOR}last_name${LIST_SEPARATOR}Units.number:${searchString}`
    };
  }

  let whereParams = '';

  if (isStringSpace) {
    const arrayName = searchString?.split(' ');
    const firstName = arrayName?.shift();
    const lastName = arrayName?.join(' ');
    whereParams =
      whereParams + `name:${firstName}${LIST_SEPARATOR}last_name:${lastName}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (identifier) {
    whereParams =
      whereParams +
      `${isStringSpace ? `${LIST_SEPARATOR}` : ''}identifier:${identifier}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (phone) {
    whereParams =
      whereParams + `${!!identifier ? `${LIST_SEPARATOR}` : ''}phone:${phone}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (status === 'active' || status === 'inactive') {
    whereParams =
      whereParams +
      `${!!identifier || !!phone ? `${LIST_SEPARATOR}` : ''}status:${
        status === 'active' ? true : false
      }`;

    params = {
      ...params,
      where: whereParams
    };
  }

  return params;
};
