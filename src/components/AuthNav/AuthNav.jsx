import { LinkContainer, LinkStyle } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <LinkContainer>
      <LinkStyle to="/register">Register</LinkStyle>
      <LinkStyle to="/login">Log In</LinkStyle>
    </LinkContainer>
  );
};
