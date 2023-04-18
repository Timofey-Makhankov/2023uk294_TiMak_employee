import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Employee } from '../../Types/Employee'
import EmployeeService from '../../Service/EmployeeService'
import EmployeeCard from '../Molecules/EmployeeCard'
import AddCard from '../Molecules/AddCard'

/**
 * This is the Main Page for viewing all
 * the Employee Information from the JSON
 * Webserver
 * @returns The Index Page (Component)
 */
export default function Main() {

  const [employeeList, setEmployeeList] = useState<Employee[]>([])
  const navigate = useNavigate()

  /**
   * Loads all the data from the JSON Webserver response
   */
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
        <Grid item xs={3} justifyContent={"center"} alignItems={"center"}>
          <AddCard />
        </Grid>
      </Grid>
    </>
  )
}
