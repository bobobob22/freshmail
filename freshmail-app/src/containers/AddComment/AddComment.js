import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

import * as actions from 'store/actions';

import { Root, StyledInput, StyledButton } from './styles';


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

  handleOnSubmit = (values, { setSubmitting }) => {
    const { onAddComment } = this.props;
    onAddComment(values);
    setSubmitting(false);
  };

  render() {
    return (
      <Root>
        <p>Dodaj nowy komentarz</p>
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
              <StyledInput
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <StyledInput
                type="text"
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {errors.body && touched.body && errors.body}
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
  onInitComments: () => dispatch(actions.initComments()),
  onAddComment: (comment) => dispatch(actions.addComment(comment)),
});

AddComment.propTypes = {
  comments: PropTypes.array,
  onInitComments: PropTypes.func,
  onAddComment: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
