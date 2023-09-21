import axios from 'axios';
import queryString from 'query-string';
import { SystemAdministratorInterface, SystemAdministratorGetQueryInterface } from 'interfaces/system-administrator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSystemAdministrators = async (
  query?: SystemAdministratorGetQueryInterface,
): Promise<PaginatedInterface<SystemAdministratorInterface>> => {
  const response = await axios.get('/api/system-administrators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSystemAdministrator = async (systemAdministrator: SystemAdministratorInterface) => {
  const response = await axios.post('/api/system-administrators', systemAdministrator);
  return response.data;
};

export const updateSystemAdministratorById = async (id: string, systemAdministrator: SystemAdministratorInterface) => {
  const response = await axios.put(`/api/system-administrators/${id}`, systemAdministrator);
  return response.data;
};

export const getSystemAdministratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/system-administrators/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteSystemAdministratorById = async (id: string) => {
  const response = await axios.delete(`/api/system-administrators/${id}`);
  return response.data;
};
