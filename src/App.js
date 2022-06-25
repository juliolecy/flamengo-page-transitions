import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Raça from './pages/Raça'
import Amor from './pages/Amor'
import Paixao from './pages/Paixão'
import {AnimatePresence} from 'framer-motion'
import GlobalStyle from './globalStyles'
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
overflow-x:hidden;
`

function App() {
  return (
    <Section>
    <BrowserRouter>
      <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
    <GlobalStyle/>
    <Switch >
    <Route path='/' exact component={Raça} />
    <Route path='/amor' component={Amor} />
    <Route path='/paixao' component={Paixao} /> 
    </Switch>
  </AnimatePresence>
  </React.StrictMode> 
  </BrowserRouter>
  </Section>
  );
}

export default App;
