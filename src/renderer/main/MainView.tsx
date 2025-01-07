import React from "react";
import {Box} from "@mui/material";
import Sidebar from "./Sidebar";


export default function MainView() {
    return (
        <Box sx={{ width: '100%', display: 'flex' }}>
            <Sidebar />
        </Box>
    );
}