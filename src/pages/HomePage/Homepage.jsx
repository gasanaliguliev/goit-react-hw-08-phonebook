import { NavLink } from 'react-router-dom';
import { HomeTitle, LoggedInTitle } from './Homepage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selectors';

const Homepage = () => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return !isloggedIn ? (
    <HomeTitle>
      Welcome on Phonebook homepage! <br />
      Please <NavLink to="/register">Register</NavLink> or{' '}
      <NavLink to="/login">Log in</NavLink>
    </HomeTitle>
  ) : (
    <LoggedInTitle>
      Welcome, {user.name}, you can use your{' '}
      <NavLink to="/contacts">Phonebook</NavLink>!
    </LoggedInTitle>
  );
};

export default Homepage;
