import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashBoardPages = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.userData.isloggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <div>DashBoardPagesdsadsdsadsadsadsa</div>;
};

export default DashBoardPages;
