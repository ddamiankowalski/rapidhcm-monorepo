import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'rapid-checkbox',
    templateUrl: './rapid-checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidCheckboxComponent {
    @Input() label?: string;
    @Input() icon: string | 'check' = 'check';
}