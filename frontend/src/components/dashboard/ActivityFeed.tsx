import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';
import EngineeringIcon from '@mui/icons-material/Engineering';

interface Activity {
  id: string;
  type: 'task_created' | 'task_completed' | 'time_logged' | 'status_updated';
  user: string;
  description: string;
  timestamp: string;
}

// Mock data - replace with real data from API
const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'task_created',
    user: 'John Doe',
    description: 'Created task "Install new server rack"',
    timestamp: '2024-04-07T09:30:00Z',
  },
  {
    id: '2',
    type: 'task_completed',
    user: 'Jane Smith',
    description: 'Completed task "Configure cooling system"',
    timestamp: '2024-04-07T09:15:00Z',
  },
  {
    id: '3',
    type: 'time_logged',
    user: 'Mike Johnson',
    description: 'Logged 4 hours on "Power distribution setup"',
    timestamp: '2024-04-07T09:00:00Z',
  },
  {
    id: '4',
    type: 'status_updated',
    user: 'Sarah Wilson',
    description: 'Updated status of "Network configuration"',
    timestamp: '2024-04-07T08:45:00Z',
  },
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'task_created':
      return <AssignmentIcon />;
    case 'task_completed':
      return <CheckCircleIcon />;
    case 'time_logged':
      return <TimerIcon />;
    case 'status_updated':
      return <EngineeringIcon />;
  }
};

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'task_created':
      return '#1976d2';
    case 'task_completed':
      return '#2e7d32';
    case 'time_logged':
      return '#ed6c02';
    case 'status_updated':
      return '#9c27b0';
  }
};

const ActivityFeed: React.FC = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {mockActivities.map((activity) => (
          <ListItem key={activity.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: `${getActivityColor(activity.type)}20`, color: getActivityColor(activity.type) }}>
                {getActivityIcon(activity.type)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={activity.description}
              secondary={
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography component="span" variant="body2" color="text.primary">
                    {activity.user}
                  </Typography>
                  <Typography component="span" variant="caption" color="text.secondary">
                    {new Date(activity.timestamp).toLocaleString()}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ActivityFeed; 