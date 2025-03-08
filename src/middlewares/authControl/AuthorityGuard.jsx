import { useContext } from "react";
import useAuthority from "../../hooks/useAuthority";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const AuthorityGuard = ({ authority, children }) => {
  const { auth } = useContext(AuthContext);

  const roleMatched = useAuthority(auth.role ?? [], authority);

  return (
    <>{roleMatched ? children : <Navigate to={"/access-denied"} replace />}</>
  );
};

export default AuthorityGuard;
