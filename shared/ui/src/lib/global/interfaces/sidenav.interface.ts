export interface RapidSidenavMenuItem {
    label: string;
    icon: string;
    link?: string;
    subitem?: RapidSidenavMenuSubItem[]
}

export interface RapidSidenavMenuSubItem {
    label: string;
    link?: string;
}