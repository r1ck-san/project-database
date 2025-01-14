// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld('settingContext', {
    getAssetPath:(): Promise<string> => ipcRenderer.invoke('settingContext-get-asset-path'),
    openSelectDirectoryDialog:(): Promise<string> => ipcRenderer.invoke('settingContext-open-select-directory-dialog'),
})