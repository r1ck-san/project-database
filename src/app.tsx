import { createRoot } from 'react-dom/client';
import React from "react";
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import MainWindow from "./renderer/main/MainWindow";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <MainWindow />
    </ThemeProvider>
);