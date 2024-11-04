export interface IElectronAPI {
    consoleLog: () => Promise<void>;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}