import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
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
        console.log(this.toastOutletContainer);
        const interval = setInterval(() => {
            this.toastOutletContainer.createComponent(RapidToastComponent);
            this.cdRef.markForCheck();
        }, 1000);

        setTimeout(() => {
            clearInterval(interval)
        }, 5001)
    }
}