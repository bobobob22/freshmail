import React from "react";

import HomePage from '../HomePage';
import { shallow } from 'enzyme';


describe('<HomePage/>', () => {
  it('should render component', () => {
    const wrapper = shallow(<HomePage />);

    console.log(wrapper.debug());

  });
});