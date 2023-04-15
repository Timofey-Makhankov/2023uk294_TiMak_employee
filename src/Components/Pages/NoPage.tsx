import { Typography, Box } from '@mui/material'
import React from 'react'

export default function NoPage() {
  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Typography variant="h1" component="h2" textAlign={"center"}>404 - Page Not Found</Typography>
    </Box>
  )
}
