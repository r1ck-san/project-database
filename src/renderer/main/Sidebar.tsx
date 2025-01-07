import React from "react";
import {
    Box,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import {Settings, TableView} from "@mui/icons-material";

const dataList = [
    { title: 'Table', icon: <TableView /> },
    { title: 'Setting', icon: <Settings /> },
]

export default function Sidebar (){

    return (
        <Box sx={{width: 250}}>
            <List>
                {dataList.map((data, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton>
                            <ListItemIcon>
                                {data.icon}
                            </ListItemIcon>
                            <ListItemText primary={data.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}