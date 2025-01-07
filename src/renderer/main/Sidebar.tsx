import React from "react";
import {
    Box,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Sidebar (){

    return (
        <Box sx={{width: 250}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}