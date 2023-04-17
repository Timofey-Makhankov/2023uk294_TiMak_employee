import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Employee } from '../../Types/Employee'
import EmployeeService from '../../Service/EmployeeService'
import { Dayjs } from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function EditEmployee() {
  const [employee, setEmployee] = useState<Employee>()

  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null)
  const [hireDate, setHireDate] = useState<Dayjs | null>(null)
  const [gender, setGender] = useState<string>("")

  let { id } = useParams()
  useEffect(() => {
    if (id !== undefined) {
      EmployeeService().getEmployeeById(id)
        .then((res) => {
          console.log(res)
          setEmployee(res)
        })
    }
  }, [id])

  const handleSubmit = () => {

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
            <TextField />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography>Lastname: {employee?.last_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField />
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
              <DatePicker label="Hiredate" value={hireDate} onChange={(value) => { setHireDate(value) }} />
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
              <DatePicker label="Birthdate" disableFuture value={birthDate} onChange={(value) => { setBirthDate(value) }} />
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

