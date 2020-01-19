import React from 'react';
import { shallow } from 'enzyme';

import WishListButton from '../WishListButton';
import { StyledButton } from '../styles';

describe('<WishListButton/>', () => {
  it('should render', () => {
    const children = "test"
    const wrapper = shallow(<WishListButton children={children} />);
    wrapper.simulate('click');

    expect(wrapper.find(StyledButton)).toHaveLength(1);
    expect(wrapper.text()).toEqual('test');
  });

  it('should test click exent', () => {
    const toggleWishListMock = jest.fn();
    const wrapper = shallow(<WishListButton toggleWishList={toggleWishListMock}/>);
    wrapper.simulate('click');

    expect(toggleWishListMock).toHaveBeenCalledTimes(1);
  });
});

