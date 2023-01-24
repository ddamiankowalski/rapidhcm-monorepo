import { InjectionToken } from "@angular/core";

export const BACKEND_INSTANCE = new InjectionToken<RapidBackendConfig>('BACKEND_INSTANCE', { providedIn: 'root', factory: (): RapidBackendConfig => backendConfig, });

export interface RapidBackendConfig {
    backendUrl: string;
}

const backendConfig: RapidBackendConfig = {
    backendUrl: 'http://localhost:8000/'
}