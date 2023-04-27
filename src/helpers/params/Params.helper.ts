import { paramsType } from './types';

export const serializeString = (params: paramsType) => {
  let queryParams = ``;

  if (params.page) queryParams = queryParams + `page=${params.page}`;
  if (params.limit) queryParams = queryParams + `&limit=${params.limit}`;
  if (params.attributes)
    queryParams = queryParams + `&attributes=${params.attributes}`;
  if (params.includes)
    queryParams = queryParams + `&includes=${params.includes}`;
  if (params.order) queryParams = queryParams + `&order=${params.order}`;
  if (params.or) queryParams = queryParams + `&or=${params.or}`;
  if (params.where) queryParams = queryParams + `&where=${params.where}`;
  if (params.filterModel)
    queryParams = queryParams + `&includes=${params.filterModel}`;
  if (params.between) queryParams = queryParams + `&between=${params.between}`;

  return queryParams;
};
