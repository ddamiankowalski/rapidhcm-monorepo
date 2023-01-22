import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'rapid-input',
    templateUrl: './rapid-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidInputComponent {
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() type: string | 'text' = 'text';
}