import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/Navigation';
import Content from 'components/Content';
import Footer from 'components/Footer';

import { Root } from './styles';


const BodyWrapper = (props) => {
  const { hideNav, children } = props;

  return (
    <Root>
      <Navigation
        hideNav={hideNav}
      />
      <Content>
        {children}
      </Content>
      <Footer />
    </Root>
  );
};


BodyWrapper.propTypes = {
  hideNav: PropTypes.bool,
  children: PropTypes.node,
};

export default BodyWrapper;
