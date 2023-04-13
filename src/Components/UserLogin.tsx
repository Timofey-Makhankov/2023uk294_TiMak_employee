import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import '../Styles/ImageStyle.css'
import AuthorizationService from '../Service/AuthorisationService'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../Types/Auth'

export default function UserLogin({ prop }: { prop: Auth}) {
    const navigate = useNavigate()
    var email = ""
    var password = ""

    const login = () => {
        console.log("Inside the login function")
        AuthorizationService().logInUser(email, password).then((value: string) => {localStorage.setItem("accessToken", value)})
        navigate("/")
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
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
        </Grid>
    )
}
