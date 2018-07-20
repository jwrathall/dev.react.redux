import React from 'react';
import { shallow, mount, render } from 'enzyme';
//uses renderer, wrapper on top of renderer
//stub outs children
import Search from '../Search';

test('Search renders correctly', () => {
    //const component = shallow(<Search />);
    expect(shallow(<Search/>)).toMatchSnapshot();
  });