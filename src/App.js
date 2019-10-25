import React from 'react';
import {HashRouter} from 'react-router-dom';
import Nav from './Components/Nav/Nav';

import routes from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>
          {routes}
      </div>
    </HashRouter>
  );
}
// console.log('props')
export default (App);
