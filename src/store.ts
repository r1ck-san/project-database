import { configureStore } from '@reduxjs/toolkit'
import {mainSlice} from "./renderer/main/mainSlice";
import {settingSlice} from "./renderer/setting/settingSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice.reducer,
        setting: settingSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch