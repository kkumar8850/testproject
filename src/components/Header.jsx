import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1} color="transparent">
        <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" >
                tatd
            </Typography>
            <Typography>Trusted and trained drivers</Typography>
            </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}