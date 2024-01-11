import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
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
        <div style={{ overflow: "hidden", height: "100%", width: "100vw" }}>
          <Routes>
            <Route path="/" element={<Home isLogin={isLogin} />} />
            <Route path="/auth" element={<Auth setIsLogin={setIsLogin} />} />
            <Route path="/signup" element={<SignUp setIsLogin={setIsLogin}/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
