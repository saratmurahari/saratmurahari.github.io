import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul id="tf-header-nav">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeStyle={{color: 'green'}} activeClassName="active" to="/actors">Actors</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header