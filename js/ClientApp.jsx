/* global React ReactDOM */

//including the whole package
import React from 'react';

//only including the render function
import {render} from 'react-dom';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

/*If no matches to router then render this */
const FourOhFour =()=><h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/search" component={Search}/>
      <Route component={FourOhFour}/> 
    </Switch> 
    </div>
  </BrowserRouter>

);


render(<App />, document.getElementById('app'));
