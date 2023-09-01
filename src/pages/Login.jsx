import React from "react";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  return <div>{!isLoggedIn && <LoginForm />}</div>;
};

export default Login;
