import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => (<div className='app'>
  <div className='landing'>
    <h1>SVideo</h1>
    <input type="text" placeholder="search"/>
    <Link to="/search">Browse All</Link>
  </div>
  </div>
  );

  export default Landing