import { hasSpace } from 'helpers/Strings.helpers';

import { LIST_SEPARATOR } from '../constants';
import { paramsType } from '../types';

export const ParamsActivitiesObject = (
  page?: number,
  limit?: number,
  search?: string,
  eventType?: string,
  entrance?: string,
  initDate?: string,
  finalDate?: string,
  method?: string
): paramsType => {
  let params: paramsType = {
    page,
    limit: limit && limit > 0 ? limit : 10,
    order: 'createdAt:DESC',
    includes: `Entrance${LIST_SEPARATOR}Unit${LIST_SEPARATOR}User`
  };

  const searchString = search?.trim();
  const isStringSpace = hasSpace(searchString || '');

  if (!isStringSpace && search)
    params = {
      ...params,
      or: `Unit.number${LIST_SEPARATOR}User.name${LIST_SEPARATOR}User.last_name${LIST_SEPARATOR}Entrance.name${LIST_SEPARATOR}User.identifier:${search}`
    };

  let whereParams = '';

  if (isStringSpace) {
    const arrayName = searchString?.split(' ');
    const firstName = arrayName?.shift();
    const lastName = arrayName?.join(' ');
    whereParams =
      whereParams +
      `User.name:${firstName}${LIST_SEPARATOR}User.last_name:${lastName}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (eventType) {
    whereParams =
      whereParams +
      `${isStringSpace ? `${LIST_SEPARATOR}` : ''}event_type:${eventType}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (entrance) {
    whereParams =
      whereParams +
      `${!!eventType ? `${LIST_SEPARATOR}` : ''}Entrance.name:${entrance}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (method) {
    whereParams =
      whereParams +
      `${!!entrance || !!eventType ? `${LIST_SEPARATOR}` : ''}method:${method}`;

    params = {
      ...params,
      where: whereParams
    };
  }

  if (initDate && finalDate) {
    params = {
      ...params,
      between: `${initDate}_${finalDate}`
    };
  }

  return params;
};
