import { Box } from "@mui/material";
import "./App.css";
import Router from "./router/Router";
import { MenuProvider } from "./contexts/MenuContext";

function App() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <MenuProvider>
        <Router />
      </MenuProvider>
    </Box>
  );
}

export default App;
