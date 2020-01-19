import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Root = styled.div`
  background: #000;
`;

export const NavigationList = styled.ul`
  display: flex;
  padding: 0 15px;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  padding: 5px 10px;
`;

export const NavigationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  
  &:link, &:visited, &:hover, &:active {
    color: #fff;
  }
`;
