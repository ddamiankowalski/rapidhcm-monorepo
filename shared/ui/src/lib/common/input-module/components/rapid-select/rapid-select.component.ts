import { Component, Input, HostListener, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RapidOptions, RapidOption } from '../../../interfaces/select.interface';

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
    @Input() options?: RapidOptions;
    @Input() iconTemplate!: TemplateRef<unknown>;
    @Input() label?: string;
    @Input() placeholder?: string;

    public onChange!: ((value: string) => void);
    public onTouched!: ((value: FocusEvent) => void);

    public selectValue!: RapidOption;
    public disabled = false;
    public optionsVisible = false;

    @HostListener('document:click', ['$event'])
    public clickOutside() {
        const clickedOutside = !!(event?.target as HTMLElement).classList.contains('rapid-select__display');
        this.toggleOptionsVisible(clickedOutside);
    }

    public toggleOptionsVisible(optionalValue?: boolean): void {
        this.optionsVisible = optionalValue ?? !this.optionsVisible;
    }

    public onValueChange(option: RapidOption) {
        this.selectValue = option;
        this.onChange(option.value);
        this.toggleOptionsVisible();
    }

    writeValue(value: RapidOption): void {
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