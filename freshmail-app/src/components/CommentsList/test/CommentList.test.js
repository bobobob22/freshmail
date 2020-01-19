import React from 'react';
import { shallow } from 'enzyme';

import { comments } from 'tests/mockedComments';
import CommentTile from 'components/CommentTile';

import CommentList from '../CommentList';


describe('<CommentList/>', () => {
  it('should render', () => {
    const wrapper = shallow(<CommentList comments={comments }/>);
    expect(wrapper.find(CommentTile)).toHaveLength(2);
  });
});

