import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { RapidToast } from "../../interfaces/toast.interface";

@Injectable({
    providedIn: 'root'
})
export class RapidToastService {
    private _toastStream$: Subject<RapidToast> = new Subject<RapidToast>();

    listenForToasts(): Observable<RapidToast> {
        return this._toastStream$.asObservable();
    }

    addToast(title: string, subtitle: string, id: Date = new Date()): void {
        this._toastStream$.next({ id, title, subtitle });
    }
}