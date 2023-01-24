import { InjectionToken } from '@angular/core';

export interface RapidIconConfig {
    iconName: string;
    className: string;
}

export type RapidInputIconsConfig = {
    [key: string]: RapidIconConfig | '';
}

export const RAPID_INPUT_ICONS_CONFIG = new InjectionToken<RapidInputIconsConfig>('RAPID_INPUT_ICONS_CONFIG');

export const rapidInputIconsConfig: RapidInputIconsConfig = {
    warn: {
        iconName: 'circle-exclamation',
        className: 'warn'
    }
}