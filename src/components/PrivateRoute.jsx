import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the children if authenticated
  return children;
}

export default PrivateRoute;
