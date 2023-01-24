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
})
export class RapidInputComponent implements ControlValueAccessor {
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() control?: AbstractControl;
    @Input() hideIcon = false;
    @Input() hideMessage = false;

    @Input() set type(value: 'password' | 'text') {
        if(value === 'password') {
            this.iconType = value;
            this.inputType = value;
        }

        this.inputType = value;
    }
    
    public disabled = false;
    public inputValue?: string;
    public inputType?: 'password' | 'text';
    public iconType?: 'password';

    public onChange!: ((value: string) => void);
    public onTouched!: ((value: FocusEvent) => void);

    public onValueChange(value: string) {
        this.inputValue = value;
        this.onChange(value);
    }

    public clearValue() {
        this.onValueChange('');
    }

    public iconToggle(value: boolean) {
        this.inputType = value ? 'text' : 'password';
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