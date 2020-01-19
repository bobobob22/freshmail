import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';
import { FooterRoot } from '../styles';

describe('<Footer/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find(FooterRoot)).toHaveLength(1);
  });
});

