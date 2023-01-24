import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { BACKEND_INSTANCE, RapidBackendConfig } from "./config/backend.config";

@Injectable({
    providedIn: 'root'
})
export class RapidBackendService {
    constructor(
        @Inject(BACKEND_INSTANCE) private backendConfig: RapidBackendConfig,
        private http: HttpClient
    ) {}

    public postRequest<T, V>(endpoint: string, payload: V): Observable<T> {
        return this.http.post<T>(this.backendConfig.backendUrl + endpoint, payload);
    }

    public getRequest<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(this.backendConfig.backendUrl + endpoint);
    }
}