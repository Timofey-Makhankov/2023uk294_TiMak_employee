import { Alert, AlertTitle, Button, Grid, Link, TextField, Typography } from '@mui/material'
import AuthorizationService from '../../Service/AuthorisationService'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../Types/Auth'
import { useState } from 'react'
import { useFormik } from 'formik'

/**
 * This Component has the form with formik validation for login an registration page
 * @param prop Auth Object
 * @returns The UserLogin Organism (Component)
 */
export default function UserLogin({ prop }: { prop: Auth }) {
    const navigate = useNavigate()
    const [alert, setAlert] = useState<boolean>(false)
    const [alertContent, setAlertContent] = useState<string>("")
    const isEmpty = (str: string | undefined) => (str === undefined ? false : true);

    /**
     * creates a login request with given parameters
     * @param email string from field input
     * @param password string from field input
     */
    const login = (email: string, password: string) => {
        console.log("Inside the login function")
        AuthorizationService().logInUser(email, password)
            .then((value: string) => {
                localStorage.setItem("access_token", value)
                setAlert(false)
                navigate("/")
            })
            .catch((error: any) => {
                console.log(error.response)
                setAlertContent(error.response.data)
                setAlert(true)
            })
    }

    /**
     * Creates a formik object with extra parameters
     */
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            const errors: { email?: string, password?: string } = {}
            if (!values.email) {
                errors.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
            if (!values.password) {
                errors.password = "Required"
            }
            return errors
        },
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                login(values.email, values.password)
                setSubmitting(false)
            }, 400)
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h2" align='center' style={{ marginTop: '4em' }}>{prop.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='email'
                            name='email'
                            label="Email"
                            type='email'
                            value={formik.values.email}
                            required
                            onChange={formik.handleChange}
                            error={isEmpty(formik.errors.email)}
                            helperText={formik.errors.email ? formik.errors.email : ""} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='password'
                            name="password"
                            label="Password"
                            type="password"
                            required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={isEmpty(formik.errors.password)}
                            helperText={isEmpty(formik.errors.password) ? formik.errors.password : ""} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit'/*onClick={login} disabled={isSubmitting || !isValid}*/>{prop.title}</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{prop.linkDescription}<Link href={prop.route}>{prop.link}</Link></Typography>
                    </Grid>
                </Grid>
            </form>
            {
                alert && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {alertContent}
                </Alert>
            }
        </>
    )
}
