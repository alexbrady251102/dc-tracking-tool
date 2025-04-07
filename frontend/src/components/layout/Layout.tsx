import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import { User } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
}

const Layout: React.FC<LayoutProps> = ({ children, user }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header user={user} />
      <Sidebar user={user} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: '240px' },
          mt: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 