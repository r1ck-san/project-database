import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store";

interface SettingState {
    value: number
}

const initialState: SettingState = {
    value: 0,
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
    },
})