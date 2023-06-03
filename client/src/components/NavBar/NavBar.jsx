import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core'

import logo from '../../images/logo.png'
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles()
    const user = null
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
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name[0]}</Avatar>
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button className={classes.logout} color="secondary" onClick={() => {}} variant='contained'>Log out</Button>
              </div>

            ) : (
              <Button component={Link} to='/auth' className={classes.logout} variant='contained'>Sign In</Button>

            )}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar