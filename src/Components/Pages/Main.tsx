import { Button } from '@mui/material'
import React from 'react'
import EmployeeService from '../../Service/EmployeeService'

export default function Main() {

  const getList = () => {
    EmployeeService().getAllEmloyees()
    .then((data) => {
      console.log("test")
      console.log(data)
    })
  }
  return (
    <Button variant="contained" onClick={() => {getList()}}>GetAllEmployess</Button>
  )
}
