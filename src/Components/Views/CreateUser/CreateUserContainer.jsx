import React, {useState} from 'react';
import CreateUserView from "./CreateUserView";
import { isValidEmail, isValidPassword, isValidUsername, isValidName } from "../../../Utils/InputValidation";
import api from "../../../Services/api";

export default function CreateUserContainer() {
  const [signUpValues, setSignUpValues] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    isValidName: false,
    isValidLastName: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidUsername: false,
    isUserSignedUp: false,
    showResultSignUp: false,
    isServerError: false,
    serverMessage: ''
  });


  function handleChangeName(value) {
    setSignUpValues((oldValues) => ({
      ...oldValues,
      name: value,
      isValidName: isValidName(value)
    }));
  }

  function handleChangeLastname(value) {
    setSignUpValues((oldValues) => ({
      ...oldValues,
      lastname: value,
      isValidLastName: isValidName(value)
    }));
  }

  function handleChangeUsername(value) {
    setSignUpValues((oldValues) => ({
      ...oldValues,
      username: value,
      isValidUsername: isValidUsername(value)
    }));
  }

  function handleChangeEmail(value) {
    setSignUpValues((oldValues) => ({
      ...oldValues,
      email: value,
      isValidEmail: isValidEmail(value)
    }))
  }

  function handleChangePassword(value) {
    setSignUpValues((oldValues) => ({
      ...oldValues,
      password: value,
      isValidPassword: isValidPassword(value)
    }));
  }

  function isValidForm() {
    const {
      isValidName,
      isValidLastName,
      isValidEmail,
      isValidPassword,
      isValidUsername
    } = signUpValues;

    return isValidName && isValidLastName && isValidEmail && isValidPassword && isValidUsername;
  }

  async function handleSignUp() {
    const {
      username,
      name,
      lastname,
      email,
      password
    } = signUpValues;

    if (isValidForm()) {
      const response = await api.login.register({
        username: username,
        first_name: name,
        last_name: lastname,
        email: email,
        password: password
      });

      if (response && response.status === 201) {
        setSignUpValues((oldValues) => ({
          ...oldValues,
          isUserSignedUp: true
        }))
      }
      else {
        setSignUpValues((oldValues) => ({
          ...oldValues,
          isServerError: true,
          isUserSignedUp: false,
          serverMessage: response.data.username[0]
        }))
      }
    }

    setSignUpValues((oldValues) => ({
      ...oldValues,
      showResultSignUp: true
    }));
  }

  return (
    <CreateUserView
      signUpValues={signUpValues}
      handleChangeName={handleChangeName}
      handleChangeLastname={handleChangeLastname}
      handleChangeUsername={handleChangeUsername}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleSignUp={handleSignUp}
    />
  )
}