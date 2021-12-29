import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:name" component={SingleCountry} />
  </Switch>
)

export default Routes
