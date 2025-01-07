import Store, {Schema} from 'electron-store';

interface SettingSchema {
    assetPath: string;
    windowPositionX: number;
    windowPositionY: number;
    windowWidth: number;
    windowHeight: number;
}

const schema: Schema<SettingSchema> = {
    assetPath: {
        type: 'string',
    },
    windowPositionX: {
        type: 'number',
        default: undefined,
    },
    windowPositionY: {
        type: 'number',
        default: undefined,
    },
    windowWidth: {
        type: 'number',
        default: 600,
    },
    windowHeight: {
        type: 'number',
        default: 800,
    }
}

export const settingStore = new Store<SettingSchema>({schema});