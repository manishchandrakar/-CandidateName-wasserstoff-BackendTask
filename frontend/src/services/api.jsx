import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const makeLoadBalancerRequest = () => {
  return axios.get(`${API_BASE_URL}/loadbalancer`);
};

export const addToFIFOQueue = (taskId) => {
  return axios.post(`${API_BASE_URL}/queue/fifo`, { id: taskId });
};

export const addToPriorityQueue = (taskId, priority) => {
  return axios.post(`${API_BASE_URL}/queue/priority`, { id: taskId, priority });
};