import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
@Component({
    selector: 'rapid-input',
    templateUrl: './rapid-input.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RapidInputComponent,
        multi: true
    }],
    animations: [
        trigger('inputIcon', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('100ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('100ms', style({ opacity: 0 })),
            ])
        ])
    ]
})
export class RapidInputComponent implements ControlValueAccessor {
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() type: string | 'text' = 'text';
    @Input() control?: AbstractControl;
    
    public disabled = false;
    public inputValue?: string;

    public onChange!: ((value: string) => void);
    public onTouched!: ((value: FocusEvent) => void);

    public onValueChange(value: string) {
        this.inputValue = value;
        this.onChange(value);
    }

    public clearValue() {
        this.onValueChange('');
    }

    public iconClick(): void {
        console.log('click');
    }

    writeValue(value: string): void {
        this.inputValue = value;
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (value: FocusEvent) => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}