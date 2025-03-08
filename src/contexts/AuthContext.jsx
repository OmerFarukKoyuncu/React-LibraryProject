/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { userLogin } from "../utils/services/authService";
import { clearSession, getSession, setSession } from "../utils/storage/session";
import { jsonParse, jsonStringify } from "../utils/jsonConverter/jsonConverter";
import { useNavigate } from "react-router-dom";
import { decryptData, encryptData } from "../utils/crypto/aes.gcm";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = (username, password) => {
    userLogin(username, password)
      .then((res) => {
        const user = res.data[0];
        setAuth(user);
        const isAdmin = adminUser(user);
        setIsAdmin(isAdmin);
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const getUser = async () => {
    const jsonEncrypt = getSession("auth");
    const encrypted = jsonParse(jsonEncrypt);
    if (!encrypted) {
      return;
    }
    const strUser = await decryptData(encrypted);
    const user = jsonParse(strUser);
    const isAdmin = adminUser(user);
    setIsAdmin(isAdmin);
    setAuth(user);
  };

  const adminUser = (user) => user.role.includes("admin");

  const logOut = () => {
    clearSession();
    setAuth(null);
    navigate("/login", { replace: true });
  };

  const encyptedAuth = async () => {
    if (!auth) {
      return;
    }
    const jsonUser = jsonStringify(auth);
    const encryptedUser = await encryptData(jsonUser);
    const jsonEncrypt = jsonStringify(encryptedUser);
    setSession("auth", jsonEncrypt);
  };

  useEffect(() => {
    if (!auth) {
      return;
    }

    encyptedAuth();
  }, [auth]);

  useEffect(() => {
    getUser();
  }, []);

  const authValues = {
    login,
    auth,
    isAdmin,
    logOut,
    errorMessage,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
