import { Alert, AlertTitle, Button, Grid, Link, TextField, Typography } from '@mui/material'
import '../Styles/ImageStyle.css'
import AuthorizationService from '../Service/AuthorisationService'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../Types/Auth'
import { useState } from 'react'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'

export default function UserLogin({ prop }: { prop: Auth }) {
    const navigate = useNavigate()
    const [alert, setAlert] = useState<boolean>(false)
    const [alertContent, setAlertContent] = useState<string>("")
    var email = ""
    var password = ""

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

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
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
            {/*<Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" align='center' style={{ marginTop: '4em' }}>{prop.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField id='email-input' label="email" variant='outlined' required onChange={(e) => { email = e.target.value }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id='password-input' label="password" variant='outlined' type="password" autoComplete="current-password" required onChange={(e) => { password = e.target.value }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' onClick={login}>{prop.title}</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{prop.linkDescription}<Link href={prop.route}>{prop.link}</Link></Typography>
                </Grid>
    </Grid>*/}
            {/*<Formik
                initialValues={{ email: "", password: "" }}
                enableReinitialize
                validate={(values) => {
                    const errors: { email?: string } = {}
                    if (!values.email) {
                        errors.email = "Required"
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address"
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        login(values.email, values.password)
                        setSubmitting(false)
                    }, 400)
                }}
            >*/}
            {/*{({ isSubmitting, isValid }) => (
                    /*<Form>
                        <label htmlFor="email">E-Mail:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting || !isValid}>
                            Submit
                        </button>
                    </Form>*/
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
                                variant='outlined'
                                required
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='password'
                                name="password"
                                label="password"
                                variant='outlined'
                                type="password"
                                /* autoComplete="current-password" */
                                required
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' type='submit'/*onClick={login} disabled={isSubmitting || !isValid}*/>{prop.title}</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{prop.linkDescription}<Link href={prop.route}>{prop.link}</Link></Typography>
                        </Grid>
                    </Grid>
                </form>
                /*)}
                </Formik>*/}
            {alert && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {alertContent}
            </Alert>}
        </>
    )
}
