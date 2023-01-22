export interface RapidBaseIcon {
    type: RapidBaseIconTypes;
    name: string | undefined;
    startedLoading: boolean | undefined;
}

export type RapidBaseIconTypes =  'solid' | 'regular' | 'thin' | 'brands';