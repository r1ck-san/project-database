export interface ISettingContext {
    setAssetPath: (path: string) => Promise<void>;
    getAssetPath: () => Promise<string>;
}

declare global {
    interface Window {
        settingContext: ISettingContext;
    }
}