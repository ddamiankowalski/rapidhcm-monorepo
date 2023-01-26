export interface RapidToast {
    id: Date;
    title: string;
    subtitle: string;
}

export interface RapidToastAnimation {
    [key: string]: string | number;
}

export interface RapidToastTiming {
    duration: number;
    iterations: number;
}

export enum RapidAnimationType {
    START = 1,
    FINISH = 2
}