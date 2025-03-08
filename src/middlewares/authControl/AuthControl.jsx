import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const AuthControl = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return <div>{auth ? children : <Navigate to={"/login"} replace />}</div>;
};

export default AuthControl;
