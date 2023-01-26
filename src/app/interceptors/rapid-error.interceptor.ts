import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { RapidToastService } from "shared/ui/src/lib/global/toast-module/services/rapid-toast.service";

@Injectable()
export class RapidErrorInterceptor implements HttpInterceptor {
    constructor(
        private toast: RapidToastService
    ) {}

    intercept<T>(httpRequest: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        return next.handle(httpRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                this.addErrorToast(error);
                return throwError(() => error);
            })
        );
    }

    private addErrorToast(httpError: HttpErrorResponse): void {
        this.toast.addToast(httpError.name, httpError.message);
    }
}