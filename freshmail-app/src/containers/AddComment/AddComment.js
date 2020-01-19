import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import { initComments, addComment } from 'store/actions';

import { Root, StyledInput, StyledTextarea, StyledButton, ErrorMessage } from './styles';


const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/, {
        message: 'Nazwa powinna skladac sie z liter',
      },
    )
    .required('Nazwa jest wymagana')
    .min(3, 'Nazwa powinna zawierac min 3 znaki'),
  email: yup
    .string()
    .email()
    .required('Email jest wymagany'),
  body: yup
    .string()
    .required('Tresc jest wymagana')
    .min(2, 'Tresc powinna zawierac min 2 znaki'),
});

class AddComment extends PureComponent {
  componentDidMount() {
    const { comments, onInitComments } = this.props;
    if (comments && !comments.length) {
      onInitComments();
    }
  }

  handleOnSubmit = (values, { setSubmitting, resetForm }) => {
    const { onAddComment, history } = this.props;
    onAddComment(values);
    resetForm();
    setSubmitting(false);
    history.push('/');
  };

  render() {
    return (
      <Root>
        <h2>Dodaj nowy komentarz:</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            body: '',
          }}
          validationSchema={schema}
          onSubmit={(values, formikBag) => this.handleOnSubmit(values, formikBag)}
        >
          {({
            values, errors, touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              /* eslint-disable prefer-destructuring */
              <label htmlFor="name">
                Nazwa
              </label>
              <StyledInput
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage>
                {errors.name && touched.name && errors.name}
              </ErrorMessage>
              <label htmlFor="email">
                Email
              </label>
              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>
              <label htmlFor="body">
                Dodaj treść
              </label>
              <StyledTextarea
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
                name="body"
                id="body"
              />
              <ErrorMessage>
                {errors.body && touched.body && errors.body}
              </ErrorMessage>
              <StyledButton type="submit" disabled={isSubmitting}>
                Dodaj komentarz
              </StyledButton>
            </form>
          )}
        </Formik>
      </Root>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onInitComments: () => dispatch(initComments()),
  onAddComment: (comment) => dispatch(addComment(comment)),
});

AddComment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object])
  ),
  onInitComments: PropTypes.func,
  onAddComment: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddComment));
