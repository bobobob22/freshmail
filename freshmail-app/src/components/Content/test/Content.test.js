import React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';
import { Root, StyledMain } from '../styles';


describe('<CommentList/>', () => {
  it('should render', () => {
    const children = (
      <p>test</p>
    );
    const wrapper = shallow(<Content children={children} />);

    expect(wrapper.find(Root)).toHaveLength(1);
    expect(wrapper.find(StyledMain)).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test');
  });
});

