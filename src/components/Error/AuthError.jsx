import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth-selectors';

export const AuthError = () => {
  const error = useSelector(selectAuthError);
  return (
    <div>{error && <h2>Ooops, something wrong: {error} :( Try again!</h2>}</div>
  );
};
