/* global React ReactDOM */

//including the whole package
import React from 'react'

//only including the render function
import {render} from 'react-dom'

const App = () => (<div className='app'>
  <div className='landing'>
    <h1>SVideo</h1>
    <input type="text" placeholder="search"/>
    <a href="#">or browse all</a>
  </div>
  </div>
  );
render(<App />, document.getElementById('app'));
