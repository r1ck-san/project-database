export interface IElectronAPI {
    consoleLog: () => Promise<void>;
    loadCsv: () => Promise<void>;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}