import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const RouteWithWrapper = ({ wrapper: Wrapper, wrapperProps, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Wrapper {...wrapperProps}>
        <Component {...props} />
      </Wrapper>
    )}
  />
);

RouteWithWrapper.propTypes = {
  wrapper: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  wrapperProps: PropTypes.object,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default RouteWithWrapper;
