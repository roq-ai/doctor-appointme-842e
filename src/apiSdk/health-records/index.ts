import axios from 'axios';
import queryString from 'query-string';
import { HealthRecordInterface, HealthRecordGetQueryInterface } from 'interfaces/health-record';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHealthRecords = async (
  query?: HealthRecordGetQueryInterface,
): Promise<PaginatedInterface<HealthRecordInterface>> => {
  const response = await axios.get('/api/health-records', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHealthRecord = async (healthRecord: HealthRecordInterface) => {
  const response = await axios.post('/api/health-records', healthRecord);
  return response.data;
};

export const updateHealthRecordById = async (id: string, healthRecord: HealthRecordInterface) => {
  const response = await axios.put(`/api/health-records/${id}`, healthRecord);
  return response.data;
};

export const getHealthRecordById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/health-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHealthRecordById = async (id: string) => {
  const response = await axios.delete(`/api/health-records/${id}`);
  return response.data;
};
