import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginValue = e.currentTarget.elements.login.value;
    navigate("/dashboard", { replace: true });
    dispatch(login(loginValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
