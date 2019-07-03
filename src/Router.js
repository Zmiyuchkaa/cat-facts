import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import FactsList from './components/CatFacts.js'
import CatFact from './components/Fact.js';
import NotFound from './components/Warn.js'

const AppRouter = () => {
  return (
    <Router>
    <Switch>
      <Route path ='/' exact component={Main}/>
      <Route exact path ='/catfacts/' component={FactsList}/>
      <Route exact path ='/fact/:id' component={CatFact}/>
      <Route path ='/*/' component={NotFound}/>
    </Switch>
    </Router>
  )
}

export default AppRouter;