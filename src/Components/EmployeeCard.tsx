import React from 'react'
import { Employee } from '../Types/Employee'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'

function handleDelete() {
  alert("You deleted me")
}

function handleEdit() {
  alert("You edited me")
}

export default function EmployeeCard({ prop }: { prop: Employee }) {
  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent>
          <Typography>Name: {prop.first_name} {prop.last_name}</Typography>
          <Typography>Birthdate: {prop.birth_date}</Typography>
          <Typography>Hire Date: {prop.hire_date}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: '100px', ml: 'auto' }}
          image={require(`../Images/${prop.gender === 'M' ? 'person-male.svg' : 'person-female.svg'}`)}
          alt="Live from space album cover"
        />
      </Box>
      <CardActions>
        <Tooltip title="Edit" placement='bottom'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Edit"
            onClick={handleEdit}
            sx={{ ml: "auto" }} >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement='bottom'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Delete"
            onClick={handleDelete}
            sx={{ mr: 1, ml: "auto" }} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
