import React from 'react';
import Header from './header/header.js';
import Main from './main/maincontent.js';
import style from './../../styles/moviesAppStyle.scss';
import servicePaths from './../config/servicepaths.js';

class MoviesApp extends React.Component{
  render(){


    return (
		<div>
			<Header />
			<Main />
		</div>
      )
  }
}

export default MoviesApp;