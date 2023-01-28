import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef } from "@angular/core";
import { RapidAnimationType, RapidToast } from "../../../interfaces/toast.interface";
import { RapidToastAnimationService } from "../../services/rapid-toast-animation.service";
import { RapidToastService } from "../../services/rapid-toast.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapid-toast',
    templateUrl: './rapid-toast.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RapidToastAnimationService]
})
export class RapidToastComponent implements OnInit, OnDestroy, AfterViewInit {
    constructor(
        private toast: RapidToastService,
        private element: ElementRef<HTMLElement>,
        private animation: RapidToastAnimationService,
        private cdRef: ChangeDetectorRef
    ) {
        this._nativeElement = element.nativeElement;
    }

    private _subscriptions: Subscription = new Subscription()
    private MS_TIMEOUT_PERIOD = 3000;
    private _destroyTimeout!: NodeJS.Timeout;
    private _nativeElement!: HTMLElement;
    private _destroyAnimationStarted = false;

    @Input() id?: Date;
    @Input() title?: string;
    @Input() subtitle?: string;

    ngOnInit(): void {
        this.setDestroyTimeout();
        this.startAnimation(RapidAnimationType.START);
        this.addListenForDeleteSubscription();
        this.addListenForAddSubscription();
    }

    private addListenForDeleteSubscription(): void {
        this._subscriptions.add(
            this.toast.listenForDeletes().subscribe((id: Date) => this.reorderToast(id)),
        );
    }

    private addListenForAddSubscription(): void {
        this._subscriptions.add(
            this.toast.listenForToasts().subscribe((toast: RapidToast) => this.reorderToast(toast.id)),
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.animation.setCurrentBoundingClientRect(this._nativeElement.getBoundingClientRect());
    }

    public toastClick(): void {
        this.clearDestroyTimeout();
        if(!this._destroyAnimationStarted) {
            this.startDestroyAnimation();
        }
    }

    protected clearDestroyTimeout(): void {
        clearTimeout(this._destroyTimeout);
    }

    protected setDestroyTimeout(): void {
        this._destroyTimeout = this.selfDestroyIn(this.MS_TIMEOUT_PERIOD);
    }

    private selfDestroyIn(timeToDestroy: number): NodeJS.Timeout {
        return setTimeout(() => this.startDestroyAnimation(), timeToDestroy);
    }

    private startDestroyAnimation() {
        this._destroyAnimationStarted = true;
        this.startAnimation(RapidAnimationType.FINISH);
        setTimeout(() => {
            this.toast.destroyToast(this.id);
            this.cdRef.detectChanges();
        }, this.animation.getAnimationDuration() - 50)
    }

    private startAnimation(animationType: RapidAnimationType): void {
        this.animation.toggleAnimation(animationType, this._nativeElement);
    }

    private reorderToast(toastId: Date): void {
        if(this.id !== toastId) {
            this.cdRef.detectChanges();
            this.animation.reorderToastAnimation(this._nativeElement, this._nativeElement.getBoundingClientRect());
        }
    }
}