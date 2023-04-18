import React from 'react'
import { Employee } from '../../Types/Employee'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import EmployeeService from '../../Service/EmployeeService';

/**
 * This Card shows a preview of information from a given employee
 * @param prop Employee
 * @returns The Card of an Employee Molecule (component)
 */
export default function EmployeeCard({ prop }: { prop: Employee }) {

  /**
   * creates a delete request with the given id of the employee
   * @param id number from given employee
   */
  function handleDelete(id: number | undefined) {
    if (id !== undefined) {
      EmployeeService().deleteEmployee(id.toString())
        .then(() => {
          window.location.reload();
        })
        .catch((error) => { console.log(error) })
    }
  }

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
          image={require(`../../Images/${prop.gender === 'M' ? 'person-male.svg' : 'person-female.svg'}`)}
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
            component={RouterLink}
            to={`/employee/${prop.id}`}
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
            onClick={() => { handleDelete(prop.id) }}
            sx={{ mr: 1, ml: 1 }} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
