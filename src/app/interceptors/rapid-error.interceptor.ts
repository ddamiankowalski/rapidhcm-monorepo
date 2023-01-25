import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class RapidErrorInterceptor implements HttpInterceptor {
    intercept<T>(httpRequest: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        return next.handle(httpRequest).pipe(
            // here we will log and show errors on screen
            catchError((error: HttpErrorResponse) => throwError(() => error))
        );
    }
}