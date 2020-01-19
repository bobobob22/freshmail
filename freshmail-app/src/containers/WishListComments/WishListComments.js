import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';


class WishListComments extends Component {
  componentDidMount() {
    const { comments, onInitComments } = this.props;
    if (comments && !comments.length) {
      onInitComments();
    }
  }

  render() {
    const { wishList } = this.props;

    if (!wishList.length) {
      return (
        <p>Brak ulubionych komentarzy</p>
      );
    }

    return (
      <>
        <p>Ulubione komentarze</p>
        <CommentsList comments={wishList} isWishlist />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  wishList: state.comment.wishList,
});

WishListComments.propTypes = {
  wishList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object])
  ),
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object])
  ),
  onInitComments: PropTypes.func,
};

export default connect(mapStateToProps)(WishListComments);
