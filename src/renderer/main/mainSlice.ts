import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store";

export enum MainTabType {
    Table,
    Setting
}

interface MainState {
    type: MainTabType
}

const initialState: MainState = {
    type: MainTabType.Table,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<MainTabType>) => {
            state.type = action.payload
        },
    },
})

export const { changeTab } = mainSlice.actions
export const currentTab = (state: RootState) => state.main.type;