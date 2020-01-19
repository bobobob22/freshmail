import * as actionTypes from 'store/actions/actionTypes';
import { updateObject } from 'store/utility';


const initialState = {
  comments: [],
  wishList: [],
};

const addComment = (state, action) => {
  const lastCommentId = state.comments.slice(-1).pop().id;
  const newComment = action.comment;
  newComment.id = lastCommentId + 1;
  return {
    ...state,
    comments: [...state.comments, newComment],
  };
};

const setComments = (state, action) => {
  return updateObject(state, {
    comments: [...action.comments],
  });
};

const addWishComment = (state, action) => ({
  ...state,
  wishList: [
    ...state.wishList, action.comment,
  ],
});

const removeWishComment = (state, action) => ({
  ...state,
  wishList: state.wishList.filter((comment) => comment.id !== action.comment.id),
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT: return addComment(state, action);
    case actionTypes.ADD_WISH_COMMENT: return addWishComment(state, action);
    case actionTypes.REMOVE_WISH_COMMENT: return removeWishComment(state, action);
    // case actionTypes.INIT_COMMENTS: return initComments(state, action);
    case actionTypes.SET_COMMENTS: return setComments(state, action);
    default: return state;
  }
};

export default reducer;
