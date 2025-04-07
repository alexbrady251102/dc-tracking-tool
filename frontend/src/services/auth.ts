// For development, we'll use a mock authentication
// TODO: Replace with real Azure AD authentication in production

import { User } from '../types';

// Mock user for development
const mockUser: User = {
  id: 'mock-user-id',
  displayName: 'John Doe',
  email: 'john.doe@example.com',
  role: 'FieldUser'
};

export const login = async (): Promise<User | null> => {
  // In development, just return the mock user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 1000); // Simulate network delay
  });
};

export const logout = async (): Promise<void> => {
  // In development, just return a resolved promise
  return Promise.resolve();
};

export const getToken = async (): Promise<string | null> => {
  // In development, return a mock token
  return Promise.resolve('mock-token');
}; 