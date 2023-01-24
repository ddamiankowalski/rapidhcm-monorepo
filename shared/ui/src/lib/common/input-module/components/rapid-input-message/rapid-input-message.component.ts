import { animate, style, transition, trigger } from '@angular/animations';
import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'rapid-input-message',
    templateUrl: './rapid-input-message.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [
        trigger('inputMessage', [
            transition(':enter', [
                style({ opacity: 0, position: 'absolute', bottom: '-.2rem' }),
                animate('100ms 50ms ease-in', style({ opacity: 1, bottom: '0', position: 'absolute' }))
            ]),
            transition(':leave', [
                animate('100ms', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class RapidInputMessageComponent {
    @Input() control?: AbstractControl;
}