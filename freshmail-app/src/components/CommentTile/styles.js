import styled from 'styled-components';


export const CommentTileRoot = styled.li`
  display: flex;
  width: 50%;
  list-style-type: none;
`;

export const CommentTileContent = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export const CommentTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 .5rem;
`;

export const CommentInfo = styled.p`
  margin: 0 0 .5rem;
`;
