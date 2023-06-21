import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container, Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { signin, signup } from '../../actions/auth'

import Input from './Input';

import useStyles from './styles'

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }

    }
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const googleSuccess = (res) => {
        const decoded = jwt_decode(res.credential)
        const { name, picture, sub, email, jti } = decoded
        console.log(decoded)
        const user =  {
            _id: sub,
            name: name,
            image: picture,
            email: email,
            token: jti,
        }

        try {
            dispatch({type: 'AUTH', data: user})
            history.push('/')
        } catch (error){
            console.log(error)
        }

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
                                        handleChange={handleChange}
                                        halfWidth
                                        autoFocus
                                    />
                                    <Input
                                        name='lastName'
                                        label='Last Name'
                                        handleChange={handleChange}
                                        halfWidth
                                    />
                                </>
                            )}
                            <Input
                                name='email'
                                label='Email'
                                handleChange={handleChange}
                                type='email'
                            />
                            <Input
                                name='password'
                                label='Password'
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignup &&
                                <Input
                                    name='confirmPassword'
                                    label='Confirm Password'
                                    handleChange={handleChange}
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