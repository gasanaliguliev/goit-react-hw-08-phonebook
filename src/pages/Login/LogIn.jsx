import { useDispatch, useSelector } from 'react-redux';
import { RegForm, FormLabel, LoginInput, LoginButton } from './LogIn.styled';
import { login } from 'redux/auth/auth-operation';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { AuthError } from 'components/Error/AuthError';
import { ToastContainer, toast } from 'react-toastify';

const LogInPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handlesubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email && !password) {
      toast.error('Please fill in all fields');
      return;
    }

    dispatch(login({ email, password }));
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handlesubmit} autoComplete="off">
        <FormLabel>
          <LoginInput
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </FormLabel>
        <FormLabel>
          <LoginInput
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <LoginButton variant="contained" type="submit">
          Log In
        </LoginButton>
      </RegForm>
      {error && <AuthError />}
      <ToastContainer />
    </>
  );
};

export default LogInPage;
