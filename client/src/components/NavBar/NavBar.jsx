import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

import logo from '../../images/logo.png'
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <img className={classes.image} src={logo} alt='diaries' height='60'/>
        <Typography className={classes.heading} variant='h2' align='center'>Diaries</Typography>
    </AppBar>
  )
}

export default NavBar