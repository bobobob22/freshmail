import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Root = styled.div`
  flex: 1 0 auto;
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const StyledMain = styled.main`
 width: 100%;
`;

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
