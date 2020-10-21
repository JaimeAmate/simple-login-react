import React, {useState} from "react";
import LoginView from "./LoginView";
import api from '../../../Services/api';
import { useHistory } from 'react-router-dom';

export default function LoginContainer(props) {
  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
    showLoginError: false,
    errorMessage: ''
  });

  const history = useHistory();

  function handleChangeUsername(value) {
    setLoginValues((oldValues) => ({
      ...oldValues,
      username: value
    }));
  }

  function handleChangePassword(value) {
    setLoginValues((oldValues) => ({
      ...oldValues,
      password: value
    }));
  }

  async function handleSignIn () {
    const { username, password} = loginValues;

    const response = await api.login.signIn({
      username,
      password
    })

    if (response && response.status === 200 && response.data) {
      afterSuccessLogin(response.data);
    }
    else if (response && response.status === 400) {
      setLoginValues((oldValues) => ({
        ...oldValues,
        showLoginError: true,
        errorMessage: 'Sorry, the password or the username is incorrect.'
      }));
    }
    else {
      setLoginValues((oldValues) => ({
        ...oldValues,
        showLoginError: true,
        errorMessage: 'Server error'
      }));
    }
  }

  async function afterSuccessLogin(data){
    window.sessionStorage.setItem('token', data.token);

    history.push('/home');
  }

  return (
    <LoginView
      loginValues={loginValues}
      handleChangeUsername={handleChangeUsername}
      handleChangePassword={handleChangePassword}
      handleSignIn={handleSignIn}
    />
  )
}