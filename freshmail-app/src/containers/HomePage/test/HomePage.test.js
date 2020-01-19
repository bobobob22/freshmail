import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import { comments } from 'tests/mockedComments';
import CommentsList from 'components/CommentsList';
import CommentTile from 'components/CommentTile';

import HomePage from '../HomePage';
import { HomePageTitle } from '../styles';


describe('<HomePage />', () => {
  const mockStore = configureStore();
  const initialState = {
    comment: {
      comment: [],
    }
  };
  const store = mockStore(initialState);

  it('should render the homepage component', () => {

    const wrapper = mount(
      <Provider store={store} >
        <HomePage />
      </Provider>
    );

    expect(wrapper.find(CommentsList)).toHaveLength(1);
    expect(wrapper.find(HomePageTitle)).toHaveLength(1);
  });

  it('should render comments', () => {
    const initialState = {
      comment: {
        comments: comments,
      }
    };
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store} >
        <HomePage />
      </Provider>
    );
    expect(wrapper.find(CommentTile)).toHaveLength(2);
  });
});
