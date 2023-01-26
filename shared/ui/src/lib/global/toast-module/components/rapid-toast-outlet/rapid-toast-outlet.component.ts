import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RapidToastService } from '../../services/rapid-toast.service';
import { RapidToastComponent } from '../rapid-toast/rapid-toast.component';

@Component({
    selector: 'rapid-toast-outlet',
    templateUrl: './rapid-toast-outlet.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidToastOutletComponent implements AfterViewInit {
    @ViewChild('toastOutletContainer', { static: false, read: ViewContainerRef }) private toastOutletContainer!: ViewContainerRef;

    constructor(
        private toast: RapidToastService,
        private cdRef: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        const interval = setInterval(() => {
            this.appendNewToast('Witam', 'nie wie co to');
        }, 1000);

        setTimeout(() => {
            clearInterval(interval)
        }, 5001)
    }

    public appendNewToast(title: string, subtitle: string): void {
        const newToast = this.toastOutletContainer.createComponent(RapidToastComponent);
        this.setToastMessage<RapidToastComponent>(title, subtitle, newToast);
    }

    private setToastMessage<T>(titleValue: string, subtitleValue: string, toastRef: ComponentRef<T>): void {
        this.setToastInput<T, string>('title', titleValue, toastRef);
        this.setToastInput<T, string>('subtitle', subtitleValue, toastRef);
        this.cdRef.markForCheck();
    }

    private setToastInput<T, V = unknown>(inputName: string, inputValue: V, toastRef: ComponentRef<T>): void {
        toastRef.setInput(inputName, inputValue);
    }
}