import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  LinearProgress,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Card,
  CardContent,
} from '@mui/material';
import {
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Mock data - replace with API data later
const mockProject = {
  id: 1,
  name: 'Data Center A',
  status: 'In Progress',
  startDate: '2024-01-15',
  endDate: '2024-06-30',
  progress: 45,
  tasksCompleted: 23,
  totalTasks: 50,
  description: 'Major data center commissioning project in Dublin region.',
  location: 'Dublin, Ireland',
  projectLead: 'John Smith',
  tasks: [
    {
      id: 1,
      name: 'HVAC System Testing',
      status: 'Completed',
      assignee: 'Mike Johnson',
      dueDate: '2024-02-15',
      completedDate: '2024-02-14',
    },
    {
      id: 2,
      name: 'Power Distribution Testing',
      status: 'In Progress',
      assignee: 'Sarah Williams',
      dueDate: '2024-03-01',
    },
    {
      id: 3,
      name: 'Network Infrastructure Setup',
      status: 'Pending',
      assignee: 'David Chen',
      dueDate: '2024-03-15',
    },
  ],
  recentActivity: [
    {
      id: 1,
      type: 'task_completed',
      description: 'HVAC System Testing marked as complete',
      user: 'Mike Johnson',
      timestamp: '2024-02-14T15:30:00Z',
    },
    {
      id: 2,
      type: 'task_started',
      description: 'Power Distribution Testing started',
      user: 'Sarah Williams',
      timestamp: '2024-02-16T09:00:00Z',
    },
  ],
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [tabValue, setTabValue] = useState(0);
  const [project] = useState(mockProject);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'primary';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircleIcon color="success" />;
      case 'in progress':
        return <ScheduleIcon color="primary" />;
      case 'pending':
        return <WarningIcon color="warning" />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1">
            {project.name}
          </Typography>
          <Tooltip title="Edit Project">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" color="text.secondary" paragraph>
              {project.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <PersonIcon color="action" />
              <Typography variant="body2">Lead: {project.projectLead}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Status Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Status
              </Typography>
              <Chip
                label={project.status}
                color={getStatusColor(project.status) as any}
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Progress
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={project.progress} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {project.progress}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Start Date
              </Typography>
              <Typography variant="body1">
                {new Date(project.startDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                End Date
              </Typography>
              <Typography variant="body1">
                {new Date(project.endDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Paper sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="project tabs">
          <Tab label="Tasks" id="project-tab-0" />
          <Tab label="Activity" id="project-tab-1" />
        </Tabs>

        {/* Tasks Tab */}
        <TabPanel value={tabValue} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Assignee</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Completed Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {project.tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getStatusIcon(task.status)}
                        <Chip
                          label={task.status}
                          color={getStatusColor(task.status) as any}
                          size="small"
                        />
                      </Box>
                    </TableCell>
                    <TableCell>{task.assignee}</TableCell>
                    <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {task.completedDate
                        ? new Date(task.completedDate).toLocaleDateString()
                        : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Activity Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {project.recentActivity.map((activity) => (
              <Paper key={activity.id} sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">{activity.description}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(activity.timestamp).toLocaleString()}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  By: {activity.user}
                </Typography>
              </Paper>
            ))}
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default ProjectDetailPage; 