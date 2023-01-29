import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RapidStepperItems } from '../../../interfaces/stepper.interface';

@Component({
    selector: 'rapid-stepper',
    templateUrl: './rapid-stepper.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidStepperComponent {
    @Input() steps: RapidStepperItems | undefined;
}