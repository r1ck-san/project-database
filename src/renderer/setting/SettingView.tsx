import React from "react";
import {Box, Paper, Stack, styled, TextField} from "@mui/material";
import {useAppDispatch} from "../../hooks";
import {setAssetPath} from "./settingSlice";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function AssetPathItem() {
    const dispatch = useAppDispatch();
    const onChange = (path: string) => {
        console.log(`set AssetPath: ${path}`)
        dispatch(setAssetPath(path));
    }

    return (
        <Item>
            <TextField
                id="setting-asset-path-field"
                label="Asset Path"
                onChange={(event) => onChange(event.target.value)}
            />
        </Item>
    );
}

export default function SettingView() {
    return (
        <Box sx={{ width: '100%', display: 'flex', padding: "1rem" }}>
            <Stack spacing={2} sx={{width: '100%'}}>
                <AssetPathItem />
            </Stack>
        </Box>
    );
}