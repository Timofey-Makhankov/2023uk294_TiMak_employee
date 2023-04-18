import { Typography, Box } from '@mui/material'
import React from 'react'

/**
 * This Page Loads, when the given URL on the
 * Website is not found
 * @returns A NotFound Page (Component)
 */
export default function NotFound() {
  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Typography variant="h1" component="h2" textAlign={"center"}>404 - Page Not Found</Typography>
    </Box>
  )
}
