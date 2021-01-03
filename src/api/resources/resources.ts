import { api } from '../index';

import { ResourceList, Resource, ResourceURL } from './resources.types';

export const fetchResourceList = <T extends ResourceURL>(url: T) =>
  api.get<ResourceList<T>>(`/${url}/`).then(({ data }) => data);

export const fetchResource = <T extends ResourceURL>(url: T, id: number) =>
  api.get<Resource<T>>(`/${url}/${id}`).then(({ data }) => data);
