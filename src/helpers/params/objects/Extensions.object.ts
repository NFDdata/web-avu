import { cleanRut, formatRut, validateRut } from 'helpers/Rut.helper';
import { hasSpace } from 'helpers/Strings.helpers';

import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsExtObjetc = (
  page?: number,
  limit?: number,
  search?: string,
  unitNumber?: string
) => {
  let params: paramsType = {
    page: page || 1,
    limit: limit && limit > 0 ? limit : 10,
    includes: `Vehicles${LIST_SEPARATOR}Units`,
    order: `deletedAt:DESC${LIST_SEPARATOR}status:DESC`
  };

  const searchString = search?.trim();
  const isStringSpace = hasSpace(searchString || '');

  if (!isStringSpace && search) {
    const rutOrName = validateRut(searchString || '')
      ? formatRut(cleanRut(searchString || ''))
      : searchString;

    params = {
      ...params,
      or: `name${LIST_SEPARATOR}last_name${LIST_SEPARATOR}identifier:${rutOrName}`
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

  if (unitNumber) {
    whereParams =
      whereParams +
      `${isStringSpace ? `${LIST_SEPARATOR}` : ''}Units.number:${unitNumber}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  return params;
};
