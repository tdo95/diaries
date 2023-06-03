import { React } from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

const App = () => {

  return (
    <Container maxwidth='lg'>
      <NavBar/>
      <Home />
    </Container>
  )
}

export default App