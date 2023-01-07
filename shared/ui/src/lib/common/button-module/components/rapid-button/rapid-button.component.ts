import { Component, Input, OnChanges, SimpleChanges, ContentChild, ChangeDetectionStrategy } from "@angular/core";
import { ICON_TOKEN, RapidIconComponent } from "../../../icon-module/components/rapid-icon.component";

@Component({
    selector: 'rapid-button',
    templateUrl: './rapid-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidButtonComponent implements OnChanges {
    @ContentChild(ICON_TOKEN, { static: true }) rapidIcon!: RapidIconComponent;

    @Input() type: 'default' | 'simple' | 'inline-load' = 'default';
    @Input() disabled = false;
    @Input() isLoading = false;

    stoppedLoading = false;

    ngOnChanges(changes: SimpleChanges): void {
        this.checkLoadingState(changes);

        if(this.rapidIcon && changes['isLoading']?.previousValue !== undefined && this.type !== 'inline-load') {
            this.changeIconVisibility();
        }
    }

    checkLoadingState(changes: SimpleChanges): void {
        changes['isLoading']?.previousValue ? this.stoppedLoading = true : this.stoppedLoading = false;
    }

    changeIconVisibility(): void {
        this.rapidIcon.startedLoading = !this.stoppedLoading;
        this.rapidIcon.cdRef.detectChanges();
    }
}