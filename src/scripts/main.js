import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MoviesApp from './moviesApp/moviesApp.js';

render((
  <BrowserRouter >
    <MoviesApp />
  </BrowserRouter>
), document.getElementById('movies-app'));
