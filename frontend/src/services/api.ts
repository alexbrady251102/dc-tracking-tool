import axios from 'axios';
import { getToken } from './auth';
import { Project, Asset, Task } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Projects API
export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get('/projects');
  return response.data;
};

export const createProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
  const response = await api.post('/projects', project);
  return response.data;
};

// Assets API
export const getAssets = async (projectId: string): Promise<Asset[]> => {
  const response = await api.get(`/projects/${projectId}/assets`);
  return response.data;
};

export const createAsset = async (projectId: string, asset: Omit<Asset, 'id' | 'projectId'>): Promise<Asset> => {
  const response = await api.post(`/projects/${projectId}/assets`, asset);
  return response.data;
};

// Tasks API
export const getTasks = async (assetId: string): Promise<Task[]> => {
  const response = await api.get(`/assets/${assetId}/tasks`);
  return response.data;
};

export const createTask = async (assetId: string, task: Omit<Task, 'id' | 'assetId'>): Promise<Task> => {
  const response = await api.post(`/assets/${assetId}/tasks`, task);
  return response.data;
};

export const updateTaskStatus = async (taskId: string, status: Task['status']): Promise<Task> => {
  const response = await api.patch(`/tasks/${taskId}/status`, { status });
  return response.data;
}; 