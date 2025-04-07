import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  LinearProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Visibility as ViewIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Mock data - replace with API data later
const mockProjects = [
  {
    id: 1,
    name: 'Data Center A',
    status: 'In Progress',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progress: 45,
    tasksCompleted: 23,
    totalTasks: 50,
  },
  {
    id: 2,
    name: 'Data Center B',
    status: 'Planning',
    startDate: '2024-03-01',
    endDate: '2024-09-30',
    progress: 10,
    tasksCompleted: 5,
    totalTasks: 50,
  },
  {
    id: 3,
    name: 'Data Center C',
    status: 'Completed',
    startDate: '2023-10-01',
    endDate: '2024-01-31',
    progress: 100,
    tasksCompleted: 50,
    totalTasks: 50,
  },
];

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects] = useState(mockProjects);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'primary';
      case 'planning':
        return 'warning';
      default:
        return 'default';
    }
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  const handleEditProject = (projectId: number) => {
    navigate(`/projects/${projectId}/edit`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Projects
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/projects/new')}
        >
          New Project
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Tasks</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>
                  <Chip
                    label={project.status}
                    color={getStatusColor(project.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{new Date(project.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(project.endDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {project.progress}%
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {project.tasksCompleted} / {project.totalTasks}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="View Project">
                    <IconButton onClick={() => handleViewProject(project.id)}>
                      <ViewIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Project">
                    <IconButton onClick={() => handleEditProject(project.id)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProjectsPage; 