import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>ProtectedRoute</div>;
}

export default ProtectedRoute;
