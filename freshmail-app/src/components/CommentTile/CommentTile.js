import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from 'store/actions';
import WishListButton from 'components/WishListButton';

import { CommentTileRoot, CommentTileContent, ButtonWrapper, CommentTitle, CommentInfo } from './styles';


class CommentTile extends Component {
  addToWishList = () => {
    const { item, onAddToWishlist } = this.props;

    onAddToWishlist(item);
  };

  removeFromWishList = () => {
    const { item, onRemoveFromWishlist } = this.props;

    onRemoveFromWishlist(item);
  };

  render() {
    const { item: { name, email, body, isAdded }, isWishlist } = this.props;

    return (
      <CommentTileRoot>
        <CommentTileContent>
          <CommentTitle>
            Nazwa:
            {' '}
            {name}
          </CommentTitle>
          <CommentInfo>
            Email:
            {' '}
            {email}
          </CommentInfo>
          <CommentInfo>
            Treść:
            {' '}
            {body.substr(0, 20)}
          </CommentInfo>
          <ButtonWrapper>
            {isWishlist ? (
              <WishListButton toggleWishList={this.removeFromWishList}>
                Usun z wybrancyh
              </WishListButton>
            ) : (
              <WishListButton toggleWishList={this.addToWishList} disabled={isAdded}>
                Dodaj do wybranych
              </WishListButton>
            )}
          </ButtonWrapper>
        </CommentTileContent>
      </CommentTileRoot>
    );
  }
}


const mapStateToProps = (state) => ({
  comments: state.comment.comments,
  wishList: state.wishList,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToWishlist: (comment) => dispatch(actions.addWishListComment(comment)),
  onRemoveFromWishlist: (comment) => dispatch(actions.removeWishListComment(comment)),
});

CommentTile.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
    isAdded: PropTypes.bool,
  }),
  isWishlist: PropTypes.bool,
  onAddToWishlist: PropTypes.func,
  onRemoveFromWishlist: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentTile);
