import React from "react";
import {Box, Tab, Tabs} from "@mui/material";

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="header-tabs">
                    <Tab label="Item One" />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three"  />
                </Tabs>
            </Box>
        </Box>
    )
}