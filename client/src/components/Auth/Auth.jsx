import { React, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';

import useStyles from './styles'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const classes = useStyles()

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword(prev => !prev) 
    const handleShowConfirmPassword = () => setShowConfirmPassword(prev =>!prev)

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
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
                <Button type='submit' fullWidth variant='contained' className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth