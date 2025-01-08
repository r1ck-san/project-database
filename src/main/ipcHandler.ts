import {ipcMain} from "electron";
import {settingStore} from "./settingStore";

export default class IpcHandler {
    public static handleIpcMain(): void {
        ipcMain.handle('settingContext-set-asset-path', async (event, args) => {
            settingStore.set('assetPath', args);
        });
        ipcMain.handle('settingContext-get-asset-path', async (event, args) => {
            return settingStore.get('assetPath');
        });
    }
}