import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'

export default function UserLogin({ title, link, linkDescription }: { title: string, link: string, linkDescription: string }) {
    return (
        <Grid container direction="column">
            <Grid item xs={6}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h2" align='center' style={{ marginTop: '4em' }}>{title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='email-input' label="email" variant='outlined' required onChange={() => { }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='password-input' label="password" variant='outlined' type="password" autoComplete="current-password" required onChange={() => { }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' onClick={() => { }}>{title}</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{linkDescription}<Link href='/registration'>{link}</Link></Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} justifyContent="center">
                <img src={require("../Images/logo.png")} alt={"Noser Young Logo"} />
            </Grid>
        </Grid>
    )
}
