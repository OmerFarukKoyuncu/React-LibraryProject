/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { green } from "@mui/material/colors";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const { auth, login, errorMessage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) {
      return;
    }
    login(username, password);
  };

  const handleChangeUserName = (e) => {
    const userName = e.target.value;
    setUsername(userName);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  useEffect(() => {
    if (!auth) {
      return;
    }
    navigate("/", { replace: true });
  }, [auth, errorMessage]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Card sx={{ m: 3, p: 3 }} component={"form"} onSubmit={handleSubmit}>
        <FormControl sx={{ width: "100%", m: 1, p: 2 }}>
          <TextField
            variant="filled"
            label="Kullanıcı Adı"
            onChange={handleChangeUserName}
          >
            {username}
          </TextField>
        </FormControl>
        <FormControl sx={{ width: "100%", m: 1, p: 2 }}>
          <TextField
            type="password"
            variant="filled"
            label="Şifre"
            onChange={handleChangePassword}
          >
            {password}
          </TextField>
        </FormControl>
        <FormControl sx={{ width: "100%", m: 1, p: 2 }}>
          <Button
            type="submit"
            sx={{
              backgroundColor: green[100],
              p: 2,
              ":hover": { p: 2, backgroundColor: green[400] },
            }}
          >
            <Typography>Giriş Yap</Typography>
          </Button>
        </FormControl>
      </Card>
    </Box>
  );
};

export default Login;
