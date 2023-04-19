import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react'
import { Employee } from '../../Types/Employee';
import EmployeeService from '../../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

/**
 * This page shows the creating of an employee page
 * @returns The Create Employee Page (Component)
 */
export default function CreateEmployee() {
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs())
    const [hireDate, setHireDate] = useState<Dayjs | null>(dayjs())
    const [gender, setGender] = useState<string>("")

    const navigate = useNavigate()

    const INPUT_LENGTH: string = '250px'

    /**
     * It creates a request from the given employee object
     * @param employee Employee Object
     */
    const handleRequest = (employee: Employee) => {
        EmployeeService().createEmployee(employee)
            .then(() => { navigate("/") })
            .catch((error) => { console.log(error) })
    }

    /**
     * handles the submmitting of the form
     */
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
                <TextField required label="Firstname" sx={{ width: INPUT_LENGTH }} onChange={(values) => { setFirstname(values.target.value) }} />
            </Grid>
            <Grid item xs={12}>
                <TextField required label="Lastname" sx={{ width: INPUT_LENGTH }} onChange={(values) => { setLastname(values.target.value) }} />
            </Grid>
            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Birthdate" sx={{ width: INPUT_LENGTH }} disableFuture value={birthDate} onChange={(value) => { setBirthDate(value) }} />
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Hiredate" sx={{ width: INPUT_LENGTH }} value={hireDate} onChange={(value) => { setHireDate(value) }} />
                </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
                <FormControl required sx={{ width: INPUT_LENGTH }}>
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
