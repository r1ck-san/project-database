import React from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import {Settings, TableView} from "@mui/icons-material";
import {changeTab, MainTabType} from "./mainSlice";
import {useAppDispatch} from "../../hooks";

interface SidebarData {
    title: string;
    icon: JSX.Element;
    type: MainTabType;
}

const dataList: SidebarData[] = [
    { title: 'Table', icon: <TableView />, type: MainTabType.Table },
    { title: 'Setting', icon: <Settings />, type: MainTabType.Setting },
]

export default function Sidebar (){
    const dispatch = useAppDispatch();
    const handleClick = (type: MainTabType) => {
        dispatch(changeTab(type));
    };

    return (
        <Box sx={{width: 250}}>
            <List>
                {dataList.map((data, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton onClick={()=>handleClick(data.type)}>
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