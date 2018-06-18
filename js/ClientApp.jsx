/* global React ReactDOM */

//including the whole package
import React from 'react'

//only including the render function
import {render} from 'react-dom'

var ce = React.createElement;

var MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', null, props.title)
    )
  );
};

var MyFirstComponent = function () {
  return (
    ce('div', null,
      ce(MyTitle, {title: 'House of Cards'}),
      ce(MyTitle, {title: 'Orange is the New Black'}),
      ce(MyTitle, {title: 'Stranger Things'}),
      ce(MyTitle, {title: 'Stranger Things'})
    )
  );
};

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById("app")
);

export default MyTitle;