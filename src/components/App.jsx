import { Container } from './App/App.styled';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from 'pages/HomePage/Homepage';
import RegisterForm from 'pages/Register/Register';
import LogInPage from 'pages/Login/LogIn';
import ContactsPage from 'pages/ContactsPage/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userRefresh } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterForm}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LogInPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      </Container>
    )
  );
};

export default App;
