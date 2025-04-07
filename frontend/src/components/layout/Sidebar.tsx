import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { User } from '../../types';

interface SidebarProps {
  user: User | null;
}

const drawerWidth = 240;

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/', roles: ['MCO', 'FieldUser', 'Finance', 'Admin'] },
    { text: 'Projects', icon: <AssignmentIcon />, path: '/projects', roles: ['MCO', 'FieldUser', 'Finance', 'Admin'] },
    { text: 'Users', icon: <PeopleIcon />, path: '/users', roles: ['Admin'] },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings', roles: ['Admin'] },
  ];

  const filteredMenuItems = menuItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          mt: '64px',
        },
      }}
    >
      <Divider />
      <List>
        {filteredMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 