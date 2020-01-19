import React from 'react';
import PropTypes from 'prop-types';

import CommentTile from 'components/CommentTile';

import { CommentList } from './styles';


const CommentsList = (props) => {
  const { comments, isWishlist } = props;

  return (
    <CommentList>
      {comments && comments.map((item) => (
        <CommentTile item={item} key={item.id} isWishlist={isWishlist} />
      ))}
    </CommentList>
  );
};

CommentsList.propTypes = {
  isWishlist: PropTypes.bool,
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object])
  ),
};

export default CommentsList;
