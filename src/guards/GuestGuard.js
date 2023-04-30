import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthProvider";

const GuestGuard = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/Profile", { replace: true });
  });

  if (isAuthenticated) return null;

  return <>{children}</>;
};

export default GuestGuard;
