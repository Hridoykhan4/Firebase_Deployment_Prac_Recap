import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
    console.log(pathname)
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Wait</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;
