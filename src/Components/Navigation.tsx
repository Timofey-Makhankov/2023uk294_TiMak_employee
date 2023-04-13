import { AppBar, Box, Button, IconButton, Toolbar, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link component={RouterLink} color={"inherit"} to={"/login"}>Login</Link>
          <Link component={RouterLink} color={"inherit"} to={"/"}>Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
