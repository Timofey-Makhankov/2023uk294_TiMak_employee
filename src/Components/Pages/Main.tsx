import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EmployeeService from '../../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

export default function Main() {

  const [employeeList, setEmployeeList] = useState([])
  const navigate = useNavigate()

  const getList = () => {
    EmployeeService().getAllEmloyees()
    .then((data) => {
      console.log("test")
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
      navigate("/login")
    })
  }

  useEffect(() => {
    getList()
  }, [])
  
  return (
    <Button variant="contained" onClick={() => {getList()}}>GetAllEmployess</Button>
  )
}
