import React from "react";
import {Box} from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";


export default function MainWindow() {
    return (
        <Box sx={{ width: '100%', display: 'flex' }}>
            <Sidebar />
            <Header />
        </Box>
    );
}