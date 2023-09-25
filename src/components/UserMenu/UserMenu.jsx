import { useAuth } from 'hooks/useAuth';
import { MenuContainer, MenuButton, MenuText } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <MenuContainer>
      <MenuText>Welcome, {user.name}</MenuText>
      <MenuButton
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </MenuButton>
    </MenuContainer>
  );
};
