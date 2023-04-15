import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Company</Typography>
          <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="login"
          sx={{ mr: 1, ml: "auto" }}
          component={RouterLink} 
          to={"/login"}>
            <LoginIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
