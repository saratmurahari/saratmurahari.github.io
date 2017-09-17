import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../home/home.js'
import Actors from './../actor/actor.js'


const Main = () => (
  <main id="tf-main-content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/actors' component={Actors}/>
    </Switch>
  </main>
)

export default Main