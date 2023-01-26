import { ChangeDetectionStrategy, Component, Input, OnInit, ElementRef } from "@angular/core";
import { RapidAnimationType } from "../../../interfaces/toast.interface";
import { RapidToastAnimationService } from "../../services/rapid-toast-animation.service";
import { RapidToastService } from "../../services/rapid-toast.service";

@Component({
    selector: 'rapid-toast',
    templateUrl: './rapid-toast.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RapidToastAnimationService]
})
export class RapidToastComponent implements OnInit {
    constructor(
        private toast: RapidToastService,
        private element: ElementRef<HTMLElement>,
        private animation: RapidToastAnimationService
    ) {
        this._nativeElement = element.nativeElement;
    }

    private MS_TIMEOUT_PERIOD = 3000;
    private _destroyTimeout!: NodeJS.Timeout;
    private _nativeElement!: HTMLElement;

    @Input() id?: Date;
    @Input() title?: string;
    @Input() subtitle?: string;

    ngOnInit(): void {
        this.setDestroyTimeout();
        this.startAnimation();
    }

    public toastClick(): void {
        this.clearDestroyTimeout();
        this.toast.destroyToast(this.id);
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
        // handle destroy animation here
        this.toast.destroyToast(this.id);
    }

    private startAnimation(): void {
        this.animation.toggleAnimation(RapidAnimationType.START, this._nativeElement);
    }
}