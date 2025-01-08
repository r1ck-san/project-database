import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store";

interface SettingState {
    isInitialized: boolean
    isLoading: boolean
    error: string | null | undefined;
    assetPath: string
}

const initialState: SettingState = {
    isInitialized: false,
    isLoading: false,
    error: null,
    assetPath: '',
}

// Thunk
export const initializeAsync = createAsyncThunk(
    'initializeAsync',
    async () => {
        return {assetPath: await window.settingContext.getAssetPath()};
    }
)

// Slice
export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setAssetPath: (state, action: PayloadAction<string>) => {
            state.assetPath = action.payload
            console.log(state.assetPath);
            window.settingContext.setAssetPath(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(initializeAsync.pending, (state, action) => {
            state.isInitialized = false;
            state.isLoading = true;
            state.error = null;
            console.log('initializeAsync.pending');
        })
        builder.addCase(initializeAsync.rejected, (state, action) => {
            state.isInitialized = true;
            state.isLoading = false;
            state.error = action.error.stack;
            console.log('initializeAsync.rejected');
        })
        builder.addCase(initializeAsync.fulfilled, (state, action) => {
            state.isInitialized = true;
            state.isLoading = false;
            state.error = null;
            state.assetPath = action.payload.assetPath;
            console.log(`${state.assetPath}`);
            console.log('initializeAsync.fulfilled');
        })
    }
})

export const { setAssetPath } = settingSlice.actions