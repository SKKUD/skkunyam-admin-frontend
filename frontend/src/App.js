import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ overflow: 'hidden', height: "100vh", width: "100vw" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
