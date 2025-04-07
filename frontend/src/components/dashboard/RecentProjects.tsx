import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Box,
} from '@mui/material';
import { Project } from '../../types';

// Mock data - replace with real data from API
const mockProjects: (Project & { progress: number })[] = [
  {
    id: '1',
    name: 'DC North Wing Commissioning',
    status: 'active',
    startDate: '2024-03-15',
    progress: 75,
  },
  {
    id: '2',
    name: 'Server Room 3 Setup',
    status: 'active',
    startDate: '2024-03-20',
    progress: 45,
  },
  {
    id: '3',
    name: 'Cooling System Upgrade',
    status: 'active',
    startDate: '2024-03-25',
    progress: 30,
  },
  {
    id: '4',
    name: 'Power Distribution Unit Installation',
    status: 'active',
    startDate: '2024-03-28',
    progress: 15,
  },
];

const RecentProjects: React.FC = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Projects
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockProjects.map((project) => (
              <TableRow key={project.id} hover>
                <TableCell>{project.name}</TableCell>
                <TableCell>{new Date(project.startDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Chip
                    label={project.status}
                    color={project.status === 'active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: '100px',
                        height: '8px',
                        bgcolor: '#e0e0e0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${project.progress}%`,
                          height: '100%',
                          bgcolor: 'primary.main',
                        }}
                      />
                    </Box>
                    <Typography variant="body2">{project.progress}%</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentProjects; 