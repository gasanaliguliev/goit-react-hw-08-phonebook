import { useDispatch, useSelector } from 'react-redux';
import {
  FormLabel,
  RegForm,
  RegisterButton,
  RegisterInput,
} from './Register.styled';
import { register } from 'redux/auth/auth-operation';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { AuthError } from 'components/Error/AuthError';
import { ToastContainer, toast } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email && !password && !name) {
      toast.error('Please fill in all fields');
      return;
    }

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          <RegisterInput
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </FormLabel>
        <FormLabel>
          <RegisterInput
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </FormLabel>
        <FormLabel>
          <RegisterInput
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <RegisterButton variant="contained" type="submit">
          Create account
        </RegisterButton>
      </RegForm>
      {error && <AuthError />}
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
