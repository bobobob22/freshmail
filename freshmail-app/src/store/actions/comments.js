import axios from 'axios';
import * as actionTypes from 'store/actions/actionTypes';


export const addComment = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  comment,
});

export const setComments = (comments) => ({
  type: actionTypes.SET_COMMENTS,
  comments,
});

export const addWishListComment = (comment) => ({
  type: actionTypes.ADD_WISH_COMMENT,
  comment,
});

export const removeWishListComment = (comment) => ({
  type: actionTypes.REMOVE_WISH_COMMENT,
  comment,
});

/* eslint-disable arrow-body-style */
export const initComments = () => {
  return (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/comments';

    axios.get(url)
      .then((response) => {
        const { data } = response;
        const commentList = data.slice(0, 20);
        dispatch(setComments(commentList));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
