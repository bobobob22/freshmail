import React from 'react';
import PropTypes from 'prop-types';

import { Root, StyledMain } from './styles';


const Content = (props) => {
  const { children, hideNav } = props;

  return (
    <Root isHiddenNavbar={hideNav}>
      <StyledMain className="container">
        {children}
      </StyledMain>
    </Root>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  hideNav: PropTypes.bool,
};


export default Content;
