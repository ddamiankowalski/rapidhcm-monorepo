import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { RapidToast } from '../../../interfaces/toast.interface';
import { RapidToastService } from '../../services/rapid-toast.service';
import { RapidToastComponent } from '../rapid-toast/rapid-toast.component';

@Component({
    selector: 'rapid-toast-outlet',
    templateUrl: './rapid-toast-outlet.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidToastOutletComponent implements AfterViewInit, OnDestroy {
    @ViewChild('toastOutletContainer', { static: false, read: ViewContainerRef }) private toastOutletContainer!: ViewContainerRef;

    constructor(
        private toast: RapidToastService,
        private cdRef: ChangeDetectorRef
    ) {}

    private _subscriptions: Subscription = new Subscription();

    ngAfterViewInit(): void {
        this._subscriptions.add(
            this.toast.listenForToasts().subscribe((toast: RapidToast) => this.appendNewToast(toast))
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    public appendNewToast(toast: RapidToast): void {
        const newToast = this.toastOutletContainer.createComponent(RapidToastComponent);
        this.setToastMessage<RapidToastComponent>(toast.id, toast.title, toast.subtitle, newToast);
    }

    private setToastMessage<T>(id: Date, titleValue: string, subtitleValue: string, toastRef: ComponentRef<T>): void {
        this.setToastInput<T, string>('title', titleValue, toastRef);
        this.setToastInput<T, string>('subtitle', subtitleValue, toastRef);
        this.cdRef.markForCheck();
    }

    private setToastInput<T, V = unknown>(inputName: string, inputValue: V, toastRef: ComponentRef<T>): void {
        toastRef.setInput(inputName, inputValue);
    }
}