import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import EmployeeService from '../../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { Employee } from '../../Types/Employee'
import EmployeeCard from '../EmployeeCard'

export default function Main() {

  const [employeeList, setEmployeeList] = useState<Employee[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    function load() {
      EmployeeService().getAllEmloyees()
        .then((data) => {
          console.log("test")
          console.log(data)
          setEmployeeList(data)
        })
        .catch((error) => {
          console.log(error)
          navigate("/login")
        })
    }
    load()
  }, [navigate])

  return (
    <>
      <br />
      <Grid container spacing={3}>
        {employeeList.map((employee: Employee) => {
          return (
            <Grid item xs={3} key={employee.id}>
              <EmployeeCard prop={employee} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
