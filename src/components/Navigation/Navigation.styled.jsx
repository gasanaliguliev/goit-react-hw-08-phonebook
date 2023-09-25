import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { MdContactPhone } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';

const ContactsIcon = MdContactPhone;
const HomeIcon = AiTwotoneHome;

export const Icon = styled(ContactsIcon)`
  height: 27px;
  width: 27px;
  margin-right: 5px;
`;
export const IconHome = styled(HomeIcon)`
  height: 27px;
  width: 27px;
  margin-right: 5px;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  display: flex;
  align-items: center;
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
