import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'rapid-button',
    templateUrl: './rapid-button.component.html',
})
export class RapidButtonComponent implements OnChanges {
    @Input() type: 'default' | 'simple' | 'inline-load' = 'default';
    @Input() disabled = false;
    @Input() isLoading = false;

    stoppedLoading = false;

    ngOnChanges(changes: SimpleChanges): void {
        if(this.disabled) {
            return;
        }
        
        changes['isLoading']?.previousValue ? this.stoppedLoading = true : this.stoppedLoading = false;
    }
}