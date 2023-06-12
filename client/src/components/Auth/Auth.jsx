import { React, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';

import Input from './Input';

import useStyles from './styles'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const classes = useStyles()

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const googleSuccess = (res) => {
        console.log('SUCCESSFUL GOOGLE LOGIN', res)

    }
    const googleFailure = () => {
        console.log('GOOGLE LOGIN UNSUCCESSFUL')
    }
    const switchMode = () => {
        setIsSignup(prev => !prev)
        setShowPassword(false)
        setShowConfirmPassword(false)
    }
    const handleShowPassword = () => setShowPassword(prev => !prev)
    const handleShowConfirmPassword = () => setShowConfirmPassword(prev => !prev)

    return (
        
            <Container component='main' maxWidth='xs'>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input
                                        name='firstName'
                                        label='First Name'
                                        onChange={handleChange}
                                        halfWidth
                                        autoFocus
                                    />
                                    <Input
                                        name='lastName'
                                        label='Last Name'
                                        onChange={handleChange}
                                        halfWidth
                                    />
                                </>
                            )}
                            <Input
                                name='email'
                                label='Email'
                                onChange={handleChange}
                                type='email'
                            />
                            <Input
                                name='password'
                                label='Password'
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignup &&
                                <Input
                                    name='confirmPassword'
                                    label='Confirm Password'
                                    onChange={handleChange}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    handleShowPassword={handleShowConfirmPassword}
                                />
                            }
                        </Grid>
                        <Box className={classes.googleAuthBox}>
                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                            />
                        </Box>
                        <Button type='submit' fullWidth variant='contained' className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                        <Grid container justifyContent='center'>
                            <Button className={classes.button} variant='text' onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}</Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
    )
}

export default Auth