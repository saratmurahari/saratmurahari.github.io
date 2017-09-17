import React from 'react'
import { Switch, Route } from 'react-router-dom'
import actorlist from './actorListComponent.js'
import actor from './actorComponent.js'

const Actor = () => (
  <Switch>
    <Route exact path='/actors' component={actorlist}/>
    <Route path='/actors/:id' component={actor}/>
  </Switch>
)


export default Actor;