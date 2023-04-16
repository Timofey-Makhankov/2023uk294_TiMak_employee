import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import EmployeeService from '../../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { Employee } from '../../Types/Employee'
import EmployeeCard from '../EmployeeCard'

export default function Main() {

  const [employeeList, setEmployeeList] = useState<Employee[]>([])
  const navigate = useNavigate()

  const load = () => {
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

  useEffect(() => {
    load()
  }, [])

  return (<>
    <Button variant="contained" onClick={() => { load() }}>GetAllEmployess</Button>
    <Grid container>
      {employeeList.map((employee: Employee) => {
        return (
          <Grid item xs={3}>
            <EmployeeCard prop={employee} />
          </Grid>
        )
      })}
    </Grid>
  </>
  )
}
