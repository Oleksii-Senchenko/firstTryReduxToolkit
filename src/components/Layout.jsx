import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
// import LoginForm from "./LoginForm";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 8,
        borderBottom: "1px solid black",
        marginBottom: 12,
      }}
    >
      <nav>
        {isLoggedIn && <Link to="login">log in</Link>}
        {isLoggedIn && <Link to="dashboard">dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
      {/* {isLoggedIn ? <UserMenu /> : <LoginForm />} */}
      <Outlet />
    </header>
  );
};

export default Layout;
