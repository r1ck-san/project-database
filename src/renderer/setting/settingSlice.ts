import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

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

export const openSelectDirectoryDialogAsync = createAsyncThunk(
    'openSelectDirectoryDialogAsync',
    async () => {
        return window.settingContext.openSelectDirectoryDialog();
    }
)

// Slice
export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
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
        builder.addCase(openSelectDirectoryDialogAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            if (action.payload == undefined) {
                return;
            }
            state.assetPath = action.payload;
            console.log('set AssetPath: ' + state.assetPath);
        })
    }
})