import {ipcMain, dialog} from "electron";
import {settingStore} from "./settingStore";

export default class IpcHandler {
    public static handleIpcMain(): void {
        ipcMain.handle('settingContext-get-asset-path', async (event, args) => {
            return settingStore.get('assetPath');
        });
        ipcMain.handle('settingContext-open-select-directory-dialog', async (event, args): Promise<string | undefined> => {
            const res = dialog.showOpenDialogSync({properties: ['openDirectory']});
            if (res == undefined) {
                return undefined
            }
            const assetPath = res[0];
            settingStore.set('assetPath', assetPath);
            return assetPath;
        });
    }
}