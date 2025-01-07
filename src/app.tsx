import { createRoot } from 'react-dom/client';
import React from "react";
import { Provider } from 'react-redux';
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import MainView from "./renderer/main/MainView";
import {store} from "./store";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <MainView />
        </Provider>
    </ThemeProvider>
);