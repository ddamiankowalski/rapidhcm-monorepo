import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, ObservableInput, throwError } from "rxjs";

@Injectable()
export class RapidErrorInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(httpRequest).pipe(
            catchError((error: HttpErrorResponse, caught: Observable<HttpEvent<unknown>>): ObservableInput<HttpEvent<unknown>> => {
                console.log(error.error, 'ehh');
                return throwError('hmm');
            })
        );
    }
}