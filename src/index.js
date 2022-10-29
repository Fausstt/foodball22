import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./components/App";
import "./styles/App.css";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 981,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: "#B5B69D",
        },
        secondary: {
            main: "#0088FF",
        },
        go: {
            main: "#43C23E",
            contrastText: "#fff",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
