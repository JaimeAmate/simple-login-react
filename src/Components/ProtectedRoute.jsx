import React from "react";
import { Redirect } from 'react-router-dom'

export default function ProtectedRoute(props) {
  const { path, component} = props;

  const Component = props.component;
  const isAuthenticated = sessionStorage.getItem('token');

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
}