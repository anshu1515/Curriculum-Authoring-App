import React from 'react'
import { Route,Switch } from 'react-router-dom';
import './App.css';
import NewCurriculum from './components/NewCurriculum';

import Header from './pages/Header';

const App = () => {

  return (
    
    <Switch>
      <Route exact path='/'>
        <Header/>
      </Route>
      <Route path='/addSchedule'>
        <NewCurriculum/>
      </Route>
    </Switch>
 
  )
}

export default App
