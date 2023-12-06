import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login";
import Home from "./pages/Home";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans KR, sans-serif",
  },
  palette: {
    background: {
      default: "#fff",
    },
  },
});

const App = () => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ overflow: "hidden", height: "100vh", width: "100vw" }}>
          <Routes>
              <Route path="/" element={<Home isLogin={isLogin} />} />
              <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
