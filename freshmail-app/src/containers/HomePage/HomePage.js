import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'store/actions';
import CommentsList from 'components/CommentsList';


class HomePage extends Component {
  componentDidMount() {
    const { comments, onInitComments } = this.props;

    if (comments && !comments.length) {
      onInitComments();
    }
  }

  render() {
    const { comments } = this.props;
    return (
      <>
        <p>HomePage component</p>
        <CommentsList comments={comments} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onInitComments: () => dispatch(actions.initComments()),
});

HomePage.propTypes = {
  comments: PropTypes.array,
  onInitComments: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
