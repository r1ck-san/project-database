// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld('settingContext', {
    setAssetPath:(path: string): Promise<void> => ipcRenderer.invoke('settingContext-set-asset-path', path),
    getAssetPath:(): Promise<string> => ipcRenderer.invoke('settingContext-get-asset-path'),
})