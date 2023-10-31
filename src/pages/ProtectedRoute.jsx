import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  //login check , isAdmin check
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
