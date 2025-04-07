import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { SvgIconProps } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement<SvgIconProps>;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, color }) => (
  <Paper
    sx={{
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    }}
  >
    <Box
      sx={{
        p: 1.5,
        borderRadius: 2,
        bgcolor: `${color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {React.cloneElement(icon, { sx: { color } })}
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" component="div">
        {value}
      </Typography>
    </Box>
  </Paper>
);

const SummaryCards: React.FC = () => {
  // Mock data - replace with real data from API
  const summaryData = [
    {
      title: 'Active Projects',
      value: 12,
      icon: <AssignmentIcon />,
      color: '#1976d2',
    },
    {
      title: 'Tasks In Progress',
      value: 48,
      icon: <EngineeringIcon />,
      color: '#2e7d32',
    },
    {
      title: 'Completed Tasks',
      value: 156,
      icon: <CheckCircleIcon />,
      color: '#1976d2',
    },
    {
      title: 'Hours Logged',
      value: '2,450',
      icon: <TimerIcon />,
      color: '#ed6c02',
    },
  ];

  return (
    <Grid container spacing={3}>
      {summaryData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SummaryCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards; 