export interface ISettingContext {
    getAssetPath: () => Promise<string>;
    openSelectDirectoryDialog: () => Promise<string | undefined>;
}

declare global {
    interface Window {
        settingContext: ISettingContext;
    }
}