import React, {useEffect} from "react";
import {Box, Button, CircularProgress, Paper, Stack, styled, TextField, Typography} from "@mui/material";
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
    const onSelectPath = () => {
        console.log("onSelectPath")
        // todo: メインプロセスで実行する
        // const res = dialog.showOpenDialogSync({
        //     properties: ['openDirectory'],
        //     title: `Select AssetPath Folder`,
        //     defaultPath: assetPath,
        // })
        // if (res == undefined)
        // {
        //     return;
        // }
        // if (res.length == 1) {
        //     const selectPath = res[0]
        //     console.log('select AssetPath: ' + selectPath);
        //     dispatch(setAssetPath(selectPath));
        // }
    }
    useEffect(() => {
    }, [assetPath])
    return (
        <Item>
            <Typography variant="h6" sx={{margin: "10px"}}>Asset Path</Typography>
            <Box display="flex" alignItems="center">
                <Button variant="outlined" sx={{margin: "10px"}} onClick={onSelectPath}>参照</Button>
                <Typography sx={{margin: "10px"}}>{assetPath}</Typography>
            </Box>
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