import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Employee } from '../../Types/Employee'
import EmployeeService from '../../Service/EmployeeService'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

/**
 * This shows the Employee Editor. shows the given values
 * and a form to fill in with new values
 * @returns The Employee Editor Page (Component)
 */
export default function EditEmployee() {
  const [employee, setEmployee] = useState<Employee>()

  const navigate = useNavigate()

  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs(employee?.birth_date, "YYYY-MM-DD"))
  const [hireDate, setHireDate] = useState<Dayjs | null>(dayjs(employee?.birth_date, "YYYY-MM-DD"))
  const [gender, setGender] = useState<string>("")

  let { id } = useParams()

  /**
   * Sets the Values from the reponse of a single employee Object 
   * from JSON webserver
   */
  useEffect(() => {
    if (id !== undefined) {
      EmployeeService().getEmployeeById(id)
        .then((res) => {
          setEmployee(res)
        })
        .catch(() => {
          navigate("/login")
        })
    }
    if (employee !== undefined) {
      setValues(employee)
    }
  }, [id, employee, navigate])

  /**
   * Sets all the useStates with the information from the given employee Object
   * @param employee Employee Object from the response
   */
  function setValues(employee: Employee) {
    setFirstname(employee.first_name)
    setLastname(employee.last_name)
  }

  /**
   * Handles the Information from the submit
   */
  const handleSubmit = () => {
    if (id !== undefined && employee !== undefined) {
      const newEnployee: Employee = {
        first_name: firstname,
        last_name: lastname,
        birth_date: birthDate ? birthDate.format("YYYY-MM-DD") : "",
        hire_date: hireDate ? hireDate.format("YYYY-MM-DD") : "",
        gender: gender
      }
      EmployeeService().updateEmployee(id, newEnployee)
        .then(() => { navigate("/") })
        .catch((error) => { console.log(error) })
    }
  }

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ mt: 5 }}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" textAlign={"end"} >Employee - {employee?.id}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Firstname: {employee?.first_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Firstname" value={firstname} onChange={(value) => { setFirstname(value.target.value) }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Lastname: {employee?.last_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Lastname" value={lastname} onChange={(value) => { setLastname(value.target.value) }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Birthdate: {employee?.birth_date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Hiredate" value={birthDate} onChange={(value) => { setBirthDate(value) }} />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Hire Date: {employee?.hire_date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Birthdate" disableFuture value={hireDate} onChange={(value) => { setHireDate(value) }} />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Gender: {employee?.gender}</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup
                value={gender}
                row
                aria-labelledby="gender-radio"
                name="gender-radio"
                onChange={(values) => { setGender(values.target.value) }}
              >
                <FormControlLabel value="F" control={<Radio />} label="Female" />
                <FormControlLabel value="M" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => { handleSubmit() }} variant="outlined">Update</Button>
      </Grid>
    </Grid>
  )
}

