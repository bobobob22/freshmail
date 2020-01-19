import styled, { css } from 'styled-components';


export const Root = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
`;

const styledFormItems = css`
  padding: 10px 0;
  display: block;
  margin: 10px 0;
  width: 100%;
`;

export const StyledInput = styled.input`
  ${styledFormItems};
`;

export const StyledTextarea = styled.textarea`
  ${styledFormItems};
`;

export const StyledButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  display: block;
  margin-top: 5px;
`;

export const ErrorMessage = styled.p`
  font-size: .8rem;
  color: red;
`;

