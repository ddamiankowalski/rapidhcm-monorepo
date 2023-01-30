import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'rapid-select',
    templateUrl: './rapid-select.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RapidSelectComponent,
        multi: true
    }]
})
export class RapidSelectComponent implements ControlValueAccessor {
    public options: Array<string> = ['value1', 'value2'];
    @Input() label?: string;

    public onChange!: ((value: string) => void);
    public onTouched!: ((value: FocusEvent) => void);

    public selectValue?: string;
    public disabled = false;
    public optionsVisible = false;

    public toggleOptionsVisible(): void {
        this.optionsVisible = !this.optionsVisible;
    }

    public onValueChange(value: string) {
        this.selectValue = value;
        this.onChange(value);
        this.toggleOptionsVisible();
    }

    writeValue(value: string): void {
        this.selectValue = value;
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