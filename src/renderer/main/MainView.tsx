import React from "react";
import {Box} from "@mui/material";
import Sidebar from "./Sidebar";
import {currentTab, MainTabType} from "./mainSlice";
import SettingView from "../setting/SettingView";
import {useAppSelector} from "../../hooks";
import TableView from "../table/TableView";

interface ContentData {
    type: MainTabType;
    content: JSX.Element;
}

const contents: ContentData[] = [
    {type: MainTabType.Table, content: <TableView />},
    {type: MainTabType.Setting, content: <SettingView />},
]

export default function MainView() {
    const tab = useAppSelector(currentTab);
    return (
        <Box sx={{ width: '100%', display: 'flex' }}>
            <Sidebar />
            {contents.find(data => data.type === tab)?.content}
        </Box>
    );
}