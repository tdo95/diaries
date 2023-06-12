import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ name, halfWidth, autoFocus, type, handleShowPassword, handleChange, label }) => {
  return (
    <Grid item sm={halfWidth ? 6 : 12} xs={12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={ (name === 'password' || name === 'confirmPassword') && {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    </Grid>
  )
}

export default Input