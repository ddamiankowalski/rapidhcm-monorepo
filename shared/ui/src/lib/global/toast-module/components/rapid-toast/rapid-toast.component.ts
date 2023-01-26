import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RapidToastService } from "../../services/rapid-toast.service";

@Component({
    selector: 'rapid-toast',
    templateUrl: './rapid-toast.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RapidToastComponent {
    constructor(
        private toast: RapidToastService
    ) {}

    @Input() title?: string;
    @Input() subtitle?: string;

    public handleToastClick(): void {
        console.log('ehhe')
    }
}