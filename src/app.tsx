import { createRoot } from 'react-dom/client';
import React from "react";
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import MainView from "./renderer/main/MainView";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <MainView />
    </ThemeProvider>
);