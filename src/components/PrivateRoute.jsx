import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/auth/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
