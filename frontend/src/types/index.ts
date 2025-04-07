export interface User {
  id: string;
  displayName: string;
  email: string;
  role: 'MCO' | 'FieldUser' | 'Finance' | 'Admin';
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'archived';
  startDate: string;
  endDate?: string;
}

export interface Asset {
  id: string;
  projectId: string;
  name: string;
  type: 'mechanical' | 'electrical';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  predictedTime: number;
  actualTime?: number;
}

export interface Task {
  id: string;
  assetId: string;
  name: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
  startTime?: string;
  endTime?: string;
} 