import styled from 'styled-components';


export const StyledButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: black;
  padding: 1rem 1.5rem;
  text-align: center;
  width: auto;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .5s ease;
  
  &:hover {
    background-color: #fff;
    color: black;
    border: 1px solid #000;
  }

   ${(props) => props.disabled && `
      background-color: lightgray;
      pointer-events: none;
   `};
`;
