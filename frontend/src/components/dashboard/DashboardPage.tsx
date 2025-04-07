import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import SummaryCards from './SummaryCards';
import RecentProjects from './RecentProjects';
import ActivityFeed from './ActivityFeed';

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      {/* Summary Cards */}
      <SummaryCards />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Recent Projects */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <RecentProjects />
          </Paper>
        </Grid>

        {/* Activity Feed */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <ActivityFeed />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage; 