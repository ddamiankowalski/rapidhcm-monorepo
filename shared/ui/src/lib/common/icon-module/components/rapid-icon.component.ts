import { ChangeDetectionStrategy, Component, Input, InjectionToken, ChangeDetectorRef } from "@angular/core";
import { RapidBaseIcon } from "../../interfaces/icon.interface";

export const ICON_TOKEN = new InjectionToken<RapidBaseIcon>('RapidIconComponent');

@Component({
    selector: 'rapid-icon',
    templateUrl: './rapid-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ICON_TOKEN,
            useExisting: RapidIconComponent
        }
    ]
})
export class RapidIconComponent implements RapidBaseIcon {
    constructor(
        public cdRef: ChangeDetectorRef
    ) {}

    @Input() type: 'solid' | 'regular' | 'thin' = 'regular';
    @Input() name: string | undefined;
    
    startedLoading = false;
}