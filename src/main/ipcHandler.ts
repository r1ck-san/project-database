import {ipcMain} from "electron";
import * as fs from "node:fs";
import * as path from "node:path";

export default class IpcHandler {
    public static handleIpcMain(): void {
        ipcMain.handle('create-context', async (event, args) => {
            const fullPath = path.resolve(__dirname, 'context.csv');
            const res = fs.existsSync(fullPath);
            console.log(res ? `${fullPath} is exists.` : `${fullPath} is not exists.`);
        });
    }
}