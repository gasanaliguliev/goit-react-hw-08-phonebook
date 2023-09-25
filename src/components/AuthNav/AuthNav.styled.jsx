import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkContainer = styled.div`
  margin-left: auto;
`;

const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: black;

  &:not(:last-child) {
    padding-right: 20px;
  }

  &:hover,
  :focus {
    color: green;
  }
`;
