import React, {useEffect} from "react";
import {Box, CircularProgress, Paper, Stack, styled, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {initializeAsync, setAssetPath} from "./settingSlice";
import {RootState} from "../../store";

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
    const assetPath = useAppSelector((state: RootState) => state.setting.assetPath);
    const onChange = (path: string) => {
        console.log(`set AssetPath: ${path}`)
        dispatch(setAssetPath(path));
    }
    useEffect(() => {

    }, [assetPath])
    return (
        <Item>
            <TextField
                id="setting-asset-path-field"
                label="Asset Path"
                onChange={(event) => onChange(event.target.value)}
                value={assetPath}
            />
        </Item>
    );
}

export default function SettingView() {
    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector((state: RootState) => state.setting.isInitialized);
    const isLoading = useAppSelector((state: RootState) => state.setting.isLoading);
    useEffect(() => {
        if (!isInitialized && !isLoading) {
            dispatch(initializeAsync());
        }
    }, [isInitialized, isLoading, dispatch]);
    return (
        <Box sx={{ width: '100%', display: 'flex', padding: "1rem" }}>
            {isLoading ? <CircularProgress /> : null}
            <Stack spacing={2} sx={{width: '100%'}}>
                <AssetPathItem />
            </Stack>
        </Box>
    );
}