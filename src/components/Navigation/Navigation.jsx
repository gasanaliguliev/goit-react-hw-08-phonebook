import { useAuth } from 'hooks/useAuth';
import { Icon, IconHome, LinkStyle, NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <LinkStyle to="/">
        <IconHome /> Home
      </LinkStyle>
      {isLoggedIn && (
        <LinkStyle to="/contacts">
          <Icon /> Contacts
        </LinkStyle>
      )}
    </NavContainer>
  );
};
