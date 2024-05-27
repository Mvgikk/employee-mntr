import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getEmployees = async (userId: string) => {
  return await axios.get(`${API_URL}/employees/${userId}`);
};

export const addEmployee = async (employee: { id: string, user_id: string, email: string }) => {
  return await axios.post(`${API_URL}/employees`, employee);
};

export const deleteEmployee = async (id: string) => {
  return await axios.delete(`${API_URL}/employees/${id}`);
};

export const getStatuses = async (date: string) => {
  return await axios.get(`${API_URL}/statuses/${date}`);
};

export const addStatus = async (status: { hired_id: string, report: { id: string, value: 'ACTIVE' | 'INACTIVE', timestamp: Date }[] }) => {
  return await axios.post(`${API_URL}/statuses`, status);
};