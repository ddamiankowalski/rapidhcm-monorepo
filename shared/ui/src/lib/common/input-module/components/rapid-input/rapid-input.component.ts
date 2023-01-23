import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'rapid-input',
    templateUrl: './rapid-input.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RapidInputComponent,
        multi: true
    }]
})
export class RapidInputComponent implements ControlValueAccessor {
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() type: string | 'text' = 'text';
    
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