import { Injectable, ComponentRef } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { RapidToast } from "../../interfaces/toast.interface";
import { RapidToastComponent } from "../components/rapid-toast/rapid-toast.component";

@Injectable({
    providedIn: 'root'
})
export class RapidToastService {
    private toastRefMap: Map<Date, ComponentRef<RapidToastComponent>> = new Map<Date, ComponentRef<RapidToastComponent>>();

    private _toastStream$: Subject<RapidToast> = new Subject<RapidToast>();

    listenForToasts(): Observable<RapidToast> {
        return this._toastStream$.asObservable();
    }

    addToast(title: string, subtitle: string, id: Date = new Date()): void {
        this._toastStream$.next({ id, title, subtitle });
    }

    destroyToast(id: Date = new Date()): void {
        const toastRef = this.toastRefMap.get(id);
        toastRef?.destroy();
        this.toastRefMap.delete(id);
    }

    setToastReference(id: Date, toastRef: ComponentRef<RapidToastComponent>): void {
        this.toastRefMap.set(id, toastRef);
    }
}