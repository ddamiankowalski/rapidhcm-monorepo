import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'rapid-checkbox',
    templateUrl: './rapid-checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RapidCheckboxComponent,
        multi: true
    }]
})
export class RapidCheckboxComponent implements ControlValueAccessor {
    @Input() label?: string;
    @Input() icon: string | 'check' = 'check';

    public disabled = false;
    public checkboxValue!: boolean;

    public onChange!: ((value: boolean) => void);
    public onTouched!: ((value: boolean) => void);

    public onChangeValue(value: boolean) {
        this.onChange(value);
        this.onTouched(true);
    }

    writeValue(value: boolean): void {
        this.checkboxValue = value;
    }

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (value: boolean) => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}