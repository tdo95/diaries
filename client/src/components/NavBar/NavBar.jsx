import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core'

import logo from '../../images/logo.png'
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
      dispatch({ type: 'LOGOUT'})
      history.push('/')
      setUser(null)
    }
    useEffect(() => {
      const token = user?.token
      //check JWT if logged in manually

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <Link to='/' className={classes.link}>
          <div  className={classes.brandContainer}>
            <img className={classes.image} src={logo} alt='diaries' height='60'/>
            <Typography className={classes.heading} variant='h2' align='center'>Diaries</Typography>
          </div>
        </Link>
        <Toolbar className={classes.toolbar}>
          {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.image}>{user.result.name[0]}</Avatar>
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button className={classes.logout} color="secondary" onClick={logout} variant='contained'>Log out</Button>
              </div>

            ) : (
              <Button component={Link} to='/auth' className={classes.logout} variant='contained'>Sign In</Button>

            )}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar