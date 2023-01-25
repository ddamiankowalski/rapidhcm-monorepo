import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject, catchError, Observable, OperatorFunction, tap, throwError } from "rxjs";
import { BACKEND_INSTANCE, RapidBackendConfig } from "./config/backend.config";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RapidBackendService {
    constructor(
        @Inject(BACKEND_INSTANCE) private backendConfig: RapidBackendConfig,
        private http: HttpClient
    ) {}

    public postRequest<T, V>(endpoint: string, payload: V, loadingSubject?: BehaviorSubject<boolean>): Observable<T> {
        this.emitLoadingStatus(loadingSubject, true);
        return this.http.post<T>(this.backendConfig.backendUrl + endpoint, payload).pipe(
            tap(() => this.emitLoadingStatus(loadingSubject, false)),
            this.catchErrorAndSetLoading(loadingSubject),
        )
    }

    public getRequest<T>(endpoint: string, loadingSubject: BehaviorSubject<boolean>): Observable<T> {
        this.emitLoadingStatus(loadingSubject, true);
        return this.http.get<T>(this.backendConfig.backendUrl + endpoint).pipe(
            tap(() => this.emitLoadingStatus(loadingSubject, false)),
            this.catchErrorAndSetLoading(loadingSubject)
        );
    }

    private catchErrorAndSetLoading<T>(loadingSubject: BehaviorSubject<boolean> | undefined): OperatorFunction<T, T> {
        return catchError((error: HttpErrorResponse) => {
            this.emitLoadingStatus(loadingSubject, false)
            return throwError(() => error);
        })
    }

    private emitLoadingStatus(loadingSubject: BehaviorSubject<boolean> | undefined, isLoading: boolean): void {
        loadingSubject?.next(isLoading);
    } 
}