import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SettingState {
    assetPath: string
}

const initialState: SettingState = {
    assetPath: '',
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setAssetPath: (state, action: PayloadAction<string>) => {
            state.assetPath = action.payload
        }
    },
})

export const { setAssetPath } = settingSlice.actions