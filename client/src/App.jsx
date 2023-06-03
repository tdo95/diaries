import { React, useEffect, useState } from 'react'
import { Container, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import NavBar from './components/NavBar/NavBar'

import useStyles from './styles'


const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('getting list of posts')
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxwidth='lg'>
      <NavBar/>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App