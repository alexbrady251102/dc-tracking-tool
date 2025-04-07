import React, { useState } from 'react';
import { Box, Button, Typography, Paper, CircularProgress } from '@mui/material';
import { login } from '../../services/auth';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          DC Tracking Tool
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Please sign in to continue
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleLogin}
          disabled={isLoading}
          sx={{ width: '100%' }}
        >
          {isLoading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} color="inherit" />
              <span>Signing in...</span>
            </Box>
          ) : (
            'Sign In'
          )}
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage; 