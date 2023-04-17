import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react'
import { Employee } from '../../Types/Employee';
import EmployeeService from '../../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function CreateEmployee() {
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null)
    const [hireDate, setHireDate] = useState<Dayjs | null>(null)
    const [gender, setGender] = useState<string>("")

    const navigate = useNavigate()

    const handleRequest = (employee: Employee) => {
        console.log("create.")
        EmployeeService().createEmployee(employee)
            .then(() => { navigate("/") })
            .catch((error) => { console.log(error); alert(error) })
    }

    const handleSubmit = () => {
        if (birthDate !== null && hireDate !== null) {
            const employee: Employee = {
                first_name: firstname,
                last_name: lastname,
                birth_date: birthDate.format("YYYY-MM-DD"),
                hire_date: hireDate.format("YYYY-MM-DD"),
                gender: gender
            }
            handleRequest(employee)
        }
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3} sx={{ mt: 10 }}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h2">Create Employee</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField onChange={(values) => { console.log(values.target.value); setFirstname(values.target.value) }} />
            </Grid>
            <Grid item xs={12}>
                <TextField onChange={(values) => { setLastname(values.target.value) }} />
            </Grid>
            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Birthdate" disableFuture value={birthDate} onChange={(value) => { setBirthDate(value) }} />
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Hiredate" value={hireDate} onChange={(value) => { setHireDate(value) }} />
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
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

            <Grid item xs={12}>
                <Button variant="contained" type='button' onClick={handleSubmit}>Create</Button>
            </Grid>

        </Grid>
    )
}
