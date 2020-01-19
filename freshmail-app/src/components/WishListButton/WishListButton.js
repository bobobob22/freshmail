import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';


const WishListButton = (props, ...rest) => {
  const { children, toggleWishList } = props;
  return (
    <StyledButton
      onClick={toggleWishList}
      onKeyPress={toggleWishList}
      type="button"
      {...rest}
    >
      {children}
    </StyledButton>
  );
};


WishListButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  toggleWishList: PropTypes.func,
};

export default WishListButton;
