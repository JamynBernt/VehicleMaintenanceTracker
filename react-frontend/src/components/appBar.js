import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vehicle Maintenance Tracker
          </Typography>
          {user?.firstName &&
            <Button color="inherit" onClick={() =>{navigate('/mainMenu');}}>Main Menu</Button>
          }
          {user?.firstName &&
            <Button color="inherit" onClick={() =>{localStorage.removeItem('user'); navigate('/home');}}>Logout</Button>
          }
          {!user?.firstName &&
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          }
          {!user?.firstName &&
            <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
