import { Component, Input, OnChanges, SimpleChanges, ContentChild, ChangeDetectionStrategy, HostBinding } from "@angular/core";
import { ICON_TOKEN, RapidIconComponent } from "../../../icon-module/components/rapid-icon.component";
import { RapidButtonLoadingType, RapidButtonType } from "../../../interfaces/button.interface";

@Component({
    selector: 'rapid-button',
    templateUrl: './rapid-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RapidButtonComponent implements OnChanges {
    @HostBinding('style.pointer-events') get pointerEvents(): string {
        return this.disabled ? 'none' : 'auto';
      }

    @ContentChild(ICON_TOKEN, { static: true }) rapidIcon!: RapidIconComponent;

    @Input() type: RapidButtonType = 'default';
    @Input() loadingType: RapidButtonLoadingType = 'default';
    @Input() isLoading = false;
    @Input() disabled = false;

    stoppedLoading = false;

    ngOnChanges(changes: SimpleChanges): void {
        this.checkLoadingState(changes);

        if(this.whenToChangeVisibility(changes)) {
            this.changeIconVisibility();
        }
    }

    checkLoadingState(changes: SimpleChanges): void {
        changes['isLoading']?.previousValue ? this.stoppedLoading = true : this.stoppedLoading = false;
    }

    whenToChangeVisibility(changes: SimpleChanges): boolean {
        return this.rapidIcon && 
        (!changes['isLoading']?.firstChange || changes['isLoading']?.firstChange && changes['isLoading']?.currentValue === true) && 
        this.loadingType !== 'inline-load' &&
        this.type !== 'outline'
    }

    changeIconVisibility(): void {
        this.rapidIcon.startedLoading = !this.stoppedLoading;
        this.rapidIcon.cdRef.detectChanges();
    }
}